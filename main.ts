import * as flags from "https://deno.land/std/flags/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";

const port = flags.parse(Deno.args).port;
const server = serve({ port });

for await (const req of server) {
  req.respond({ body: "Hello world!\n" });
}
