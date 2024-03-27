// @ts-nocheck
import type { Config } from "@netlify/edge-functions";

export default async () => console.log('path') || new Response('Hello with path');

export const config: Config = {
  path: "/*",
  excludedPath: ["/foo/bar"]
}