'use strict';
console.log('Welcome to javascript world!')
var name = prompt('Please enter your name: ');
var gender = prompt('Please enter your gender (male/female): ');
var age = prompt('Please enter your age: ');
while(age <= 0 )
{
     age = prompt('Invalid input, please enter your age again: ');

}
var res = confirm('you want to skip the message? ');

gender=gender.trim();
var msg='';
if(!res)
{
    switch(gender)

    {
        case 'male':
msg= `Welcome Mr. ${name} to the website`;
        break;

        case 'female':
        msg=`Welcome Ms. ${name} to the website`;
break;

default:
msg=`Welcome ${name} to the website`;    
break;

    }
    alert(msg)
}
