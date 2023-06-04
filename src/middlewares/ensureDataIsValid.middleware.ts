import { ZodTypeAny } from 'zod'
import {
    Request,
    Response,
    NextFunction
} from 'express'


const ensureDataIsValidMiddleware = ( serializer: ZodTypeAny ) => ( req: Request, res: Response, next: NextFunction ) => {
    const validatedData = serializer.parse(req.body)
    req.body = validatedData
    return next()
}


export { ensureDataIsValidMiddleware }