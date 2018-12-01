"use strict";

const loadJSON = () => {
  fetch('data.json')
    .then((res) => res.json())
      .then((data) => {
        const array = extractData(data)
        displayData(array)
      })
      .catch(error => console.log(`Error: ${error}`))
}
  
loadJSON();

function extractData(obj) {
    let flatArray = []
    for (let key in obj){
        let value = obj[key]
        if(typeof value === 'object'){
            flatArray = flatArray.concat(extractData(value))
            extractData(value)
        } else {
            flatArray.push(value)
        }
    }
    return flatArray
}

function displayData(arr) {
    const country = arr[0]
    console.log(`${country} ${arr[1]}`)
    console.log(`${country} - ${arr[2]} ${arr[3]}`)
    console.log(`${country} - ${arr[2]} - ${arr[4]} ${arr[5]}`)
    console.log(`${country} - ${arr[2]} - ${arr[4]} - ${arr[6]} ${arr[7]}`)
    console.log(`${country} - ${arr[2]} - ${arr[8]} ${arr[9]}`)
    console.log(`${country} - ${arr[10]} ${arr[11]}`)
}