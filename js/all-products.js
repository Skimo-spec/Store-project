fetch('js/items.json')
    .then(response => response.json())
    .then(data =>{
        
        const products_dev = document.getElementById("products_dev")

        all_products_json = data

        data.forEach(product => {
            const old_price_paragraph = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";

                const percent_desc_div = product.old_price ? `<span class="sale-preset">${ Math.floor((product.old_price - product.price) / product.old_price * 100)}%</span>` : "";

                products_dev.innerHTML += `<div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-basket-shopping"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                            </div>
                            ${percent_desc_div}
                        <div class="img-product">
                            <img src="${product.img}" alt="">
                            <img src="${product.img_hover}" alt="" class="img-hover">
                        </div>
                        <h3 class="neme-product"><a href="#">${product.name}</a></h3>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_paragraph}
                        </div>
                    </div>`
        });

    })


// open & close filter button
var filter = document.querySelector(".filter")

function open_close_filter(){
    filter.classList.toggle("active")
}

