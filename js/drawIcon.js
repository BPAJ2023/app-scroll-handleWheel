class drawIcon extends Scroller {
    constructor(){
        super();
        this.pages = document.querySelectorAll('.wraper div');
        
        this.currentDot = 0;

        this.createDot();
        this.styleDot();
    
    };
    createDot(){
        const contener = document.createElement('aside');
        const boxIcon = document.createElement('ul');
        document.body.appendChild(contener);
        contener.appendChild(boxIcon);
        
        for (let i = 0; i < this.pages.length ;i++){
            const icon = document.createElement('li');
            boxIcon.appendChild(icon);
        };
    };
    styleDot(){
        document.querySelector('ul').setAttribute('class', 'navDotes');
        document.querySelectorAll('li').forEach(dot=>dot.setAttribute('class', 'dot'));
    };
    changeDot(direction){
        const dotes = document.querySelectorAll('li');
        if(direction === 'up' && this.currentDot > 0){
            this.currentDot--;
        }else if (direction === 'down' && this.currentDot < dotes.length - 1){
            this.currentDot++;
        };
        dotes.forEach((dot,i)=>{
            if (i === this.currentDot){
                dot.classList.add('dot--active');
            }else {
                dot.classList.remove('dot--active');
            }
        });
    }
    handleWheelDot(e){
        const deltaY = e.deltaY;
        if(deltaY < 0) {
            this.changeDot('up');
        }else if (deltaY > 0) {
            this.changeDot('down');
        }
    }
};