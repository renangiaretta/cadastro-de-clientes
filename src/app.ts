import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { customersRoutes } from './routes/customers.routes'
import { handleAppErrorMiddleware } from './middlewares/handleAppError.middleware'
import { loginRoutes } from './routes/login.routes'


const app = express()
app.use(express.json())
app.use('/customers', customersRoutes)
app.use('/login', loginRoutes)

app.use(handleAppErrorMiddleware)
export default app