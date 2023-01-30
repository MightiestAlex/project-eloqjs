

function take(){
    console.log(this.species);
}

let goblin = {
    species: 'Goblin',
    take,
}

goblin.take();

take.call({species: 'Toad'});




