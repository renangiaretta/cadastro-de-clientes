import { Repository } from 'typeorm'
import { Contact } from '../../entities/contact.entity'
import { AppDataSource } from '../../data-source'
import { AppError } from '../../errors/AppError'


const deleteContactService = async (contactId: number): Promise<void> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const contact: Contact | null = await contactRepository.findOneBy({
        id: contactId
    })
    if (!contact) {
        throw new AppError('Contact not found.', 404)
    }
    await contactRepository.remove(contact)
}


export { deleteContactService }