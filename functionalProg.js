//This .js file contains solutions to all 3 kata's for Lab 09 Functional Programming, 1/22/18

//Use .map to double values in array
function double(array) {
    return array.map(item => { return item * 2; })
  }


//filter out all strings in an array
  function filter_list(l) {
    return l.filter(function(item) {
    return typeof item == "number";
  
 });
 
 return(filter_list)
 }


 //Calculate Average
function find_average(array) {
  return array.reduce((a, b)=>a+b)/array.length
};