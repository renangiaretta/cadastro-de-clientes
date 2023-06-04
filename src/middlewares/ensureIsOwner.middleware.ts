import { AppDataSource } from "../data-source"
import { Customer } from "../entities/customer.entity"



const ensureIsOwnerMiddleware = () => {
    const customerRepository = AppDataSource.getRepository(Customer)
    const customer = 
}


export { ensureIsOwnerMiddleware }