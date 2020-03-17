const { publish } = require('gh-pages')
const { promisify } = require('bluebird')

promisify(publish)('public', {
  src: '**/*',
  branch: 'master',
  repo: 'git@github.com:youfoundron.github.io/ledger-web-example.git',
  message: `manual publish - ${new Date()}`
}).then(() => {
  console.log('Successfully published!')
})