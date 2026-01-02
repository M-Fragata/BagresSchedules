
const dateInput = document.querySelector('#date')
const dateIsDisponivel = document.querySelector('#isDisponivel')

export const hourIsPast = (slotTime, hourCounts) => {

    const dataSelecionada = dayjs(dateInput.value);
    const diaSemana = dataSelecionada.day();

    // Se NÃO for segunda (1) E NÃO for quarta (3), bloqueia tudo
    if (diaSemana !== 1 && diaSemana !== 3) {
        dateIsDisponivel.innerHTML = `Data <strong style="background: #f30202b7; border-radius: 10px; padding: 1px 10px;">INDISPONÍVEL</strong>`
        return true
    }

    dateIsDisponivel.innerHTML = `Data <strong style="background: #02f352b7; border-radius: 10px; padding: 1px 10px;">DISPONÍVEL</strong>`

    const count = hourCounts[slotTime] || 0
    const maxSchedules = 4

    if (count >= maxSchedules) {
        console.log(`[BLOQUEIO] Horário ${slotTime} cheio.`);
        return true;
    }

    if (dayjs(dateInput.value).isBefore(dayjs(), 'day')) {

        return true
    }

    if (dayjs(dateInput.value).isSame(dayjs(), 'day')) {
        const slotMoment = dayjs(`${dateInput.value}${slotTime}`)

        return slotMoment.isBefore(dayjs())
    }

    return false
}



