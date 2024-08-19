const checked = document.querySelector("#checkbox")
const popup = document.querySelector(".popup")
const inputName = document.querySelector("#name")
const button = document.querySelector("#button-submit")
const form = document.querySelector(".form")

button.addEventListener("click", () => {
    if (inputName.value.trim() == "") {
        alert("nhap du thong tin")
        return
    }
    if (!checked.checked) {
        alert("Chap nhan dieu khoan")
        return
    }
    popup.style.display = "flex";
    form.style.display = "none";

})