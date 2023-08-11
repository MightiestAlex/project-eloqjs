function recur(a){

    // if (a == 1){return 'odd'}
    // else if (a == 0){return 'even'}
    // else{
    // 	return recur(a - 2)
    // }

    //spicier
    return a > 1 ? recur(a - 2) :
	a == 1 ? 'odd' : 'even';
}

function tester(val = 1){
    
	while (true){
	    console.log(val, recur(val));
	    val ++;
	}
}

    tester();
