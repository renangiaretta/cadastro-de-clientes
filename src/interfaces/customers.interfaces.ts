import { z } from 'zod'
import { customerSerializer, customerSerializerRequest, customerSerializerResponse } from '../serializers/customers.serializer'


type TCustomer = z.infer<typeof customerSerializer>
type TCustomerRequest = z.infer<typeof customerSerializerRequest>
type TCustomerResponse = z.infer<typeof customerSerializerResponse>
type TCustomersList = TCustomerResponse[]

export { TCustomer, TCustomerRequest, TCustomerResponse, TCustomersList }