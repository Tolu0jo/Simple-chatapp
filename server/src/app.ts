import express, {Request,Response} from "express"
import cors from "cors";
import logger from "morgan";
import axios, {AxiosError} from 'axios'

const app = express()

app.use(express.json())

app.use(cors ({origin: true}))

app.use(logger("dev"))


app.post("/authenticate", async (req: Request | any,res:Response)=>{
    const {username} = req.body;

    try {
        const response = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret:username, first_name: username},
        {headers: {"private-key": "0fcb206b-23f7-4977-a90e-b2f864eb87e6"}}
        );
        res.status(response.status).json(response.data)
    } catch ( error:any) {
        res.status(error.response.status).json(error.response.data)  
    }

})

const port = 3002

app.listen(port,()=>{
        console.log("Listening on port " + port)
})