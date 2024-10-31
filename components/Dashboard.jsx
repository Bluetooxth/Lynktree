"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Plus, Trash, Edit, LogOut } from "lucide-react";
import { getCookie } from "@/lib/getCookie";
import { removeCookie } from "@/lib/removeCookie";
import Cookies from "universal-cookie";

const UserUpdateForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tagline, setTagline] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [links, setLinks] = useState([{ name: "", url: "", icon: "" }]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const token = getCookie();
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const { data } = await axios.get(`${apiUrl}/get`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (data) {
        setId(data.id);
        setName(data.name);
        setUsername(data.username);
        setEmail(data.email);
        setTagline(data.tagline);
        setProfileUrl(data.profile_url);
        setLinks(data.links || []);
      } else {
        setError("User data not found");
      }
    } catch (err) {
      console.error("Error fetching user details:", err);
      setError("Error fetching user details");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const { data } = await axios.put(
        `${apiUrl}/update/${id}`,
        {
          username,
          name,
          email,
          password,
          tagline,
          profile_url: profileUrl,
          links: links.map((link) => ({
            name: link.name,
            url: link.url,
            icon: link.icon,
          })),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.error) {
        setError(data.error);
      } else {
        alert("Successfully Updated");
        router.push("/dashboard");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleLinkChange = (index, e) => {
    const { name, value } = e.target;
    const updatedLinks = [...links];
    updatedLinks[index][name] = value;
    setLinks(updatedLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, { name: "", url: "", icon: "" }]);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-start items-start w-full container px-5 py-12">
        <h2 className="text-4xl font-medium">Dashboard</h2>
        <form
          className="flex flex-col justify-start items-start gap-5 w-full mt-5 formm p-7 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-medium text-zinc-200">
            Your profile url is {`https://lynktree.vercel.app/${username}`}
          </h3>
          <h2 className="text-3xl font-medium text-zinc-400">
            Update your Lynktree
          </h2>

          <div className="flex flex-col w-full gap-2">
            <label className="text-xl text-slate-200" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              autoComplete="name"
              className="w-full px-3 py-2 rounded-md outline-none text-slate-300 inputt"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="text-xl text-slate-200" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Your username"
              required
              autoComplete="username"
              className="w-full px-3 py-2 rounded-md outline-none text-slate-300 inputt"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="text-xl text-slate-200" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
              autoComplete="email"
              className="w-full px-3 py-2 rounded-md outline-none text-slate-300 inputt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="text-xl text-slate-200" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password (optional)"
              autoComplete="new-password"
              className="w-full px-3 py-2 rounded-md outline-none text-slate-300 inputt"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="text-xl text-slate-200" htmlFor="tagline">
              Tagline
            </label>
            <input
              id="tagline"
              name="tagline"
              type="text"
              placeholder="Your tagline"
              autoComplete="off"
              className="w-full px-3 py-2 rounded-md outline-none text-slate-300 inputt"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="text-xl text-slate-200" htmlFor="profileUrl">
              Profile Image URL
            </label>
            <input
              id="profileUrl"
              name="profileUrl"
              type="url"
              placeholder="Profile Image URL"
              autoComplete="off"
              className="w-full px-3 py-2 rounded-md outline-none text-slate-300 inputt"
              value={profileUrl}
              onChange={(e) => setProfileUrl(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="text-xl text-slate-200" htmlFor="links">
              Links
            </label>
            {links.map((link, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 w-full gap-2 items-start justify-start"
              >
                <input
                  id={`link-name-${index}`}
                  name="name"
                  type="text"
                  placeholder="Social Name"
                  autoComplete="off"
                  className="w-full px-3 py-2 rounded-md outline-none text-slate-300 inputt"
                  value={link.name}
                  onChange={(e) => handleLinkChange(index, e)}
                />
                <input
                  id={`link-url-${index}`}
                  name="url"
                  type="url"
                  placeholder="Social URL"
                  autoComplete="off"
                  className="w-full px-3 py-2 rounded-md outline-none text-slate-300 inputt"
                  value={link.url}
                  onChange={(e) => handleLinkChange(index, e)}
                />
                <select
                  id={`link-icon-${index}`}
                  name="icon"
                  className="w-full px-3 py-2 rounded-md text-slate-300 inputt outline-none"
                  value={link.icon}
                  onChange={(e) => handleLinkChange(index, e)}
                >
                  <option value="">Select Icon</option>
                  <option value="Default">Default</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Youtube">Youtube</option>
                  <option value="Twitch">Twitch</option>
                  <option value="Github">Github</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Linkedin">Linkedin</option>
                  <option value="Dribbble">Dribbble</option>
                  <option value="Figma">Figma</option>
                </select>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-start items-start gap-2">
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-lg mt-2 flex items-center slow"
              onClick={() => handleRemoveLink(links.length - 1)}
              disabled={links.length === 1}
            >
              Remove Last Link <Trash className="w-4 h-4 inline ml-1" />
            </button>
            <button
              type="button"
              className="bg-cyan-600 hover:bg-cyan-700 text-slate-100 px-5 py-2 rounded-lg text-lg mt-2 flex items-center text-center slow"
              onClick={handleAddLink}
            >
              Add More <Plus className="w-4 h-4 inline ml-2" />
            </button>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="flex flex-wrap justify-start items-start gap-2">
            <button
              className="bg-cyan-600 hover:bg-cyan-700 text-slate-100 px-5 py-2 rounded-lg text-lg flex items-center slow"
              type="submit"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}{" "}
              <Edit className="w-4 h-4 inline ml-2" />
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-lg flex items-center slow"
              type="button"
              onClick={async () => {
                try {
                  removeCookie();
                  setTimeout(() => {
                    router.push("/login");
                  }, 5000);
                } catch (error) {
                  setError("Error logging out");
                }
              }}
            >
              Logout <LogOut className="w-4 h-4 inline ml-2" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserUpdateForm;
