# Chemformation Mock API

This repository provides a mock backend for the Chemformation Library, including sample data and a minimal Express server.

## API Contract

### GET /api/search

**Request**  
```http
GET http://localhost:3000/api/search?q=<query>

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
