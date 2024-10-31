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
            height={150}
            width={150}
            className="rounded-full object-cover"
            alt={`${name}'s profile image`}
          />
          {/* <h2 className="text-3xl font-medium">{name}</h2> */}
          <p className="text-xl font-medium">{`@${username}`}</p>
          <p className="text-xl max-w-[350px]">{tagline}</p>
        </div>

        <div className="flex flex-col justify-start items-center w-full gap-5">
          {links.length > 0 ? (
            links.map((link, index) => {
              const IconComponent = iconMap[link.icon.toLowerCase()];

              return (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center gap-2 px-7 py-2 md:py-3 w-full max-w-[500px] link"
                >
                  {IconComponent && <IconComponent className="text-3xl" />}
                  <span className="text-2xl">{link.name}</span>
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
