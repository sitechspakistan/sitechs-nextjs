import ServiceDetailHero from "@/app/components/ServiceDetailHero";
import Component from "./component";

export const metadata = {
  title: "Creative Logo Design & Branding Agency for Startups | Sitechs",
  description:
    "Build a powerful brand identity with Sitechs. Our logo design and branding services help startups and businesses stand out with unique, memorable, and professional visual identities.",
  alternates: {
    canonical: "https://sitechs.co/logo-branding",
  },
};

export default function LogoBranding() {
  return (
    <>
      <ServiceDetailHero
        heading="Logo Branding"
        description={
          <>
            Build a powerful brand identity with Sitechs. <br />
            Our logo design and branding services help startups and businesses
            stand out with unique, memorable, and professional visual
            identities.
            <br />
            From websites to SaaS platforms, we focus on performance
            <br />
            and clean, maintainable code.
          </>
        }
      />
    </>
  );
}
