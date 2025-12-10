import { renderHours } from "../scripts/loadHours.js"
import { openingHours } from "../utils/openingHours.js"


document.addEventListener("DOMContentLoaded", () => {

    renderHours(openingHours, 'hours-list')

})
