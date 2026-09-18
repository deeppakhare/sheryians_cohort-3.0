// console.log(1 + 2 + "3")


// console.log('1' + 2 + 3);

for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
(function  (j){
    setTimeout(() => {
        console.log(j);
        
    }, 0);
})(i)

}