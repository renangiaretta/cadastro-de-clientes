import { z } from 'zod'


const contactSerializer = z.object({
    id: z.number(),
    first_name: z.string().max(50),
    last_name: z.string().max(127),
    email: z.string().max(127),
    phone: z.string().max(14),
    created_at: z.string()
})

const contactSerializerRequest = contactSerializer.omit({
    id: true,
    created_at: true
})

const contactSerializerUpdate = contactSerializer.omit({
    id: true
}).partial()

export { contactSerializer, contactSerializerRequest, contactSerializerUpdate }