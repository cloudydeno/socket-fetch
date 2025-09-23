#!/usr/bin/env -S deno run --allow-net=8.8.8.8

import { fetchUsing, TlsDialer } from "@cloudydeno/socket-fetch";

const dialer = new TlsDialer();
const resp = await fetchUsing(dialer, "https://8.8.8.8/healthz");
// (in an actual application, consider using Client to allow connection reuse)

console.log(resp.status, resp.headers);
console.log(await resp.text());
