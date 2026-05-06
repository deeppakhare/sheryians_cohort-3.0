let n = 5;
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++){
        if(i == 1 || i == n) process.stdout.write("* ");
        else {
            if(j == 1 || j == n) process.stdout.write("* ");
            else process.stdout.write("  ");
        }
    }
    console.log( );
    
}