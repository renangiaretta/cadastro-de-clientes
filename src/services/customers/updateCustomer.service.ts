import { AppDataSource } from '../../data-source';
import { Customer } from '../../entities/customer.entity';
import { AppError } from '../../errors/AppError';
import { TCustomerRequest, TCustomerResponse } from '../../interfaces/customers.interfaces';
import { customerSerializerResponse } from '../../serializers/customers.serializer';


const updateCustomerService = async (data: TCustomerRequest, customerId: number): Promise<TCustomerResponse> => {
    const customerRepository = AppDataSource.getRepository(Customer)
    const customer = await customerRepository.findOneBy({
        id: customerId
    })
    if (!customer) {
        throw new AppError('Customer not found', 404)
    }
    const email = await customerRepository.findOne({
        where: {
            email: data.email
        }
    })
    if(email && customer.email != data.email) {
        throw new AppError('E-mail already used.', 409)
    }
    const newCustomerData = customerRepository.create({
        ...customer,
        ...data
    })
    await customerRepository.save(newCustomerData)
    return customerSerializerResponse.parse(newCustomerData)
}


export { updateCustomerService }