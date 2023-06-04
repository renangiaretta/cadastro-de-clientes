import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { customersRoutes } from './routes/customers.routes'
import { handleAppErrorMiddleware } from './middlewares/handleAppError.middleware'
import { loginRoutes } from './routes/login.routes'
import { contactsRoutes } from './routes/contacts.routes'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/login', loginRoutes)
app.use('/customers', customersRoutes)
app.use('/contacts', contactsRoutes)

app.use(handleAppErrorMiddleware)
export default app


// 52 MINUTENS