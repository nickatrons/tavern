
export default class SaveEng {
    constructor(){
        this.LOCALSTORAGENAME = "tavern-save";
        // this.savegame = {
        //     coins: 20
        // };

    }
    saver(item) {
        console.log('hej', item)
        localStorage.setItem(this.LOCALSTORAGENAME,JSON.stringify(item));
        return this.savegame;
    }

    getSave() {
        let savedItem = localStorage.getItem(this.LOCALSTORAGENAME);
        return JSON.parse(savedItem);
    }
}