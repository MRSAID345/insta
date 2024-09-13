
import {writeFile , readFile} from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
import {faker} from "@faker-js/faker"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersFilePath = path.join(__dirname , "users.json")

const usersGenerator = async ()=>{
    const data = [];
    for(let i = 0 ; i < 10000; i++){
        const user ={
            fullName : faker.person.fullName(), 
            uuid : faker.string.uuid(),
            email : faker.internet.email(),
            phoneNumber : faker.phone.number(),
        }
        data.push(user)
    }
    await writeFile(usersFilePath, JSON.stringify(data))
}
usersGenerator()