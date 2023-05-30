import { Request, Response } from 'express'


const createClientController = async (req: Request, res: Response) => {
    return res.status(200).json('cliente criado')
}


export { createClientController }