import { MigrationInterface, QueryRunner } from "typeorm";

export class Contact1685907312915 implements MigrationInterface {
    name = 'Contact1685907312915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "password" character varying(127) NOT NULL`);
    }

}
