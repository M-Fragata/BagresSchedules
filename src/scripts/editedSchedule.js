
export const editedSchedule = (event, name, hours) => {
    const scheduleItemEdited = event.target.closest('li')

    const id = scheduleItemEdited.dataset.id
    //const when = dateInput.value
    const hour = scheduleItemEdited.children[0].innerHTML
    const nameEdited = scheduleItemEdited.children[1].innerHTML
    name.value = nameEdited
    name.focus()

    alert("Tecnologia sendo implementada")
}