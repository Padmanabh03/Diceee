function myFunction() 
{
	var num = Math.ceil(Math.random()*6);
	var diceImage = "dice"+num+".png";

	var num1 = Math.ceil(Math.random()*6);
	var diceImage1 = "dice"+num1+".png";



	var image1=document.querySelectorAll("img")[0].setAttribute("src",diceImage);
	//image1;

	var image2=document.querySelectorAll("img")[1].setAttribute("src",diceImage1);
	//image2;

	if(num > num1)
	{
		document.querySelector('h1').innerHTML = "🏆 Player 1 wins!";
	}
	else if(num < num1)
	{
		document.querySelector('h1').innerHTML = "Player 2 wins! 🏆";
	}
	else
	{
		document.querySelector('h1').innerHTML = "Draw!";
	}

}
