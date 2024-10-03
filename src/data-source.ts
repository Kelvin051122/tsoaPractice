import "reflect-metadata"
import { DataSource } from "typeorm"
import { Photo } from "./users/Photo"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "docker",
    database: "postgres",
    entities: [Photo],
    synchronize: true,
    logging: false,
})