import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'


@Entity('contacts')
class Contact {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 127 })
    password: string

    @Column({ type: 'varchar', length: 50 })
    first_name: string

    @Column({ type: 'varchar', length: 127 })
    last_name: string

    @Column({ type: 'varchar', length: 127 })
    email: string

    @Column({type: 'varchar', length: 14})
    phone: string

    @CreateDateColumn({ type: 'date' })
    created_at: string | Date

}

export { Contact }