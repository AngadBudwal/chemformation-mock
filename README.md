## API Contract

### GET /api/search

**Endpoint**  
`GET /api/search?q=<query>`

**Query Parameter**  
- `q` (string): case-insensitive search term matching `name` or `tags`

**Response**  
- `200 OK` with JSON array of matching entries, each containing:
  - `entry_id` (number)
  - `name` (string)
  - `formula` (array of `{ ingredient, percent }`)
  - `properties` (`{ density, viscosity }`)
  - `tags` (array of strings)

**Example**  
```http
GET http://localhost:3000/api/search?q=solvent

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
# chemformation-mock
