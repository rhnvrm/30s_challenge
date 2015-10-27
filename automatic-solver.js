var hackIt = function(){
  var a = $('.challenge ').not('.finished').children('.move');
  var start = parseInt($('.challenge ').not('.finished').children('.start').children('.text')[0].innerHTML)
  for(var i = 0; i < a.length; i++){
    var input = /<span .*>(.*)?<\/span>/g.exec(a[i].innerHTML)[1];
    if(input === "multiply it by itself"){
    	start *= start;
    }
    else if(input === "multiply it by itself twice"){
      start = start*start*start;
    }
    else if(input === "halve it"){
    	start /= 2;
    }
    else if(input === "double it"){
    	start *= 2;
    }
    else if(input.search("of this") != -1){
      if(input.search("%") != -1){
        var num = parseInt(input.substring(0,input.search("%")));
        start = start * num;
        start = start / 100;
      }
      else{
        var input = a[i].getElementsByClassName("text")[0].getAttribute("aria-label");
        var num = parseInt(input[0]);
        var den = parseInt(input[4]);
        start = start * num;
        start = start / den;
      }
    }
    else{
    	var num = input.substring(1,input.length);
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
}
var hackRate = 1; // In Milliseconds
setInterval(function(){hackIt();},hackRate);