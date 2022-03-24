import express, { Request, Response, NextFunction} from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// Configuração da Aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração da Rotas
app.use(statusRoute);
app.use(usersRoute);

// Confuguração dos Handlers de Erro
app.use(errorHandler);

// Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000!')
})
