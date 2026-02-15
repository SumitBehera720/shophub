// ============================================
// PRODUCT DATA
// ============================================
const productsData = [
    // Electronics
    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "electronics",
        price: 299.99,
        originalPrice: 449.99,
        discount: 33,
        rating: 4.8,
        reviews: 2543,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        badge: "Bestseller"
    },
    {
        id: 2,
        name: "Ultra HD 4K Smart TV 55\"",
        category: "electronics",
        price: 699.99,
        originalPrice: 999.99,
        discount: 30,
        rating: 4.6,
        reviews: 1876,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
        badge: "Hot Deal"
    },
    {
        id: 3,
        name: "Gaming Laptop Pro",
        category: "electronics",
        price: 1499.99,
        originalPrice: 1899.99,
        discount: 21,
        rating: 4.9,
        reviews: 987,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
        badge: "Premium"
    },
    {
        id: 4,
        name: "Smartphone Pro Max",
        category: "electronics",
        price: 1199.99,
        originalPrice: 1399.99,
        discount: 14,
        rating: 4.7,
        reviews: 3421,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        badge: "New"
    },
    {
        id: 5,
        name: "Wireless Bluetooth Speaker",
        category: "electronics",
        price: 89.99,
        originalPrice: 129.99,
        discount: 31,
        rating: 4.5,
        reviews: 1654,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"
    },
    {
        id: 6,
        name: "Professional Camera Kit",
        category: "electronics",
        price: 2499.99,
        originalPrice: 3199.99,
        discount: 22,
        rating: 4.9,
        reviews: 542,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
        badge: "Pro Choice"
    },
    
    // Fashion
    {
        id: 7,
        name: "Designer Leather Jacket",
        category: "fashion",
        price: 249.99,
        originalPrice: 399.99,
        discount: 38,
        rating: 4.7,
        reviews: 876,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
        badge: "Trending"
    },
    {
        id: 8,
        name: "Premium Sneakers",
        category: "fashion",
        price: 159.99,
        originalPrice: 219.99,
        discount: 27,
        rating: 4.8,
        reviews: 2134,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        badge: "Popular"
    },
    {
        id: 9,
        name: "Elegant Evening Dress",
        category: "fashion",
        price: 189.99,
        originalPrice: 299.99,
        discount: 37,
        rating: 4.9,
        reviews: 654,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop"
    },
    {
        id: 10,
        name: "Classic Denim Jeans",
        category: "fashion",
        price: 79.99,
        originalPrice: 119.99,
        discount: 33,
        rating: 4.6,
        reviews: 1987,
        image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400&h=400&fit=crop"
    },
    {
        id: 11,
        name: "Luxury Wristwatch",
        category: "fashion",
        price: 499.99,
        originalPrice: 799.99,
        discount: 38,
        rating: 4.8,
        reviews: 432,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        badge: "Luxury"
    },
    {
        id: 12,
        name: "Designer Sunglasses",
        category: "fashion",
        price: 149.99,
        originalPrice: 249.99,
        discount: 40,
        rating: 4.7,
        reviews: 1234,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop"
    },
    
    // Home & Kitchen
    {
        id: 13,
        name: "Modern Coffee Maker",
        category: "home",
        price: 129.99,
        originalPrice: 199.99,
        discount: 35,
        rating: 4.6,
        reviews: 1543,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop"
    },
    {
        id: 14,
        name: "Premium Cookware Set",
        category: "home",
        price: 249.99,
        originalPrice: 399.99,
        discount: 38,
        rating: 4.8,
        reviews: 876,
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop",
        badge: "Chef's Pick"
    },
    {
        id: 15,
        name: "Robotic Vacuum Cleaner",
        category: "home",
        price: 349.99,
        originalPrice: 499.99,
        discount: 30,
        rating: 4.7,
        reviews: 2341,
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
        badge: "Smart Home"
    },
    {
        id: 16,
        name: "Air Purifier Pro",
        category: "home",
        price: 199.99,
        originalPrice: 299.99,
        discount: 33,
        rating: 4.9,
        reviews: 1765,
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop"
    },
    {
        id: 17,
        name: "Luxury Bedding Set",
        category: "home",
        price: 159.99,
        originalPrice: 249.99,
        discount: 36,
        rating: 4.8,
        reviews: 987,
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop"
    },
    {
        id: 18,
        name: "Smart LED Lamp",
        category: "home",
        price: 69.99,
        originalPrice: 99.99,
        discount: 30,
        rating: 4.5,
        reviews: 2156,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop"
    },
    
    // Books
    {
        id: 19,
        name: "Complete Programming Guide",
        category: "books",
        price: 49.99,
        originalPrice: 79.99,
        discount: 38,
        rating: 4.9,
        reviews: 3421,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=400&fit=crop",
        badge: "Bestseller"
    },
    {
        id: 20,
        name: "Modern Fiction Collection",
        category: "books",
        price: 34.99,
        originalPrice: 54.99,
        discount: 36,
        rating: 4.7,
        reviews: 1876,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop"
    },
    {
        id: 21,
        name: "Photography Masterclass",
        category: "books",
        price: 44.99,
        originalPrice: 69.99,
        discount: 36,
        rating: 4.8,
        reviews: 765,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop"
    },
    {
        id: 22,
        name: "Business Strategy Handbook",
        category: "books",
        price: 39.99,
        originalPrice: 59.99,
        discount: 33,
        rating: 4.6,
        reviews: 1234,
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=400&fit=crop"
    },
    {
        id: 23,
        name: "Cooking Encyclopedia",
        category: "books",
        price: 54.99,
        originalPrice: 89.99,
        discount: 39,
        rating: 4.9,
        reviews: 2341,
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=400&fit=crop"
    },
    {
        id: 24,
        name: "Science & Nature Atlas",
        category: "books",
        price: 64.99,
        originalPrice: 99.99,
        discount: 35,
        rating: 4.8,
        reviews: 876,
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=400&fit=crop"
    }
];

// ============================================
// CART MANAGEMENT
// ============================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count on load
updateCartCount();

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to cart
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    renderCart();
    showToast(`${product.name} added to cart!`);
    
    // Add animation to cart icon
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.style.animation = 'none';
    setTimeout(() => {
        cartIcon.style.animation = 'bounce 0.5s ease';
    }, 10);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

// Update cart count badge
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Calculate cart total
function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Render cart items
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-actions">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    cartTotal.textContent = `$${calculateTotal().toFixed(2)}`;
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('active');
    
    if (cartSidebar.classList.contains('open')) {
        renderCart();
    }
}

// Event listeners for cart
document.getElementById('cart-icon').addEventListener('click', (e) => {
    e.preventDefault();
    toggleCart();
});

document.getElementById('cart-close').addEventListener('click', toggleCart);
document.getElementById('cart-overlay').addEventListener('click', toggleCart);

// ============================================
// PRODUCTS RENDERING
// ============================================
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    
    container.innerHTML = products.map(product => `
        <div class="product-card" data-category="${product.category}">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <button class="product-wishlist">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviews.toLocaleString()})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    ${product.discount ? `<span class="discount-percent">-${product.discount}%</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                    <button class="quick-view">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Initial render
const dealsProducts = productsData.filter(p => p.discount >= 30).slice(0, 8);
renderProducts(dealsProducts, 'deals-products');
renderProducts(productsData, 'products-container');

// ============================================
// PRODUCT FILTERING
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter products
        const filter = button.getAttribute('data-filter');
        const filteredProducts = filter === 'all' 
            ? productsData 
            : productsData.filter(p => p.category === filter);
        
        renderProducts(filteredProducts, 'products-container');
    });
});

// ============================================
// BANNER SLIDER
// ============================================
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const totalSlides = slides.length;

// Create dots
const dotsContainer = document.querySelector('.banner-dots');
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('banner-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.banner-dot');

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Auto-slide
let autoSlideInterval = setInterval(nextSlide, 5000);

// Reset interval on manual navigation
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}

document.querySelector('.banner-next').addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

document.querySelector('.banner-prev').addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// WISHLIST FUNCTIONALITY
// ============================================
document.addEventListener('click', (e) => {
    if (e.target.closest('.product-wishlist')) {
        const wishlistBtn = e.target.closest('.product-wishlist');
        const icon = wishlistBtn.querySelector('i');
        
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            showToast('Added to wishlist!');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            showToast('Removed from wishlist');
        }
    }
});

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm) {
        const searchResults = productsData.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        
        if (searchResults.length > 0) {
            renderProducts(searchResults, 'products-container');
            
            // Scroll to products section
            document.querySelector('.products-section').scrollIntoView({
                behavior: 'smooth'
            });
            
            showToast(`Found ${searchResults.length} products`);
        } else {
            showToast('No products found');
        }
    }
}

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// ============================================
// SMOOTH SCROLLING FOR CATEGORY LINKS
// ============================================
document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.products-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ============================================
// LOADING ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// PRODUCT CARD HOVER EFFECTS
// ============================================
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.product-card')) {
        const card = e.target.closest('.product-card');
        card.style.transform = 'translateY(-8px)';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.product-card')) {
        const card = e.target.closest('.product-card');
        card.style.transform = 'translateY(0)';
    }
});

// ============================================
// RESPONSIVE MENU (Mobile)
// ============================================
const menuTrigger = document.querySelector('.menu-trigger');

if (menuTrigger) {
    menuTrigger.addEventListener('click', () => {
        const categoryList = document.querySelector('.category-list');
        categoryList.classList.toggle('mobile-menu-open');
    });
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

// Observe category cards
document.querySelectorAll('.category-card').forEach(card => {
    observer.observe(card);
});

// ============================================
// DYNAMIC DELIVERY LOCATION
// ============================================
const deliveryLocation = document.querySelector('.location-value');

if (deliveryLocation && navigator.geolocation) {
    // This is a simplified example - in production, you'd use a proper geolocation API
    deliveryLocation.addEventListener('click', () => {
        showToast('Location feature coming soon!');
    });
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Open cart with Ctrl/Cmd + K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleCart();
    }
    
    // Focus search with /
    if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to close cart
    if (e.key === 'Escape') {
        const cartSidebar = document.getElementById('cart-sidebar');
        if (cartSidebar.classList.contains('open')) {
            toggleCart();
        }
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Lazy load images (for better performance with many products)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log('%c🛒 ShopHub - Premium E-Commerce Experience', 'color: #ff6b35; font-size: 20px; font-weight: bold;');
console.log('%c💡 Tip: Press Ctrl/Cmd + K to open cart', 'color: #1a2332; font-size: 14px;');
console.log('%c🔍 Tip: Press / to focus search', 'color: #1a2332; font-size: 14px;');

// ============================================
// QUICK VIEW MODAL
// ============================================
let currentQuickViewProduct = null;

function openQuickView(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    currentQuickViewProduct = product;
    
    // Populate modal with product data
    document.getElementById('quick-view-img').src = product.image;
    document.getElementById('quick-view-category').textContent = product.category;
    document.getElementById('quick-view-title').textContent = product.name;
    document.getElementById('quick-view-current-price').textContent = `$${product.price.toFixed(2)}`;
    
    // Rating
    const ratingHTML = `
        <div class="stars">${generateStars(product.rating)}</div>
        <span class="rating-count">(${product.reviews.toLocaleString()} reviews)</span>
    `;
    document.getElementById('quick-view-rating').innerHTML = ratingHTML;
    
    // Original price and discount
    const originalPrice = document.getElementById('quick-view-original-price');
    const discount = document.getElementById('quick-view-discount');
    
    if (product.originalPrice) {
        originalPrice.textContent = `$${product.originalPrice.toFixed(2)}`;
        originalPrice.style.display = 'inline';
    } else {
        originalPrice.style.display = 'none';
    }
    
    if (product.discount) {
        discount.textContent = `-${product.discount}%`;
        discount.style.display = 'inline';
    } else {
        discount.style.display = 'none';
    }
    
    // Generate category-specific features
    const features = generateProductFeatures(product.category);
    const featuresList = document.getElementById('quick-view-features-list');
    featuresList.innerHTML = features.map(feature => 
        `<li><i class="fas fa-check"></i> ${feature}</li>`
    ).join('');
    
    // Show modal
    const modal = document.getElementById('quick-view-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentQuickViewProduct = null;
}

function generateProductFeatures(category) {
    const featuresByCategory = {
        electronics: [
            'Premium quality components',
            'Latest technology integration',
            'Energy efficient operation',
            '1-year manufacturer warranty',
            'Fast and reliable performance'
        ],
        fashion: [
            'Premium fabric quality',
            'Comfortable all-day wear',
            'Modern stylish design',
            'Easy care and maintenance',
            'Available in multiple sizes'
        ],
        home: [
            'Durable construction',
            'Easy to clean and maintain',
            'Space-saving design',
            'Safe for daily use',
            'Elegant modern aesthetic'
        ],
        books: [
            'Comprehensive content',
            'Expert author credentials',
            'Easy to understand',
            'Practical examples included',
            'Perfect for all skill levels'
        ]
    };
    
    return featuresByCategory[category] || [
        'High quality product',
        'Great value for money',
        'Customer satisfaction guaranteed',
        'Fast shipping available',
        'Excellent customer reviews'
    ];
}

// Quick view event listeners
document.getElementById('quick-view-close').addEventListener('click', closeQuickView);
document.getElementById('quick-view-overlay').addEventListener('click', closeQuickView);

// Add to cart from quick view
document.getElementById('quick-view-add-cart').addEventListener('click', () => {
    if (currentQuickViewProduct) {
        addToCart(currentQuickViewProduct.id);
        closeQuickView();
    }
});

// Update quick view buttons to be functional
document.addEventListener('click', (e) => {
    if (e.target.closest('.quick-view')) {
        const productCard = e.target.closest('.product-card');
        if (productCard) {
            // Get product ID from the add-to-cart button in the same card
            const addToCartBtn = productCard.querySelector('.add-to-cart');
            const onclickAttr = addToCartBtn.getAttribute('onclick');
            const productId = parseInt(onclickAttr.match(/\d+/)[0]);
            openQuickView(productId);
        }
    }
});

// Keyboard shortcut for closing quick view
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const quickViewModal = document.getElementById('quick-view-modal');
        if (quickViewModal.classList.contains('active')) {
            closeQuickView();
        }
    }
});

// ============================================
// INIT
// ============================================
console.log('ShopHub initialized successfully! 🚀');
console.log(`Products loaded: ${productsData.length}`);
console.log(`Cart items: ${cart.length}`);