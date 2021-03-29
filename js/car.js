function Car(containerId) {
    this._engine = new Engine(),
        this._gearbox = new Gearbox(),

        this._logger = new Logger(),
        this._view = new CarView(),

        // this._render(containerId)
        this._view.render(containerId);
}

Car.prototype = {
    //interface

    start: function () {
        let randomNumber = Math.random()
        console.log(Math.random())

        if (randomNumber > 0.5) {
            this._carCannotBeStarted();
        } else {
            this._carStarted();
        }
    },

    //privat methods

    _carCannotBeStarted: function () {
        this._logger.log('ERROR')

        this._view.drawStatus(' STOP')
    },
    _carStarted: function () {
        this._logger.log('OK')
        this._view.drawStatus(' START ENGINE')
    },



};











// document.addEventListener('DOMContentLoaded', () => {
//     // const btnStart = document.querySelector('[type="button"]'),
//     //     input = document.querySelector('[type="text"]')

//     // btnStart.addEventListener('click', () => {
//     //     // alert(e.target);
//     //     // console.log(e.target)
//     //     let rendom = Math.round(Math.random() * 1)
//     //     if (rendom == 0) {
//     //         input.style.background = 'red'

//     //         setTimeout(() => {
//     //             clearInterval(timer)
//     //         }, 4000)

//     //         let timer  = setInterval(() => {
//     //             let i = 0;
//     //             while (i < 1) {
//     //                 input.placeholder += '.';
//     //                 i++;
//     //             } 
//     //         },200);

//     //         setTimeout(() => input.style.background = 'white', 1000);
//     //     } else {
//     //         input.style.background = 'green'
//     //         setTimeout(() => input.style.background = 'white', 1000);
//     //     }
//     //     // input.placeholder = `${rendom}`


//     // })




// })