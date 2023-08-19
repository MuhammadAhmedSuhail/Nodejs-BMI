const imp = document.getElementById("imperical");
imp.addEventListener("click", setImperical);

const mtc = document.getElementById("metric");
mtc.addEventListener("click", setMetric);

function clearInput()
{
    var weight_field = document.getElementById("input-weight")
    weight_field.value = ""

    var height_field = document.getElementById("input-height")
    height_field.value = ""

    var textarea = document.getElementById("result")
    textarea.innerText = ""

    var desc = document.getElementsByClassName("description")[0]
    desc.innerText = ""
}

function setImperical() 
{
    if (imp.className.includes("active") === false)
    {
        mtc.className = mtc.className.replace(" active","")
        imp.className = imp.className + " active"
    
        var weight = document.getElementById("weight-unit")
        weight.innerText = "lb"

        var cnvtfeet = document.getElementById("height-tag")
        cnvtfeet.innerText = "ft"

        var input = document.createElement("input")
        input.type = "number"
        input.className = "form-control"
        input.id = "input-inch"

        var span = document.createElement("span")
        span.className = "input-group-text"
        span.id = "unit-inch"
        span.innerText = "in"
        
        const height = document.getElementById("height")
        height.appendChild(input)
        height.appendChild(span)

        clearInput()
    }
}


function setMetric() 
{
    if (mtc.className.includes("active") === false)
    {
        imp.className = imp.className.replace(" active","")
        mtc.className = mtc.className + " active"

        var weight = document.getElementById("weight-unit")
        weight.innerText = "kg"

        var cnvtfeet = document.getElementById("height-tag")
        cnvtfeet.innerText = "cm"

        const input = document.getElementById("input-inch");
        input.remove();

        const span = document.getElementById("unit-inch");
        span.remove();

        clearInput()
    }
}

const btn = document.getElementById("cal");
btn.addEventListener("click", calBMI);

function calBMI()
{
    var desc = document.getElementsByClassName("description")[0]

    if (desc.innerText != "")
    {
        desc.innerText = ""
    }

    if (imp.className.includes("active") === true)      //Imperical Section
    {
        var weight = document.getElementById("input-weight").value
        var feet = document.getElementById("input-height").value * 12 //Converts feet to inches
        var inch = document.getElementById("input-inch").value

        var final_inch = parseInt(inch) + parseInt(feet)
        
        var bmi = (weight/Math.pow(final_inch,2)) * 703

        bmi = bmi.toFixed(1)

        var textarea = document.getElementById("result")
        textarea.innerText = bmi

    }
    else if (mtc.className.includes("active") === true) //Metric Section
    {
        var weight = parseInt(document.getElementById("input-weight").value)
        var cm = parseInt(document.getElementById("input-height").value) / 100 //Converted to meter

        var bmi = weight/Math.pow(cm,2)

        bmi = bmi.toFixed(1)

        var textarea = document.getElementById("result")
        textarea.innerText = bmi
    }

    addText(bmi)
}

function addText(val)
{
    var desc = document.getElementsByClassName("description")[0]
    var p = document.createElement("p")

    if (val < 16)
    {
        p.className = "text-danger"
        p.innerText = "Severe Thinness"
    }
    else if (val >= 16 && val < 17)
    {
        p.className = "text-warning"
        p.innerText = "Moderate Thinness"
    }
    else if (val >= 17 && val < 18.5)
    {
        p.className = "text-warning"
        p.innerText = "Mild Thinness"
    }
    else if (val >= 18.5 && val < 25)
    {
        p.className = "text-success"
        p.innerText = "Normal Weight"
    }
    else if (val >= 25 && val < 30)
    {   
        p.className = "text-warning"
        p.innerText = "Overweight"
    }
    else if (val >= 30 && val < 35)
    {
        p.className = "text-danger"
        p.innerText = "Obese Class I"
    }
    else if (val >= 35 && val < 40)
    {
        p.className = "text-danger"
        p.innerText = "Obese Class II"
    }
    else if (val >= 40)
    {
        p.className = "text-danger"
        p.innerText = "Obese Class III"
    }

    desc.appendChild(p)
}