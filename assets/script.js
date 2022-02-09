// First, tell us your name
let yourName = "Ellie Barrera" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
let quantGb = document.querySelector('#qty-gb')
gbPlusBtn.addEventListener('click', function() {
gb++
console.log(gb)
quantGb.textContent = `${gb}`

})

gbMinusBtn.addEventListener('click', function() {
    if (gb < 1) {gb = 0} else {
        gb--
        quantGb.textContent = `${gb}`
    }

 })

 let quantCc = document.querySelector('#qty-cc')
ccPlusBtn.addEventListener('click', function() {
cc++
console.log(cc)
quantCc.textContent = `${cc}`

})

ccMinusBtn.addEventListener('click', function() {
    if (cc < 1){cc = 0} else {
        cc--
        quantCc.textContent = `${cc}`   
    }
 })

 let quantSugar = document.querySelector('#qty-sugar')
sugarPlusBtn.addEventListener('click', function() {
sugar++
console.log(sugar)
quantSugar.textContent = `${sugar}`

})

sugarMinusBtn.addEventListener('click', function() {
    if (sugar < 1){sugar = 0} else{
        sugar--
        quantSugar.textContent = `${sugar}` 
    }

 })
// TODO: Hook up event listeners for the rest of the buttons -- Done
 
