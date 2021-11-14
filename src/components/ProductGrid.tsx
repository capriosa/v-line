import Product from "./Product";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <>
    <article>
    
      <div className="article">
      <h2>Headline</h2>
      <p>
        Build your own Headless eCommerce storefront with Next.js and Snipcart,
        and deliver swag powered by Printful. End to end commerce, styled using
        TailwindCSS and deployed on Vercel.
      </p>
      <p>
        Build your own Headless eCommerce storefront with Next.js and Snipcart,
        and deliver swag powered by Printful. End to end commerce, styled using
        TailwindCSS and deployed on Vercel.
      </p><p>
        Build your own Headless eCommerce storefront with Next.js and Snipcart,
        and deliver swag powered by Printful. End to end commerce, styled using
        TailwindCSS and deployed on Vercel.
      </p><p>
        Build your own Headless eCommerce storefront with Next.js and Snipcart,
        and deliver swag powered by Printful. End to end commerce, styled using
        TailwindCSS and deployed on Vercel.
      </p><p>
        Build your own Headless eCommerce storefront with Next.js and Snipcart,
        and deliver swag powered by Printful. End to end commerce, styled using
        TailwindCSS and deployed on Vercel.
      </p>
      </div>
    </article>
    <div>
      {products.map((product, index) => (
        <Product className={`${index % 2 === 0 ? "reverse": "" }`} key={product.id} {...product} />
      ))}
    </div>
    </>
  );
};

export default ProductGrid;
