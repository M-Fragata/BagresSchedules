import { renderHours } from "../scripts/loadHours.js"
import { openingHours } from "../utils/openingHours.js"
import { createNewSchedule } from "../scripts/createSchedules.js"
import { getSchedules } from "./getSchedules.js"
import { loadSchedules } from "./loadSchedules.js"
import { cleanInputSchedule } from "./cleanInputSchedule.js"
import { hourIsPast } from "./hourIsPast.js"
import { scheduleAvaliable } from "./scheduleAvaliable.js"
import { deledSchedule } from "./deleteSchedules.js"


const dateInput = document.querySelector('#date')
const form = document.querySelector('form')
const hourContainer = document.querySelector('#hours')
const name = document.querySelector('#client')
const cancel = document.querySelector('.schedule')

document.addEventListener("DOMContentLoaded", async () => {

    dateInput.value = dayjs().format("YYYY-MM-DD")

    const schedules = await getSchedules(dateInput.value)
    const hourCounts = await scheduleAvaliable(schedules)
    const checkAvailability = (slotTime) => hourIsPast(slotTime, hourCounts)

    getSchedules(dateInput.value)

    loadSchedules(schedules)
    scheduleAvaliable(schedules)

    renderHours(openingHours, checkAvailability)

})

dateInput.addEventListener('change', async () => {

    const schedules = await getSchedules(dateInput.value)
    const hourCounts = await scheduleAvaliable(schedules)
    const checkAvailability = (slotTime) => hourIsPast(slotTime, hourCounts)

    renderHours(openingHours, checkAvailability)
    //console.log(schedules)
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
        console.log("Não cancelado")
    }

    if (hourSelected === previouslySelected) {
        return
    }

})

cancel.addEventListener('click', async (event, dateInput) => {
    if (event.target.classList.contains('cancel-icon')) {
       
        deledSchedule(event, dateInput)
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

    await createNewSchedule(scheduleData)

    const schedules = await getSchedules(dateInput.value)
    await loadSchedules(schedules)

    const hourCounts = await scheduleAvaliable(schedules)
    const checkAvailability = (slotTime) => hourIsPast(slotTime, hourCounts)
    renderHours(openingHours, checkAvailability)

    cleanInputSchedule(name, hourSchedule)
})
