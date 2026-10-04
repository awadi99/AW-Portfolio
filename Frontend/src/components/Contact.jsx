import { useForm } from "react-hook-form";
import { useContact } from "../hook/useContact.js";
import contactSchema from "../schema/contact.schema.js";
import { zodResolver } from "@hookform/resolvers/zod";

import { styles } from '../../style.js'
import { EarthCanvas } from './../components/canvas/index.js';
import { SectionWapper } from './../hoc/index.js'
import { slideIn } from "../utils/motion.js";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./common/ui/Button.jsx";
import Input from "./common/ui/Input.jsx";



function Contact() {
  //   const fromRef = useRef();
  //   const [from, setFrom] = useState({
  //     name: "",
  //     email: "",
  //     message: ""
  //   })
  //   const [loading, setLoading] = useState(false);

  //   const sendValue = async (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     try {
  //     const res = await axios.post("https://aw-portfolio-backend.onrender.com/api/person/contacts",from);
  //     toast.success(res.data.msg || "Message sent!");
  //     setFrom({
  //       name:"",
  //       email:"",
  //       message:""
  //     });


  //     } catch (error) {
  //       console.error(error);
  //       toast.error(error.response?.data?.msg||"Internal Server Error");
  //     }
  //     finally{
  //       setLoading(false);
  //     }
  //   }


  //   const handleValue = (e) => {
  //     const { name, value } = e.target;
  //     setFrom({ ...from, [name]: value });
  //   }



  const { createContact } = useContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  })



  const onSubmit = (data) => {
    createContact.mutate(data, {
      onSuccess: () => {
        toast.success("Contact submitted successfully");
        reset();
      },
      onError: () => {
        toast.error("Contact submission failed!")
      },
    });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden !p-10 " >
      <motion.div
        variants={slideIn("left", "tween", 0.1, 1.5)}
        className="flex-[0.75] bg-black-100 !p-8 rounded-2xl sm:w-auto w-auto  ">
        <p className={`${styles.sectionSubText} `}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} !mb-10 `}>Contact.</h3>


        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-8 ">

          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium">Your Name</span>
          </label>


          <Input
            type="text"
            id="name"
            name="name"
            placeholder="What's your name"
            className="bg-tertiary !py-4 !px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium"

            error={errors.name?.message}
            {...register("name")}
          />

          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium">Your Email</span>
          </label>


          <Input
            type="email"
            name="email"
            id="email"
            placeholder="What's your email?"
            className="bg-tertiary !py-4 !px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium"

            error={errors.email?.message}
            {...register("email")}
          />


          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium ">Your Message</span>
          </label>


          <textarea
            rows="7"
            name="message"
            id="message"
            placeholder="What do you want to say?"
            {...register("message")}
            className={`bg-tertiary !py-4 !px-6 placeholder:text-secondary
    text-white rounded-lg 
    font-medium
    ${errors.message
                ? "border-red-500 ring-4 ring-red-500/10"
                : "border-slate-200 focus:border-stale-500 focus:ring-4 focus:ring-stale-500/10"
              }`}
          />

          {errors.message && (
            <p className="text-red-500 text-sm font-bold uppercase">
              {errors.message.message}
            </p>
          )}






<Button
  type="submit"
  className="btn !bg-tertiary
    placeholder:text-secondary
    !text-white rounded-lg
    !outline-none !border-none
    font-medium
    w-auto !rounded-4xl
    opacity-70
    hover:opacity-100
    transition-all"
  loading={createContact.isPending}
  disabled={createContact.isPending}
>
  Send Message
</Button>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.1, 1.5)}
        className="xl:flex-1  xl:h-auto md:h-[550px] h-[350px] ">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWapper(Contact, "contact");
