// Fashion Inventory - Part A
// 42
// Fashion Inventory Part-A
// You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:



// console.log(inventory(currentInventory))
// // console.log(currentInventory[0]['shoes'][0])

// // console.log(inventory(currentInventory))
// // Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

// // //...console output:
// // Brunello Cucinelli, tasselled black low-top lace-up, 1000
// // Brunello Cucinelli, tasselled green low-top lace-up, 1100
// // // and so on...
// // Here is an example of a flat list in code:

// // var flatList = "First line\nSecond Line\nThird Line\n";
// // console.log(flatList);




var dogTypes = {
    GermanShepard: {
        color: "black and white"
    },
    Beagle: {
        color: "brown and white"
    },
    cheuwahwah: {
        color: "green and white"
    },
    poodle: {
        color: "purple and white"
    },
};

for (var key in dogTypes) {
    for (var key2 in dogTypes[key]) {
        console.log(key, key2, dogTypes[key][key2]);
    }


var currentInventory = [
    {
    name: 'Brunello Cucinelli',
    shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
    ]
    },
    {
    name: 'Gucci',
    shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
    ]
    }
];

const inventory = arr => {
    for (var el of arr) {
        for (var key in dogTypes[key]) {
            console.log(key, key2, dogTypes[key][key2]);
        }

    

}




var currentInventory = [
    {
    name: 'Brunello Cucinelli',
    shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
    ]
    },
    {
    name: 'Gucci',
    shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
    ]
    }
];


// {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

const inventory = arr => { 
  
  

  let result = []
  
  
  for(let el of arr){
    let tempStr
    console.log(el)
   if (el.shoes) {     
     el.shoes.forEach(entry => {
       tempStr = `${el.name} ${entry.name} ${entry.price}`     
     })
     
     result.push(tempStr)
     
   }
    
  }

  return result
}







console.log(inventory(currentInventory))








const loops = arr =>{
    // decalre varaiable and assign empty array
    let result = []
  //   iterate thorugh arr w/ for ... of loop
    for(let el of arr){
  //     decalre varaible and assign as empty object
      let obj ={}
  //     iterae through subArray w/ for lloop
      for(let i=0;i<el.length;i++){
  //       update/reassign key value pairs
        obj[el[i][0]]=el[i][1]
      }
  //     push key/value pairs into result array
      result.push(obj)
    }
  //   return result
    return result
  }
  var input = [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
      ]
  ];
   console.log(loops(input))
  // Given that input, the return value should look like this:
  //     [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
  //     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]



  function mutation(arr) {
    return arr[1].toLowerCase()
    .split('')
    .every(el=> arr[0].toLowerCase().indexOf(el)!==-1)
  }
  
  console.log(mutation(["hello", "hey"])) //should return false.
  console.log(mutation(["hello", "Hello"])) //should return true.
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) //should return true.