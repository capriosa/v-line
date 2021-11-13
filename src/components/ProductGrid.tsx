import Product from "./Product";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div>
      {products.map((product, index) => (
        <Product className={`${index % 2 === 0 ? "reverse": "" }`} key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
