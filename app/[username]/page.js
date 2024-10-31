"use client";
import Profile from "@/components/Profile";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Head from "next/head";

const ProfilePage = () => {
  const [user, setUser] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    tagline: "",
    username: "",
    profile_url: "",
    links: [],
  });

  const { username } = useParams();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const { data } = await axios.get(`${apiUrl}/profile/${username}`);
        setProfileData(data);
        setUser(true);
      } catch (error) {
        console.error(
          "Error fetching profile data:",
          error.response?.data || error
        );
      }
    };

    if (username) {
      fetchProfileData();
    }
  }, [username]);

  return (
    <>
      <Head>
        <title>
          {user ? `${profileData.name} - ${profileData.tagline}` : "Profile"}
        </title>
        <meta
          name="description"
          content={
            user
              ? `Check out ${profileData.name}'s profile on our platform. ${profileData.tagline}`
              : "Loading profile..."
          }
        />
        <meta
          property="og:title"
          content={
            user ? `${profileData.name} - ${profileData.tagline}` : "Profile"
          }
        />
        <meta
          property="og:description"
          content={
            user
              ? `Discover ${profileData.name}'s profile with interesting links and insights.`
              : "Loading profile..."
          }
        />
        <meta
          property="og:image"
          content={
            user ? profileData.profile_url : "/default-profile-image.jpg"
          }
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/profile/${username}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="formbg flex justify-center items-start w-full min-h-screen py-12">
        {user ? (
          <Profile
            name={profileData.name}
            tagline={profileData.tagline}
            username={profileData.username}
            profileImg={profileData.profile_url}
            links={(profileData.links || []).map((link) => ({
              name: link.name,
              icon: link.icon,
              url: link.url,
            }))}
          />
        ) : (
          <p className="text-xl font-normal text-center">Loading profile...</p>
        )}
      </main>
    </>
  );
};

export default ProfilePage;
