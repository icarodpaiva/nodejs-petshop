import dotenv from 'dotenv'
import express from 'express'
import mustache from 'mustache-express'
import path from 'path'
import router from './routes'

dotenv.config()

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use(router)

server.use((_, res) => {
  res.render('pages/404')
})

const PORT = process.env.PORT ?? 3000
server.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`)
})
