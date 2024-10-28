import localFont from "next/font/local";
import "./globals.css";
import "./styles.css"

const font = localFont({
  src: "./fonts/font.ttf",
  weight: "400",
});

export const metadata = {
  title: "Lynktree",
  description: "Your one-stop solution for managing and sharing links with style.",
  keywords: "lynktree, link management, social media, profile links, portfolio",
  openGraph: {
    title: "Lynktree",
    description: "Your one-stop solution for managing and sharing links with style.",
    url: "https://lynktree.vercel.app",
    images: [
      {
        url: "/preview.svg",
        width: 800,
        height: 600,
        alt: "Lynktree Preview Image",
      },
    ],
    site_name: "Lynktree",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lynktree",
    description: "Your one-stop solution for managing and sharing links with style.",
    image: "/preview.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}