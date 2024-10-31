import React from "react";
import axios from "axios";

export async function generateMetadata({ params }) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
        const { data } = await axios.get(`${apiUrl}/profile/${params.username}`);
        return {
            title: `${data.name} - ${data.tagline}`,
            description: `Check out ${data.name}'s profile. ${data.tagline}`,
            openGraph: {
                title: `${data.name} - ${data.tagline}`,
                description: `Discover ${data.name}'s profile with interesting links and insights.`,
                images: [data.profile_url || "/default-profile-image.jpg"],
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/profile/${params.username}`,
            },
            twitter: {
                card: "summary_large_image",
                title: `${data.name} - ${data.tagline}`,
                description: `Explore ${data.name}'s profile with unique insights.`,
                images: [data.profile_url || "/default-profile-image.jpg"],
            },
        };
    } catch (error) {
        console.error("Error fetching profile data for metadata:", error.response?.data || error);
        return {
            title: "Profile",
            description: "Loading profile...",
        };
    }
}

export default function ProfileLayout({ children }) {
    return <>{children}</>;
}