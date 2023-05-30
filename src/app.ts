import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { clientsRoutes } from './routes/clients.routes'


const app = express()
app.use(express.json())
app.use('/clients', clientsRoutes)
app.get('/', (req, res) => res.json('hello world'))

export default app