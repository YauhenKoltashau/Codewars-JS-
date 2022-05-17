function squareDigits(num) { 
    console.log(~~num.toString().split(''))



    return ~~num.toString().split('').reduce(function(p, c) {
        return '' + p + (~~c*~~c);
    }, '');
  }

squareDigits(4249)