import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity";
import { AppError } from "../../errors/AppError";
import { TCustomerRequest, TCustomerResponse } from "../../interfaces/customers.interfaces";
import { customerSerializerResponse } from "../../serializers/customers.serializer";



const createCustomerService = async ({password, first_name, last_name, email }: TCustomerRequest): Promise<TCustomerResponse> => {
    const customerRepository = AppDataSource.getRepository(Customer)
    const findCustomer = await customerRepository.findOne({
        where: {
            email
        }
    })
    if (findCustomer) {
        throw new AppError('User already exists', 409)
    }
    const customer =  customerRepository.create({
        email,
        first_name,
        last_name,
        password
    })
    await customerRepository.save(customer)
    const newCustomer = customerSerializerResponse.parse(customer)
    return newCustomer
}


export { createCustomerService }