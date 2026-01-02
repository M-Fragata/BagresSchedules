
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
                    <li data-id="${schedule._id}" class="schedule-item">
                        <strong>${schedule.hour}</strong>
                        <span>${schedule.name}</span>
                        <img
                            src="../src/assets/cancel.svg"
                            alt="Cancelar"
                            class="cancel-icon"
                        />
                    </li>
                    `
                        /*
                            <img
                                src="../src/assets/edit.svg"
                                alt="Editar-agendamento"
                                class="edit-icon"
                            />
                        */
        }
    }).join("")

    const schedulesAfternoon = schedules.map((schedule) => {

        const scheduleHour = schedule.hour
        const [scheduleHourString] = scheduleHour.split(":")
        const scheduleHourNumber = Number(scheduleHourString)

        if (scheduleHourNumber <= 17) {
            return `
                    <li data-id="${schedule._id}" class="schedule-item">
                        <strong>${schedule.hour}</strong>
                        <span>${schedule.name}</span>
                        <img
                            src="../src/assets/cancel.svg"
                            alt="Cancelar"
                            class="cancel-icon"
                        />
                    </li>
                    `
                        /*
                            <img
                                src="../src/assets/edit.svg"
                                alt="Editar-agendamento"
                                class="edit-icon"
                            />
                        */
        }
    }).join("")

    const schedulesNight = schedules.map((schedule) => {

        const scheduleHour = schedule.hour
        const [scheduleHourString] = scheduleHour.split(":")
        const scheduleHourNumber = Number(scheduleHourString)

        if (scheduleHourNumber <= 21) {
            return `
                    <li data-id="${schedule._id}" class="schedule-item">
                        <strong>${schedule.hour}</strong>
                        <span>${schedule.name}</span>
                        <img
                            src="../src/assets/cancel.svg"
                            alt="Cancelar"
                            class="cancel-icon"
                        />
                    </li>
                    `
                        /*
                            <img
                                src="../src/assets/edit.svg"
                                alt="Editar-agendamento"
                                class="edit-icon"
                            />
                        */
        }
    }).join("")

    periodMorning.innerHTML = schedulesMorning
    periodAfternoon.innerHTML = schedulesAfternoon
    periodNight.innerHTML = schedulesNight
}