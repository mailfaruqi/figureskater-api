# Figure Skater BackendREST API

## REST API Endpoints

| Endpoint              | HTTP     | Description                       |
| --------------------- | -------- | --------------------------------- |
| `/figureskaters`      | `GET`    | Get all figure skaters            |
| `/figureskaters/:id`  | `GET`    | Get figure skaters by id          |
| `/figureskaters/seed` | `POST`   | Seed all initial figure skaters   |
| `/figureskaters`      | `POST`   | Add new figure skaters            |
| `/figureskaters`      | `DELETE` | Delete all figure skaters (reset) |
| `/figureskaters/:id`  | `DELETE` | Delete figure skaters by id       |
| `/figureskaters/:id`  | `PUT`    | Update figure skaters by id       |

## Getting Started

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

Open <http://localhost:3000>
