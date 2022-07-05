# katex-api-test
Simple api for using katex.

## Usage

### Endpoint 

`https://katex-api-test.deno.dev`

### Query Params

- `expression` (required) : A url encoded math expression
- `rawHTML` (optional) : Whether to include the css in the html Defaults to true

### Example

To encode `\sqrt{x^2+1}`

1. Percent encode the expresion to `%5Csqrt%7Bx%5E2%2B1%7D`
2. Add it to the `expression` field
3. Visit the url

Link with styles

https://katex-api-test.deno.dev/?expression=%5Csqrt%7Bx%5E2%2B1%7D


Link without styles

https://katex-api-test.deno.dev/?expression=%5Csqrt%7Bx%5E2%2B1%7D&rawHTML=true
