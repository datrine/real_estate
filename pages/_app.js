import Layout from "../components/Layout";
import "../style/index.css";
export default function RootLayout({ Component, pageProps }) {
  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
  );
}
