
const dateInput = document.querySelector('#date')

export const hourIsPast = (slotTime, hourCounts) => {
    
    const count = hourCounts[slotTime] || 0
    const maxSchedules = 4

    if (count >= maxSchedules) {
        console.log(`[BLOQUEIO] Horário ${slotTime} cheio.`);
        return true;
    }

    if (dayjs(dateInput.value).isBefore(dayjs(), 'day')) {

        return true
    }

    if (dayjs(dateInput.value).isSame(dayjs(), 'day')) {
        const slotMoment = dayjs(`${dateInput.value}${slotTime}`)

        return slotMoment.isBefore(dayjs())
    }

    return false
}



