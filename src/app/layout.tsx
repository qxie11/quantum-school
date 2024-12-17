import { ReduxProvider } from "@shared/lib/redux-provider";
import "./globals.css";
import { Golos_Text, Jost } from "next/font/google";
import { Metadata } from "next";
import { generateDefaultMetadata } from "@shared/utils/metadata";

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

export async function generateMetadata(): Promise<Metadata> {
  return await generateDefaultMetadata();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${golosText.variable} ${jost.variable}`}>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
