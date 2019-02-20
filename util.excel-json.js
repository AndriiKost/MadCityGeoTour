'use strict';
const path = require('path')
var xlsx = require('node-xlsx');
const axios = require('axios')

const excelFile = path.join(__dirname, '/mad-landmarks.xlsx')

let obj = xlsx.parse(excelFile);

obj[0].data.map((el, index) => {
  if (el[0] === 'LANDMARK' || el === [] || el[0] === undefined) {
    return
  } else {
    const objName = el[0]
    const objCoords = el[1].split(',')
    const objAddress = el[2]
    const objDescription = el[3]
    const latitude = objCoords[0]
    const longitude = objCoords[1].trim()

    const geoObject = {
      id: index,
      coords: {
        latitude: latitude,
        longitude: longitude
      },
      name: objName,
      address: objAddress,
      description: objDescription,
      visited: false
    }

    axios.post('http://localhost:8000/geo-objects/create', geoObject)
    .then((res) => {
      console.log(`statusCode: ${res.statusCode}`)
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
    })
  }
})


const postObject = (object) => {
  console.log(geoObject)

  axios.post('http://localhost:8000/geo-objects/create', object)
  .then((res) => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch((error) => {
    console.error(error)
  })
}
