import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { customersRoutes } from './routes/customers.routes'


const app = express()
app.use(express.json())
app.use('/customers', customersRoutes)
app.get('/', (req, res) => res.json('hello world'))

export default app