import { headers } from "next/headers";

export async function generateDefaultMetadata() {
  const requestHeaders = await headers();
  const canonical =
    requestHeaders.get("referer") ||
    `${process.env.NEXT_PUBLIC_CLIENT_URL}${requestHeaders.get("x-url")}` ||
    "https://quantum.school";
  const imageUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/thumbnail.png`;

  return {
    title: "Quantum School: школа веб-разработки.",
    description: "Quantum School — ваш путь к профессии веб-разработчика.",
    openGraph: {
      title: "Quantum School",
      description:
        "Quantum School предлагает современное обучение веб-разработке для новичков и профессионалов.",
      url: canonical,
      images: [
        {
          url: imageUrl,
          alt: "Quantum School",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: "Quantum School",
      description:
        "Присоединяйтесь к Quantum School и освоите веб-разработку с нуля.",
      images: imageUrl,
    },
    alternates: {
      canonical,
    },
  };
}
