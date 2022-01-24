'use strict';
console.log('Welcome to javascript world!')

let name = prompt('Please enter your name: ');
let gender = prompt('Please enter your gender (male/female): ');
let age = prompt('Please enter your age: ');
ageCheck(age);

let ans =[]
let htmlans=prompt('Do You like The Html/Css Languages (yes/no) ? ' );

if(checkEmpty(htmlans))
ans.push("Invalid")
else
ans.push(htmlans)

let jsans = prompt('Do youn like the js world (yes/no) ? ' );
if(checkEmpty(jsans))
ans.push("Invalid")
else

ans.push(jsans)

let tryans = prompt("Do you use the js language before (yes/no)");
if(checkEmpty(tryans))
ans.push("Invalid")
else

ans.push(tryans)




let res = confirm('you want to skip the message? ');



let msg='';

const traversrArr = (ans) => {
for (var i= 0 ; i < ans.length; i++)
{

    console.log('the answer of question '+ (i+1)+ " : "+ans[i]);
}


}


traversrArr(ans)

welcomeMsg();
function ageCheck (age) 
{

while(age <= 0 )
{
     age = prompt('Invalid input, please enter your age again: ');

}

return age;
}

function welcomeMsg(){
if(!res)
{gender=gender.trim();
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
}

 function checkEmpty( input)
{

    if (input == "" )
    return true;
    else 
    return false; 
}