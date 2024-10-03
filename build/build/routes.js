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
exports.RegisterRoutes = RegisterRoutes;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const usersController_1 = require("./../src/users/usersController");
const ioc_1 = require("./../src/ioc");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/:Photoid', ...((0, runtime_1.fetchMiddlewares)(usersController_1.UsersController)), ...((0, runtime_1.fetchMiddlewares)(usersController_1.UsersController.prototype.getUser)), function UsersController_getUser(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                Photoid: { "in": "path", "name": "Photoid", "required": true, "dataType": "double" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const container = typeof ioc_1.iocContainer === 'function' ? ioc_1.iocContainer(request) : ioc_1.iocContainer;
                const controller = yield container.get(usersController_1.UsersController);
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }
                yield templateService.apiHandler({
                    methodName: 'getUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/delete/:Photoid', ...((0, runtime_1.fetchMiddlewares)(usersController_1.UsersController)), ...((0, runtime_1.fetchMiddlewares)(usersController_1.UsersController.prototype.delete)), function UsersController_delete(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                Photoid: { "in": "path", "name": "Photoid", "required": true, "dataType": "double" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const container = typeof ioc_1.iocContainer === 'function' ? ioc_1.iocContainer(request) : ioc_1.iocContainer;
                const controller = yield container.get(usersController_1.UsersController);
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }
                yield templateService.apiHandler({
                    methodName: 'delete',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 201,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/', ...((0, runtime_1.fetchMiddlewares)(usersController_1.UsersController)), ...((0, runtime_1.fetchMiddlewares)(usersController_1.UsersController.prototype.createUser)), function UsersController_createUser(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "any" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const container = typeof ioc_1.iocContainer === 'function' ? ioc_1.iocContainer(request) : ioc_1.iocContainer;
                const controller = yield container.get(usersController_1.UsersController);
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }
                yield templateService.apiHandler({
                    methodName: 'createUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: 201,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/update/:Photoid', ...((0, runtime_1.fetchMiddlewares)(usersController_1.UsersController)), ...((0, runtime_1.fetchMiddlewares)(usersController_1.UsersController.prototype.updateUser)), function UsersController_updateUser(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "any" },
                Photoid: { "in": "path", "name": "Photoid", "required": true, "dataType": "double" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const container = typeof ioc_1.iocContainer === 'function' ? ioc_1.iocContainer(request) : ioc_1.iocContainer;
                const controller = yield container.get(usersController_1.UsersController);
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }
                yield templateService.apiHandler({
                    methodName: 'updateUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=routes.js.map