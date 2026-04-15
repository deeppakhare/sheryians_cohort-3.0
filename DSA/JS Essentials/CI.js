//   Q. Find the compound interest from the fiven data ;
//      formula A = P*(1+r/n)^(n*t);
//      CI = A - P

//   in this problem for power in any formula in coding we use power sign as two star like --->  **


function compundIntrest(P, r, t, n) {
    let A = P*(1+r/n)**(n*t);
    let CI = A - P;
    console.log(CI.toFixed(2));
    
}
compundIntrest(1000, 0.5, 10, 4);