let value = "0"
let previousOperator;
let intermediare = "0";
let total  = "0";
function init()
{
    document.querySelector(".input-data").value = "0";
    document.querySelector(".main-box").addEventListener("click",
        function (event){

            buttonclick(event.target.innerText);

        }
    );
}
init();

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


