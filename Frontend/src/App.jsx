import { Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas  } from "./components";
import StarsCSS from "./components/StarsCSS";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <>
      <div className="relative z-0 bg-primary  contrast-105  " >
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <StarsCSS/>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      {/* Toast outside all animated/canvas layers */}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
        style={{ zIndex: 999999 }}
        toastStyle={{
          backgroundColor: "#000211",
          color: "#ffffff",
          width: "350px",
          marginTop: "5px"
        }}
      />
    </>
  );
}


