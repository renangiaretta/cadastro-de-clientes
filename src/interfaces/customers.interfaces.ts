import { z } from 'zod'
import {
    customerSerializer,
    customerSerializerRequest,
    customerSerializerResponse,
    customerSerializerResponseContacts
} from '../serializers/customers.serializer'


type TCustomer = z.infer<typeof customerSerializer>
type TCustomerRequest = z.infer<typeof customerSerializerRequest>
type TCustomerResponse = z.infer<typeof customerSerializerResponse>
type TCustomersList = TCustomerResponse[]
type TCustomerResponseContacts = z.infer<typeof customerSerializerResponseContacts>


export {
    TCustomer,
    TCustomerRequest,
    TCustomerResponse,
    TCustomersList,
    TCustomerResponseContacts
}