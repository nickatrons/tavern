
export default class SaveEng {
    constructor() {
        this.LOCALSTORAGENAME = "tavern-save";
        // this.savegame = {
        //     coins: 20
        // };

    }
    saver(item) {
        // console.log('hej fra save', item)
        localStorage.setItem(this.LOCALSTORAGENAME, JSON.stringify(item));
        return this.savegame;
    }
    getSave() {
        let savedItem = localStorage.getItem(this.LOCALSTORAGENAME);
        return JSON.parse(savedItem);
    }
    clearSave() {
        var r = confirm("A timetravelling wizard pops by and offers redemption!");
        if (r == true) {
            localStorage.removeItem(this.LOCALSTORAGENAME);
            window.location.reload();
        }
    }
}