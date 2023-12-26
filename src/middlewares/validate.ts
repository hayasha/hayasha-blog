import {Request, Response, NextFunction} from "express";
import {AnyObjectSchema} from "yup";

export function validate(dto: AnyObjectSchema) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            await dto.validateSync(req.body)
            return next()
        }
        catch (e) {
            throw e
        }
    }
}