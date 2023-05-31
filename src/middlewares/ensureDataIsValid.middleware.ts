import { Request, Response, NextFunction } from 'express'
import { ZodTypeAny } from 'zod'


const ensureDataIsValidMiddleware = ( serializer: ZodTypeAny ) => ( req: Request, res: Response, next: NextFunction ) => {
    const validatedData = serializer.parse(req.body)
    req.body = validatedData
    return next()
}


export { ensureDataIsValidMiddleware }