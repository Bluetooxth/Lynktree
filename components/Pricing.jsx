import React from 'react';
import { TiTick } from "react-icons/ti";
import { GiTakeMyMoney } from "react-icons/gi";

const PricingPlan = () => {
  const plans = [
    {
      plan: "Basic",
      price: "Free",
      features: [
        "Single Link",
        "Basic Analytics",
        "Standard Themes",
        "Community Support",
      ],
    },
    {
      plan: "Pro",
      price: "₹499/month",
      features: [
        "5 Links",
        "Advanced Analytics",
        "Custom Themes",
        "Priority Support",
      ],
    },
    {
      plan: "Premium",
      price: "₹1999/month",
      features: [
        "Unlimited Links",
        "Advanced Analytics",
        "Custom Themes",
        "Priority Support",
        "Advanced SEO Options",
      ],
    },
  ];

  return (
    <section className="flex justify-center items-center w-full py-10">
      <div className="flex flex-col justify-start items-start gap-7 px-5 lg:container w-full">
        <h2 className="text-4xl md:text-5xl font-medium text-center w-full">
          Choose Your Lynktree Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch w-full gap-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-start gap-3 p-5 h-full rounded-xl cursor-pointer card"
            >
              <div className="flex flex-col justify-start items-start gap-2 w-full">
                <h3 className="text-3xl font-semibold text-cyan-600">{plan.plan}</h3>
                <p className="text-2xl font-medium">{plan.price}</p>
                <ul className="list-none">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-lg flex items-center gap-2">
                      <TiTick className="text-2xl text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="px-4 py-2 text-xl font-medium w-full rounded-md gap-2 btn">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;