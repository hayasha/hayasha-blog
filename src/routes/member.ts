import {Router} from "express"
import {joinController} from "../controllers/member"
import {validate} from "../middlewares/validate"
import {joinValidator} from "../requests/member/join"

const membersRouter = Router()

membersRouter.post('/join', validate(joinValidator), joinController)

export { membersRouter }