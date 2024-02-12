import _jiti from "jiti";
import { fileURLToPath } from 'url';

const path = fileURLToPath(import.meta.url);
const jiti = _jiti(path);

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
jiti("./src/env");
jiti("@acme/auth/env");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@acme/api",
    "@acme/auth",
    "@acme/db",
    "@acme/ui",
    "@acme/validators",
  ],

  /** We already do linting and typechecking as separate tasks in CI */w
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
