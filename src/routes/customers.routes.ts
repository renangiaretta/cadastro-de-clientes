import { Router } from 'express'
import { createCustomerController, deleteCustomersController, listAllCustomersController, listCustomersController, updateCustomersController } from '../controllers/customers.controller'
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { customerSerializerRequest, customerSerializerUpdate } from '../serializers/customers.serializer'
import { ensureAuthMiddleware } from '../middlewares/ensureAuthIsValid.middleware'


const customersRoutes = Router()

customersRoutes.post('', ensureDataIsValidMiddleware(customerSerializerRequest), createCustomerController)
customersRoutes.get('', listCustomersController)
customersRoutes.get('/all', listAllCustomersController)
customersRoutes.patch('', ensureAuthMiddleware, ensureDataIsValidMiddleware(customerSerializerUpdate), updateCustomersController)
customersRoutes.delete('/:id', deleteCustomersController)

export { customersRoutes }
