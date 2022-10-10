
function fibs(n) {

    if(n <= 0) return null;
    if (n == 1) return [0];
    if (n == 2) {
     return [0, 1];
    } else {
        const fibArr = [0,1];
        for(let i = 2; i < n; i++){
            let fibNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length-2];
            fibArr.push(fibNum);
        }
        return console.log(fibArr);
    }
}

fibs(8);
