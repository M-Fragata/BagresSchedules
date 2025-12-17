import express from "express"
import cors from "cors"
import { bagreSchedule } from "./middleware/bagreSchema.js"
import { database } from "./middleware/database.js"

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send("Bagre Schedule API is running!");
})

app.get("/bagreSchedule", async (req, res) => {

    try {

        const selectedDate = req.query.date

        console.log(selectedDate)

        let query = {}

        if (selectedDate) {
            query = { when: selectedDate }
            console.log(`[Backend Log] Filtrando por data: ${selectedDate}`)
        }

        const schedules = await bagreSchedule.find(query)

        return res
            .status(200)
            .json(schedules)

    } catch (error) {
        console.error("Erro ao buscar agendamentos:", error.message);
        return res
            .status(500)
            .json({ error: "Falha ao buscar agendamentos no banco de dados" })
    }
})

app.post("/bagreSchedule", async (req, res) => {

    try {
        // req.body contém os dados enviados pelo Frontend (graças ao express.json())
        const newSchedule = new bagreSchedule(req.body)

        // Salva o novo agendamento no mongoDB
        await newSchedule.save()

        return res
            .status(201)
            .json(newSchedule);
    } catch (error) {
        console.error("Erro ao criar agendamento:", error.message)

        return res
            .status(400)
            .json({ error: "Falha ao salvar o agendamento no banco de dados." });
    }

})

app.delete("/bagreSchedule/:id", async (req, res) => {

    const { id } = req.params

    if (!id) {
        return res
            .status(400)
            .json({ error: "ID do agendamento não fornecido." })
    }

    try {

        const deletedSchedule = await bagreSchedule.findByIdAndDelete(id)

        if (!deletedSchedule) {
            return res
                .status(404) // Not Found
                .json({ error: "Agendamento não encontrado." })
        }

        return res
            .status(204)
            .json();

    } catch (error) {
        return res
            .status(500)
            .json({ error: "Falha ao deletar agendamento" });
    }

})

app.put("/bagreSchedule/:id", async (req, res) => {

    const { id } = req.params

    if (!id) {
        return res
            .status(400)
            .json({ error: "ID do agendamento não fornecido." })
    }

    try {

        const editedSchedule = await bagreSchedule.findByIdAndReplace(id, req.body, {new: true})

        if (!editedSchedule) {
            return res
                .status(404) // Not Found
                .json({ error: "Agendamento não encontrado." })
        }

        return res
            .status(200)
            .json();

    } catch (error) {
        return res
            .status(500)
            .json({ error: "Falha ao editar agendamento" });
    }

})

const startServer = async () => {

    await database()

    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}/bagreSchedule`)
    })

}

startServer()