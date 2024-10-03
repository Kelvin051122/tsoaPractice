"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Photo_1 = require("./users/Photo");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "docker",
    database: "postgres",
    entities: [Photo_1.Photo],
    synchronize: true,
    logging: false,
});
//# sourceMappingURL=data-source.js.map