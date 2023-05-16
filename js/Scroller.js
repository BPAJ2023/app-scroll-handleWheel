class Scroller {
    constructor() {
        this.items = document.querySelectorAll('.full-page');
        this.currentSection = 0;
        
    }
    changeSection = function(direction) {
        if (direction === "up" && this.currentSection > 0){
            this.currentSection--;
        }else if (direction === "down" && this.currentSection < this.items.length -1) {
            this.currentSection++;
        };
        this.items.forEach((item, i)=>{
            if (i === this.currentSection){
                item.classList.add('full-page--active');
            }else {
                item.classList.remove('full-page--active');
            };
        })
    };
    handleWheelSection = function(e){
        const deltaY = e.deltaY;
        if(deltaY < 0) {
            this.changeSection('up');
        }else if (deltaY > 0) {
            this.changeSection('down');
        }
    }
};
