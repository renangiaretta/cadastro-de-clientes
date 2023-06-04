import { MigrationInterface, QueryRunner } from "typeorm";

export class Contact1685904455433 implements MigrationInterface {
    name = 'Contact1685904455433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "password" character varying(127) NOT NULL, "first_name" character varying(50) NOT NULL, "last_name" character varying(127) NOT NULL, "email" character varying(127) NOT NULL, "phone" character varying(14) NOT NULL, "created_at" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
