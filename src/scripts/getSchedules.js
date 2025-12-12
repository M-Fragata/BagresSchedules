
export const getSchedules = async (selectedDate) => {
    const apiUrl = `https://bagresschedules.onrender.com/bagreSchedule?date=${selectedDate}`

    console.log(`Buscando agendamentos para: ${selectedDate}`)

    const response = await fetch(apiUrl)
    
    if (!response.ok) {
        throw new Error('Não foi possível carregar os agendamentos.');
    }

    return response.json();
}