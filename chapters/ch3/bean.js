
function bean(string, letter, n = string.length -1, B = 0){
    
    if (n === -1){
	return  B;
    }else {
	if (string[n] === letter){
	    return bean(string, letter, n-=1, B+=1)
	}else {
	    return bean(string, letter, n-=1, B)
}}}
    

let goblin = 'BBBa';

console.log(bean(goblin, 'B'))
