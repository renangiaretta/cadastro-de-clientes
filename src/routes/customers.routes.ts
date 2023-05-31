import { Router } from 'express'
import { createCustomerController } from '../controllers/customers.controller'
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { customerSerializerRequest } from '../serializers/customers.serializer'


const customersRoutes = Router()

customersRoutes.post('', ensureDataIsValidMiddleware(customerSerializerRequest), createCustomerController)


export { customersRoutes }
