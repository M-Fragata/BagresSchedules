const hourContainer = document.querySelector('#hours')

export function renderHours(hours, hourIsPastFunctionisBefore) {

    const hoursMorning = hours.map(hour => {

        const hourNumber = Number(hour.replace(":", ""))

        const isBlocked = hourIsPastFunctionisBefore(hour)

        const hourClass = isBlocked ? 'hour-unavailable' : 'hour-available'

        if (Number(hourNumber) >= 800 && Number(hourNumber) <= 1100) {
            return `
            <div class="hour-schedule">
            <li data-period="morning" value="${hour}" class="hour ${hourClass}">${hour}</li>
            </div>
            `
        }
    }).join("")

    const hoursAfternoon = hours.map(hour => {

        const hourNumber = Number(hour.replace(":", ""))

        const isBlocked = hourIsPastFunctionisBefore(hour)

        const hourClass = isBlocked ? 'hour-unavailable' : 'hour-available'

        if (Number(hourNumber) > 1100 && Number(hourNumber) <= 1700) {

            return `
            <div class="hour-schedule">
            <li data-period="afternoon" value="${hour}" class="hour ${hourClass}">${hour}</li>
            </div>
            `
        }
    }).join("")

    const hoursNight = hours.map(hour => {

        const hourNumber = Number(hour.replace(":", ""))

        const isBlocked = hourIsPastFunctionisBefore(hour)

        const hourClass = isBlocked ? 'hour-unavailable' : 'hour-available'

        if (Number(hourNumber) > 1700 && Number(hourNumber) <= 2100) {

            return `
            <div class="hour-schedule">
            <li data-period="night" value="${hour}" class="hour ${hourClass}">${hour}</li>
            </div>
            `
        }
    }).join("")


    return hourContainer.innerHTML = `
    <div>
        <div>
            <span class="label">Horários</span>
        </div>
        <div class="hours">
            <div>
            <li data-period="morning" class="hour-period"><p>Manhã</p></li>
            <ul id="morning">
                ${hoursMorning}
            </ul>
            </div>

            <div>
            <li data-period="afternoon" class="hour-period">Tarde</li>
            <ul id="afternoon">
                ${hoursAfternoon}
            </ul>
            </div>

            <div>
            <li data-period="night" class="hour-period">Noite</li>
            <ul id="night">
                ${hoursNight}
            </ul>
            </div>
        </div>
    </div>
    `
}