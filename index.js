let count = 0

let count2 = 0

let homescoreEl = document.getElementById ("homescore-el")

let guestscoreEl = document.getElementById ("guestscore-el")

function addone() {
    count += 1
    homescoreEl.innerText = count
}
function addtwo() {
    count += 2
    homescoreEl.innerText = count
}
function addthree() {
    count += 3
    homescoreEl.innerText = count
}

function addoneg() {
    count2 += 1
    guestscoreEl.innerText = count2
}
function addtwog() {
    count2 += 2
    guestscoreEl.innerText = count2
}
function addthreeg() {
    count2 += 3
    guestscoreEl.innerText = count2
}
function reset() {
    count = 0
    count2 = 0
    guestscoreEl.innerText = count2
    homescoreEl.innerText = count
}