// Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function(x) {
    var digits = x.toString()
    var splitNum = []
    var reverseNum = []
    var i
    
    for (i = 0; i < digits.length; i+=1) {
        splitNum.push(+digits.charAt(i))
    }

    for (i=i; i < splitNum.length; i-=1) {
        reverseNum.push(+splitNum.charAt(i));
        console.log(splitNum.charAt(i))
    }

    console.log("i=",i)
    console.log(reverseNum)
};

reverse(1234)