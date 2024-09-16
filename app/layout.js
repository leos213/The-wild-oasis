import Logo from "@/app/_components/Logo";
import Navigation from "./_components/Navigation";

//////importing font from google, then created object. [latin] is important //////

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
// //////////////////////////////////////////

// @/app - მიუთითბს რომ ყველა ფაილიდან მიწვდეს და არ დაჭირდეს ../../ ასე გამოყოფა //////
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

// Favicon-ის სათაური, %s - ით არის რომ ნებისმიერი ფაილის სახელი იყოს გამოყოფილი და შემდეგ გაგრძელდეს / მთავარი სახელით
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },

  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // tailwind-ი და google-დან შემოიმპორტირებული josefin-ი
        className={`${josefin.className}antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
