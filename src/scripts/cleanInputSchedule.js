
export const cleanInputSchedule = (name, hourSchedule) => {
    name.value = ''
    hourSchedule.classList.remove('hour-selected')
}