var superscripts = "⁰¹²³⁴⁵⁶⁷⁸⁹";
var subscripts = "₀₁₂₃₄₅₆₇₈₉";


var a = $('.challenge ').not('.finished').children('.move');
var start = parseInt($('.challenge ').not('.finished').children('.start').children('.text')[0].innerHTML)
for(i = 0; i < a.length; i++){
  input = /<span .*>(.*)?<\/span>/g.exec(a[i].innerHTML)[1];

  if(input === "multiply it by itself"){
  	start *= start;
  }

  else if(input === "halve it"){
  	start /= 2;
  }

  else if(input === "double it"){
  	start *= 2;
  }

  else{
  	num = input.substring(1,input.length)
  	if(input[0] === "+"){
  		start += parseInt(num);
  		//console.log("+");
  	}
  	else if(input[0] === "-"){
  		start -= parseInt(num);
  		//console.log("-");
  	}
  	else if(input[0] === "÷"){
  		start /= parseInt(num);
  		//console.log("/");
  	}  	
  	else if(input[0] === "×"){
  		start *= parseInt(num);
  		//console.log("*");
  	}  	
  }
  //console.log(start);
}

console.log(start);

game.current_challenge.check(start)

