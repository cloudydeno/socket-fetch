#!/usr/bin/env -S deno run --allow-net=1.1.1.1,one.one.one.one

import { fetchUsing, TlsDialer } from "@cloudydeno/socket-fetch";

const dialer = new TlsDialer({ hostname: 'one.one.one.one' });
const resp = await fetchUsing(dialer, "https://1.1.1.1/healthz");
// (in an actual application, consider using Client to allow connection reuse)

console.log(resp.status, resp.headers);
console.log(await resp.text());
