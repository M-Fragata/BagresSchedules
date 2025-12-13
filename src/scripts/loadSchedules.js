
const periodMorning = document.querySelector('#period-morning')
const periodAfternoon = document.querySelector('#period-afternoon')
const periodNight = document.querySelector('#period-night')

export const loadSchedules = async (schedules) => {

    periodMorning.innerHTML = ''
    periodAfternoon.innerHTML = ''
    periodNight.innerHTML = ''


    const schedulesMorning = schedules.map((schedule) => {

        const scheduleHour = schedule.hour
        const [scheduleHourString] = scheduleHour.split(":")
        const scheduleHourNumber = Number(scheduleHourString)
        

        if (scheduleHourNumber >= 8 && scheduleHourNumber <= 11) {
            return `
                    <li>
                        <strong>${schedule.hour}</strong>
                        <span>${schedule.name}</span>
                        <img
                            src="../src/assets/cancel.svg"
                            alt="Cancelar"
                            class="cancel-icon"
                        />
                    </li>
                    `
        }
    }).join("")

    const schedulesAfternoon = schedules.map((schedule) => {

        const scheduleHour = schedule.hour
        const [scheduleHourString] = scheduleHour.split(":")
        const scheduleHourNumber = Number(scheduleHourString)

        if (scheduleHourNumber >= 14 && scheduleHourNumber <= 17) {
            return `
                    <li>
                        <strong>${schedule.hour}</strong>
                        <span>${schedule.name}</span>
                        <img
                            src="../src/assets/cancel.svg"
                            alt="Cancelar"
                            class="cancel-icon"
                        />
                    </li>
                    `
        }
    }).join("")

    const schedulesNight = schedules.map((schedule) => {

        const scheduleHour = schedule.hour
        const [scheduleHourString] = scheduleHour.split(":")
        const scheduleHourNumber = Number(scheduleHourString)

        if (scheduleHourNumber > 17 && scheduleHourNumber <= 21) {
            return `
                    <li>
                        <strong>${schedule.hour}</strong>
                        <span>${schedule.name}</span>
                        <img
                            src="../src/assets/cancel.svg"
                            alt="Cancelar"
                            class="cancel-icon"
                        />
                    </li>
                    `
        }
    }).join("")

    periodMorning.innerHTML = schedulesMorning
    periodAfternoon.innerHTML = schedulesAfternoon
    periodNight.innerHTML = schedulesNight
}