import SaveEngine from './saveeng'

let dev = true; 
const saveengine = new SaveEngine;
const savedData = saveengine.getSave()

export const Storeconsts = {
    coins: savedData ? savedData.coins : 0,
    soldBeer: savedData ? savedData.soldBeer : 0,
    beerPrice: savedData ? savedData.beerPrice : 1,
    guests: savedData ? savedData.guests : 1,
    maxGuests: savedData ? savedData.maxGuests : 10,
    guestsMaxInt: savedData ? savedData.guestsMaxInt : 1,
    tmaidData: {
        price: savedData ? savedData.tmaidData.price : dev ? 10 : 30,
        count: savedData ? savedData.tmaidData.count : 0,
        name: "tmaid"
    },
    brewerData: {
        price: savedData ? savedData.brewerData.price : dev ? 10 : 100,
        count: savedData ? savedData.brewerData.count : 0,
        name: "brewer"
    },
    bardData: {
        price: savedData ? savedData.bardData.price : dev ? 100 : 500,
        count: savedData ? savedData.bardData.count : 0,
        name: "bard"
    },
    upg: {
        carpenter: {
            price: savedData ? savedData.bardData.price : dev ? 100 : 5000,
            count: savedData ? savedData.bardData.count : 0,
            name: "carpenter"
        }

    }
}
