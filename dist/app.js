"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//cabeceras de seguridad
app.use((0, helmet_1.default)());
// Content Security Policy (CSP)
app.use(helmet_1.default.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
    },
}));
// Strict-Transport-Security (HSTS)
app.use(helmet_1.default.hsts({
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true,
}));
// Evita que el navegador infiera el tipo de contenido de una respuesta
app.use(helmet_1.default.noSniff());
// Previene ataques de clickjacking
app.use(helmet_1.default.frameguard({
    action: 'deny',
}));
// Habilita el filtro XSS en navegadores
app.use(helmet_1.default.xssFilter());
//cors
const corsOptions = {
    origin: ['http://localhost:4200', 'https://andre-challenge-front.netlify.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
};
app.use((0, cors_1.default)(corsOptions)); // Usar middleware cors
//rutas
app.use('/tasks', task_routes_1.default);
app.use('/users', user_routes_1.default);
exports.default = app;
