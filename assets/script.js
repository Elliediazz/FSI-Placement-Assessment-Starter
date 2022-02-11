// Name code rearranged
let yourName = "Ellie Barrera" 
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


// selecting the element with an id 
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// For Total Quantity: 

// Code - 
// 1. Sets a variable for the total qty and selects the html by ID. Allows me to work with it
// 2. The function adds the cookie count variables (set above) as they are changed using each eventlistener function
// 3. The 'totalQuant.textContent = totalQty' displays the total in text as they are changed using the function

//1.)
let totalQuant = document.querySelector('#qty-total')

//2.)
function totalQty (){

    return gb+cc +sugar
}


// Event listener for clicks on the "+/-" buttons for each cookies
let quantGb = document.querySelector('#qty-gb')
gbPlusBtn.addEventListener('click', function() {
    gb++
    console.log(gb) //check accuracy in console
    quantGb.textContent = `${gb}`
    //3.)
    totalQuant.textContent = totalQty() 

})

gbMinusBtn.addEventListener('click', function() {
    if (gb < 1) {gb = 0} else {
        gb--
        quantGb.textContent = `${gb}`
        totalQuant.textContent = totalQty()
    }

 })

let quantCc = document.querySelector('#qty-cc')
    ccPlusBtn.addEventListener('click', function() {
    cc++
    quantCc.textContent = `${cc}`
    totalQuant.textContent = totalQty()

})

ccMinusBtn.addEventListener('click', function() {
    if (cc < 1){cc = 0} else {
        cc--
        quantCc.textContent = `${cc}`   
        totalQuant.textContent = totalQty()
    }
 })

let quantSugar = document.querySelector('#qty-sugar')
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    quantSugar.textContent = `${sugar}`
    totalQuant.textContent = totalQty()

})

sugarMinusBtn.addEventListener('click', function() {
    if (sugar < 1){sugar = 0} else{
        sugar--
        quantSugar.textContent = `${sugar}` 
        totalQuant.textContent = totalQty()
    }

 })

 

