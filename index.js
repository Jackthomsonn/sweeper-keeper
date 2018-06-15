const express = require('express')
const path = require('path')
const app = new express()
const cluster = require('cluster')
const os = require('os')

app.use(express.static(__dirname + '/dist/team-hydr8'))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/team-hydr8/index.html'))
})

if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork()
  }

  cluster.on('online', (worker) => {
    process.stdout.write('Worker ' + worker.process.pid + ' has come online \n')
  })

  cluster.on('exit', (worker, code, signal) => {
    process.stdout.write(worker.process.pid + ' died with code ' + code + ' and signal ' + signal + '\n')

    process.stdout.write('Reviving worker.. \n')
    cluster.fork()
  })
} else {
  app.listen(process.env.PORT || 8000)
}