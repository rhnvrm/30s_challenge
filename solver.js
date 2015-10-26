var a = $('.challenge ').not('.finished').children('.move');
var start = parseInt($('.challenge ').not('.finished').children('.start').children('.text')[0].innerHTML)
for(var i = 0; i < a.length; i++){
  var input = /<span .*>(.*)?<\/span>/g.exec(a[i].innerHTML)[1];
  if(input === "multiply it by itself"){
  	start *= start;
  }
  else if(input === "halve it"){
  	start /= 2;
  }
  else if(input === "double it"){
  	start *= 2;
  }
  else if(input.search("of this") != -1){
    var input = a[i].getElementsByClassName("text")[0].getAttribute("aria-label");
    var num = parseInt(input[0]);
    var den = parseInt(input[4]);
    start = start * num;
    start = start / den;
  }
  else{
  	num = input.substring(1,input.length)
  	if(input[0] === "+"){
  		start += parseInt(num);
  	}
  	else if(input[0] === "-"){
  		start -= parseInt(num);
  	}
  	else if(input[0] === "÷"){
  		start /= parseInt(num);
  	}  	
  	else if(input[0] === "×"){
  		start *= parseInt(num);
  	}  	
  }
}
game.current_challenge.check(start)