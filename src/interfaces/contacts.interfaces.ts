import { z } from 'zod'
import {
    contactSerializer,
    contactSerializerRequest,
    contactSerializerUpdate
} from '../serializers/contacts.serializer'


type TContact = z.infer<typeof contactSerializer>
type TContactRequest = z.infer<typeof contactSerializerRequest>
type TContactUpdate = z.infer<typeof contactSerializerUpdate>
type TContactList = TContact[]


export {
    TContact,
    TContactRequest,
    TContactUpdate,
    TContactList
}