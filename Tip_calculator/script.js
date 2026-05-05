
function calculate(){
    const bill = Number(document.getElementById("bill").value);
    const tip = Number(document.getElementById("tip").value);
    const total = document.getElementById("total");

    const tipAmount = bill * (tip / 100);
    const finalTotal = bill + tipAmount;

    total.textContent = `${finalTotal.toFixed(2)}`;
}