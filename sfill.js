(function(){

    // Generates A Random Sring
    String.random = function (len = 10) {
        var rstr = "";
        for (let i = 0; i < len; i++) {
            rstr += String.fromCharCode(65 + parseInt(Math.random() * 25));
        }
        return rstr;
    };

    String.prototype.reverse = function () {
        return [...this].reverse().join("");
    };

    // Makes the First Letter Upper Case
    String.prototype.ucfirst = function () {
        return this[0].toUpperCase() + this.substr(1, this.length - 1);
    };

    
    // Makes the First Letter of Every Word Upper Case
    String.prototype.ucwordfirst = function () {
        return this.split(" ").map(word => {
            return word.ucfirst();
        }).join(" ");
    };

    // Reveses A String
    String.prototype.reverseword = function () {
        return this.split(" ").reverse().join(" ");
    };

    // Convert String Into DOM 
    String.prototype.todom = function(){
        let dp = new DOMParser();
        dp = dp.parseFromString(this,"text/html");
        return dp.querySelector(this.match(/(?<=\<).+?>/i)[0].split(">")[0]);
    };

    // Checks if a given value is a array type
    window.isArray = function(val) {
        return Array.prototype === val.__proto__;
    }

    // Single element selector alias
    window.$ = function(selector = null) {
        if (selector[0] == ".") {
            return document.querySelector(selector);
        }
        if (selector[0] == "#") {
            return document.querySelector(selector);
        }
        if (selector[0] != "." && selector[0] != "#") {
            return document.querySelector(selector);
        }
    }
    
    // All elements selector alias
    window.$$ = function(selector = null) {
        if (selector[0] == ".") {
            return [...document.querySelectorAll(selector)];
        }
        if (selector[0] == "#") {
            return [...document.querySelectorAll(selector)];
        }
        if (selector[0] != "." && selector[0] != "#") {
            return [...document.querySelectorAll(selector)];
        }
    }

    // Populates a random array
    Array.randomArray = function (start = 0, end = 100, len = 10) {
        let arr = [];
        for (let i = 0; i < len; i++) {
            arr.push(start + Math.floor(Math.random() * end));
        }
        return arr;
    }

})();
