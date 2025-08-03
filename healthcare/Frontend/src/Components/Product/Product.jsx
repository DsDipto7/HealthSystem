<<<<<<< HEAD
=======
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Product.css";
// import { useNavigate } from 'react-router-dom';

// export default function Product() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [processing, setProcessing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts();
//     fetchCart();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/api/products/");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       toast.error("Failed to fetch products. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/api/cart/view/", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       });
//       setCart(Array.isArray(response.data) ? response.data : []);
//     } catch (error) {
//       console.error("Error fetching cart:", error);
//       setCart([]); // Ensure cart is an empty array on failure
//     }
//   };

//   const handleAddToCart = async (product) => {
//     if (!localStorage.getItem("accessToken")) {
//       toast.error("Please log in to add products to the cart.");
//       return;
//     }

//     if (processing) return;
//     setProcessing(true);
//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/cart/add/",
//         { productId: product.productId, quantity: 1 },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         }
//       );
//       toast.success(`${product.productName} added to cart!`);
//       fetchCart();
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       toast.error("Failed to add product to cart.");
//     } finally {
//       setProcessing(false);
//     }
//   };

//   const updateQuantity = async (cartId, increment) => {
//     const cartItem = cart.find((item) => item.id === cartId);
//     const newQuantity = Math.max(1, cartItem.quantity + increment);
//     try {
//       await axios.put(
//         `http://127.0.0.1:8000/api/cart/${cartId}/update/`,
//         { quantity: newQuantity },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         }
//       );
//       fetchCart();
//     } catch (error) {
//       console.error("Error updating cart quantity:", error);
//       toast.error("Failed to update product quantity.");
//     }
//   };

//   const handleRemoveFromCart = async (cartId) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/cart/${cartId}/remove/`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       });
//       toast.success("Product removed from cart.");
//       fetchCart();
//     } catch (error) {
//       console.error("Error removing product from cart:", error);
//       toast.error("Failed to remove product from cart.");
//     }
//   };

//   const cancelOrder = () => {
//     setCart([]);
//     toast.info("Order canceled.");
//   };

//   const calculateTotalPrice = () =>
//     cart
//       .reduce((total, item) => total + item.quantity * item.productPrice, 0)
//       .toFixed(2);

//   const handlePlaceOrder = () => {
//     if (cart.length === 0) {
//       toast.error("Your cart is empty!");
//       return;
//     }
    
//     navigate('/checkout', {
//       state: {
//         cartItems: cart,
//         totalPrice: calculateTotalPrice()
//       }
//     });
//   };

//   return (
//     <div className="product-container">
//       <ToastContainer position="top-center" autoClose={2000} />
//       <h2 className="product-title">Products</h2>

//       {/* Cart Icon */}
//       <div className="cart-icon" onClick={() => setShowCart(true)}>
//         🛒
//         <span className="cart-count">{cart.length}</span>
//       </div>

//       {/* Product List */}
//       {loading ? (
//         <p>Loading products...</p>
//       ) : (
//         <div className="product-row">
//           {products.map((product) => (
//             <div className="product-card" key={product.productId}>
//               <img
//                 src={`http://127.0.0.1:8000/${product.productImage}`}
//                 alt={product.productName}
//                 className="product-image"
//               />
//               <h5 className="product-name">{product.productName}</h5>
//               <p className="product-details">{product.productDescription}</p>
//               <p className="product-price">৳{product.productPrice}</p>
//               <button
//                 className="add-to-cart-btn"
//                 onClick={() => handleAddToCart(product)}
//                 disabled={processing}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Cart Modal */}
//       {showCart && (
//         <div className="cart-modal">
//           <div className="cart-content">
//             <h2>Your Cart</h2>
//             <button
//               className="close-cart-btn"
//               onClick={() => setShowCart(false)}
//             >
//               X
//             </button>
//             {cart.length === 0 ? (
//               <p>Your cart is empty.</p>
//             ) : (
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Total</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item) => (
//                     <tr key={item.id}>
//                       <td>{item.productName}</td>
//                       <td>৳{item.productPrice}</td>
//                       <td>
//                         <button onClick={() => updateQuantity(item.id, -1)}>
//                           -
//                         </button>
//                         {item.quantity}
//                         <button onClick={() => updateQuantity(item.id, 1)}>
//                           +
//                         </button>
//                       </td>
//                       <td>৳{(item.quantity * item.productPrice).toFixed(2)}</td>
//                       <td>
//                         <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
//                           Remove
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//             <h3>Total: ৳{calculateTotalPrice()}</h3>
//             <button className="cancel-order-btn" onClick={cancelOrder}>
//               Cancel Order
//             </button>
//             <button className="place-order-btn" onClick={handlePlaceOrder}>
//               Place Order
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


//3rd approach


// // Product.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Product.css";
// // import "./ProductSearch.css"; // New isolated CSS for search styling
// import { useNavigate } from 'react-router-dom';

// export default function Product() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [processing, setProcessing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts();
//     fetchCart();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/api/products/");
//       setProducts(response.data);
//       setFilteredProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       toast.error("Failed to fetch products. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCart = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/api/cart/view/", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       });
//       setCart(Array.isArray(response.data) ? response.data : []);
//     } catch (error) {
//       console.error("Error fetching cart:", error);
//       setCart([]);
//     }
//   };

//   const handleAddToCart = async (product) => {
//     if (!localStorage.getItem("accessToken")) {
//       toast.error("Please log in to add products to the cart.");
//       return;
//     }

//     if (processing) return;
//     setProcessing(true);
//     try {
//       await axios.post(
//         "http://127.0.0.1:8000/api/cart/add/",
//         { productId: product.productId, quantity: 1 },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         }
//       );
//       toast.success(`${product.productName} added to cart!`);
//       fetchCart();
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       toast.error("Failed to add product to cart.");
//     } finally {
//       setProcessing(false);
//     }
//   };

//   const updateQuantity = async (cartId, increment) => {
//     const cartItem = cart.find((item) => item.id === cartId);
//     const newQuantity = Math.max(1, cartItem.quantity + increment);
//     try {
//       await axios.put(
//         `http://127.0.0.1:8000/api/cart/${cartId}/update/`,
//         { quantity: newQuantity },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         }
//       );
//       fetchCart();
//     } catch (error) {
//       console.error("Error updating cart quantity:", error);
//       toast.error("Failed to update product quantity.");
//     }
//   };

//   const handleRemoveFromCart = async (cartId) => {
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/cart/${cartId}/remove/`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       });
//       toast.success("Product removed from cart.");
//       fetchCart();
//     } catch (error) {
//       console.error("Error removing product from cart:", error);
//       toast.error("Failed to remove product from cart.");
//     }
//   };

//   const cancelOrder = () => {
//     setCart([]);
//     toast.info("Order canceled.");
//   };

//   const calculateTotalPrice = () =>
//     cart
//       .reduce((total, item) => total + item.quantity * item.productPrice, 0)
//       .toFixed(2);

//   const handlePlaceOrder = () => {
//     if (cart.length === 0) {
//       toast.error("Your cart is empty!");
//       return;
//     }
//     navigate('/checkout', {
//       state: {
//         cartItems: cart,
//         totalPrice: calculateTotalPrice()
//       }
//     });
//   };

//   const handleSearch = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     const filtered = products.filter(product =>
//       product.productName.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <div className="product-container">
//       <ToastContainer position="top-center" autoClose={2000} />
//       <div className="top-bar">
//         <h2 className="product-title">Products</h2>
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="product-search-input"
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//         <div className="cart-icon" onClick={() => setShowCart(true)}>
//           🛒<span className="cart-count">{cart.length}</span>
//         </div>
//       </div>

//       {loading ? (
//         <p>Loading products...</p>
//       ) : (
//         <div className="product-row">
//           {filteredProducts.map((product) => (
//             <div className="product-card" key={product.productId}>
//               <img
//                 src={`http://127.0.0.1:8000/${product.productImage}`}
//                 alt={product.productName}
//                 className="product-image"
//               />
//               <h5 className="product-name">{product.productName}</h5>
//               <p className="product-details">{product.productDescription}</p>
//               <p className="product-price">৳{product.productPrice}</p>
//               <button
//                 className="add-to-cart-btn"
//                 onClick={() => handleAddToCart(product)}
//                 disabled={processing}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {showCart && (
//         <div className="cart-modal">
//           <div className="cart-content">
//             <h2>Your Cart</h2>
//             <button className="close-cart-btn" onClick={() => setShowCart(false)}>X</button>
//             {cart.length === 0 ? (
//               <p>Your cart is empty.</p>
//             ) : (
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Total</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item) => (
//                     <tr key={item.id}>
//                       <td>{item.productName}</td>
//                       <td>৳{item.productPrice}</td>
//                       <td>
//                         <button onClick={() => updateQuantity(item.id, -1)}>-</button>
//                         {item.quantity}
//                         <button onClick={() => updateQuantity(item.id, 1)}>+</button>
//                       </td>
//                       <td>৳{(item.quantity * item.productPrice).toFixed(2)}</td>
//                       <td>
//                         <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
//                           Remove
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//             <h3>Total: ৳{calculateTotalPrice()}</h3>
//             <button className="cancel-order-btn" onClick={cancelOrder}>Cancel Order</button>
//             <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// Product.jsx
>>>>>>> 5885cfdf (Appoinmnet added)
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css";
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const [products, setProducts] = useState([]);
<<<<<<< HEAD
=======
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
>>>>>>> 5885cfdf (Appoinmnet added)
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products/");
      setProducts(response.data);
<<<<<<< HEAD
=======
      setFilteredProducts(response.data);
>>>>>>> 5885cfdf (Appoinmnet added)
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/cart/view/", {
<<<<<<< HEAD
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
=======
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
>>>>>>> 5885cfdf (Appoinmnet added)
      });
      setCart(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching cart:", error);
<<<<<<< HEAD
      setCart([]); // Ensure cart is an empty array on failure
=======
      setCart([]);
>>>>>>> 5885cfdf (Appoinmnet added)
    }
  };

  const handleAddToCart = async (product) => {
    if (!localStorage.getItem("accessToken")) {
      toast.error("Please log in to add products to the cart.");
      return;
    }

    if (processing) return;
    setProcessing(true);
    try {
<<<<<<< HEAD
      const response = await axios.post(
        "http://127.0.0.1:8000/api/cart/add/",
        { productId: product.productId, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
=======
      await axios.post(
        "http://127.0.0.1:8000/api/cart/add/",
        { productId: product.productId, quantity: 1 },
        { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
>>>>>>> 5885cfdf (Appoinmnet added)
      );
      toast.success(`${product.productName} added to cart!`);
      fetchCart();
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add product to cart.");
    } finally {
      setProcessing(false);
    }
  };

  const updateQuantity = async (cartId, increment) => {
    const cartItem = cart.find((item) => item.id === cartId);
    const newQuantity = Math.max(1, cartItem.quantity + increment);
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/cart/${cartId}/update/`,
        { quantity: newQuantity },
<<<<<<< HEAD
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
=======
        { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
>>>>>>> 5885cfdf (Appoinmnet added)
      );
      fetchCart();
    } catch (error) {
      console.error("Error updating cart quantity:", error);
      toast.error("Failed to update product quantity.");
    }
  };

  const handleRemoveFromCart = async (cartId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/cart/${cartId}/remove/`, {
<<<<<<< HEAD
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
=======
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
>>>>>>> 5885cfdf (Appoinmnet added)
      });
      toast.success("Product removed from cart.");
      fetchCart();
    } catch (error) {
      console.error("Error removing product from cart:", error);
      toast.error("Failed to remove product from cart.");
    }
  };

  const cancelOrder = () => {
    setCart([]);
    toast.info("Order canceled.");
  };

  const calculateTotalPrice = () =>
<<<<<<< HEAD
    cart
      .reduce((total, item) => total + item.quantity * item.productPrice, 0)
      .toFixed(2);
=======
    cart.reduce((total, item) => total + item.quantity * item.productPrice, 0).toFixed(2);
>>>>>>> 5885cfdf (Appoinmnet added)

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
<<<<<<< HEAD
    
    navigate('/checkout', {
      state: {
        cartItems: cart,
        totalPrice: calculateTotalPrice()
      }
    });
  };

  return (
    <div className="product-container">
      <ToastContainer position="top-center" autoClose={2000} />
      <h2 className="product-title">Products</h2>

      {/* Cart Icon */}
      <div className="cart-icon" onClick={() => setShowCart(true)}>
        🛒
        <span className="cart-count">{cart.length}</span>
      </div>

      {/* Product List */}
=======
    navigate('/checkout', {
      state: { cartItems: cart, totalPrice: calculateTotalPrice() }
    });
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = products.filter(product =>
      product.productName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="product-container">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="top-bar">
        <h2 className="product-title">Products</h2>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search products..."
            className="product-search-input"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="cart-icon" onClick={() => setShowCart(true)}>
          🛒<span className="cart-count">{cart.length}</span>
        </div>
      </div>

>>>>>>> 5885cfdf (Appoinmnet added)
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-row">
<<<<<<< HEAD
          {products.map((product) => (
=======
          {filteredProducts.map((product) => (
>>>>>>> 5885cfdf (Appoinmnet added)
            <div className="product-card" key={product.productId}>
              <img
                src={`http://127.0.0.1:8000/${product.productImage}`}
                alt={product.productName}
                className="product-image"
              />
              <h5 className="product-name">{product.productName}</h5>
              <p className="product-details">{product.productDescription}</p>
              <p className="product-price">৳{product.productPrice}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
                disabled={processing}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

<<<<<<< HEAD
      {/* Cart Modal */}
=======
>>>>>>> 5885cfdf (Appoinmnet added)
      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <h2>Your Cart</h2>
<<<<<<< HEAD
            <button
              className="close-cart-btn"
              onClick={() => setShowCart(false)}
            >
              X
            </button>
=======
            <button className="close-cart-btn" onClick={() => setShowCart(false)}>X</button>
>>>>>>> 5885cfdf (Appoinmnet added)
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <table>
                <thead>
                  <tr>
<<<<<<< HEAD
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
=======
                    <th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th>Actions</th>
>>>>>>> 5885cfdf (Appoinmnet added)
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>{item.productName}</td>
                      <td>৳{item.productPrice}</td>
                      <td>
<<<<<<< HEAD
                        <button onClick={() => updateQuantity(item.id, -1)}>
                          -
                        </button>
                        {item.quantity}
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          +
                        </button>
=======
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        {item.quantity}
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
>>>>>>> 5885cfdf (Appoinmnet added)
                      </td>
                      <td>৳{(item.quantity * item.productPrice).toFixed(2)}</td>
                      <td>
                        <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <h3>Total: ৳{calculateTotalPrice()}</h3>
<<<<<<< HEAD
            <button className="cancel-order-btn" onClick={cancelOrder}>
              Cancel Order
            </button>
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
=======
            <button className="cancel-order-btn" onClick={cancelOrder}>Cancel Order</button>
            <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
>>>>>>> 5885cfdf (Appoinmnet added)
          </div>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 5885cfdf (Appoinmnet added)
