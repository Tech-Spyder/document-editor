-- Database Schema for Collaborative Editor

CREATE TABLE IF NOT EXISTS document_updates (
    id SERIAL PRIMARY KEY,
    doc_name TEXT NOT NULL,
    update_blob BYTEA NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Index for faster retrieval by document name
CREATE INDEX IF NOT EXISTS idx_doc_name ON document_updates (doc_name);