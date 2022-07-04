(function () {
    String.prototype.ensureStart = function (str) {
        if (this.toString().startsWith(str)) {
            return this.toString();
        }
        return str + this.toString();
    };
    String.prototype.ensureEnd = function (str) {
        if (this.toString().endsWith(str)) {
            return this.toString();
        }
        return this.toString() + str;
    };
    String.prototype.isEmpty = function () {
        return this.toString().length === 0;
    };
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let index = this.slice(0, n - 2).lastIndexOf(' ');
            if (index === -1) {
                return this.slice(0, n - 3) + '...';
            } else {
                return this.slice(0, index) + '...';
            }
        }
    };
    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            if (string.includes(`{${i}}`)) {
                string = string.replace(`{${i}}`, params[i]);
            }
        }
        return string;
    }

})()
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(4);
console.log(str)
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}',
    'dog');
console.log(str)
