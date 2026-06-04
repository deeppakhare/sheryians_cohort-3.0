// console.log("start");

// setTimeout(function x() {
//   console.log("Hello");
// }, 4000);

// console.log("ebd");


// ***************  Creating Promise *******************
let myOrder = new Promise(function (resolve, reject) {
    console.log('order is coming...');


    let orderStatus = true
    setTimeout(function () {
        if (orderStatus) {
            console.log('Delivery Done ✅');
            resolve()
        } else {

            reject()
        }
    }, 3000)
})

myOrder.then(function () {
    console.log('Making payment...💸');

    let paymentStatus = true 
    return new Promise(function (res, rej) {
        setTimeout(function () {
            if (paymentStatus) {
                console.log('Payment Done ✅');
                res()
            } else {
                console.log('Payment Cancelled ❌');
                rej()
            }
        }, 2000)
    })
}).then(function(){
    console.log('I am eating food...');

    let foodStatus = false
    return new Promise(function (res, rej) {
        setTimeout(function () {
            if (foodStatus) {
                console.log('Pet Bhar Gya');
                res()
            } else {
                console.log('Pet Nahi bhara');
                rej()
            }
        }, 3000)
    })
})
.catch(function () {
    console.log('Order Cancelled ❌');
})
.finally(function(){
    console.log('Process End');
})