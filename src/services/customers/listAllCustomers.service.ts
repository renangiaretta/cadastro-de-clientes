import { AppDataSource } from "../../data-source";
import { Customer } from "../../entities/customer.entity";
import { AppError } from "../../errors/AppError";
import { TCustomerResponse, TCustomersList } from "../../interfaces/customers.interfaces";
import { customerSerializerResponse } from "../../serializers/customers.serializer";



const listAllCustomersService = async () => {
    const customersRepository = AppDataSource.getRepository(Customer)
    const customers: Customer[] | null = await customersRepository.find()
    if (!customers) {
        throw new AppError('User not found', 404)
    }
    // const customersList = customerSerializerResponse.parse(customers)
    // console.log(customersList, 'asdasd')
    return customers
}


export { listAllCustomersService }