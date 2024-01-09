function AddUpTo(n){
    let sum = 0;
    for(let i = 1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

let t1 = performance.now();
AddUpTo(1000000000)
let t2 = performance.now();

console.log(`Time elapsed: ${(t2-t1)/1000} seconds`)