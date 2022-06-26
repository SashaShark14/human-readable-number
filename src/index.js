module.exports = function toReadable (number) {
    number = Math.abs(number);

    const numArr = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    const dozen = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 
    'seventy', 'eighty', 'ninety']
    
    let read = ' '

    if (number < 20) {
    read = numArr[number]   
    }
    
    if(number > 19 && number < 100) {
    const first = Math.trunc(number / 10)
    const second = number - (first * 10)
    
    if(second === 0) {
    read = `${dozen[first]}`
    } else {
    read = `${dozen[first]} ${numArr[second]}`
    }
    }
    
    if (number > 99) {
    const one = Math.trunc(number / 100)
    const two = Math.trunc((number - (one * 100)) / 10)
    const three = number - (one *100) - (two *10)
    const four = number - one * 100      

    if(two === 0 && three === 0) {
    read = `${numArr[one]} hundred`
    } else if(two === 0) {
    read = `${numArr[one]} hundred ${numArr[three]}`
    } else if (four > 9 && four < 20) {
    read = `${numArr[one]} hundred ${numArr[four]}`
    } else if (three === 0) {
    read = `${numArr[one]} hundred ${dozen[two]}`
    } else {
    read = `${numArr[one]} hundred ${dozen[two]} ${numArr[three]}`
    }    
    }   
    return read

}
