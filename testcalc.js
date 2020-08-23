
	
	function display() {
		
		var username = document.getElementById("name").value;
		var pin = document.getElementById("pin").value;
		var income = document.getElementById("income").value;
		var deDuck = document.getElementById("deduction").value;
		
		var lowincome = (income) * .10; 
	
		var incomewded = (income - 6300);
		
		var firstbded = 	((incomewded - 9275)* .15)+927.50;
		
		var secondbded = 	((incomewded - 37650)* .25)+5183.75;
		
		var thirdbrac = 	((incomewded - 91150)* .28)+18558;

		var forthbded = 	((incomewded - 190150)* .33)+46278.75;
		
		var fithbded = 		((incomewded - 413350)* .35)+119934.75;
		
		var sixbded=  		((incomewded - 415050)* .39)+120529.75;

		var taxnoded = (income);
		
		
		document.getElementById("userName").innerHTML = "User Name: " + username;
		document.getElementById("userPin").innerHTML = "Pin: " + pin;
		document.getElementById("userIncome").innerHTML = "Income: " + income;
		document.getElementById("deduction1").innerHTML = "deduction: " + deDuck;
		
		
	
	
  if (income <=0 && income <=9275) {taxDew = (income) * .10;}
  
   document.getElementById("taxDew").innerHTML = "tax due: " + lowincome ;
  


 if (income >9275 && income <= 37650 ) {
   document.getElementById("taxDew").innerHTML = "tax due with deduction: " + firstbded ;
}
if (income >=37651 && income <= 91150 ) {
   document.getElementById("taxDew").innerHTML = "tax due with deduction: " + secondbded ;
}
if (income >=91151 && income <= 190150 ) {
   document.getElementById("taxDew").innerHTML = "tax due with deduction: " + thirdbded ;
}
if (income >=190151 && income <= 413350 ) {
   document.getElementById("taxDew").innerHTML = "tax due with deduction: " + forthbded ;
}
if (income >=413351 && income <= 415050 ) {
   document.getElementById("taxDew").innerHTML = "tax due with deduction: " + fithbded ;
}
if (income >=415051  ) {
   document.getElementById("taxDew").innerHTML = "tax due with deduction: " + sixbded ;
}
	};
	
	
	
	
	function myFunction() {
  var income = document.getElementById("income").value;
  
  if (income >9275 && income <= 37650 ) { 
   document.getElementById("deduction1").innerHTML = "Tax Due no deduction: " + ((income - 9275)* .15)+927.50;
}
if (income >=37651 && income <= 91150 ) {
   document.getElementById("deduction1").innerHTML = "Tax Due no deduction: " + ((income - 37650)* .25)+5183.75;
}
if (income >=91151 && income <= 190150 ) {
  document.getElementById("deduction1").innerHTML = "Tax Due no deduction: " + ((income - 91150)* .28)+18558;
}
if (income >=190151 && income <= 413350 ) {
   document.getElementById("deduction1").innerHTML = "Tax Due no deduction: " + ((income - 190150)* .33)+46278.75;
}
if (income >=413351 && income <= 415050 ) {
   document.getElementById("deduction1").innerHTML = "Tax Due no deduction: " + ((income - 413350)* .35)+119934.75;
}
if (income >=415051  ) {
   document.getElementById("deduction1").innerHTML = "Tax Due no deduction: " + ((income - 415050)* .39)+120529.75;
}

	};
  
  
  
  
  
 



	function refreshPage(){
    window.location.reload();
} 
	