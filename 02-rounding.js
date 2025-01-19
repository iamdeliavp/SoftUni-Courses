function rounding(num, rounder) {
    if (rounder > 15) {
        rounder = 15
    }
let number = num.toFixed(rounder);
console.log(parseFloat(number));

}
rounding(10.5, 18);