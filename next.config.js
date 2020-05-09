const withSass = require('@zeit/next-sass')
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  target: 'serverless',
  ...withSass(),
  env: {
    BASE_API_URL: process.env.BASE_API_URL
  }
}
