// console.log(this);
// function MakeStudents(fname, lname, contact, isVerified) {
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;
//     this.isVerified = isVerified;
// }

// MakeStudents.prototype.company = 'Sheryians'

// let showProfile = function () {
//     if (this.isVerified) {
//         console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
//     } else {
//         console.log('User Not Verified');
//     }
// }

// MakeStudents.prototype.showProfile = showProfile

// let s1 = new MakeStudents('Abhishek', 'Mishra', 98765, true)
// let s2 = new MakeStudents('Yash', 'Yadav', 545454, true)
// let s3 = new MakeStudents('Manas', 'Pancholi', 233422, false)
// let s4 = new MakeStudents('Anurag', 'Kulshreshtha', 765656, true)

// s1.showProfile()





// class MakeStudents {
//     constructor(fname, lname, contact, isVerified) {
//         this.fname = fname;
//         this.lname = lname;
//         this.contact = contact;
//         this.isVerified = isVerified;
//     }
// }
// let showProfile = function () {
//     if (this.isVerified) {
//         console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
//     } else {
//         console.log('User Not Verified');
//     }
// }

// MakeStudents.prototype.showProfile = showProfile

// let s1 = new MakeStudents('Sarthak', 'Sharma', 98789, true)
// let s2 = new MakeStudents('Abhishek', 'Mishra', 77889, true)
// let s3 = new MakeStudents('Yash', 'Yadav', 48789, false)

// s1.showProfile()
// s2.showProfile()
// s3.showProfile()

// classical inheritence

class User {
    constructor(fname,lname,contact){
        this.fname = fname
        this.lname = lname
        this.contact = contact
    }
    greet(){
        console.log('Welcome User',this.fname);
    }
}

class Admin extends User {
    constructor(fname,lname,contact){
        super(fname,lname,contact)
        this.adminAccess = true
    }
    addCourse(){
        console.log('New Course Added');
    }
    removeAllCourses(){
        console.log('All Courses Removed');
    }
    greet(){
        console.log('Welcome Admin',this.fname);
    }
}

var u1 = new User('Harsh','Singh',887867)
var u2 = new Admin('Sarthak','Sharma',5432)


u1.greet()
u2.greet()
u2.addCourse()
u2.removeAllCourses()
