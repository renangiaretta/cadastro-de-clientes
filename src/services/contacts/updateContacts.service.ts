import { Repository } from 'typeorm';
import { TContactRequest } from '../../interfaces/contacts.interfaces';
import { Contact } from '../../entities/contact.entity';
import { AppDataSource } from '../../data-source';
import { AppError } from '../../errors/AppError';


const updateContactsService = async ( data: TContactRequest, contactId: number ): Promise<Contact> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const contact: Contact | null = await contactRepository.findOneBy({
        id: contactId
    })
    if(!contact) {
        throw new AppError('Contact not found.', 404)
    }
    contactRepository.merge(contact, data)
    const updatedContact: Contact = await contactRepository.save(contact)
    return updatedContact
}


export { updateContactsService }