import { renderHours } from "../scripts/loadHours.js"
import { openingHours } from "../utils/openingHours.js"
import { createNewSchedule } from "../scripts/createSchedules.js"
import { getSchedules } from "./getSchedules.js"
import { loadSchedules } from "./loadSchedules.js"
import { cleanInputSchedule } from "./cleanInputSchedule.js"

const dateInput = document.querySelector('#date')
const form = document.querySelector('form')
const hourContainer = document.querySelector('#hours')
const name = document.querySelector('#client')


document.addEventListener("DOMContentLoaded", async () => {

    dateInput.value = dayjs().format("YYYY-MM-DD")

    renderHours(openingHours)

    getSchedules(dateInput.value)

    const schedules = await getSchedules(dateInput.value)
    loadSchedules(schedules)
})

dateInput.addEventListener('change', async () => {

    const isBefore = dayjs().isBefore(dayjs(dateInput.value))

    if (!isBefore) {
        window.alert("Data passada")
    }

    renderHours(openingHours, isBefore)

    const schedules = await getSchedules(dateInput.value)
    loadSchedules(schedules)

})


hourContainer.addEventListener('click', (event) => {
    const hourSelected = event.target.classList.contains('hour')
    const previouslySelected = hourContainer.querySelector('.hour-selected')

    if (hourSelected && event.target.classList.contains('hour-available')) {
        if (previouslySelected) {
            previouslySelected.classList.remove('hour-selected')
        }
        event.target.classList.add('hour-selected')
    }

    if (hourSelected === previouslySelected) {
        return
    }

})

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const hourSchedule = document.querySelector('.hour-selected')
    const hourScheduleString = hourSchedule.textContent.trim()

    const scheduleData = {
        when: dateInput.value,
        hour: hourScheduleString,
        name: name.value
    }

    createNewSchedule(scheduleData)

    const schedules = await getSchedules(dateInput.value)
    await loadSchedules(schedules)

    cleanInputSchedule(name, hourSchedule)
})
