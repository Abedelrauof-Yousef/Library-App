import Header from "../Components/headerComponent/headerComponent";
import Book from "../Components/mainComponent/mainComponent";
import Footer from "../Components/footerComponent/footerComponent";
import MyForm from "../Components/mainComponent/form";

function HomePage() {
  return (
    <div>
      <Header />
      <Book />
      <MyForm />
      <Footer />
    </div>
  );
}

export default HomePage;
