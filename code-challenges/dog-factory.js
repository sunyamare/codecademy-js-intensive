/* Write a function, dogFactory(). It should:
have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 } */
// Write your code here: 
const dogFactory = (name, breed, weight) => {
    let object = {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {return this._name},
        get breed() {return this._breed},
        get weight() {return this._weight},
        set name(name) {this._name = name},
        set breed(breed) {this._breed = breed},
        set weight(weight) {this._weight = weight}
    }
    
}
console.log(dogFactory('Joe', 'Pug', 27)) // Should return { name: 'Joe', breed: 'Pug', weight: 27 }