import { compare } from "bcryptjs"
import { AppDataSource } from "../data-source"
import { Customer } from "../entities/customer.entity"
import { AppError } from "../errors/AppError"
import { TLoginRequest } from "../interfaces/login.interfaces"
import jwt from 'jsonwebtoken'
import 'dotenv/config'


const createTokenService = async ({ email, password }: TLoginRequest): Promise<string> => {
    const customersRepository = AppDataSource.getRepository(Customer)

    const customer = await customersRepository.findOne({
        where: {
            email
        }
    })

    if (!customer) {
        throw new AppError('Invalid credentials.', 403)
    }

    const passwordMatch = await compare(password, customer.password)

    if (!passwordMatch) {
        throw new AppError('Invalid credentials.', 403)
    }

    const token = jwt.sign(
        {userName: customer.first_name},
        process.env.SECRET_KEY!,
        {
            expiresIn: '1h',
            subject: String(customer.id)
        }
    )

    return token
}


export { createTokenService }