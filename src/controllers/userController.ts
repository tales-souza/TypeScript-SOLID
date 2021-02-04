import { Request, Response}  from 'express'

 class UserController {

  public login = async(req: Request, res: Response) => {
    try {
      const user = await req.body
      return res.status(201).json(user)
    } catch (error) {
      return res.status(500).json({
        error: error.message
      })
    }
  }

}


export default new UserController();