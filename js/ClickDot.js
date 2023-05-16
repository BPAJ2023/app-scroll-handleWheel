class ClickDot{
    constructor(secSelector, dotSelector){
        this.section = document.querySelectorAll(secSelector);
        this.dots = document.querySelectorAll(dotSelector);
        this.currentDot = 0;

        this.changeSectionOnClick = this.changeSectionOnClick.bind(this);
        this.handleClickDot = this.handleClickDot.bind(this);

        this.addClickLisseners();
    };
    changeSectionOnClick(index){
        this.section.forEach((sec,i)=>{
            if(index === i){
                sec.classList.add('full-page--active');
            }else {
                sec.classList.remove('full-page--active');
            }
        })
    };
    handleClickDot(e){
        const dotIndex = Array.from(this.dots).indexOf(e.target);
        if (dotIndex !== -1){
            this.currentDot = dotIndex;
            this.changeSectionOnClick(this.currentDot);
            this.updateActiveDot();
        }
    }
    addClickLisseners(){
        this.dots.forEach((dot) => {
            dot.addEventListener('click', (e)=>this.handleClickDot(e));
        });
    }



    updateActiveDot(){
        this.dots.forEach((dot,i)=>{
            if(i === this.currentDot){
                dot.classList.add('dot--active');
            }else {
                dot.classList.remove('dot--active');
            }
        })
    }
};