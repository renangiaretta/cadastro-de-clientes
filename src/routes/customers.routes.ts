import { Router } from 'express'
import { createCustomerController } from '../controllers/customers.controller'


const customersRoutes = Router()

customersRoutes.post('', createCustomerController)


export { customersRoutes }
