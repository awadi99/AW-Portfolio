import { useState, useRef } from "react"
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { styles } from '../../style.js'
import { EarthCanvas } from './../components/canvas/index.js'
import { SectionWapper } from './../hoc/index.js'
import { slideIn } from "../utils/motion.js";
import axios from "axios";
import { toast,ToastContainer,Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Contact() {
  const fromRef = useRef();
  const [from, setFrom] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false);

  const sendValue = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    const res = await axios.post("https://aw-portfolio.onrender.com/api/person/contacts",from);
    toast.success(res.data.msg || "Message sent!");
    setFrom({
      name:"",
      email:"",
      message:""
    });


    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.msg||"Internal Server Error");
    }
    finally{
      setLoading(false);
    }
  }


  const handleValue = (e) => {
    const { name, value } = e.target;
    setFrom({ ...from, [name]: value });
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden !p-10 " >
      <motion.div
        variants={slideIn("left", "tween", 0.1, 1.5)}
        className="flex-[0.75] bg-black-100 !p-8 rounded-2xl sm:w-auto w-auto  ">
        <p className={`${styles.sectionSubText} `}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} !mb-10 `}>Contact.</h3>
        <form action="" ref={fromRef}
          onSubmit={sendValue}
          className="mt-12 flex flex-col gap-8 ">

          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={from.name}
            id="name"
            onChange={handleValue}
            placeholder="What's your name?"
            className="bg-tertiary !py-4 !px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium"/>

          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={from.email}
            id="email"
            onChange={handleValue}
            placeholder="What's your email?"
            className="bg-tertiary !py-4 !px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium"/>


          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium ">Your Message</span>
          </label>
          <textarea
            rows="7"
            name="message"
            value={from.message}
            onChange={handleValue}
            placeholder="What do you want to say?"
            className="bg-tertiary !py-4 !px-6 placeholder:text-secondary
        text-white rounded-lg outline-none border-none font-medium"/>
          <button className="btn !bg-tertiary
          placeholder:text-secondary
          !text-white rounded-lg 
              !outline-none !border-none 
              font-medium
              w-40 !rounded-4xl 
              opacity-70 
              hover:opacity-100 
              transition-all">
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.1, 1.5)}
        className="xl:flex-1  xl:h-auto md:h-[550px] h-[350px] ">
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWapper(Contact, "contact");
