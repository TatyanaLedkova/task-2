let name = "Ivan",
age = 30,
mail = 'ex@mail.ru';
document.write(`Пользователю ${name} ${age}  лет. Его почтовый адрес: ${mail}`);

function makeArray() {
    var items=[];

    for (let i=0; i<10; i++) {
        var item = function() {
            console.log(i)
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

// let fun = () => {
//     console.log(this);
// };
// fun();

let obj = {
    number:5,
    sayNumer: function() {
        let say = () => {
            console.log(this);
        };
        say();    
    }
};
obj.sayNumer();

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});

function calcOrDouble(number, basis) {
    // basis = basis || 2; формат ES5
    // формат ES6
    console.log(number*basis);

}
calcOrDouble(3, 5);
calcOrDouble(6);

class Rectange {
    constructor(height,width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height*this.width;
    }
}

const square = new Rectange(10);

console.log(square.calcArea);

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['worldpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let numbers = [2,5,7];
log(...numbers);