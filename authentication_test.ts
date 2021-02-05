import { AuthenticationClient } from "./mod.ts";

const FORGE_CLIENT_ID = Deno.env.get("FORGE_CLIENT_ID");
const FORGE_CLIENT_SECRET = Deno.env.get("FORGE_CLIENT_SECRET");
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET) {
  console.error("Missing environment variables");
  Deno.exit(1);
}

Deno.test({
  name: "authenticate",
  fn: async () => {
    const client = new AuthenticationClient(
      FORGE_CLIENT_ID,
      FORGE_CLIENT_SECRET,
    );
    const token = await client.authenticate(["data:read"], false);
    console.log(token);
  },
});

Deno.test({
  name: "getAuthorizeRedirect",
  fn: async () => {
    const client = new AuthenticationClient(
      FORGE_CLIENT_ID,
      FORGE_CLIENT_SECRET,
    );
    const uri = await client.getAuthorizeRedirect(
      ["data:read", "data:write"],
      "http://localhost:3000/auth/callback",
    );
    console.log(uri);
  },
});
