class options {
    constructor (height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
    }
   div(textStyle) {
    let d = document.createElement('div');
    d.innerHTML = 'Text';
    d.style.cssText = textStyle;
    document.body.appendChild(d);
   console.log(d);
    } 
}
let kub = new options();
    
kub.div('border: 2px; color: green; font-size: 30px;');
