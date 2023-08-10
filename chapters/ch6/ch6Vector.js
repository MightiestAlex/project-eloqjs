class Vector{
    constructor(x, y){
	this.x = x
	this.y = y;
    }

    sum(newVector){
        return  new Vector(newVector.x + this.x, newVector.y + this.y);
    }
    minus(newVector){
        return  new Vector(this.x - newVector.x, this.y - newVector.y);
    }
    distanceFromOrigin(vector){
        return Math.round(Math.sqrt(this.x ** 2 + this.y ** 2));
    }
}