const scroller = new Scroller;
document.addEventListener('wheel', (e)=>scroller.handleWheelSection(e));
const draw = new drawIcon(scroller.currentSection);
document.addEventListener('wheel', (e)=>draw.handleWheelDot(e));
const clickDotes = new ClickDot('.full-page','.dot');