import React from "react";

const HowItWorks = () => {
  const fetx = [
    {
      name: "Sign Up",
      desc: "Create your free Lynktree account in seconds. No credit card required.",
      icon: "1",
    },
    {
      name: "Add Your Links",
      desc: "Easily add and organize all your important links in one place.",
      icon: "2",
    },
    {
      name: "Share Your Lynktree",
      desc: "Share your unique Lynktree URL across all your social media profiles and bio links.",
      icon: "3",
    },
  ];

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start gap-7 px-5 lg:container w-full">
        <h2 className="text-4xl md:text-5xl font-medium text-center w-full">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-4 w-full">
          {fetx.map((fet, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-stretch gap-2 w-full p-5"
            >
              <h3 className="text-2xl bg-cyan-600 text-slate-100 w-16 h-16 flex items-center justify-center rounded-full text-center self-center font-semibold">
                {fet.icon}
              </h3>
              <p className="text-2xl font-medium text-center">{fet.name}</p>
              <p className="text-lg">{fet.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;