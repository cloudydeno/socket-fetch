#!/usr/bin/env -S deno run --allow-net=da.gd

import { fetch } from "@cloudydeno/socket-fetch";

const resp = await fetch("https://da.gd/headers");
console.log(await resp.text());
console.log(resp.headers);
