import { 
    LinkIcon, 
    Instagram, 
    Twitter, 
    Youtube, 
    Twitch, 
    Github, 
    Facebook, 
    Linkedin, 
    Dribbble, 
    Figma,
    Zap 
  } from "lucide-react";
import Link from "next/link";
  
  export default function HeroSection() {
    const socialIcons = [
      Instagram, 
      Twitter, 
      Youtube, 
      Twitch, 
      Github, 
      Facebook, 
      Linkedin, 
      Dribbble, 
      Figma
    ];
  
    return (
      <section className="relative w-full py-20 md:py-32 overflow-hidden min-h-screen flex justify-center items-center dotgrid">
        <div className=" relative z-10 mx-auto px-5 space-y-6 text-center lg:container w-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-7xl font-semibold heading">
            One Link for All Your Content
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Simplify your online presence. Connect all your profiles and content with a single link.
          </p>
          
          <Link href={'/login'} className="px-7 py-2 rounded-lg text-lg font-medium bg-cyan-600 hover:bg-cyan-700 flex items-center gap-2 slow">
            Get Your Lynktree <Zap />
          </Link>
  
          <div className="flex flex-col items-center gap-6">
            <p className="text-lg px-7 py-1 bg-slate-100 bg-opacity-10 rounded-full text-center">
              Connect your digital world
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {socialIcons.slice(0, 5).map((Icon, index) => (
                <Icon key={index} className="h-8 w-8" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }