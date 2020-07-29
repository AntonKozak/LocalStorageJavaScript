var data;
var currentID;
var selectedItem;


async function start() {
  data = await fetch("data.json")
    .then((response) => response.json())
    .catch((error) => document.write(error));

    
  var html = `<select name="" id="house" >
              <option value="0">Välj hus</option>`;

  for (var i = 0; i < data.length; i++) {
    html += `
            <option value=${data[i].id}>${data[i].name}</option>            
    `;
  }

  html += `</select>`;

  document.getElementById("select").innerHTML = html;
}

start();

function betweenPlants() {
  document.getElementById('AmountPlantsOnTable').value = '0'
  document.getElementById('PlantsPerMetr').value = '0'

  currentID = document.getElementById("house").value;

  selectedItem = data.find(item => item.id == currentID);

  number = document.getElementById("UsersBetweenPlantsInLine").value;

  if (number != "0") {
    let numberValue 
    numberValue = parseFloat(number)
    
    document.getElementById("Cm").innerHTML=numberValue
    document.getElementById("inLine").innerHTML=(selectedItem.width) / numberValue
    document.getElementById("onTable").innerHTML=((selectedItem.width) / numberValue) * selectedItem.lines
    document.getElementById("metrKvadratnui").innerHTML=(((((selectedItem.width) / numberValue) * selectedItem.lines) / selectedItem.width)/selectedItem.length)*10000
    document.getElementById("box125").innerHTML=(((selectedItem.width) / numberValue)/12)*5
    document.getElementById("box124").innerHTML=(((selectedItem.width) / numberValue)/12)*4
    document.getElementById("box145").innerHTML=(((selectedItem.width) / numberValue)/14)*5
    document.getElementById("box144").innerHTML=(((selectedItem.width) / numberValue)/14)*4
    document.getElementById("totalBox12").innerHTML=((((selectedItem.width) / numberValue)/12)*4)+((((selectedItem.width) / numberValue)/12)*5)
    document.getElementById("totalBox14").innerHTML=((((selectedItem.width) / numberValue)/14)*4)+((((selectedItem.width) / numberValue)/14)*5)
  }
tableAmount()
}


function amountPlantsOnTable() {
  document.getElementById('UsersBetweenPlantsInLine').value = '0'
  document.getElementById('PlantsPerMetr').value = '0'

  currentID = document.getElementById("house").value;

  selectedItem = data.find(item => item.id == currentID);

  userNumber = document.getElementById("AmountPlantsOnTable").value;

  if (userNumber != "0") {

    let numberValue 
    numberValue = parseFloat(userNumber)
    
    document.getElementById("Cm").innerHTML= selectedItem.width / (numberValue/selectedItem.lines)
    document.getElementById("inLine").innerHTML=numberValue / selectedItem.lines  
    document.getElementById("onTable").innerHTML=numberValue 
    document.getElementById("metrKvadratnui").innerHTML=((numberValue/ selectedItem.width)/selectedItem.length)*10000
    document.getElementById("box125").innerHTML=((numberValue/selectedItem.lines)/12)*5
    document.getElementById("box124").innerHTML=((numberValue/selectedItem.lines)/12)*4
    document.getElementById("box145").innerHTML=((numberValue/selectedItem.lines)/14)*5
    document.getElementById("box144").innerHTML=((numberValue/selectedItem.lines)/14)*4
    document.getElementById("totalBox12").innerHTML=(((numberValue/selectedItem.lines)/12)*5)+(((numberValue/selectedItem.lines)/12)*4)
    document.getElementById("totalBox14").innerHTML=(((numberValue/selectedItem.lines)/14)*5)+(((numberValue/selectedItem.lines)/14)*4)
  }
  tableAmount()
}

function plantsPerMetr() {
  document.getElementById('UsersBetweenPlantsInLine').value = '0'
  document.getElementById('AmountPlantsOnTable').value = '0'

  currentID = document.getElementById("house").value;

  selectedItem = data.find(item => item.id == currentID);

  inputNumber = document.getElementById("PlantsPerMetr").value;

  if (inputNumber != "0") {
    let numberValue 
    numberValue = parseFloat(inputNumber)
    
    document.getElementById("Cm").innerHTML= selectedItem.width / ((numberValue * ((selectedItem.width*selectedItem.length)/10000))/selectedItem.lines)
    document.getElementById("inLine").innerHTML=(numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines  
    document.getElementById("onTable").innerHTML=numberValue * ((selectedItem.width*selectedItem.length)/10000) 
    document.getElementById("metrKvadratnui").innerHTML=numberValue
    document.getElementById("box125").innerHTML=(((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/12)*5
    document.getElementById("box124").innerHTML=(((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/12)*4
    document.getElementById("box145").innerHTML=(((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/14)*5
    document.getElementById("box144").innerHTML=(((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/14)*4
    document.getElementById("totalBox12").innerHTML=((((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/12)*5)+((((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/12)*4)
    document.getElementById("totalBox14").innerHTML=((((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/14)*5)+((((numberValue * ((selectedItem.width*selectedItem.length)/10000)) / selectedItem.lines )/14)*4)
  }
  tableAmount()
}

function tableAmount() {

 table = document.getElementById("TableAmount").value;
 number = document.getElementById("UsersBetweenPlantsInLine").value;
 userNumber = document.getElementById("AmountPlantsOnTable").value;
 inputNumber = document.getElementById("PlantsPerMetr").value;
 

  if (number != "0") {
    let tableValue 
    tableValue = parseFloat(table)

      currentID = document.getElementById("house").value;

    selectedItem = data.find(item => item.id == currentID);

    number = document.getElementById("UsersBetweenPlantsInLine").value;

    let numberValue 
    numberValue = parseFloat(number)

    document.getElementById("PlantAmount").innerHTML= tableValue * ((selectedItem.width) / numberValue) * selectedItem.lines
    
  }else 
  if (userNumber != "0") {
    let tableValue 
    tableValue = parseFloat(table)

    currentID = document.getElementById("house").value;

    selectedItem = data.find(item => item.id == currentID)

    userNumber = document.getElementById("AmountPlantsOnTable").value;

    let numberValue 

    numberValue = parseFloat(userNumber)

    document.getElementById("PlantAmount").innerHTML= numberValue * tableValue

  }else 
  if (inputNumber != "0") {
    let tableValue 
    tableValue = parseFloat(table)

    currentID = document.getElementById("house").value;

    selectedItem = data.find(item => item.id == currentID)

    inputNumber = document.getElementById("PlantsPerMetr").value;
    
    let numberValue 
    numberValue = parseFloat(inputNumber)
  
    document.getElementById("PlantAmount").innerHTML= numberValue * ((selectedItem.width*selectedItem.length)/10000) * tableValue
  }
  }
