import useWishlistState from "../hooks/useWishlistState";

import ProductGrid from "../components/ProductGrid";

const WishlistPage = () => {
  const { hasItems, items } = useWishlistState();

  return (
    <>
        <h1 className="products-headline">Wishlist</h1>
      

      {hasItems ? (
        <ProductGrid products={items} grid={true}/>
      ) : (
        <p>Your list is empty</p>
      )}
    </>
  );
};

export default WishlistPage;
