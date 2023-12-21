import express, { Application, Request, Response } from 'express'

const app: Application = express()
const PORT: number = 3000

app.get('/world', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`))