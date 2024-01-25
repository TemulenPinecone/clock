import Layout from "@/components/Layout";
import "@/pages/styles/globals.css";
import DateTime from "@/components/Clock";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
