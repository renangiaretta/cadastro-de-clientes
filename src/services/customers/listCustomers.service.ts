import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity";
import { AppError } from "../../errors/AppError";
import { TCustomerResponse } from "../../interfaces/customers.interfaces";
import { customerSerializerResponse } from "../../serializers/customers.serializer";



const listCustomersService = async (customerId: number): Promise<TCustomerResponse> => {
    const customersRepository = AppDataSource.getRepository(Customer)
    const customer: Customer | null = await customersRepository.findOneBy({
        id: customerId
    })
    if (!customer) {
        throw new AppError('User not found', 404)
    }
    return customerSerializerResponse.parse(customer)
}


export { listCustomersService }