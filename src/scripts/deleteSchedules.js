
import { loadSchedules } from "./loadSchedules.js"
import { getSchedules } from "./getSchedules.js"
export async function deledSchedule(event, dateInput) {

    const scheduleItem = event.target.closest('li')

    if (scheduleItem && scheduleItem.dataset.id) {
        const scheduleId = scheduleItem.dataset.id

        const URL = `https://bagresschedules.onrender.com/bagreSchedule/${scheduleId}`

        try {
            const response = await fetch(URL, {
                method: "DELETE",
            })

            if (response.status === 204) {
                alert("Agendamento deletado com sucesso")

                const schedules = await getSchedules(dateInput.value)
                loadSchedules(schedules)
            } else {
                console.error("Falha ao deletar.")
            }

            if (response.status === 400) {
                const errorData = await response.json()
                console.error("DELETE - Erro de validação do backend", errorData.details)
                throw new Error("Dados incompletos! Verifique os campos")
            }
        } catch (error) {
            console.error('Erro de rede:', error)
        }
    }

}