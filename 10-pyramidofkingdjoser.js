function pyramidKingDjoser(base, increment) {
        let totalStone = 0;
        let totalMarble = 0;
        let totalLapis = 0;
        let totalGold = 0;
        let stepHeight = 0;
    
        while (base > 0) {
            stepHeight++; 
            if (base === 1 || base === 2) {
                let gold = base * base * increment;
                totalGold += gold;
                break;
            }
    
            let outerLayer = base * base; 
            let innerLayer = (base - 2) * (base - 2);
            let stone = innerLayer * increment;
            let decoration = (outerLayer - innerLayer) * increment; 
    
            totalStone += stone;
    
            
            if (stepHeight % 5 === 0) {
                totalLapis += decoration;
            } else {
                totalMarble += decoration; 
            }
    
            base -= 2;
        }
    
        let totalHeight = stepHeight * increment;
    
        console.log(`Stone required: ${Math.ceil(totalStone)}`);
        console.log(`Marble required: ${Math.ceil(totalMarble)}`);
        console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
        console.log(`Gold required: ${Math.ceil(totalGold)}`);
        console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
    }
pyramidKingDjoser(11, 0.75);