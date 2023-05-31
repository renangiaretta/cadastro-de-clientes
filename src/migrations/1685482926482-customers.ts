import { MigrationInterface, QueryRunner } from "typeorm";

export class Customers1685482926482 implements MigrationInterface {
    name = 'Customers1685482926482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "email_name"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "password" character varying(127) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "email" character varying(127) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "first_name" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "last_name" character varying(127) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "created_at" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "last_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "first_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "email_name" character varying NOT NULL`);
    }

}
