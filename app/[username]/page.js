"use client";
import Profile from "@/components/Profile";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export async function generateMetadata({ params }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const username = params.username;

  try {
    const { data } = await axios.get(`${apiUrl}/profile/${username}`);
    return {
      title: `${data.name} - ${data.tagline}`,
      description: `Check out ${data.name}'s profile on our platform. ${data.tagline}`,
      openGraph: {
        title: `${data.name} - ${data.tagline}`,
        description: `Discover ${data.name}'s profile with interesting links and insights.`,
        images: [data.profile_url || "/default-profile-image.jpg"],
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/profile/${username}`,
      },
      twitter: {
        card: "summary_large_image",
        title: `${data.name} - ${data.tagline}`,
        description: `Explore ${data.name}'s profile with unique insights.`,
        images: [data.profile_url || "/default-profile-image.jpg"],
      },
    };
  } catch (error) {
    console.error(
      "Error fetching profile data for metadata:",
      error.response?.data || error
    );
    return {
      title: "Profile",
      description: "Loading profile...",
    };
  }
}

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
  );
};

export default ProfilePage;
