
const dateInput = document.querySelector('#date')

export const shouldBlockSlot = (slotTime) => {
        if (dayjs(dateInput.value).isBefore(dayjs(), 'day')) {
            return true
        }

        if (dayjs(dateInput.value).isSame(dayjs(), 'day')) {
            const slotMoment = dayjs(`${dateInput.value}${slotTime}`)
            console.log(slotMoment)
            return slotMoment.isBefore(dayjs())
        }

        return false

    }


