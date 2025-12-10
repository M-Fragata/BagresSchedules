import mongoose from "mongoose"

export const database = async () => {
    const uri = ""

    try {
        await mongoose.connect(uri)
        console.log("Conectado ao banco de dados")
    } catch (error) {
        console.log(error)
    }
}