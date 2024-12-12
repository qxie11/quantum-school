import { ReduxProvider } from "@shared/lib/redux-provider";
import "./globals.css";
import { Golos_Text, Jost } from "next/font/google";

// Configure the fonts
const golosText = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-golos",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${golosText.variable} ${jost.variable}`}>
      <body>
        <div className="max-w-[2400px] mx-auto">
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}