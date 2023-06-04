import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { Repository } from 'typeorm';
import { Customer } from '../../entities/customer.entity';
import { contactSerializer } from '../../serializers/contacts.serializer';
import { AppError } from '../../errors/AppError';
import {
    TContact,
    TContactRequest
} from '../../interfaces/contacts.interfaces';


const createContactService = async (data: TContactRequest, customerId: number): Promise<TContact> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer)

    const customer: Customer | null = await customerRepository.findOneBy({
        id: customerId
    })
    if (!customer) {
        throw new AppError('Customer not found.', 404) 
    }
    const contact: Contact = contactRepository.create({...data, customer})
    await contactRepository.save(contact)
    const newContact: TContact = contactSerializer.parse(contact)
    return newContact
}


export { createContactService }