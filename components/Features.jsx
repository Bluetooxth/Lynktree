import React from "react";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { BsPaletteFill } from "react-icons/bs";
import { MdOutlineAnalytics } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";

const Features = () => {
  const fetx = [
    {
      name: "Easy to Use",
      desc: "Set up in minutes with no coding required—add, edit, and organize links effortlessly.",
      icon: <FaCheckDouble />,
    },
    {
      name: "Customizable",
      desc: "Personalize your Lynktree with themes and custom domains to reflect your brand.",
      icon: <BsPaletteFill />,
    },
    {
      name: "Analytics",
      desc: "Track clicks and views to optimize link performance and gain audience insights.",
      icon: <MdOutlineAnalytics />,
    },
    {
      name: "Mobile Optimized",
      desc: "Enjoy a seamless experience across devices with our responsive design.",
      icon: <MdOutlineSmartphone />,
    },
    {
      name: "Fast Loading",
      desc: "Experience lightning-fast page loads, keeping your audience engaged and satisfied.",
      icon: <AiOutlineThunderbolt />,
    },
    {
      name: "Secure",
      desc: "Rest easy knowing your data is protected with industry-standard encryption.",
      icon: <RiSecurePaymentFill />,
    },
  ];

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start gap-7 px-5 lg:container w-full">
        <h2 className="text-4xl md:text-5xl font-medium text-center w-full">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-4 w-full">
          {fetx.map((fet, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-stretch gap-2 w-full p-5 cursor-pointer rounded-lg card"
            >
              <h3 className="text-4xl text-cyan-600">{fet.icon}</h3>
              <p className="text-2xl font-medium">{fet.name}</p>
              <p className="text-lg">{fet.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;