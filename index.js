let foods = ["🌭", "🥗", "🧁", "🥗", "🥗", "🌭", "🧁", "🧸", "🧁", "🌭", "🥗", "🧁", "🌭", "🌭","🧁", "🥗"]
let mixedShelf = document.getElementById("mixed-shelf")
let hotdogShelf = document.getElementById("hotdog-shelf")
let muffinShelf = document.getElementById("muffin-shelf")
let saladShelf = document.getElementById("salad-shelf")
let sortBtn = document.getElementById("sort-btn")
let backBtn = document.getElementById("back-btn")
let message = document.getElementById("message")

for (let i = 0; i < foods.length; i++) {
    mixedShelf.innerHTML += foods[i]
}

sortBtn.addEventListener("click", function(){
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] === "🌭") {
            hotdogShelf.textContent += "🌭"
        } else if (foods[i] === "🥗") {
            saladShelf.textContent += "🥗"
        } else if (foods[i] === "🧁") {
            muffinShelf.textContent += "🧁"
        } else {
            message.textContent = `👨‍🍳: "I've found my teddy, yay! 🧸"`
        }
        mixedShelf.textContent = "🧸"
    }
}, {once: true})

backBtn.addEventListener("click", function(){
    mixedShelf.textContent = ""
    for (let i = 0; i < foods.length; i++) {
        mixedShelf.textContent += foods[i]
        hotdogShelf.textContent = ""
        muffinShelf.textContent = ""
        saladShelf.textContent = ""
        message.textContent = ""
    }
}, {once: true})