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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUser = void 0;
const firebase_config_1 = __importDefault(require("../config/firebase.config"));
const usersCollection = firebase_config_1.default.collection('users');
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userSnapshot = yield firebase_config_1.default.collection('users').where('email', '==', email).get();
    let userExists = false;
    if (!userSnapshot.empty) {
        userExists = true;
    }
    return userExists;
});
exports.getUser = getUser;
const addUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const taskRef = yield firebase_config_1.default.collection('users').add(newUser);
    let message = "Usuario agregado correctamente";
    if (!taskRef.id) {
        message = "No se pudo agregar el usuario";
    }
    return message;
});
exports.addUser = addUser;
