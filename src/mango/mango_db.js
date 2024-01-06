// Way 1
const { username, password } = process.env;
export const connectionSrt = `mongodb+srv://${username}:${password}@cluster0.ubcntsf.mongodb.net/?retryWrites=true&w=majority`;

// Way 2
import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MANGO_DB_URL, {
            dbName: 'productDB',
        });
        console.log("Db Connected")
        console.log(connectDb)
    }
    catch (error) {
        console.error("Failed to connect Database", error)
    }
}