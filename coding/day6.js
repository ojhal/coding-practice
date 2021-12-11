
var sum_odd_numbers = function () {
    var sum = 0;
    for (var i = 1; i < 3000; i = i + 2) {
        sum = sum + i;
    }
    return sum;
}
console.log(sum_odd_numbers());