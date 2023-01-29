function isEven(number){
    if (number === 0) {
	return true;
    }else if (number == 1){
	return false;
    }else if (number < 0){
	return isEven(number - -2);
    }else {
	return isEven(number -2);
    };
}

function countB(string){
    let count = null;
    for (element of string){
	if (element === 'B'){count += 1};
    }
    
    return count;
}

function countChar(string, character){
    let count = null;
    for (element of string){
	if (element === character){count += 1};
    }

    return count;
}
