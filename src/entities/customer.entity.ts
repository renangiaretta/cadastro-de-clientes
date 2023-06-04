import { getRounds, hashSync } from 'bcryptjs'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm'


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

    @CreateDateColumn({ type: 'date' })
    created_at: string | Date

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