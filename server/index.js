import { createServer } from 'http'
import app from './app'

const normalizePort = port => parseInt(port, 10)
const PORT = normalizePort(process.env.PORT || 5000)

const server = createServer(app)

server.listen(PORT, err => {
  if (err) throw err

  if (app.get('env') !== 'production') {
    console.log(`> http://localhost:${PORT} is waiting`)
  }
})
