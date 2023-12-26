import {InferType, object, string} from "yup";

export const joinValidator = object({
    nickname: string().required(),
    email: string().required().email(),
    password: string().required()
})

export type JoinRequest = InferType<typeof joinValidator>