import { Contact } from './contact.entity'
import {
    getRounds,
    hashSync
} from 'bcryptjs'
import {
    Entity,
    PrimaryGeneratedColumn,
    Column, CreateDateColumn,
    BeforeInsert,
    BeforeUpdate,
    OneToMany
} from 'typeorm'


@Entity('customers')
class Customer {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 127 })
    password: string

    @Column({ type: 'varchar', length: 50 })
    first_name: string

    @Column({ type: 'varchar', length: 127 })
    last_name: string

    @Column({ type: 'varchar', length: 127, unique: true })
    email: string

    @Column({type: 'varchar', length: 14})
    phone: string

    @CreateDateColumn({ type: 'date' })
    created_at: string | Date

    @OneToMany(() => Contact, contact => contact.customer, { nullable: true })
    contacts: Contact[]

    @BeforeInsert()
    @BeforeUpdate()
    hashpassword() {
        const isEncrypted = getRounds(this.password)
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10)
        }
    }
}


export { Customer }