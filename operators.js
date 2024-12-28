
//object
ObjType1 ={}
ObjType1["movie"] = "mark antony"
ObjType1["budget"] ="100cr"
ObjType1["boxOffice"] = "500cr"
console.log(ObjType1.boxOffice)




//arithmatic operator
a=10
b=5
console.log("sum is",a+b)
console.log("diff",a-b)
console.log("product",a*b)
console.log("division",a/b)

//relational operator
console.log(a<b)
console.log(a>b)
console.log(a>=b)
console.log(a<=b)
console.log(a==b)
console.log(a!=b)
console.log(a===b)


//logical operator
if(a<b&&a==b)
{
    console.log("and")
}
else{
    console.log("or")
}

//bitwise operator
console.log(a>>1)
console.log(a<<1)
//if else condition

if(a%2==0)
{
    console.log(a,"is even")
}
else
{
    console.log(a,"is odd")
}
//array
arr=[1,2,3,4,5,6,'b','kec',4.5]
console.log(arr)

//looping
for(var i=0;i<5;i++)
{
    console.log(i)
}

for(var i in arr)
{
    console.log(arr[i])
}

for(var i of arr)
{
    console.log(i)
}