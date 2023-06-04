import jwt from 'jsonwebtoken'
import 'dotenv/config'
import {
    NextFunction,
    Request,
    Response
} from "express";


const ensureAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token: string | undefined = req.headers.authorization

    if (!token) {
        return res.status(401).json({
            message: 'Invalid token.'
        })
    }
    const splitToken = token.split(' ')[1]

    jwt.verify(splitToken, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) {
            return res.status(401).json({
                message: 'Inalid token.'
            })
        }
        res.locals.customerId = decoded.sub

        return next()
    })
}


export { ensureAuthMiddleware }