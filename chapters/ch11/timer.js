let start = Date.now();

setTimeout(() => {
    console.log('timeout ran at:', Date.now() - start);
}, 10);

while (Date.now < start + 10) {};
