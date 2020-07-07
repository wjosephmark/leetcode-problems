// Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function(x) {
    var neg = false
    var digits = x.toString()
    var splitNum = []
    var reverseNum = 0
    var i
    
    for (i = 0; i < digits.length; i += 1) {
        if(isNaN(digits.charAt(i))){
            neg = true
        }
    }

    for (i = 0; i < digits.length; i += 1) {
        splitNum.push(+digits.charAt(i))
    }

    splitNum.reverse()

    if (neg === true) {
        splitNum.pop()
        splitNum.unshift("-")
        reverseNum = splitNum.join("")
    } else {
        reverseNum = splitNum.join("")
    }
    
    return(reverseNum)
};

reverse(156)