function displayDate() { 
    // Get the current date and time 
    const currentDate = new Date().toLocaleString(); 

    // Display it in the textbox 
    document.getElementById("dateTextbox").value = currentDate; 

}

function factorial(num){
    if(num < 0) {
        return "Factorial not defined for negative numbers";
    }
    let result = 1;
    for (let i=1; i<=num; i++){
        result *=i;
    }
    return result;
}
n = parseInt(prompt("Enter a Number to find its factorial: "));
factorialResult = factorial(n);
alert("The factorial of "+ n +" is: " + factorialResult)

var n = prompt ("Enter Positive Number for N: ","");
if (!isNaN(n)) {
    var table="";
    var number = "";
    for (i =1; i <=10; i++){
        number = n*i;
        table += n+"*"+i+"="+number+"\n";
    }
    alert(table);
}
else{
    alert("Enter Positive Value:");
    n = prompt("Enter Positive Value for n: ","");
}
document.write(n+ "table values displayed using alert..<br/>");

function addsum() {
    alert("Enter the numbers to be added");
    var keepgoing = true;
    var sumoffnums = 0;
    while(keepgoing) {
        sumoffnums = sumoffnums + (parseInt(prompt("what's the next numer to add? ","")));
        keepgoing = confirm("Add another Number?");
    }
    alert("The sum of all your numbers is" + sumoffnums);
}