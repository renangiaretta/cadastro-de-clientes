import { createTokenService } from "../login/createToken.service"
import {
    Request,
    Response
} from 'express'


const createTokenController = async ( req: Request, res: Response ) => {
    const { email, password } = req.body
    const token = await createTokenService({email, password})

    return res.json({token})
}


export { createTokenController }
