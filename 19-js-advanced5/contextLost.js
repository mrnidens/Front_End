class User {
    constructor(nickName) {
        this.nickName = nickName;
        // this.infoFunc = this.infoFunc.bind(this);
    }

    infoFunc = function () {
        console.log(`Nickname: ${this.nickName}`);
    }

    infoArrow = () => {
        console.log(`Nickname: ${this.nickName}`);
    }

    greeting = function(prefix, postfix) {
        console.log(`${prefix} ${this.nickName} ${postfix}`);
    }
}

const peter = new User('Peter');
console.log(peter);
console.log('===== Func =====');
peter.infoFunc();
console.log('===== Arrow =====');
peter.infoArrow();
console.log('===== Context Lost =====');
const fn = peter.infoFunc.bind({nickName: 'Rabindranate'});
fn();
func(peter.infoFunc.bind({nickName: 'John'}));
console.log('===== call, apply =====');
peter.infoFunc.call({nickName: 'Mary'});
peter.infoFunc.apply({nickName: 'Ann'});
peter.greeting('Mr.', 'esquire')
peter.greeting.call({nickName: 'Hans'}, 'Mr.', 'esquire');
peter.greeting.apply({nickName: 'Hans'}, ['Mr.', 'esquire']);



function func(callback) {
    callback();
}