
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
        return fibArr;
    }
}

console.log(fibs(15));

function fibsRec(n) {
    if(n <= 0) return null;
    if (n < 2) return [0,1];
    const fibArr = fibsRec(n-1);
    return [...fibArr, fibArr[n-1] + fibArr[n-2]];

}

console.log(fibsRec(6))