const pwd = require('./pwd')
const fs = require('fs')

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()
  process.stdout.write('You typed: ' + cmd + '\n')
  if(cmd === 'pwd') {
    pwd()
  }
  if(cmd === 'ls') {
    fs.readdir('./', 'utf8', (err, files) => {
      if(err) {
        throw err
      } else {
        process.stdout.write('\n' + files.join('\n'))
        process.stdout.write('\nprompt > ')
      }
    })
  }
  process.stdout.write('\nprompt > ')
})



