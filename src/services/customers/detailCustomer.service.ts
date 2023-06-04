import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/customer.entity';
import { AppError } from '../../errors/AppError';
import { customerSerializerResponseContacts } from '../../serializers/customers.serializer';
import { TCustomerResponseContacts } from '../../interfaces/customers.interfaces';


const detailCustomerService = async (customerId: number): Promise<TCustomerResponseContacts> => {
    const customersRepository: Repository<Customer> = AppDataSource.getRepository(Customer)
    const customer: Customer | null = await customersRepository.findOne({
        where: { id: customerId },
        relations: ['contacts']
    })
    if (!customer) {
        throw new AppError('User not found', 404)
    }
    return customerSerializerResponseContacts.parse(customer)
}


export { detailCustomerService }