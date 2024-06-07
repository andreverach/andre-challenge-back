"use strict";
/* import * as functions from 'firebase-functions';
import app from './app';

export const api = functions.https.onRequest(app);
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
