
//instantiation for the jsonfile reader 
const jsonfile = require('jsonfile')
const file = 'data.json'


// read in the file, as an object
jsonfile.readFile(file, function (err, obj) {

  // if there is an error, log it
  if (err) {
    console.error(err)
  }
  

  //for loop grabs the 'object' item's first name and age
  //puts the data into a display string and logs it to the console
  for(var i in obj.items){
    var display = obj.items[i].fname + " " + obj.items[i].age;
    console.log(display);
  }
  
})

