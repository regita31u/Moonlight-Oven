
function highlightMenu(selectedItem) {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
  selectedItem.classList.add('active');
}
const menuItems = document.querySelectorAll('.menu-item');
const cartModal = document.getElementById('cart-modal');
const cartItemName = document.getElementById('cart-item-name');
const cartItemPrice = document.getElementById('cart-item-price');
const cartItemIngredients = document.getElementById('cart-item-ingredients');
const closeCart = document.getElementById('close-cart');

// Open cart modal on menu item click
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const name = item.dataset.name;
    const price = item.dataset.price;
    const ingredients = item.dataset.ingredients;

    cartItemName.textContent = `Pastry: ${name}`;
    cartItemPrice.textContent = `Price: Rp ${price}`;
    cartItemIngredients.textContent = `Ingredients: ${ingredients}`;

    cartModal.classList.remove('hidden');
  });
});

// Close cart modal
closeCart.addEventListener('click', () => {
  cartModal.classList.add('hidden');
});
