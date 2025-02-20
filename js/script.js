// 1 
for (let number = 5; number <= 100; number += 1)    {
    console.log(number);
}

// 2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for ( let num = 0; num < array1.length; num += 1)   {
    if( array1[num] > 0 && array1[num] < 10) {
        console.log(array1[num])
    }
}

// 3 ?
let array2 = [1, 2, 3, 4, 5];
for ( let element = 0; element < array2.length; element += 1){
   array2[0] += array2[element];
}
console.log(array2[0])

// 4 ?
let array3 = [1, 2, 3, 4, 5];
for ( let element = 0; element < array3.length; element += 1){
    array3[0] += array3[element];
}
console.log(array3[0] / array3.length)

// 5
let user = {
    firstName: "giorgi",
    lastName: "smith",
    age: 25,  
    studentStatus: "active"
  };
  delete user.studentStatus
  console.log(user)

// 6
let user2 = {
    name: 'anna',
    age:  20,
    studentStatus: 'active'
}
if (user2.age < 18 && user2.studentStatus === 'active') {
    console.log('hello user')
}else if (user2.name === 'levan') {
    console.log('hello levan')
}else if (user2.studentStatus === 'active' || user2.age < 25) {
    console.log("hello ana")
}else {
    console.log('error')
}
// second option
let resultCondition = user2.age < 18 && user2.studentStatus === 'active' ? 'hello user' : user2.name === 'levan' ? 'hello levan' : user2.studentStatus === 'active' || user2.age < 25 ? "hello ana" : 'error'
console.log(resultCondition)
// 7
let array6 = [ 2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10 ]
for ( let item = 0; item < array6.length; item += 1)   {
    if( array6[item] % 2 === 0) {
        console.log(array6[item])
    }
}
// 8
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for (let user = 0; user < users.length; user += 1){
    if(users[user].status === true) {
        console.log(users[user])
    }
}
// 9
let array7 = [32, 14, null, '40', 50];
for (let numb = 0; numb < array7.length; numb += 1)
    if (array7[numb] % 5 == 0 && typeof array7[numb] === 'number' && array7[numb] != null) {
        console.log(array7[numb])
    }
// 10
let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];
