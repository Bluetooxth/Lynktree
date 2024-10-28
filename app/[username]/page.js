"use client";
import Profile from "@/components/Profile";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

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
                console.error("Error fetching profile data:", error.response?.data || error);
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
                    links={(profileData.links || []).map(link => ({
                        name: link.name,
                        icon: link.icon,
                        url: link.url
                    }))}
                />
            ) : (
                <p className="text-xl font-normal text-center">
                    Loading profile...
                </p>
            )}
        </main>
    );
};

export default ProfilePage;