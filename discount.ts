function calculate_discount(price:number, rate:number=0.50)
{
	var discount=price*rate;
	console.log("Discount Amount: " , discount);
	
	document.getElementById("outputid").innerHTML="The Discount of 1000 with a rate of 0.50 is: " + discount;
}