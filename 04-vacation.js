function vacation(peopleCount, peopleType, day) {

let price = 0;

if(peopleType === "Students") {
    switch(day){
    case "Friday":
        price = 8.45; break;
    case "Saturday":
        price = 9.80; break;
    case "Sunday":
        price = 10.46; break;
    }
} else if(peopleType === "Business") {
    switch(day){
        case "Friday":
            price = 10.90; break;
        case "Saturday":
            price = 15.60; break;
        case "Sunday":
            price = 16; break;
        }
} else if(peopleType === "Regular"){
    switch(day){
        case "Friday":
            price = 15; break;
        case "Saturday":
            price = 20; break;
        case "Sunday":
            price = 22.50; break;
        }
}
let totalPrice = peopleCount * price;

if(peopleType === "Students" && peopleCount >= 30) {
    totalPrice *= 0.85;
}

if(peopleType === "Business" && peopleCount >= 100) {
    totalPrice = totalPrice - 10 * price;
}

if(peopleType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
    totalPrice *= 0.95;
}

console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(40, "Regular", "Saturday");