import katex from "https://www.unpkg.com/katex@0.16.0/dist/katex.mjs";
import { serve } from "https://deno.land/std@0.119.0/http/server.ts";

function handler(req: Request): Response {
    const u = new URL(req.url);
    let expression = u.searchParams.get('expression');
    let rawHTML = u.searchParams.get('rawHTML');

    if ( expression === null ) {
        return new Response("Katex test api")
    }


    let markup = decodeURIComponent(expression)
    let html = katex.renderToString(markup);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'text/html');

    if ( rawHTML ) {
        return new Response(`${html}`, {headers: myHeaders});
    } else {
        return new Response(
`<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossorigin="anonymous">
  </head>
  <body>
    ${html}
  </body>
</html>
`,
             {headers: myHeaders});
    }
}
console.log("Listening on http://localhost:8000");
serve(handler);
