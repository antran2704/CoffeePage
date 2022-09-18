import { useState } from "react";
import "./App.scss";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!isOpenModal);
  };

  return (
    <div className="App">
      <Navbar handleOpenModal={handleModal} isOpenModal={isOpenModal} />
      <Header isOpenModal={isOpenModal} />
      <Content isOpenModal={isOpenModal} />
      <Footer isOpenModal={isOpenModal} />
    </div>
  );
}

export default App;
