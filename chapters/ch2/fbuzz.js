

const fbuzz = function(){
    for (let a = 1; a <= 100; a += 1){
	
	if (a % 2 == 0 && a % 3 == 0){
	    console.log('Fizz Buzz');
	    
	}else if (a % 2 == 0){
	    console.log('Fizz');
	    
	}else if (a % 3 == 0){
	    console.log('Buzz');
	    
	}else {
	    console.log(a);
	}
    }
}

	    
fbuzz();




