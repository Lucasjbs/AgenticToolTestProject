# Agentic Tool Test Project

Prototype for a future game shop website built with Node.js.

The short-term goal of this project is to test Codex and its ability to develop a website from scratch.

The long-term goal is to create a store platform for games published by my organization. Users should eventually be able to browse available games, create accounts, log in, and buy products in a flow similar to Steam.

## Current Purpose

This repository is currently an early prototype and experimentation project. The first version is backend-focused and is intended to establish the project structure before implementing features.

It is also being used to test how coding agents respond to project prompts, ambiguous requirements, and codebase research tasks.

## Planned Product Scope

- Display a catalog of games made by the organization.
- Support user authentication and authorization.
- Validate user input on backend routes and, frontend forms.
- Support game sorting, filtering, and pagination.
- Add payment processing for game purchases.
- Prepare the codebase for future frontend pages and user-facing shop flows.

## Technology Direction

- Runtime: Node.js
- Backend: Express or a similar Node.js web framework
- Views: Server-rendered templates or frontend-compatible view files
- Static assets: Public files and media assets served by the backend
- Database: To be decided
- Authentication strategy: To be decided
- Payment provider: To be decided

## Initial Folder Structure

```text
/
├── public/
├── views/
├── media/
├── src/
│   ├── controller/
│   ├── dao/
│   ├── middleware/
│   ├── routes/
|    └── service/
```

## Folder Responsibilities

### `public/`

Static files that can be served directly by the web server, such as compiled CSS, client-side JavaScript, favicon files, and other public assets.

### `views/`

Template or page files used to render the website interface.

### `media/`

Project media assets such as game cover images, screenshots, trailers, and promotional files.

### `src/routes/`

Route definitions. These files should map HTTP endpoints to controller functions.

Example future areas:

- Game catalog routes
- Authentication routes
- User account routes
- Checkout routes

### `src/controller/`

Request and response handling. Controllers should receive route requests, call services, and return HTTP responses.

### `src/service/`

Business logic. Services should handle application rules such as game catalog operations, user account behavior, authentication workflows, and purchase logic.

### `src/dao/`

Data access objects. DAO files should isolate database queries and persistence logic from services and controllers.

### `src/middleware/`

Reusable Express middleware, such as authentication guards, validation handlers, request logging, and error handling.

## Next Steps:

1. Initialize the Node.js project with `package.json`.
2. Choose the backend framework and template strategy.
3. Add a minimal server entry point.
4. Define initial routes for the game catalog.
5. Add placeholder game data or a simple database layer.
6. Add authentication requirements once user flows are defined.
