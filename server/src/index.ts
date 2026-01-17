import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import * as Y from "yjs";
import cors from "cors";
import dotenv from "dotenv";
import { persistence } from "./persistence.js";
import { setupWSConnection } from "@y/websocket-server/utils";

dotenv.config();

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocketServer({ noServer: true });

const port = process.env.PORT || 4000;

wss.on("connection", (conn, req) => {
  const docName = req.url?.slice(1) || "default-doc";
  const ydoc = new Y.Doc();

  persistence.bindState(docName, ydoc).then(() => {
    setupWSConnection(conn, req, { docName, doc: ydoc });
  });
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
