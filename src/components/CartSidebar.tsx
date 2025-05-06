
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartSidebar = () => {
  const { cartItems, isCartOpen, toggleCart, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    toggleCart();
    navigate("/payment");
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 z-50 transition-opacity"
        onClick={toggleCart}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-lg z-50 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium">Shopping Cart</h2>
          <Button variant="ghost" size="icon" onClick={toggleCart}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Button onClick={toggleCart}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-2">
              {cartItems.map((item) => (
                <CartItem 
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                />
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4">
            <div className="flex justify-between items-center text-lg font-medium">
              <span>Subtotal</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500">Shipping and taxes calculated at checkout</p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleCheckout}>
              Checkout
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
