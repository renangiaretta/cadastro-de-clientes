import { createContactService } from '../services/contacts/createContact.service'
import { listContactsService } from '../services/contacts/listContacts.service'
import { Contact } from '../entities/contact.entity'
import { updateContactsService } from '../services/contacts/updateContacts.service'
import { deleteContactService } from '../services/contacts/deleteContact.service'
import {
    Request,
    Response
} from 'express'
import {
    TContact,
    TContactRequest
} from '../interfaces/contacts.interfaces'


const createContactController = async ( req: Request, res: Response ): Promise<Response> => {
    const {...contactData}: TContactRequest = req.body
    const customer: number = res.locals.customerId
    const newContact: TContact = await createContactService(contactData, customer)
    return res.status(201).json(newContact)
}

const listContactsController = async ( req: Request, res: Response ): Promise<Response> => {
    const customerId: number = res.locals.customerId
    const contacts: Contact[] = await listContactsService(customerId)
    return res.status(200).json(contacts)
}

const updateContactsController = async ( req: Request, res: Response ): Promise<Response> => {
    const contactData = req.body
    const contactId = parseInt(req.params.id)
    const updatedContact = await updateContactsService(contactData, contactId)
    return res.status(200).json(updatedContact)
}

const deleteContactsController = async ( req: Request, res: Response ): Promise<Response> => {
    const contactId: number = parseInt(req.params.id)
    await deleteContactService(contactId)
    return res.status(204).send()
}


export {
    createContactController,
    listContactsController,
    updateContactsController,
    deleteContactsController
}