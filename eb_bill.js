let reading_value = 610;               // you should enter your reading value in here
var amount, addtional, sGst, cGst, Total;     // variables
function calculate(x){                 // in this function is made for amount to calculate based on readings
    if(x <= 150){
        amount = x * 1.5
        console.log(amount)   
    }
    else if(x <= 200){
        addtional = x - 150
        amount = addtional*2
        console.log(amount)
    }
    else if(x <= 300){
        addtional = x - 200
        amount =  addtional*3 + 100
        console.log(amount)
    }
    else if(x <= 600){
        addtional = x - 300
        amount = addtional*4.5 + 400 
        console.log(amount)
    }
    else{
        addtional = x - 600
        amount = addtional*8 + 1750
        console.log(amount)
    }
}
function gst(x){                     //this is the function where gst has been calculated 
    cGst = amount*.03
    sGst = amount*.03
    //console.log(cGst + " " + sGst)
}
calculate(reading_value);
gst(amount);
if (reading_value <= 150){             //government supsidairy for 150 units
    amount = 0
}
Total = amount + sGst + cGst;
function printout(){                          //this function is made for printout on console includes gst & total amount u have pay
    console.log("Amount Rs " + amount)
    console.log("sGSt Rs " + sGst)
    console.log("cGSt Rs " +  cGst )
    console.log("Total Rs " + Total)
}
printout();
