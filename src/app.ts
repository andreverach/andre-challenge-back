import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import tasksRoutes from './routes/task.routes';
import usersRoutes from './routes/user.routes';

const app = express();

app.use(express.json());

//cabeceras de seguridad
app.use(helmet());

// Content Security Policy (CSP)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  })
);

// Strict-Transport-Security (HSTS)
app.use(
  helmet.hsts({
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true,
  })
);

// Evita que el navegador infiera el tipo de contenido de una respuesta
app.use(helmet.noSniff());

// Previene ataques de clickjacking
app.use(
  helmet.frameguard({
    action: 'deny',
  })
);

// Habilita el filtro XSS en navegadores
app.use(helmet.xssFilter());

//cors
const corsOptions = {
  origin: ['http://localhost:4200', 'https://andre-challenge-front.netlify.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions)); // Usar middleware cors

//rutas
app.use('/tasks', tasksRoutes);
app.use('/users', usersRoutes);

export default app;