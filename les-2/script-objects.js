let anObject = {
    valOne: 'test',
    val_Two: 2,
    'val Space': false,
    valObject: {
        subVal: 'test',
    },
    valFunction: function(a) {
        console.log(this);
        return a + this.val_Two;
    },
};

console.log(anObject);
let keyVal = 'val_Two';
console.log(anObject[keyVal]);
console.log(anObject.valOne);
console.log(anObject.valFunction(3));

let person = {
    firstname : 'jan',
    lastname: 'detweede',
    fullname: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

console.log(person.fullname());

console.log(Object.keys(person));