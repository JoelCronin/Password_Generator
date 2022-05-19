# Password Generator

In this job I was asked by the client to produce a random password generator for their company. It had to allow the user to select between numbers, lowercase, uppercase and/or special characters.

## Approach

To achieve this task I used a series of if and if else statements which checked that the user's input were valid whilst also logging their preferecnes on password length and composition ('numbers & lowercase but not uppercase', 'no numbers..' etc ).

These answers were then used in conjunction with '.concat' to add predeclared arrays containing the different characters into another empty pre declared array.

I then ran a for loop which incorporated the Math.random method to pick out a password with a length of the user's choice.

## Final Product

![Final Product](./Assets/images/Final%20Product.png) 

To view the portfolio yourself please [click here](https://joelcronin.github.io/fluffy-chainsaw/)

## Credits

On this project I used MDN docs and W3 schools to help with syntax and appropriate methods.

