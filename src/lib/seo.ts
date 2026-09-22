import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function buildMetadata({
  title,
  description,
  path = "/",
  image
}: {
  title: string;
  description: string;
  path?: string;
  image?: string | null;
}): Metadata {
  const url = new URL(path, siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "ROVANX",
      images: image ? [{ url: image }] : undefined,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
