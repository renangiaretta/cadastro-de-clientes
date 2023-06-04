import { MigrationInterface, QueryRunner } from "typeorm";

export class Customer1685842008741 implements MigrationInterface {
    name = 'Customer1685842008741'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customers" ("id" SERIAL NOT NULL, "password" character varying(127) NOT NULL, "first_name" character varying(50) NOT NULL, "last_name" character varying(127) NOT NULL, "email" character varying(127) NOT NULL, "created_at" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_8536b8b85c06969f84f0c098b03" UNIQUE ("email"), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customers"`);
    }

}
