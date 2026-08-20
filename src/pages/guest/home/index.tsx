import { HomePageBannerSection } from "@/components/features/home/homepage-banner-section";
import { ProfileSection } from "@/components/features/home/profile-section";
import { CardDataSection } from "@/components/features/home/card-data-section";

export default function HomePage() {
  return (
    <>
      <HomePageBannerSection />
      <ProfileSection />
      <CardDataSection />
    </>
  );
}