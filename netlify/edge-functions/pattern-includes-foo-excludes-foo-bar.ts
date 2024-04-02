// @ts-nocheck
import type { Config } from "@netlify/edge-functions";

export default async () => console.log('pattern') || new Response('Hello with pattern');

export const config: Config = {
  path: "/*",
  excludedPattern: ["/foo/bar"]
}
