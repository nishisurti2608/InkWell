import React, {useEffect, useRef, useState} from 'react'
import emailjs from "emailjs-com";
const ContactUs = () => {
  const [message,setMessage] = useState();
    const form = useRef();

    //champ du formulaire du contact 
  const input = [
    { title:"Subject", type:"text",placeholder:""},
    { title: "Name",type: "text",placeholder: "",},
    { title: "Email",type: "email", placeholder: "joan@gmail.com"},
    {  title: "Message",  type: "textarea", placeholder: ""}
  ];

    useEffect(() => {
        if (message) {
          const timeout = setTimeout(() => {
            setMessage(null);
          }, 3000);
          return () => clearTimeout(timeout);
        }
      }, [message]);

  const HandleContact = async (formData) => {
      const data = {
          subject: formData.get("Subject"),
          name: formData.get("Name"),
          email: formData.get("Email"),
          message: formData.get("Message")
      }
        try {
           emailjs.send(
              import.meta.env.VITE_SERVICE_ID,
              import.meta.env.VITE_TEMPLATE_ID,
              {
                  subject: data.subject,
                  name: data.name,
                  email: data.email,
                  message: data.message
              },
              import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );

            setMessage("Votre message a été envoyé avec succès !");
          } catch (error) {
            console.error(error);
            setMessage("Une erreur s'est produite. Veuillez réessayer.");
          }
      console.log(data)
  }

  return (
    <div  className="w-200 py-16 ml-auto mr-auto ">
      <h1  className="text-5xl  text-white text-center" >Contact us</h1>
      <form
          ref={form}
          onSubmit={(e) => {
              e.preventDefault();
              HandleContact(new FormData(e.target));
            }}
           className="mt-8 flex flex-col gap-3">
        {
          input && (
              input.map((item)=>{
                return (
                      item.type === "textarea" ?  (<div
                        className="flex flex-col "
                        key={item.title}
                        >
                        <label className="text-white font-medium text-sm mb-4 "
                                htmlFor={item.title}>
                          {item.title}
                        </label>
                        <textarea name={item.title}
                                  className="inputstyle"
                                  id={item.title}
                                   cols="30"
                                   rows="10">
                        </textarea>

                      </div>) :
                      <div
                        className="flex flex-col "
                         key={item.title}>
                          <label className="text-white  font-medium text-sm mb-4"  htmlFor={item.title}>
                            {item.title}
                          </label>
                          <input
                            name={item.title}
                            className="inputstyle"
                            type={item.type}
                            id={item.title}
                            placeholder={item.placeholder}
                            required
                            autoComplete="on"
                          />
                      </div>

                )
              })
          )
        }        <button
                                  type="submit"
                                  className="text-[#2d3250] mt-5 cursor-pointer  border-2 border-[#f9b17a] tracking-wide font-semibold bg-[#f9b17a] hover:bg-[#2d3250] hover:text-[#f9b17a] w-1/2 py-2 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                 Envoyer
                            </button>

                {/* message goes here  */}
                {message && <p className="px-2 text-sm text-[#f9b17a]  font-medium bg-[#2d3250]  transform translate-y-1/2">{message}</p>}
          </form>

    </div>
  )
}

export default ContactUs