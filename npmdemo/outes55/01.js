"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getList = getList;
exports.save = save;
var input = [1, 2, 3];
input = input.map(function (item) {
    return item + 1;
});
console.log(input);

function getList() {
    console.log("getlist1");
}
function save() {
    console.log("save1");
}

exports.default = {
    getlist1: function getlist1() {
        console.log('getlist11');
    },
    save1: function save1() {
        console.log('save11');
    }
};