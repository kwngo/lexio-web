const withSass = require('@zeit/next-sass')
module.exports = {
  target: 'serverless',
  ...withSass(),
  env: {
    BASE_API_URL: process.env.BASE_API_URL
  }
}
