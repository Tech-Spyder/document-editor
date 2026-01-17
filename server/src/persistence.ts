import { Pool } from "pg";
import dotenv from "dotenv";
import * as Y from "yjs";
import { dot } from "node:test/reporters";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const persistence = {
  bindState: async (docName: string, ydoc: Y.Doc) => {
    const result = await pool.query(
      "SELECT update_blob FROM document_updates WHERE doc_name = $1",
      [docName]
    );

    result.rows.forEach((row) => {
      Y.applyUpdate(ydoc, row.update_blob);
    });

    ydoc.on("update", async (update: Uint8Array) => {
      await pool.query(
        "INSERT INTO document_updates (doc_name, update_blob) VALUES ($1, $2)",
        [docName, update]
      );
    });
  },
};
