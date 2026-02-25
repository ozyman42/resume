/** @type {import('next').NextConfig} */
const repository = process.env.GITHUB_REPOSITORY || ''
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER || ''
const repositoryName = repository.split('/')[1] || ''
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
const isUserOrOrgPage =
  repositoryName &&
  repositoryOwner &&
  repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`
const basePath =
  isGitHubActions && repositoryName && !isUserOrOrgPage
    ? `/${repositoryName}`
    : ''

const nextConfig = {
  reactStrictMode: true,
  ...(isGitHubActions ? { output: 'export' } : {}),
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
}

module.exports = nextConfig
