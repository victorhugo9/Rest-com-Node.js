import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';
import userRepository from "../repositories/user.repository";

//Fazer: 
// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid

const usersRoute = Router();


// Buscar todos os usuários
usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
})

// Buscar um usuário específico
usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid })
})

// Criar um usuário
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction ) => {
    const newUser = req.body;
   
    console.log(req.body)

    res.status(StatusCodes.CREATED).send(newUser)
})

// Alterar um determinado usuário
usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res:Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    
    modifiedUser.uuid = uuid

    res.status(StatusCodes.OK).send({ modifiedUser });
})

// Remover um usuário
usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK)

})


export default usersRoute;
