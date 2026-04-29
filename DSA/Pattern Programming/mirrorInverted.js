let n = 5;
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n - i + 1; j++){
        process.stdout.write("_ ");
        if(j == n) {
            process.stdout.write("* ");
            n--
        }
    }
    console.log( );
    
}