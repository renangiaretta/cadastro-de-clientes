import { Request, Response } from 'express'


const createCustomerController = async (req: Request, res: Response) => {
    return res.status(200).json('Cliente criado')
}


export { createCustomerController }