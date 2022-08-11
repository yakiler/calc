


class Promise2 {
    state = 'pending'

    REJECTED = 'rejected'

    RESOLVED = 'resolved'

    resArray = [];

    constructor(executor) {
        try{
            executor(this.resolve, this.reject);
        }catch(err) {
            this.reject(err);
        }
    }

    static resolve(value) {
        this.state = this.RESOLVED;
        this.resArray.push(value);
    }

    static reject(err) {
        this.state = this.REJECTED;
    }

    then(onfulfilled) {
        return new Promise2((resolve, reject) => {
            const value = this.resArray.pop();
            onfulfilled();
            if (this.state === this.RESOLVED) {
                resolve(this.)
            }
        })
    }

}

new Promise((resolve, reject) => {
    resolve(5);
}).then(res => {

})

Promise.resolve();

function Parent() {

}
function Child() {

}
const extendsFun = function(Parent, Child) {
    function Fn() {}
    Fn.prototype = Object.create(Parent.prototype);
    Fn.prototype.constructor = Child;
    
}