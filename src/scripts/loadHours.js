//import { renderSkeletonHours } from "./renderSkeletonHours.js"

export function renderHours(hours, hourIsPastFunctionisBefore) {

    const targetMorning = document.querySelector('#morning')
    const targetAfternoon = document.querySelector('#afternoon')
    const targetNight = document.querySelector('#night')


    const hoursMorning = hours.map(hour => {

        const [hourNumber] = hour.split(":")

        const isBlocked = hourIsPastFunctionisBefore(hour)

        const hourClass = isBlocked ? 'hour-unavailable' : 'hour-available'

        if (Number(hourNumber) >= 8 && Number(hourNumber) <= 11) {
                return `
            <div class="hour-schedule">
            <li data-period="morning" value="${hour}" class="hour ${hourClass}">${hour}</li>
            </div>
            `     
        }
    }).join("")

    const hoursAfternoon = hours.map(hour => {

        const [hourNumber] = hour.split(":")

        const isBlocked = hourIsPastFunctionisBefore(hour)

        const hourClass = isBlocked ? 'hour-unavailable' : 'hour-available'

        if (Number(hourNumber) > 11 && Number(hourNumber) <= 17) {
            
                return `
            <div class="hour-schedule">
            <li data-period="afternoon" value="${hour}" class="hour ${hourClass}">${hour}</li>
            </div>
            `          
        }
    }).join("")

    const hoursNight = hours.map(hour => {

        const [hourNumber] = hour.split(":")

        const isBlocked = hourIsPastFunctionisBefore(hour)

        const hourClass = isBlocked ? 'hour-unavailable' : 'hour-available'

        if (Number(hourNumber) > 17 && Number(hourNumber) <= 21) {
            
                return `
            <div class="hour-schedule">
            <li data-period="night" value="${hour}" class="hour ${hourClass}">${hour}</li>
            </div>
            `          
        }
    }).join("")

    targetMorning.innerHTML = hoursMorning
    targetAfternoon.innerHTML = hoursAfternoon
    targetNight.innerHTML = hoursNight

    //renderSkeletonHours(hiden)
}