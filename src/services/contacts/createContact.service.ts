import { Request, Response } from "express";
import { TContactRequest } from "../../interfaces/contacts.interfaces";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { Repository } from "typeorm";



const createContactService = async (data: TContactRequest, req: Request, res: Response) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

}


export { createContactService }