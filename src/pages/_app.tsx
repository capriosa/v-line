import { AppProps } from "next/app";
import "the-new-css-reset/css/reset.css";

import "../styles/app.css";

import { WishlistProvider } from "../context/wishlist";
import Layout from "../components/Layout";
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WishlistProvider>
      <Layout>
        <Component {...pageProps} />
        <NextSeo
      title="Two/Words T-Shirt E-Commerce"
      description="Two/Words T-Shirt E-Commerce."
      canonical="https://www.two-words.de/"
      openGraph={{
        url: 'https://www.two-words-de/',
        title: 'Two/Words T-Shirt E-Commerce',
        description: 'Two/Words T-Shirt E-Commerce',
        
        site_name: 'Two/Words',
      }}
      twitter={{
        handle: '@mdwo',
        site: '@mdwp',
        cardType: 'summary_large_image',
      }}
    />
      </Layout>
    </WishlistProvider>
  );
}

export default MyApp;
