function solution(str){
    var newStr = [];
    for(var i = str.length - 1; i >= 0; i--) {
      newStr.push(str[i]);
    }
    return newStr.join('')
  }