import Link from "next/link";

import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";



const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
    
      <header className="py-6 md:py-12">
        <div className="max-w-9xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="md:w-1/3">
              <nav className="flex items-center justify-start space-x-3 md:space-x-6">
              <Link href="/">
                  <a className="stencil">
                    Two/Words
                  </a>
                </Link>
                <Link href="/all-products">
                  <a className="text-gray-800 hover:text-blue-600 p-1 transition">
                    All Products
                  </a>
                </Link>
                <Link href="/about">
                  <a className="text-gray-800 hover:text-blue-600 p-1 transition">
                    About
                  </a>
                </Link>
                <Link href="/terms-of-sale">
                  <a className="text-gray-800 hover:text-blue-600 p-1 transition">
                    Terms of Sale
                  </a>
                </Link>
                <Link href="/wishlist">
                <a
                  className="px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition"
                  aria-label="Wishlist"
                >
                  {hasItems && (
                    <span className="Brick"></span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="logo Brick"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                </a>
              </Link>
              <div
                className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="cart-count">{cart.items.count}</span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 logo"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </div>
              </nav>
            </div>
            
          </div>
        </div>
      </header>
      <main>
      
        <div className="children">{children}</div>
      </main>
      <footer className="max-w-6xl mx-auto px-6">
        
          <nav className="flex items-center justify-end space-x-3 md:space-x-6">
            
            <Link href="/terms-of-sale">
              <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
                Terms of Sale
              </a>
            </Link>
          </nav>
        
      </footer>
    </>
  );
};

export default Layout;
