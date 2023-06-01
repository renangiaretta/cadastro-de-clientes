import { Router } from 'express'
import { createCustomerController, listCustomersController, updateCustomersController } from '../controllers/customers.controller'
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { customerSerializerRequest } from '../serializers/customers.serializer'


const customersRoutes = Router()

customersRoutes.post('', ensureDataIsValidMiddleware(customerSerializerRequest), createCustomerController)
customersRoutes.get('', listCustomersController)
customersRoutes.patch('', updateCustomersController)
customersRoutes.delete('', deleteCustomersController)

export { customersRoutes }
