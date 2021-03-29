function CarView(owner) {
    this._owner = owner;
}

CarView.prototype = {
    render: function (containerId) {
        let container = document.getElementById(containerId);
        container.innerHTML = `
            <div class='car'>
                <div class='info-panel'>
                    <label>Status:</label><span data-role='status'>off</span>
                </div>
                <div class='controls'>
                    <input data-role='start-car' type='button' value='Start'>
                    <hr>
                    <label>Gearbox: </label><span data-role='gear-box-value>N</span>
                </div>
            </div>
            `;
        this._startButtons = document.getElementById(containerId).querySelectorAll("[data-role='start-car']");
        this._statusLabels = document.getElementById(containerId).querySelectorAll("[data-role='status']");
        this._gearBoxValueLabels = document.getElementById(containerId).querySelectorAll("[data-role='gear-box-value']");

        let that = this;

        this._processEls(this._startButtons, function(startButton) {
            startButton.addEventListener('cklic', function(ev) {
                that._carStartListener(ev);
            });        
        }); 
    },

    drawStatus: function(status) {
        this._processEls(this._statusLabels, function(item) {
            item.innerHTML = status;
        });
    },

    _processEls: function(arrayOfEls, processor) {
        for (let i = 0; i < arrayOfEls.length; i++) {
            const item = arrayOfEls[i];
            processor.apply(this, [item]);
        }
    },

    _carStartListener: function(ev) {
        this._owner.start();

    }
    
};