import * as flags from "https://deno.land/std/flags/mod.ts";
import keys from "./endpoints/keys.ts";
import uniform from "./endpoints/uniform.ts";
import { serve } from "https://deno.land/std/http/server.ts";

const port = flags.parse(Deno.args).port;
const server = serve({ port });

const headers = new Headers();
headers.set("Access-Control-Allow-Origin", "*");

for await (const req of server) {
  if (req.method === "GET") {
    const [, endpoint, argString] = req.url.split("/");
    const args = argString?.split(",");
    const warnings: string[] = [];

    if (endpoint === "keys") {
      req.respond({ body: JSON.stringify(keys()), headers });
      continue;
    }

    if (endpoint === "uniform") {
      const data: Array<null | string> = args.map((key: string) => {
        const value = uniform(key);
        if (value === null) warnings.push(`No matching key for "${key}"`);
        return value;
      });
      req.respond({ body: JSON.stringify({ data, warnings }), headers });
      continue;
    }
  }

  req.respond({ headers, status: 404 });
}
