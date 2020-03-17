const { publish } = require('gh-pages')
const { promisify } = require('bluebird')

promisify(publish)('out', {
  src: '**/*',
  branch: 'gh-pages',
  // repo: 'git@github.com:youfoundron.github.io/ledger-web-example.git',
  message: `manual publish - ${new Date()}`
}).then(() => {
  console.log('Successfully published!')
})