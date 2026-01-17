# Collaborative Document Editor

A real-time collaborative document editing application built with [Next.js](https://nextjs.org) and [Yjs](https://yjs.dev/). Multiple users can edit the same document simultaneously with live updates powered by WebSockets.

## Features

- **Real-time Collaboration**: Multiple users can edit documents together with instant synchronization
- **Rich Text Editing**: Full-featured editor powered by [Tiptap](https://tiptap.dev/)
- **Cursor Tracking**: See where other users are editing with collaborative carets
- **User Presence**: Visual indication of connected users with unique colors
- **WebSocket Sync**: Live updates across all connected clients using Yjs and WebSockets
- **Database Persistence**: Document changes are persisted to PostgreSQL

## Project Structure

- **client/**: Next.js frontend application with the collaborative editor UI
- **server/**: Express.js backend with WebSocket server and database persistence

## Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL (for persistence)

### Installation & Running

1. **Start the backend server**:

   ```bash
   cd server
   npm install
   npm run dev
   ```

   The server will run on `ws://localhost:4000`

2. **Start the frontend client** (in a new terminal):

   ```bash
   cd client
   npm install
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the editor

3. **Open multiple tabs/windows** to test real-time collaboration

## Technology Stack

- **Frontend**: Next.js, React, Tiptap, Yjs, Tailwind CSS
- **Backend**: Express.js, WebSockets, PostgreSQL
- **Real-time Sync**: Yjs CRDT, y-websocket

## Development

- Frontend development: `cd client && npm run dev`
- Backend development: `cd server && npm run dev`
- Build: `npm run build` in respective directories
