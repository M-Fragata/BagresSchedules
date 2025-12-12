
export function renderHours(hours, isBefore) {

    const targetElement = document.querySelector('#hours')
    const targetMorning = document.querySelector('#morning')
    const targetAfternoon = document.querySelector('#afternoon')
    const targetNight = document.querySelector('#night')


    const hoursMorning = hours.map(hour => {

        const [hourNumber] = hour.split(":")

        if (Number(hourNumber) >= 8 && Number(hourNumber) <= 11) {

            if (isBefore) {
                return `
            <div class="hour-schedule">
            <li data-period="morning" value="${hour}" class="hour hour-available">${hour}</li>
            </div>
            `
            } else {
                return `
            <div class="hour-schedule">
            <li data-period="morning" value="${hour}" class="hour hour-unavailable">${hour}</li>
            </div>
            `
            }
        }
    }).join("")

    const hoursAfternoon = hours.map(hour => {

        const [hourNumber] = hour.split(":")

        if (Number(hourNumber) > 11 && Number(hourNumber) <= 17) {
            if (isBefore) {
                return `
            <div class="hour-schedule">
            <li data-period="afternoon" value="${hour}" class="hour hour-available">${hour}</li>
            </div>
            `
            } else {
                return `
            <div class="hour-schedule">
            <li data-period="afternoon" value="${hour}" class="hour hour-unavailable">${hour}</li>
            </div>
            `
            }
            
        }
    }).join("")

    const hoursNight = hours.map(hour => {

        const [hourNumber] = hour.split(":")

        if (Number(hourNumber) > 17 && Number(hourNumber) <= 21) {
            
            if (isBefore) {
                return `
            <div class="hour-schedule">
            <li data-period="night" value="${hour}" class="hour hour-available" >${hour}</li>
            </div>
            `
            } else {
                return `
            <div class="hour-schedule">
            <li data-period="night" value="${hour}" class="hour hour-unavailable">${hour}</li>
            </div>
            `
            }
            
        }
    }).join("")

    targetMorning.innerHTML = hoursMorning
    targetAfternoon.innerHTML = hoursAfternoon
    targetNight.innerHTML = hoursNight
}