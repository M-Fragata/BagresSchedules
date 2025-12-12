import { renderHours } from "../scripts/loadHours.js"
import { openingHours } from "../utils/openingHours.js"

const dateInput = document.querySelector('#date')
const form = document.querySelector('form')
const hourContainer = document.querySelector('#hours')


document.addEventListener("DOMContentLoaded", () => {

    dateInput.value = dayjs().format("YYYY-MM-DD")

    renderHours(openingHours)

})

form.addEventListener('submit', (event) => {
    event.preventDefault()

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
         console.log(previouslySelected)
    }
        
    if (hourSelected === previouslySelected) {
        return
    }

    event.target.classList.add('hour-selected')
    
    const hourSchedule = document.querySelector('.hour-selected').value
    


    /*
    if (hourSelected) {
        if (event.target.classList.contains('hour-selected')) {
            event.target.classList.remove('hour-selected')
        } else if (event.target.classList.contains("hour-available")) {
            event.target.classList.add('hour-selected')
        }

    }
        */

})
