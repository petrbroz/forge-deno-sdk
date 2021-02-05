# forge-deno-sdk

Experimental [Autodesk Forge](https://forge.autodesk.com) SDK for [Deno](https://deno.land) (v1.7.0).

## Prerequisites

- [Deno runtime (v1.7.0)](https://deno.land/manual/getting_started/installation)
- [Autodesk Forge app](https://forge.autodesk.com/en/docs/oauth/v2/tutorials/create-app)

## Usage

- Import any classes you need from the _mod.ts_ file of a specific version of this module, for example:

```typescript
// app.ts

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

- Set the following environment variables:
    - `FORGE_CLIENT_ID` - your Forge application's client ID
    - `FORGE_CLIENT_SECRET` - your Forge application's client secret
- Run your app from the terminal, for example:

```bash
deno app.ts
```

## Test

- Set the following environment variables:
    - `FORGE_CLIENT_ID` - your Forge application's client ID
    - `FORGE_CLIENT_SECRET` - your Forge application's client secret
- Run the following command in the terminal:

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