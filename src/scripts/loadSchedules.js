
export const loadSchedules = async (selectedDate) => {
    const apiUrl = `http:localhost:3333/bagreSchedule?date=${selectedDate}`

    console.log(`Buscando agendamentos para: ${selectedDate}`)

    const response = await fetch(apiUrl)
    
    if (!response.ok) {
        throw new Error('Não foi possível carregar os agendamentos.');
    }

    return response.json();
}