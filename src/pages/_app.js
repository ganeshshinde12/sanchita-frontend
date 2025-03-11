// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
import "../styles/globals.css";
import Header from "../Components/Header"; // Adjust the path as necessary
import Footer from "../Components/Footer"; // Adjust the path as necessary

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
