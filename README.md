# Words

An API for words

## Endpoints

### `GET /keys`

Retrieves a list of string keys used for word lookup in other endpoints.

### `GET /uniform/{keys}`

Retrieves uniform randomly-chosen words for the `keys`, which should be comma-separated (e.g., `/uniform/a1,b2,c3` to receive 3 chosen words from the keys "a1", "b2", "c3"—if those keys exist).

Returns `{ data: Array<null | string>, warnings: Array<string> }`.
