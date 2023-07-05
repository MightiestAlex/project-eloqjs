for (let a = 1; a <= 100; a ++){

    if (a % 5 == 0 && a % 3 != 0)
    {console.log(a, 'Fizz')}
    
    else if (a % 15 == 0)
    {console.log(a, 'FizzBuzz')}
    
    else if (a % 3 == 0)
    {console.log(a, 'Buzz')
    }
}

