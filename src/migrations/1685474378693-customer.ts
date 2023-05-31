import { MigrationInterface, QueryRunner } from "typeorm";

export class Customer1685474378693 implements MigrationInterface {
    name = 'Customer1685474378693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "created_at"`);
    }

}
