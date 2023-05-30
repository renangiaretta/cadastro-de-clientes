import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'


@Entity('customers')
class Customer {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    email_name: string

}