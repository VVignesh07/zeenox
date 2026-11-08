import { Metadata } from "next";
import NicheLandingPage from "@/components/NicheLandingPage";
import siteConfig from "@/data/siteConfig";

const niche = siteConfig.niches.find((n) => n.slug === "website-for-clinics")!;

export const metadata: Metadata = {
  title: `${niche.title} | ZeenOx Digital Agency`,
  description: niche.subheadline,
  alternates: { canonical: `${siteConfig.siteUrl}/${niche.slug}` },
};

export default function Page() {
  return <NicheLandingPage niche={niche} />;
}

