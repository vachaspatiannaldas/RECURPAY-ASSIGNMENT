
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

const updatePrice = () => {
const quantity = parseInt(num.innerText);
const price = 2599.00; 
const totalPrice = (quantity * price).toFixed(2);
document.querySelector(".submit").innerText = `Add to Cart . ₹ ${totalPrice}`;
};

plus.addEventListener("click", () => {
let a = parseInt(num.innerText);
a++;
a = (a < 10) ? "0" + a : a;
num.innerText = a;
updatePrice();
});

minus.addEventListener("click", () => {
let a = parseInt(num.innerText);
if (a > 1) {
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    updatePrice();
}
});

const checkPincode = () => {
const enteredPin = document.getElementById("pin").value.trim();

if (enteredPin === "") {
    alert("Please enter a valid pincode.");
    return;
}

const eligiblePincodes = ["560017", "560018", "560019", "560020"];

if (eligiblePincodes.includes(enteredPin)) {
    document.querySelector(".submit").removeAttribute("disabled");
    alert("You are eligible for COD");
} else {
    document.querySelector(".submit").setAttribute("disabled", "true");
    alert("Sorry, You are not eligible for COD");
}
};

document.querySelector(".check").addEventListener("click", checkPincode);

document.querySelector(".submit").addEventListener("click", () => {
checkPincode();
});

updatePrice();

