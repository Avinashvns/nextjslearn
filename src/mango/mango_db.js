
// const { username, password } = process.env;
// export const connectionSrt = "mongodb+srv://" + username + ":" + password + "@cluster0.ubcntsf.mongodb.net/productDB?retryWrites=true&w=majority";

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