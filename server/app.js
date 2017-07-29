import express from 'express'
import morgan from 'morgan'
import compression from 'compression'

const app = express()
const dev = app.get('env') !== 'production'

if (!dev) {
  app.disale('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))

  app.use(express.static(path.resolve(__dirname, '..', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
  })
}

if (dev) {
  app.use(morgan('dev'))
  app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
      message: error.message,
      error
    })
  })
}

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})

export default app
