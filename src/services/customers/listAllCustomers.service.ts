import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/customer.entity';
import { AppError } from '../../errors/AppError';


const listAllCustomersService = async (): Promise<Customer[]> => {
    const customersRepository: Repository<Customer> = AppDataSource.getRepository(Customer)
    const customers: Customer[] | null = await customersRepository.find()
    if (!customers) {
        throw new AppError('User not found', 404)
    }
    return customers
}


export { listAllCustomersService }