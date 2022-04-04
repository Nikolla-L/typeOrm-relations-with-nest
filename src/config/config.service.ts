import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class ConfigService {
    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'example',
            database: 'nest',
            entities: ['dist/**/*.entity.js'],
            migrationsTableName: 'migration',
            migrations: ['src/migration/*.ts'],
            cli: {
                entitiesDir: 'src/entity',
                migrationsDir: 'src/migration'
            },
            synchronize: true,
            ssl: false
        }
    }
}

export const configService = new ConfigService()