import { request, response, Router } from 'express'
import userController from './controllers/userController'

export const routes : Router = Router();

routes.get('/', (request, response) => {
  return response.status(200).json('Server on')
} )

routes.post('/users',userController.login)
