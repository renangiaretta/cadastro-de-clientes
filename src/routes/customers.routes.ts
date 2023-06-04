import { Router } from 'express'
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { ensureAuthMiddleware } from '../middlewares/ensureAuthIsValid.middleware'
import {
    customerSerializerRequest,
    customerSerializerUpdate
} from '../serializers/customers.serializer'
import {
    createCustomerController,
    deleteCustomersController,
    listAllCustomersController,
    listCustomersController,
    updateCustomersController
} from '../controllers/customers.controller'


const customersRoutes = Router()

customersRoutes.post('', ensureDataIsValidMiddleware(customerSerializerRequest), createCustomerController)
customersRoutes.get('', ensureAuthMiddleware, listCustomersController)
customersRoutes.get('/all', listAllCustomersController)
customersRoutes.patch('', ensureAuthMiddleware, ensureDataIsValidMiddleware(customerSerializerUpdate), updateCustomersController)
customersRoutes.delete('/:id', deleteCustomersController)

export { customersRoutes }
