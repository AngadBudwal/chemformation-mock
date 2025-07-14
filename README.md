# Chemformation Mock API

This repository provides a mock backend for the Chemformation Library, including sample data and a minimal Express server.

## API Contract

### GET /api/search

**Request**  
```http
GET http://localhost:3000/api/search?q=<query>
```

**Response**  
```json
[
  {
    "entry_id": 1,
    "name": "SuperSolvent X",
    "formula": [
      { "ingredient": "Acetone", "percent": 50 },
      { "ingredient": "Ethanol",  "percent": 30 },
      { "ingredient": "Water",    "percent": 20 }
    ],
    "properties": { "density": 0.79, "viscosity": 0.001 },
    "tags": ["solvent","organic"]
  }
]
```

---

### GET /api/users

**Request**  
```http
GET http://localhost:3000/api/users
```

**Response**  
```json
[
  {
    "user_id": 1,
    "username": "angad",
    "email": "angadbudwal@ucsb.edu",
    "password_hash": "HASHED_PASSWORD_PLACEHOLDER",
    "role_id": 1,
    "created_at": "2025-06-26T10:00:00Z"
  },
  {
    "user_id": 2,
    "username": "jane_doe",
    "email": "jane@example.com",
    "password_hash": "HASHED_PASSWORD_PLACEHOLDER",
    "role_id": 2,
    "created_at": "2025-06-26T11:00:00Z"
  }
]
```

---

### GET /api/roles

**Request**  
```http
GET http://localhost:3000/api/roles
```

**Response**  
```json
[
  {
    "role_id": 1,
    "role_name": "admin",
    "permissions": [
      "read:chemformations",
      "write:chemformations",
      "manage:users"
    ]
  },
  {
    "role_id": 2,
    "role_name": "user",
    "permissions": [
      "read:chemformations"
    ]
  }
]
```

---

### GET /api/requests

**Request**  
```http
GET http://localhost:3000/api/requests
```

**Response**  
```json
[
  {
    "request_id": 1,
    "user_id": 1,
    "entry_id": 1,
    "query_text": "solvent",
    "timestamp": "2025-06-26T11:15:00Z",
    "result_ids": [1]
  },
  {
    "request_id": 2,
    "user_id": 2,
    "entry_id": 4,
    "query_text": "gel",
    "timestamp": "2025-06-26T11:20:00Z",
    "result_ids": [4]
  }
]
```

```mermaid
flowchart TB
  subgraph Frontend
    A[Search UI] -->|GET /api/search?q=…| B[Express API]
    C[User/Roles UI] -->|GET /api/users<br>/api/roles| B
    D[History UI] -->|GET /api/requests| B
  end

  subgraph Backend
    B --> E[Data Layer]
    E --> F[chemformations.json]
    E --> G[users.json]
    E --> H[roles.json]
    E --> I[ai_requests.json]
  end

  subgraph Team_Coordination
    J(Team 2: UI Integration) --> A
    K(AI Logic / Chemformation Library) -. triggers .-> B
  end

