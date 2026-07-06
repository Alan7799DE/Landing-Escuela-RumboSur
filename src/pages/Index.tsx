import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProposalSection } from "@/components/sections/ProposalSection";
import { ClassesSection } from "@/components/sections/ClassesSection";
import { StudentAudioSection } from "@/components/sections/StudentAudioSection";
import { ForWhoSection } from "@/components/sections/ForWhoSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { StudioSection } from "@/components/sections/StudioSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProposalSection />
      <ClassesSection />
      <StudentAudioSection />
      <ForWhoSection />
      <MethodSection />
      <CommunitySection />
      <StudioSection />
      <TeamSection />
      <VideoSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
