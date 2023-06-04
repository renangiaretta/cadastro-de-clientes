import { z } from 'zod'


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

const customerSerializerUpdate = customerSerializer.omit({
    id: true
}).partial()

export { customerSerializer, customerSerializerRequest, customerSerializerResponse, customerSerializerUpdate }