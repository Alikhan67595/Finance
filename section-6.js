import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    auth,
    signOut
} from "./firebase.js"

let userPhoto;
let userName;



onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user :", user)

    userPhoto = user.photoURL
    userName = user.displayName
    
    if (userPhoto) {
  document.getElementById("man-image").src = userPhoto;
} else {
  document.getElementById("man-image").src = "/assets/user.png"; // ← tumhari apni image
} 

    document.getElementById("display-name").innerText = userName

    // ...
} else {
    // User is signed out
    console.log("user don't exist")
    window.location.replace ("./index.html")
    // ...
  }
});



let  notice =document.getElementById("low-balance") 
let totalAmt = document.getElementById("total-amt")

let balanceAmount = 100000

totalAmt.value = balanceAmount

let eyeLock = document.getElementById("eye-lock")

//Password show and hide function

eyeLock.addEventListener("click",()=>{
    if(totalAmt.type === "password"){
        totalAmt.type = "number"
        eyeLock.style.backgroundImage = "url(/assets/eye.png)"
    }
    else{
        totalAmt.type = "password"
        eyeLock.style.backgroundImage = "url(/assets/Vector.png)"
    }
})


let deposit = document.getElementById("deposit")

let withdraw = document.getElementById("withdraw")

let crossDep = document.getElementById("cross2")

let crossWith = document.getElementById("cross1")

let blurDivWithdraw = document.getElementById("blur-div-withdraw")

let blurDivDeposit = document.getElementById("blur-div-deposit")


// div display none function

crossWith.addEventListener("click",()=>{
    blurDivWithdraw.style.display ="none"
    notice.style.color = "transparent"
})

crossDep.addEventListener("click",()=>{
    blurDivDeposit.style.display ="none"
})


// div display flex function

deposit.addEventListener("click",()=>{
    blurDivDeposit.style.display ="flex"
})

withdraw.addEventListener("click",()=>{
    blurDivWithdraw.style.display ="flex"
})




let amountEnterDeposit = document.getElementById("amount-enter-dep")

let amountEnterWithdraw = document.getElementById("amount-enter-with")

let depositSendBtn = document.getElementById("dep-send-btn")

let withdrawSendBtn = document.getElementById("with-send-btn")


// deposit amount function

depositSendBtn.addEventListener("click", () => {

    let enteredAmount = parseFloat(amountEnterDeposit.value) || 0;
    balanceAmount += enteredAmount;
    totalAmt.value = balanceAmount;
    amountEnterDeposit.value = "";

    // console.log("New Balance: ", balanceAmount);
});


// withdraw amount function

withdrawSendBtn.addEventListener("click",()=>{
        let withEnteredAmount = parseFloat(amountEnterWithdraw.value) || 0;

    if(withEnteredAmount <= balanceAmount){
       balanceAmount = balanceAmount - withEnteredAmount 
       totalAmt.value = balanceAmount;
       amountEnterWithdraw.value = ""; 
        // console.log(balanceAmount)
    }
    else{
        notice.style.color = "red"
        amountEnterWithdraw.value = ""; 
    }
})


let logOut = document.getElementById("logout")

let signOutUser =()=>{

signOut(auth).then(() => {
  Window.location.replace ("./index.html")
}).catch((error) => {
  // An error happened.
  console.log("error :" , error.code)
});

}


logOut.addEventListener("click",signOutUser)
