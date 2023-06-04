import { AppDataSource } from '../../data-source'
import { Customer } from '../../entities/customer.entity'
import { AppError } from '../../errors/AppError'
import { Repository } from 'typeorm'


const deleteCustomerService = async (customerId: number): Promise<void> => {
    const customerRepository: Repository<Customer> = AppDataSource.getRepository(Customer)
    const customer: Customer | null = await customerRepository.findOneBy({
        id: customerId
    })
    if (!customer) {
        throw new AppError('Customer not found.', 404)
    }
    await customerRepository.remove(customer!)
}


export { deleteCustomerService }
