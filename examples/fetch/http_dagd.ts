#!/usr/bin/env -S deno run --allow-net=da.gd:80

import { fetch } from "@cloudydeno/socket-fetch";

const resp = await fetch("http://da.gd/headers");
console.log(await resp.text());
console.log(resp.headers);
