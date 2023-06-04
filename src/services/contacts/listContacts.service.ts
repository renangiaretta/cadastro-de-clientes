import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Customer } from '../../entities/customer.entity'
import { Contact } from '../../entities/contact.entity'


const listContactsService = async (customerId: number): Promise<Contact[]> => {
    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer)
    const customer: Customer | null = await customerRepository.findOne({
        where: {
            id: customerId
        },
        relations: ['contacts']
    })
    return customer!.contacts
}


export { listContactsService }