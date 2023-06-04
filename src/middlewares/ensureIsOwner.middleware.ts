import { AppDataSource } from "../data-source"
import { Contact } from "../entities/contact.entity"
import {
    NextFunction,
    Request,
    Response
} from "express"



const ensureIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const contactId = req.params.id
    const customerId = res.locals.customerId
    const contact = await contactRepository.findOne({
        where: {
            id: parseInt(contactId)
        },
        relations: {
            customer: true
        }
    })

    if (!contact) {
        return res.status(404).json({
            message: 'Contact not found'
        })
    }

    if (contact.customer.id != customerId) {
        return res.status(403).json({
            message: 'You don`t have permissions.'
        })
    }

    return next()
}


export { ensureIsOwnerMiddleware }