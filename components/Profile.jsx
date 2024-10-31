import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTwitch,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaDribbble,
  FaFigma,
} from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const iconMap = {
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  twitch: FaTwitch,
  github: FaGithub,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  dribbble: FaDribbble,
  figma: FaFigma,
  default: MdArrowOutward,
};

const Profile = ({ name, username, tagline, profileImg, links }) => {
  return (
    <section className="flex justify-center items-start w-full">
      <div className="flex flex-col justify-start items-center container px-5 gap-7">
        <div className="flex flex-col justify-start items-center w-full gap-1">
          <img
            src={profileImg}
            className="rounded-full h-[175px] w-[175px] object-cover"
            alt={`${name}'s profile image`}
          />
          <p className="text-xl font-medium">{`@${username}`}</p>
          <p className="text-xl max-w-[350px] text-center">{tagline}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[500px]">
          {links.length > 0 ? (
            links.map((link, index) => {
              const IconComponent = iconMap[link.icon.toLowerCase()] || iconMap.default;

              return (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center gap-2 p-7 rounded-lg link transition-transform hover:scale-105"
                >
                  {IconComponent && <IconComponent className="text-4xl" />}
                  <p className="text-lg md:text-xl text-center">{link.name}</p>
                </Link>
              );
            })
          ) : (
            <p className="text-xl">No links available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
