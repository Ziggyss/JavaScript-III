/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The default value of 'this' is the Window Binding. This means that outside of a function, or within a normal function, the word 'this' points to the window.

* 2. Implicit Binding is when 'this' is contained within a function that is called as a method. In this scenario, 'this' refers to the object that the method is being called on.

* 3. New Binding refers to when a Constructor function is being called. In this case, 'this' refers to the object that the constructor is creating.

* 4. Explicit Binding: in the case of invoking functions with call and apply, or copying functions with bind, you can assign 'this' within the brackets to whatever you want. This is known as explicit binding.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
 var windowThis = this;

// Principle 2

// code example for Implicit Binding
var littleObject = {
    littleMethod: function(){
        console.log(this);
    }
};

littleObject.littleMethod();

// Principle 3

// code example for New Binding
function game(title, category, cost) {
    this.name = title;
    this.game_type = category;
    this.price = cost;
  }
  
  let witcher3 = new game('The Witcher 3', 'RPG', 40);
  let dragonAge = new game('Dragon Age Inquisition', 'RPG', 25);


// Principle 4

// code example for Explicit Binding
function report() {
    console.log(this);
};

var statusReport = report.bind('The assignment is done.');

