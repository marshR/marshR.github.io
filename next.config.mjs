const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "";
const userSiteRepo = `${owner}.github.io`.toLowerCase();
const isUserSite = repo.toLowerCase() === userSiteRepo;
const runningInCi = process.env.GITHUB_ACTIONS === "true";
const basePath = runningInCi && !isUserSite ? `/${repo}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
