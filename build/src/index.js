"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const Photo_1 = require("./users/Photo");
data_source_1.AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Original Data:");
    console.log(yield data_source_1.AppDataSource.getRepository(Photo_1.Photo).find());
    console.log("Cleaning old Data...");
    yield data_source_1.AppDataSource.getRepository(Photo_1.Photo).clear();
    console.log("Inserting new student...");
    const s = new Photo_1.Photo();
    s.name = "老骨灰";
    s.age = 25;
    yield data_source_1.AppDataSource.manager.save(s);
    console.log("New Data:");
    console.log(yield data_source_1.AppDataSource.getRepository(Photo_1.Photo).find());
})).catch(error => console.log(error));
//# sourceMappingURL=index.js.map