import { renderHours } from "../scripts/loadHours.js"
import { openingHours } from "../utils/openingHours.js"
import { createNewSchedule } from "../scripts/createSchedules.js"

const dateInput = document.querySelector('#date')
const form = document.querySelector('form')
const hourContainer = document.querySelector('#hours')
const name = document.querySelector('#client')


document.addEventListener("DOMContentLoaded", () => {

    dateInput.value = dayjs().format("YYYY-MM-DD")

    renderHours(openingHours)

})

dateInput.addEventListener('change', () => {

    const isBefore = dayjs().isBefore(dayjs(dateInput.value))

    if (!isBefore) {
        window.alert("Data passada")
    }

    renderHours(openingHours, isBefore)

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

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const hourSchedule = document.querySelector('.hour-selected')

    const scheduleData = {
        when: dateInput.value,
        hour: hourSchedule.value,
        name: name.value
    }

    console.log(hourSchedule.value)

    createNewSchedule(scheduleData)

})
