"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const payload = {
            email: email,
            password: password,
        };

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const { data } = await axios.post(
                `${apiUrl}/login`,
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );

            console.log("Login successful");

            setTimeout(() => {
                router.push('/dashboard');
            }, 500);
        } catch (error) {
            setError(error.response?.data?.error || 'An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative flex justify-center items-center dotgrid w-full min-h-screen">
            <div className="flex flex-col justify-start items-center container px-5 gap-5 relative z-10">
                <form 
                    className="flex flex-col justify-start items-start w-full gap-5 max-w-[700px] formm p-7 rounded-xl" 
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-center w-full">Login to your account</h2>
                    <div className="flex flex-col justify-start items-start w-full gap-1">
                        <label className="text-xl" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            required 
                            className="w-full px-3 py-2 rounded-md inputt outline-none text-zinc-800" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start w-full gap-1">
                        <label className="text-xl" htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            required 
                            className="w-full px-3 py-2 rounded-md inputt outline-none text-zinc-800" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="bg-cyan-600 hover:bg-cyan-700 px-7 py-2 rounded-lg text-xl slow" type="submit">
                        {loading ? 'Logging in...' : error ? 'Error' : 'Login'}
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="flex flex-col justify-start items-start gap-2 w-full">
                        <p className="flex items-center gap-2">
                            {`Don't have an account?`}
                            <Link href='/signup' className="underline text-cyan-600">
                                Signup here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LoginForm;
