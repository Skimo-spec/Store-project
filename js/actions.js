
// open & close cart

var cart = document.querySelector('.cart');

function open_cart(){
    cart.classList.add("active")
}
function close_cart(){
    cart.classList.remove("active")
}

//open & close menu 

var menu = document.querySelector('#menu');

function open_menu(){
    menu.classList.add("active")
}
function close_menu(){
    menu.classList.remove("active")
}

// dark mode

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')
const enableDarkmode = () => {
document.body.classList.add('darkmode')
localStorage.setItem('darkmode', 'active')
}
const disableDarkmode = () => {
document.body.classList.remove('darkmode')
localStorage.setItem('darkmode', null)
}
if(darkmode === "active") enableDarkmode()
themeSwitch.addEventListener("click", () => {
darkmode = localStorage.getItem('darkmode')
darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})




// Add items in cart

var all_products_json;

var items_in_cart = document.querySelector(".items-in-cart")
let product_cart = []

function addToCart(id , btn){
    product_cart.push(all_products_json[id])
    btn.classList.add("active")
    console.log(product_cart)
    getCartItems()
}

let count_item = document.querySelector('.count-item')
let count_item_cart = document.querySelector('.count-item-cart')
let price_cart_total = document.querySelector('.price-cart-total')
let carts = [];
let price_cart_head = document.querySelector('.price-cart-head')

function getCartItems(){
    let total_price = 0
    let items_c ="";
    for (let i = 0; i < product_cart.length; i++){
        items_c += `
        <div class="item-cart">
                    <img src="${product_cart[i].img}" alt="">
                    <div class="content">
                        <h4>${product_cart[i].name}</h4>
                        <p class="price-cart">$${product_cart[i].price}</p>
                    </div>
                    <button onClick="remove_from_cart(${i})" class="delete-item"><i class="fa-solid fa-trash-can"></i></button>
                </div>
        `
    
        total_price += product_cart[i].price

    }
    items_in_cart.innerHTML = items_c
    price_cart_head.innerHTML = "$" + total_price
    count_item.innerHTML = product_cart.length
    count_item_cart.innerHTML = `(${product_cart.length} items in my cart)`
    price_cart_total.innerHTML = "$" + total_price

}

function remove_from_cart(index){
    product_cart.splice(index, 1)
    getCartItems()
    let addToCartButtons = document.querySelectorAll(".fa-basket-shopping");
    for (let i = 0; i< addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove("active")
        product_cart.forEach(product =>{
            if(product.id == i){
                addToCartButtons[i].classList.add("active")
            }
        })
        
    }
}


// Go to Top Button functionality
const goToTopButton = document.getElementById('goToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        goToTopButton.classList.add('visible');
    } else {
        goToTopButton.classList.remove('visible');
    }
});

goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Update copyright year
const currentYearSpan = document.getElementById('current-year');
currentYearSpan.textContent = new Date().getFullYear();

// change item image
let bigImage = document.getElementById("bigImg")

function ChangeItemImage(img){
    bigImage.src = img
}

// link contact form to discord
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1382623274214621236/bLwsLUNoEkQyQvLQQqNPvlLEPL5eaD1G3k1QKmzdZZGDCZ2mnbpsqEMcJ_PbIygO942L';

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
        fullname: form.fullname.value,
        email: form.email.value,
        mobile: form.mobile.value,
        subject: form.subject.value,
        message: form.message.value
    };
    const content = `**New Store Contact Message**\n\n**Name:** ${data.fullname}\n**Email:** ${data.email}\n**Mobile:** ${data.mobile}\n**Subject:** ${data.subject}\n**Message:** ${data.message}`;
    try {
        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });
        alert('Message sent successfully!');
        form.reset();
    } catch (err) {
        alert('Failed to send message. Please try again later.');
    }
});



