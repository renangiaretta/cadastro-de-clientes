import { Request, Response } from 'express'
import { TCustomerRequest, TCustomerResponse } from '../interfaces/customers.interfaces'
import { createCustomerService } from '../services/customers/createCustomer.service'


const createCustomerController = async (req: Request, res: Response): Promise<Response> => {
    const { ...data }: TCustomerRequest = req.body
    const newCustomer: TCustomerResponse = await createCustomerService(data)

    return res.status(201).json(newCustomer)
}

const listCustomersController = async (req: Request, res: Response) => {

}

const updateCustomersController = async (req: Request, res: Response) => {

}

const deleteCustomersController = async (req: Request, res: Response) => {

}

export { createCustomerController, listCustomersController, updateCustomersController, deleteCustomersController }