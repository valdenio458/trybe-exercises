function checkPalindrom(str) {
    let reverse = str.split('').reverse().join('');
    if(reverse == str){
        return true;
    } else {
        return false;
    }    
}
console.log(checkPalindrom('arara'));
console.log(checkPalindrom('arroz'));

