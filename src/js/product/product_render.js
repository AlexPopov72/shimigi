//https://raw.githubusercontent.com/AlexPopov72/shimigi/02Cart/src/js/product/product.json ссылка продукты

const cartUrl = "https://raw.githubusercontent.com/AlexPopov72/shimigi/02Cart/src/js/product/product.json";
let cartList = fetch(cartUrl)
    .then(response => response.json())
    .then(data => {
        setCartLinks(data);

        return data
    });

    // function sortCategory(category){
    //     let category = document.querySelector('.menulow__botton')
    //     {
    //         if (js-opal)
    //         createOpal()
    //     }
    // }

    document.querySelectorAll('.js-classic').forEach(item => {
    item.addEventListener('click', function (e) {

    function setCartLinks(data) {
        let cartBlock = document.querySelector('.cont_cart');
        if (cartBlock) {
            Object.entries(data).forEach(item =>{
                if (item[1].category == "roll" && item[1].undercat == "classic"){
                    let cartElement = ` <h3 class="header_cart">${item[1].undercat}</h3>
                    <div class="cart">
                        <div class="cart_icon">
                            <div class="cart_icon_shv"><img src="./src/img/spysi.svg" alt="Острый"></div>
                            <div class="cart_icon_shv"><img src="./src/img/hot.svg" alt="Горячий"></div>
                            <div class="cart_icon_shv"><img src="./src/img/vegan.svg" alt="Вегетарианские"></div>
                        </div>   
                        <div class="cart_foto_block_mob">
                            <img src="${item[1].img_m}" alt="название товара">
                        </div>
                        <div class="cart_foto_block">
                            <img src="${item[1].img}" alt="название товара">
                            <div class="cart_icon_big">
                                <div class="cart_icon_shv"><img src="./src/img/spysi.svg" alt="Острый"></div>
                                <div class="cart_icon_shv"><img src="./src/img/hot.svg" alt="Горячий"></div>
                                <div class="cart_icon_shv"><img src="./src/img/vegan.svg" alt="Вегетарианские"></div>
                            </div>
                        </div>
                        <div class="cart_info">
                            <div class="cart_name">${item[1].name}</div>
                            <div class="cart_composition">${item[1].composition}</div>
                        </div>    
                            <div class="cart_prise">
                                <div class="cart_prise_old">${item[1].oldprise}</div>
                                <button class="cart_prise_new">${item[1].prise}</button>  
                        </div>
                    </div>`
                    cartBlock.innerHTML += cartElement;    
                }
            })
        }
    }

    // function createOpal()
        