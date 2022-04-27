// const cartUrl = "https://raw.githubusercontent.com/AlexPopov72/shimigi/02Cart/src/js/product/product.json";
// let cartList = fetch(cartUrl)
//     .then(response => response.json())
//     return data

// export default basket = {
//      quantity: 0,
//      summ: 0,
//      products: [],
//      add(productId) {
//         let existProduct = this.products.find(item => item.id == productId);
//         if (!existProduct) {
//             this.products.push({
//                 id: productId,
//                 quantity: 1
//             })
//             this.basketRender();
//         } else {
//             existProduct.quantity++;
//         }
//         this._calculateQuantity();
//         this._calculateSumm();
//     },
//     _calculateQuantity() {
//         this.quantity = 0;
//         this.products.forEach(product => {
//             this.quantity += product.quantity
//         })
//         document.querySelector('.main-right__shoppingBag-amount').innerHTML = this.quantity;
//     },
//     _calculateSumm() {
//         this.summ = 0;
//         this.products.forEach(product => {
//             let databaseProduct = products.find(item => product.id == item.id);
//             if (databaseProduct) {
//                 this.summ += parseInt(product.quantity) * parseFloat(databaseProduct.price); 
//             }
//         })
//         document.querySelector('.main-right__shoppingBag-price').innerHTML = this.summ;
//     },
//     basketRender() {
//         let basketList = document.querySelector('.basket-list');
//         basketList.innerHTML = '';
//         if (this.products.length > 0) {
//             this.products.forEach(product => {
//                 let databaseProduct = products.find(item => product.id == item.id);
//                 if (databaseProduct) {
//                     basketList.innerHTML += `
//                 <div class="basket-item">
//                     <span>${databaseProduct.title}</span>
//                     <p class = "plus js-basket-plus">+</p>
//                     <span>${databaseProduct.price}</span>
//                     <i class="bi bi-trash3-fill js-delete-item-basket" product_id="${databaseProduct.id}"></i>
//                 </div>`;
//                 }
//             })
//         }
//         document.querySelectorAll('.js-delete-item-basket').forEach(item => {
//             item.addEventListener('click', function (e) {
//                 basket.removeItem(e.target.getAttribute('product_id'));
//             })
//         }) 
//     },
//     removeItem(productId, target) {
//         let product = this.products.find(item => item.id == productId)
//         if (product) {
//             this.products.splice(this.products.indexOf(product), 1);
//             this._calculateQuantity();
//             this._calculateSumm();
//         }
//         this.basketRender();

//     },
//     plusprod(productId, target){
//         let product = this.products.find(item => item.id == productId)
//         if (product) {
//             this.products.quantity += this.products.quantity
//             this._calculateQuantity();
//             this._calculateSumm();
//             }
//         this.basketRender();
//     }
// }