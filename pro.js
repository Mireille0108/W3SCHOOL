let inputName, output, smallDate1, day, session;
let saveTimeTable = []
function initUI() {
    inputName = document.getElementById("name1")
    output = document.getElementById("output")
    smallDate1 = document.getElementById("date")
    session = document.getElementById("period")
    day = document.getElementById("Day")

    output = document.getElementById("output")
    refrTimetable()
}
function collectTimeTable() {  // Will collect and save to local storage

    const timeTable = {
        input: inputName.value,
        smallDate1: smallDate1.value,
        day: day.value,
        session: period.value,
        id: new Date().valueOf()
    }
    saveTimeTable.push(timeTable)
    localStorage.setItem("timeTable", JSON.stringify(saveTimeTable))
    //console.log(saveTimeTable)
}

function displayTimeTable() {
    let txt = localStorage.getItem("timeTable")
    let data = JSON.parse(txt)
    let myTimeTable = data.map(function (b) {
        let myTable = `<tr><td>${b.day}</td><td>${b.session}</td><td>${b.smallDate1}</td><td>${b.input}</td></tr>`
        return myTable

    })
    output.innerHTML = myTimeTable

    return output
}


function refrTimetable() {
    saveTimeTable = JSON.parse(localStorage.getItem("timeTable")) || []
    displayTimeTable()// Does not show items in array but leaves data of former array


}

/*function buildTable (){

for (let i = 0; i < saveTimeTable.length; i++) {
    let row = `<tr><td>${saveTimeTable[i].day}</td>
    <td>${saveTimeTable[i].session}</td>
    <td>${saveTimeTable[i].smallDate1}</td><td>${saveTimeTable[i].input}</td></tr>`
    output.innerHTML +=row
    
}
}*/



