const inpKey = document.getElementById('inpKey')
const inpValue = document.getElementById('inpValue')
const btnInsert = document.getElementById('btnInsert')
const lsOutput = document.getElementById('lsOutput')

btnInsert.onclick = function () {
    const key = inpKey.value
    const value = inpValue.value

    if (key && value) {
        localStorage.setItem(key,value)
        location.reload()
    }
}

for (let i = 0; i < localStorage.length; i++) {
const key = localStorage.key(i)
const value = localStorage.getItem(key)
console.log(key)
console.log (value)
lsOutput.innerHTML += `${key}: ${value} <br />`
}

clear.onclick = function() {
    localStorage.clear()
    location.reload()
}

