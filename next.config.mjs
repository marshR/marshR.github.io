import path from "node:path";
import { fileURLToPath } from "node:url";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "";
const userSiteRepo = `${owner}.github.io`.toLowerCase();
const isUserSite = repo.toLowerCase() === userSiteRepo;
const runningInCi = process.env.GITHUB_ACTIONS === "true";
const basePath = runningInCi && !isUserSite ? `/${repo}` : "";
const rootDir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  turbopack: {
    root: rootDir
  },
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
