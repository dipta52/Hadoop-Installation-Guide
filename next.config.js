const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  footerEditOnGitHubLink: false,
})

module.exports = withNextra()
