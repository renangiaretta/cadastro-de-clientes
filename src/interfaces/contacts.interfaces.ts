import { z } from 'zod'
import { contactSerializer, contactSerializerRequest, contactSerializerUpdate } from '../serializers/contacts.serializer'


type TContact = z.infer<typeof contactSerializer>
type TContactRequest = z.infer<typeof contactSerializerRequest>
type TcontactUpdate = z.infer<typeof contactSerializerUpdate>


export { TContact, TContactRequest, TcontactUpdate }