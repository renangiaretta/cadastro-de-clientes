import { Router } from 'express'
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware'
import { contactSerializerRequest } from '../serializers/contacts.serializer'
import { ensureAuthMiddleware } from '../middlewares/ensureAuthIsValid.middleware'
import { ensureIsOwnerMiddleware } from '../middlewares/ensureIsOwner.middleware'
import {
    createContactController,
    deleteContactsController,
    listContactsController,
    updateContactsController
} from '../controllers/contacts.controller'


const contactsRoutes = Router()

contactsRoutes.post('', ensureAuthMiddleware, ensureDataIsValidMiddleware(contactSerializerRequest), createContactController)
contactsRoutes.get('', ensureAuthMiddleware, listContactsController)
contactsRoutes.patch('/:id', ensureAuthMiddleware, ensureIsOwnerMiddleware, ensureDataIsValidMiddleware(contactSerializerRequest), updateContactsController)
contactsRoutes.delete('/:id', ensureAuthMiddleware, ensureIsOwnerMiddleware, deleteContactsController)


export { contactsRoutes }