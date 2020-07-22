import { serve } from "https://deno.land/std@0.61.0/http/server.ts";

const s = serve({ port: 3001 });
console.log("listen port 3001");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
