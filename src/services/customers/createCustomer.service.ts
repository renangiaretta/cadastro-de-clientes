import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity";
import { AppError } from "../../errors/AppError";
import { TCustomerRequest, TCustomerResponse } from "../../interfaces/customers.interfaces";
import { customerSerializerResponse } from "../../serializers/customers.serializer";


const createCustomerService = async ({password, first_name, last_name, email, phone }: TCustomerRequest): Promise<TCustomerResponse> => {
    const customerRepository = AppDataSource.getRepository(Customer)
    const findCustomer = await customerRepository.findOne({
        where: {
            email
        }
    })
    if (findCustomer) {
        throw new AppError('E-mail already registered.', 409)
    }
    const customer =  customerRepository.create({
        email,
        first_name,
        last_name,
        phone,
        password
    })
    await customerRepository.save(customer)
    const newCustomer = customerSerializerResponse.parse(customer)
    return newCustomer
}


export { createCustomerService }