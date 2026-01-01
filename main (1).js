// Product data
        const products = [
            { id: 1, name: "Wireless Bluetooth Headphones", price: 49.99, category: "Electronics", rating: 4, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 2, name: "Smartphone 128GB", price: 699.99, category: "Electronics", rating: 5, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 3, name: "Laptop Backpack", price: 39.99, category: "Fashion", rating: 4, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 4, name: "Coffee Maker", price: 89.99, category: "Home", rating: 4, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 5, name: "Fitness Tracker", price: 129.99, category: "Electronics", rating: 4, image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 6, name: "Desk Lamp", price: 29.99, category: "Home", rating: 3, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 7, name: "Novel: The Midnight Library", price: 15.99, category: "Books", rating: 5, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 8, name: "Yoga Mat", price: 24.99, category: "Sports", rating: 4, image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 9, name: "Headphone.", price: 79.99, category: "Home", rating: 5, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 10, name: "Bluetooth Speaker", price: 59.99, category: "Electronics", rating: 4, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 11, name: "Running Shoes", price: 89.99, category: "Sports", rating: 4, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 12, name: "Cookbook", price: 22.99, category: "Books", rating: 4, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 13, name: "Digital Camera", price: 549.99, category: "Electronics", rating: 5, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 14, name: "Desk Chair", price: 149.99, category: "Home", rating: 4, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 15, name: "Water Bottle", price: 19.99, category: "Sports", rating: 3, image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 16, name: "Gaming Mouse", price: 39.99, category: "Electronics", rating: 4, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 17, name: "Throw Blanket", price: 34.99, category: "Home", rating: 4, image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 18, name: "Science Fiction Book", price: 12.99, category: "Books", rating: 5, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 19, name: "Dumbbell Set", price: 89.99, category: "Sports", rating: 4, image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" },
            { id: 20, name: "Wireless Charger", price: 29.99, category: "Electronics", rating: 4, image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" }
        ];

        // Initialize cart from localStorage or create empty array
        let cart = JSON.parse(localStorage.getItem('aauStoreCart')) || [];
        
        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', function() {
            feather.replace();
            renderProducts();
            updateCartCount();
            setupEventListeners();
        });
        
        // Render all products
        function renderProducts() {
            const container = document.getElementById('productsContainer');
            container.innerHTML = '';
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card bg-white rounded-xl shadow-md overflow-hidden';
                productCard.innerHTML = `
                    <div class="p-4">
                        <div class="h-48 overflow-hidden mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                            <img src="${product.image}" alt="${product.name}" class="h-full w-full object-contain">
                        </div>
                        <h3 class="font-bold text-gray-800 mb-2 text-sm h-12 overflow-hidden">${product.name}</h3>
                        <div class="flex items-center mb-3">
                            <div class="flex text-yellow-400">
                                ${generateStars(product.rating)}
                            </div>
                            <span class="text-gray-500 text-sm ml-2">${product.rating}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold text-gray-900">$${product.price.toFixed(2)}</span>
                            <button class="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-2 rounded-lg font-bold hover:opacity-90 text-sm add-to-cart" data-id="${product.id}">
                                Add to Cart
                            </button>
                        </div>
                        <div class="mt-2 text-green-600 text-sm font-bold">
                            <i data-feather="tag" class="w-4 h-4 inline mr-1"></i> Student discount available
                        </div>
                    </div>
                `;
                container.appendChild(productCard);
            });
            
            // Re-run feather.replace() to update icons
            feather.replace();
            
            // Add event listeners to all Add to Cart buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
        }
        
        // Generate star rating
        function generateStars(rating) {
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars += '<i data-feather="star" class="w-4 h-4 fill-current"></i>';
                } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                    stars += '<i data-feather="star" class="w-4 h-4 fill-current" style="fill: url(#half)"></i>';
                } else {
                    stars += '<i data-feather="star" class="w-4 h-4"></i>';
                }
            }
            return stars;
        }
        
        // Add product to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            // Save to localStorage
            localStorage.setItem('aauStoreCart', JSON.stringify(cart));
            
            // Update cart count
            updateCartCount();
            
            // Show success message
            showNotification(`${product.name} added to cart!`);
            
            // Refresh cart display if cart sidebar is open
            if (document.getElementById('cartSidebar').classList.contains('open')) {
                renderCart();
            }
        }
        
        // Update cart count in header
        function updateCartCount() {
            const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
            document.getElementById('cartCount').textContent = cartCount;
        }
        
        // Show notification
        function showNotification(message) {
            // Create notification element
            const notification = document.createElement('div');
            notification.className = 'fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-transform duration-300 translate-x-0';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }
        
        // Render cart items in sidebar
        function renderCart() {
            const cartItemsContainer = document.getElementById('cartItems');
            const emptyCartMessage = document.getElementById('emptyCartMessage');
            
            if (cart.length === 0) {
                emptyCartMessage.style.display = 'block';
                cartItemsContainer.innerHTML = '';
                cartItemsContainer.appendChild(emptyCartMessage);
                updateCartTotals();
                feather.replace();
                return;
            }
            
            emptyCartMessage.style.display = 'none';
            cartItemsContainer.innerHTML = '';
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'flex items-center border-b py-4';
                cartItem.innerHTML = `
                    <div class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <img src="${item.image}" alt="${item.name}" class="h-12 w-12 object-contain">
                    </div>
                    <div class="flex-grow">
                        <h4 class="font-bold text-gray-800 text-sm">${item.name}</h4>
                        <p class="text-gray-600 font-bold">$${item.price.toFixed(2)}</p>
                        <div class="flex items-center mt-2">
                            <button class="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center quantity-decrease" data-id="${item.id}">
                                <i data-feather="minus" class="w-3 h-3"></i>
                            </button>
                            <span class="mx-3 font-bold">${item.quantity}</span>
                            <button class="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center quantity-increase" data-id="${item.id}">
                                <i data-feather="plus" class="w-3 h-3"></i>
                            </button>
                            <button class="ml-4 text-red-500 text-sm remove-item" data-id="${item.id}">
                                <i data-feather="trash-2" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="font-bold text-gray-800">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
            
            updateCartTotals();
            feather.replace();
            
            // Add event listeners for cart controls
            document.querySelectorAll('.quantity-decrease').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    updateCartQuantity(productId, 'decrease');
                });
            });
            
            document.querySelectorAll('.quantity-increase').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    updateCartQuantity(productId, 'increase');
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    removeFromCart(productId);
                });
            });
        }
        
        // Update cart quantity
        function updateCartQuantity(productId, action) {
            const item = cart.find(item => item.id === productId);
            
            if (action === 'increase') {
                item.quantity += 1;
            } else if (action === 'decrease') {
                item.quantity -= 1;
                if (item.quantity <= 0) {
                    cart = cart.filter(item => item.id !== productId);
                }
            }
            
            // Save to localStorage
            localStorage.setItem('aauStoreCart', JSON.stringify(cart));
            
            // Update cart
            updateCartCount();
            renderCart();
        }
        
        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            
            // Save to localStorage
            localStorage.setItem('aauStoreCart', JSON.stringify(cart));
            
            // Update cart
            updateCartCount();
            renderCart();
            
            // Show notification
            showNotification('Item removed from cart');
        }
        
        // Update cart totals
        function updateCartTotals() {
            const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const discount = subtotal * 0.1; // 10% student discount
            const total = subtotal - discount;
            
            document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
            document.getElementById('cartDiscount').textContent = `-$${discount.toFixed(2)}`;
            document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
        }
        
        // Setup event listeners
        function setupEventListeners() {
            // Cart button
            document.getElementById('cartButton').addEventListener('click', function() {
                document.getElementById('cartSidebar').classList.add('open');
                renderCart();
            });
            
            // Close cart button
            document.getElementById('closeCart').addEventListener('click', function() {
                document.getElementById('cartSidebar').classList.remove('open');
            });
            
            // Continue shopping button
            document.getElementById('continueShopping').addEventListener('click', function() {
                document.getElementById('cartSidebar').classList.remove('open');
            });
            
            // Checkout button
            document.getElementById('checkoutButton').addEventListener('click', function() {
                if (cart.length === 0) {
                    showNotification('Your cart is empty!');
                    return;
                }
                
                const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                const discount = total * 0.1;
                const finalTotal = total - discount;
                
                alert(`Proceeding to checkout!\n\nItems: ${cart.length}\nSubtotal: $${total.toFixed(2)}\nStudent Discount (10%): -$${discount.toFixed(2)}\nTotal: $${finalTotal.toFixed(2)}\n\nThank you for shopping at AAU Store!`);
                
                // Clear cart
                cart = [];
                localStorage.setItem('aauStoreCart', JSON.stringify(cart));
                updateCartCount();
                renderCart();
                document.getElementById('cartSidebar').classList.remove('open');
            });
            
            // Newsletter button
            document.getElementById('newsletterButton').addEventListener('click', function() {
                const emailInput = this.previousElementSibling;
                if (emailInput.value.includes('@') && emailInput.value.includes('.')) {
                    showNotification('Thank you for subscribing to AAU Store newsletter!');
                    emailInput.value = '';
                } else {
                    showNotification('Please enter a valid email address');
                }
            });
            
            // Logo click to refresh
            document.getElementById('logo').addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // Close cart when clicking outside
            document.getElementById('cartSidebar').addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('open');
                }
            });
        }
