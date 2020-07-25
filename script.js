function addDisplay(valor) {
    document.getElementById(`dev-content${valor[1]}`).style.display = 'flex'
    document.getElementById(`${valor[0]}`).style.display = 'none'
    document.getElementById(`btnRemove${valor[1]}`).style.display = 'inline'
}

function removeDisplay(valor) {
    document.getElementById(`dev-content${valor[1]}`).style.display = 'none'
    document.getElementById(`${valor[0]}`).style.display = 'none'
    document.getElementById(`btnAdd${valor[1]}`).style.display = 'inline'
}