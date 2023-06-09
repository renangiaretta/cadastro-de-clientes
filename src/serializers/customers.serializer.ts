import { z } from 'zod'
import { contactSerializer } from './contacts.serializer'


const customerSerializer = z.object({
    id: z.number(),
    password: z.string().max(127),
    first_name: z.string().max(50),
    last_name: z.string().max(127),
    email: z.string().max(127),
    phone: z.string().max(14),
    created_at: z.string()
})

const customerSerializerRequest = customerSerializer.omit({
    id: true,
    created_at: true
})

const customerSerializerResponse = customerSerializer.omit({
    password: true
})

const customerSerializerResponseContacts = customerSerializerResponse.extend({
    contacts: z.array(contactSerializer).nullish()
})


const customerSerializerUpdate = customerSerializer.omit({
    id: true
}).partial()


export {
    customerSerializer,
    customerSerializerRequest,
    customerSerializerResponse,
    customerSerializerUpdate,
    customerSerializerResponseContacts
}