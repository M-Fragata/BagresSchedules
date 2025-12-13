
const dateInput = document.querySelector('#date')

export const hourIsAvalialable = (slotTime) => {
        if (dayjs(dateInput.value).isBefore(dayjs(), 'day')) {
            
            return true
        }

        if (dayjs(dateInput.value).isSame(dayjs(), 'day')) {
            const slotMoment = dayjs(`${dateInput.value}${slotTime}`)
            
            return slotMoment.isBefore(dayjs())
        }

        return false
    }
    


