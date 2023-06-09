import { createCustomerService } from '../services/customers/createCustomer.service'
import { detailCustomerService } from '../services/customers/detailCustomer.service'
import { updateCustomerService } from '../services/customers/updateCustomer.service'
import { listAllCustomersService } from '../services/customers/listAllCustomers.service'
import { deleteCustomerService } from '../services/customers/deleteCustomer.service'
import {
    Request,
    Response
} from 'express'
import {
    TCustomerRequest,
    TCustomerResponse
} from '../interfaces/customers.interfaces'


const createCustomerController = async (req: Request, res: Response): Promise<Response> => {
    const { ...data }: TCustomerRequest = req.body
    const newCustomer: TCustomerResponse = await createCustomerService(data)

    return res.status(201).json(newCustomer)
}

const listCustomersController = async (req: Request, res: Response) => {
    const customer = await detailCustomerService(res.locals.customerId)
    return res.status(200).json(customer)
}

const listAllCustomersController = async (req: Request, res: Response) => {
    const customers = await listAllCustomersService()
    return res.status(200).json(customers)
}

const updateCustomersController = async (req: Request, res: Response) => {
    const customerData = req.body
    const customer = await updateCustomerService(customerData, res.locals.customerId)
    return res.status(200).json(customer)
}

const deleteCustomersController = async (req: Request, res: Response) => {
    const customerId: number = parseInt(req.params.id)
    await deleteCustomerService(customerId)
    return res.status(204).send()
}


export {
    createCustomerController,
    listCustomersController,
    updateCustomersController,
    deleteCustomersController,
    listAllCustomersController
}