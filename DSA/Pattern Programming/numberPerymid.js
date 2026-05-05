let n = 3;
let count = 1;

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n - i; j++){
        process.stdout.write("   ");
    }
    for(let k = 1; k <= 2 * i - 1; k++){
        process.stdout.write(count + "  ");
        count++;
    }
    console.log( );
    
}
