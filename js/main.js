//function call();

let user={
    fullName:function(place,country){
        return this.firstName + " " + this.lastName + " " + place +","+ country;
    }
}
const user1={
    firstName:"ramm",
    lastName:"sanker"
}

//argument pass seperately,,,,
console.log(user.fullName.call(user1,"salem","india"));

//function apply();

let person={
    fullName:function(place,country){
        return this.firstName + " " + this.lastName + " " + place +","+ country;
    }
}
const person1={
    firstName:"ramm",
    lastName:"sanker"
}

//arguments pass in array
console.log(person.fullName.apply(person1,["salem","india"]));

//function bind();

let data={
    firstName:"mani",
    lastName:"kandan",
    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
}
const data1={
    firstName:"ramm",
    lastName:"sanker"
}


//overide last function values
let result=data.fullName.bind(data1);

console.log(result());