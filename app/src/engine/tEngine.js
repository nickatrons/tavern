export default class TEngine {

    constructor(thestate) {
        this.state = thestate;
        this.HEJ = 'hej'
        this.isrAFRunning = false;
        this.gameLoop();
        this.guestsMaxInt = this.state.guestsMaxInt
    }
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    beersSoldPrSecond() {
        this.state.soldBeer += Math.floor(this.state.tmaidData.count)
        this.state.guest -= Math.floor(this.state.tmaidData.count)
    }
    coinsPrSecond() {
        this.state.coins += Math.floor(this.state.beerPrice * this.state.tmaidData.count)
        console.log(this.state.beerPrice)
    }
    guestCalculator() {
        let guests = this.state.guests,
            maxGuests = this.state.maxGuests,
            guestsAdded = Math.round(this.getRandomArbitrary(1, this.guestsMaxInt));
        if ((guests + guestsAdded) <= maxGuests) {
            this.state.guests += guestsAdded
        }
    }
    gameLoop() {
        console.log('gameloop', this.isrAFRunning)
        if (this.isrAFRunning) return;
        let previous_timestamp = undefined;
        let partial_ticks = 0;
        // let tick_duration = tickCounter(state);
        let tick_duration = 1000;
        let that = this;
        function gameTimer(timestamp) {
            let time_difference = previous_timestamp ? timestamp - previous_timestamp : tick_duration;
            previous_timestamp = timestamp;
            partial_ticks += time_difference;
            // let iterations = 0;
            // tick_duration = 2000 / that.state.tmaidData.count;

            // let updated_ui_values = {};
            while (partial_ticks > tick_duration) {
                partial_ticks -= tick_duration;
                // performOneTick(updated_ui_values);
                // performOneTick(updated_ui_values);
                // store.getters.mutations.incrementBeers();
                // store.commit("incrementBeers");

                if (that.state.guests > 0) {

                    that.beersSoldPrSecond();
                    that.coinsPrSecond()
                }


                that.guestCalculator()
                // state.coins += state.beerPrice * state.tmaidData.count
            }

            // Then use updated_ui_values to decide exactly what needs to be changed
            // This logic is obviously very game-specific

            requestAnimationFrame(gameTimer);
        }
        requestAnimationFrame(gameTimer);
        this.isrAFRunning = true;
    }


}