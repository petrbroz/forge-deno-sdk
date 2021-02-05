# forge-deno-sdk

Experimental [Autodesk Forge](https://forge.autodesk.com) SDK for [Deno](https://deno.land) (v1.7.0).

## Usage

```typescript
import { AuthenticationClient } from "https://raw.githubusercontent.com/petrbroz/forge-deno-sdk/{VERSION}/mod.ts";

const FORGE_CLIENT_ID = Deno.env.get("FORGE_CLIENT_ID");
const FORGE_CLIENT_SECRET = Deno.env.get("FORGE_CLIENT_SECRET");
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET) {
  console.error("Missing environment variables");
  Deno.exit(1);
}

async function run() {
  const client = new AuthenticationClient(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET);
  const token = await client.authenticate(["data:read"], false);
  console.log(token);
}

run();
```

## Test

```bash
deno test
```

## Format code

```bash
deno fmt **/*.ts
```

## Resources

- [Deno Website](https://deno.land)
- [Deno Style Guide](https://deno.land/std/style_guide.md)
- [Deno Gitter](https://gitter.im/denolife/Lobby)