let value = "0"
let previousOperator;
let intermediare = "0";
//indicate the num of rows of our calculator
let numOfRows = 5;
//myObj store the JSON object with calculator button value;
let myObj;
//those variable will indicate the order in wich the rows come (j=3 => indicate the thirds row with 3 buttons)
let j=0,m=0;

//load a JSON using an AJAX request
function loadJSON(callback,fileName) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', fileName, true);
    xobj.onreadystatechange =  function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
                callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}

//get the next element in an array
function index(array)
{
    let i = 0;
        const increment = {
            next:
                function()
                {
                    let result = array[i];
                    i++;
                    return result;
                }
                            }
    return increment;
}

//create the necessary divs = numOfRows
function createData(divs, mainBox)
{
    //create a new div foR EACH ROW OF BUTTON
    for(let i = 0;i<numOfRows;++i)
    {
        divs [i] = document.createElement("div");
        divs[i].className = "div-row";
        mainBox.appendChild(divs[i]);
    }
}



function init()
{

  loadJSON(   (result)=>
   {
       let divs = []
       let mainBox = document.querySelector(".main-box")
       myObj = Object.assign({},result);
       const  arrIterator = index(myObj.order);
       createData(divs, mainBox);
       divs.forEach(function (value)
       {
           //need to create a three button per row;
           if(arrIterator.next()===3) {
               //j will indicate which 3 button row is needed to extract from myObj;
               j++;
               for(let i = 0;i<3;++i) {
                   let button = document.createElement("button");
                   button.className = "button-3";
                   let val = String(j);
                   button.value = myObj["button_3"][String("row"+j)][i];
                   button.textContent = String(myObj["button_3"][String("row"+j)][i]);
                   value.appendChild(button);
               }
           }
           else
           {
                m++;
               for(let i = 0;i<4;++i) {
                   let button = document.createElement("button");
                   button.className = "button-4";
                   button.value = myObj["button_4"][String("row"+m)][i];
                   button.textContent = String(myObj["button_4"][String("row"+m)][i]);
                   value.appendChild(button);
               }
           }


       })
   }, '..\\Calculator_2\\buttons.json');
    document.querySelector(".input-data").value = "0";
    document.querySelector(".main-box").addEventListener("click",
        function (event){

            buttonclick(event.target.innerText);

        }
    );
}


function buttonclick(value)
{
    //evaluate if input is not a number

    if (isNaN(parseInt(value)))
    {

        isCharacter(value);

    }
    else
    {

        isNumber(value);

    }

}

function isNumber(values)
{

    if(document.querySelector(".input-data").value !== "0" ) {
        document.querySelector(".input-data").value += values;
    }
    else
    {
        if (values !== "0")
        {
            document.querySelector(".input-data").value = values;
        }
    }
    value = document.querySelector(".input-data").value;
}

function isCharacter(values)
{
    switch (values) {
        case "<-":
            if (intermediare !== "0")
            {
                console.log("Aici")
                intermediare = "0"
            }
            value = document.querySelector(".input-data").value;
            if (value.length > 1) {
                value = value.substring(0, value.length - 1);
                document.querySelector(".input-data").value =
                    value;
            } else {
                document.querySelector(".input-data").value =
                    "0"
            }

            break;
        case "C":
            intermediare = "0"
            value = "0";
            document.querySelector(".input-data").value =
                value;
            break;
        case "=":

            if (value === "0") {
                alert("Introdu ceva de calculat");
            } else if (intermediare === "0") {

                    alert("Fa o operatie ")
            }
            else
            {
                calculateData(values);
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            calculateData(values);
            break;
    }

}

function calculateData(values)
{

    document.querySelector(".input-data").value = "0";
    if (intermediare === "0") {
        intermediare = value;
        value = "0";

    }

    if(value ==="0")
    {
        previousOperator = values;
    }
    else {

        value = parseInt(value)
        intermediare = parseInt(intermediare)
        switch (previousOperator) {
            case "*":
                intermediare = value * intermediare;
                break;
            case "+":
                intermediare = value + intermediare;
                break;
            case "/":
                if (value !== 0)
                {
                    intermediare = intermediare/value;
                }
                break;
            case "-":
                intermediare = intermediare - value;
                break;
            default :
                console.log("Aici")

                break;

        }
        document.querySelector(".input-data").value = intermediare;
        value = "0"
    }

}


