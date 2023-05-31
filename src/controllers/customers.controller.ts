import { Request, Response } from 'express'
import { TCustomerRequest, TCustomerResponse } from '../interfaces/customers.interfaces'
import { createCustomerService } from '../services/customers/createCustomer.service'


const createCustomerController = async (req: Request, res: Response): Promise<Response> => {
    const { ...data }: TCustomerRequest = req.body
    const newCustomer: TCustomerResponse = await createCustomerService(data)

    return res.status(201).json(newCustomer)
}


export { createCustomerController }