
/*
export function renderHours(hours, targetId) {

    const targetElement = document.querySelector('#hours')

    if (!targetElement) {
        console.error(`Elemento com ID '${targetId}' não encontrado.`);
        return;
    }

    const periods = {
        morning: { title: 'manhã', start: 8, end: 11, hours: [] },
        afternoon: { title: 'tarde', start: 14, end: 17, hours: [] },
        night: { title: 'noite', start: 18, end: 21, hours: [] },
    }

    hours.forEach(hour => {
        const [hourNumber] = hour.split(":");
        const numHour = Number(hourNumber);

        // Determina a qual período o horário pertence
        for (const key in periods) {
            const period = periods[key];
            if (numHour >= period.start && numHour <= period.end) {
                period.hours.push(hour);
                break; // Sai do loop assim que o período for encontrado
            }
        }
    })

    const hoursHtml = Object.keys(periods).map(key => {
        const period = periods[key];

        // Se não houver horários neste período, não renderiza nada
        if (period.hours.length === 0) {
            return '';
        }

        // a. Mapeia os <li> de Horário (Aqui não tem o <li> de Título!)
        const timeSlotsHtml = period.hours.map(hour => {
            return `<li data-period="${key}" value="${hour}" class="hour hour-available">${hour}</li>`;
        }).join('');

        // b. Retorna o Bloco COMPLETO: Título Único + Lista de Horários
        return `
            <div class="period-group">
                <div data-period="${key}" class="hour-period">${period.title}</div>
                <ul class="time-slots-container">
                    ${timeSlotsHtml}
                </ul>
            </div>
        `;
    }).join('');

    targetElement.innerHTML = hoursHtml;
}
*/

export function renderHours(hours, targetId) {

    const targetElement = document.querySelector('#hours')
    const targetMorning = document.querySelector('#morning')

    if (!targetElement) {

        console.error(`Elemento com ID '${targetId}' não encontrado.`);

        return;

    }

    const hoursHtml = hours.map(hour => {

        const [hourNumber,] = hour.split(":")

        if (Number(hourNumber) >= 8 && Number(hourNumber) <= 11) {
            //<li data-period="morning" class="hour-period">Manhã</li>
            return `

            <li data-period="morning" value="${hour}" class="hour hour-available">${hour}</li>

            `
        } else if (Number(hourNumber) <= 17) {
            //<li data-period="afternoon" class="hour-period">Tarde</li>
            return `

            

            <li data-period="afternoon" value="${hour}" class="hour hour-available">${hour}</li>

            `
        } else if (Number(hourNumber) <= 21) {
            //<li data-period="night" class="hour-period">Noite</li>
            return `

            <li data-period="night" value="${hour}" class="hour hour-available">${hour}</li>

            `
        }

    }).join("")

    targetElement.innerHTML = hoursHtml
}