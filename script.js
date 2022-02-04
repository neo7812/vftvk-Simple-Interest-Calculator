function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var presentdate = new Date();
    var presentyear = parseInt(presentdate.getFullYear()) + parseInt(years);
    
    var printresult = document.getElementById("result");
    printresult.innerHTML = "If you deposit " + "<span class='yellowcoloring'>" + principal + "</span>"  +
                              ", <br> at an interest rate of "+ "<span class='yellowcoloring'>" + rate + "%"+ 
                              "</span>." + "<br> You will receive an amount of " + "<span class='yellowcoloring'>" + interest + 
                              "</span>" + ", <br> in the year " + "<span class='yellowcoloring'>" + presentyear + "</span>";
}


function SliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("printrate");
    output.innerHTML = slider.value;

    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}
        

        