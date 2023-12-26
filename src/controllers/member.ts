import { Request, Response } from "express"
import { memberServices } from "../services/member";
import { JoinRequest } from "../requests/member/join";
import { JoinResponse } from "../services/member/join";

export const joinController = async (req: Request, res: Response) => {
    const joinDto: JoinRequest = {
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password
    }

    const newUser: JoinResponse = await memberServices.join(joinDto)

    return res.json(201).json(newUser)
}