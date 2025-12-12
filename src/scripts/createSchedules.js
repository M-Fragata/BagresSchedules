const URL = "https://bagresschedules.onrender.com"

export const createNewSchedule = async (scheduleData) => {
    const response = await fetch(`${URL}`,{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(scheduleData)
    })

    if(response.status === 400) {
        const errorData = await response.json()
        console.error("Erro de validação do backend", errorData.details)
        throw new Error("Dados incompletos! Verifique os campos")
    }

    if(response.status === 201){
        alert("Agendamento criado com sucesso")
    }

    if(!response.ok) {
        throw new Error("Falha ao agendar. Tente novamente")
    }

    return response.json()
}