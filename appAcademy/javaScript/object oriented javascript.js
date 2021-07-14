////////////////////////////////////////   classes in javascript: constcutor functions


function Kitten(name, age) {
    this.name = name;
    this.age = age;
  
    this.meow = function () {
      console.log(this.name + ' says "meow!"');
    };
  }
  
  let kitten = new Kitten("Earl", 2);


//   Invoking a function with the special new keyword calls the function with this set to a new blank object. 
    // This blank object will be returned by the constructor as the new Kitten instance.

// We can set attributes inside the constructor with this.key = value. 
    // Note that we don't declare any local variables; those would be temporary and thrown away at the end of construction. 
    // Instead, we persist data by saving it to object attributes using this.

// Notice that Kitten does not return anything. Like initialize in Ruby, constructor functions in JS shouldn't return a value.

// Because constructor functions are invoked differently than normal functions, 
    //  make sure to name constructor functions in capitalized CamelCase to distinguish them clearly from normal functions. 
    // A common mistake is to call constructor functions without using new. If you do that, this will not be set properly,
    //  and no new object will be created.


// ///////////////// methods and prototypes/..........................

// Our previous example added a meow method to our Kitten object by saving a function to the meow attribute of the newly constructed Kitten object.
    //  This is OK, but each time you build a Kitten object, 
    // you'll create a new function object for that kitten's meow.

// This is redundant; all Kitten objects should share a single meow method. 
    // First, it will take more memory as we create more Kittens. 
    // Secondly, if we want to change our method, we have to update all our objects because they will individually have out-of-date copies.

// We can eliminate the redundancy by using the constructor's prototype.

function Kitten(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Kitten.prototype.meow = function () {
    console.log(this.name + ' says "meow!"');
  };
  
  k1 = new Kitten("Earl", 2);
  k2 = new Kitten("Houdini", 1);

// Every function object has an attribute, prototype. 
    // We set instance methods on the prototype.

// kitten.__proto__ is set to Kitten.prototype. 
    // This links instances of the Kitten class to the Kitten.prototype that stores the instance methods.


    k1 = new Kitten("Earl", 2);
    k2 = new Kitten("Houdini", 1);
    
    // `Object.getPrototypeOf` is the portable, preferred way to access
    // the `__proto__` property.
    Object.getPrototypeOf(k1); // == Kitten.prototype
    Object.getPrototypeOf(k2); // == Kitten.prototype

// Later, we may try to access a property of a Kitten instance (kitten.meow, for instance). 
    // JavaScript first looks for meow amongst the instance's own properties. In our example, these are name and age.


// Since it doesn't find the meow property in the Kitten instance, the rule is that JavaScript will search in kitten.__proto__. 
    // Here we do have a value for the meow property, so the search is complete and the value is returned.