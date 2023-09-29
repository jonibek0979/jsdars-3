alert('Bizning sayitga xush kelibsiz')
var elTitle = document.querySelector('.title')
var elH2 = document.querySelector('.h2')
var elInp = document.querySelector('.inp')
var elBtn = document.querySelector('.btn')

var ticket = 500 * 1100;
var hotel = 250 * 1100;
var park = 500 * 1100;
var jami = ticket + hotel + park;
console.log(jami);
elBtn.addEventListener('click', function () {
    if (elInp.value > jami) {
        elTitle.textContent = "Mablaxinggiz yetarli oq yo'l tilayman"
    }
    else if (elInp.value < jami) {
        elTitle.textContent = 'Uzur sorayman hisobinggizda mablax yetarli emas'
    }
    else{
        elTitle.textContent = 'sayohat uchun mablaxinggiz yetarli'
    }
})









// if (elNumber.value > v || elNumber.value == v) {
//     elTitle.textContent = "Tabriklayman sayohat uchun mablag' yetdi, sizning pulingiz : " + elNumber.value + " so'm";
//     elBtn.disabled = true; // Tekshirish tugmasini o'chirish
// } else {
//     elTitle.textContent = "Afsuski sayohat uchun mablag' yetmaydi, sizning pulingiz : " + elNumber.value + " so'm";
// }





































