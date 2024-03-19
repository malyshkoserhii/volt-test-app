
# Test task

A simple My Awesome Todo App allows you to do CRUD operations with your Todo tasks, by using a custom backend.


## Features

- User is able to add, update, delete and fetch Todos;
- Implemented pagination;
- Marking Todo as completed and toggling its status by pressing on Todo item;
- Filtering Todo by status (all, completed, current);
- Counting completed and current Todos;
- Adaptive design.

## About codebase

- Using Redux storage;
- All comunication with API is based on a specific service;
- Business logic implemented in special hooks. Every hook is responsible only for one thing (single responsibility principle);
- There are a lot of shared components was implemented, in order to reuse them across the Application and make it more flexible;
- There are some inportant constants (COLORS, FONTS etc.) that is storing in one place and reusing across the Application;
- Using state selectors in one appropriate hook.

## Tech Stack

**Client:** React, Typescript, Redux, Redux Toolkit, Blueprintjs, Emotion CSS.

**Backend:** Nestjs, Prisma ORM, PostgreSQL.