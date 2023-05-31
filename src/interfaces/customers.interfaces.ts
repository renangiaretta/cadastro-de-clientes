import { z } from 'zod'
import { customerSerializer, customerSerializerRequest, customerSerializerResponse } from '../serializers/customers.serializer'


type TCustomer = z.infer<typeof customerSerializer>
type TCustomerRequest = z.infer<typeof customerSerializerRequest>
type TCustomerResponse = z.infer<typeof customerSerializerResponse>


export { TCustomer, TCustomerRequest, TCustomerResponse }