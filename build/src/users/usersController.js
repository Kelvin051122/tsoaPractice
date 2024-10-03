"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.UsersController = void 0;
const tsoa_1 = require("tsoa");
const data_source_1 = require("@src/data-source");
const Photo_1 = require("./Photo");
const photo = new Photo_1.Photo();
const photoRepository = data_source_1.AppDataSource.getRepository(Photo_1.Photo);
let UsersController = class UsersController extends tsoa_1.Controller {
    /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   */
    getUser(Photoid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const firstPhoto = yield photoRepository.findOneBy({
                    id: Photoid,
                });
                console.log("First photo from the db: ", firstPhoto);
                return firstPhoto;
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
    /**
   * Retrieves the details of an existing user.
   * Supply the unique user ID from either and receive corresponding user details.
   */
    delete(Photoid) {
        return __awaiter(this, void 0, void 0, function* () {
            const photoToRemove = yield photoRepository.findOneBy({
                id: Photoid
            });
            yield photoRepository.delete(Photoid);
            return { "message": "OK" };
        });
    }
    /**
   * @param requestBody Description for the request body object
   * @example requestBody  {
   *   "name": "BTP-CLOSURE-4-NE",
   *   "age": 15
   * }
   * @example requestBody  {
   *   "name": "MollyCharles",
   *   "age": 26
   * }
   */
    createUser(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setStatus(201); // set return status 201
            photo.name = requestBody.name;
            photo.age = requestBody.age;
            yield photoRepository.insert(photo);
            console.log("Photo has been saved");
            return;
        });
    }
    /**
   * @param requestBody Description for the request body object
   * @example requestBody  {
   *   "name": "BTP-CLOSURE-4-NE",
   *   "age": 15
   * }
   * @example requestBody  {
   *   "name": "MollyCharles",
   *   "age": 26
   * }
   */
    updateUser(requestBody, Photoid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield photoRepository.update(Photoid, requestBody);
            return { "message": "OK" };
        });
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, tsoa_1.Example)({
        id: 0,
        name: "tsoa user",
        age: 26
    }),
    (0, tsoa_1.Example)({
        id: 2,
        name: "Moly",
        age: 77
    }),
    (0, tsoa_1.Get)('{Photoid}'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Removed"),
    (0, tsoa_1.Delete)('/delete/{Photoid}'),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created") // Custom success response
    ,
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, tsoa_1.Put)('/update/{Photoid}'),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
exports.UsersController = UsersController = __decorate([
    (0, tsoa_1.Route)("/")
], UsersController);
//# sourceMappingURL=usersController.js.map