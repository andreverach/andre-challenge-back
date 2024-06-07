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
exports.addUsersController = exports.getUsersController = void 0;
const user_service_1 = require("../services/user.service");
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params.email;
        const userResponse = yield (0, user_service_1.getUser)(email);
        res.status(200).json({ userExists: userResponse });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});
exports.getUsersController = getUsersController;
//Agregar tarea
const addUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = {
            email: req.body.email,
        };
        const userResponse = yield (0, user_service_1.addUser)(newUser);
        res.status(200).json({ message: userResponse });
    }
    catch (error) {
        res.status(500).send("Ocurrió un error");
    }
});
exports.addUsersController = addUsersController;
