import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};
