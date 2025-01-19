function bitcoinmining(input) {

let goldPerGram = 67.51;
let bitcoinPrice = 11949.16;
let boughtBitcoins = 0;
let moneyWon = 0;
let firstBitcoinDay = 0;
let day = 1;

for(let i= 0; i < input.length; i++){
    let goldQantity = input[i];
    if(day % 3 === 0) {
        goldQantity *= 0.7;
    }
    moneyWon += goldQantity * goldPerGram;

    while (moneyWon >= bitcoinPrice) {
        boughtBitcoins++;
        moneyWon -= bitcoinPrice;

        if (boughtBitcoins === 1) {
            firstBitcoinDay = day;
        }
    }

    day++;
}
console.log(`Bought bitcoins: ${boughtBitcoins}`);
if(boughtBitcoins > 0) {
console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
}
console.log(`Left money: ${(moneyWon).toFixed(2)} lv.`);
}
bitcoinmining([3124.15, 504.212, 2511.124]);