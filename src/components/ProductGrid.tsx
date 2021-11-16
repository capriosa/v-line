import Product from "./Product";

const ProductGrid = ({ products, grid }) => {
  if (!products || products.length === 0) return null;
  
  return (
    <>
    <article>
    
      <div className="article">
      <h2>Headline</h2>
      <p>
        Build your own Headless eCommerce storefront with Next.js and Snipcart,
        and deliver swag powered by Printful. End to end commerce, styled using
        TailwindCSS and deployed on Netlify.
      </p>
      <p>
        Build your own Headless eCommerce storefront with Next.js and Snipcart,
        and deliver swag powered by Printful. End to end commerce, styled using
        TailwindCSS and deployed on Netlify.
      </p><p>
        Build your own Headless eCommerce storefront with Next.js and Snipcart,
        and deliver swag powered by Printful. End to end commerce, styled using
        TailwindCSS and deployed on Netlify.
      </p><p>
        Build your own Headless eCommerce storefront with Next.js and Snipcart,
        and deliver swag powered by Printful. End to end commerce, styled using
        TailwindCSS and deployed on Netlify.
      </p><p>
        Build your own Headless eCommerce storefront with Next.js and Snipcart,
        and deliver swag powered by Printful. End to end commerce, styled using
        TailwindCSS and deployed on Netlify.
      </p>
      </div>
    </article>
    
    <div className={`products ${grid === false ? "" : "grid"}`}>
      {products.map((product, index) => (
        <Product grid={grid} className={`${index % 2 === 0 && !grid ? "reverse": "" }`} key={product.id} {...product} />
      ))}
    </div>
    </>
  );
};

export default ProductGrid;
