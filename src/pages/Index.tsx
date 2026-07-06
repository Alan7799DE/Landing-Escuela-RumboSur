import { lazy, Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";

// Secciones debajo del pliegue: se cargan de forma diferida para reducir el
// JavaScript inicial y mejorar el LCP/TBT.
const ProposalSection = lazy(() =>
  import("@/components/sections/ProposalSection").then((m) => ({ default: m.ProposalSection }))
);
const ClassesSection = lazy(() =>
  import("@/components/sections/ClassesSection").then((m) => ({ default: m.ClassesSection }))
);
const StudentAudioSection = lazy(() =>
  import("@/components/sections/StudentAudioSection").then((m) => ({ default: m.StudentAudioSection }))
);
const ForWhoSection = lazy(() =>
  import("@/components/sections/ForWhoSection").then((m) => ({ default: m.ForWhoSection }))
);
const MethodSection = lazy(() =>
  import("@/components/sections/MethodSection").then((m) => ({ default: m.MethodSection }))
);
const CommunitySection = lazy(() =>
  import("@/components/sections/CommunitySection").then((m) => ({ default: m.CommunitySection }))
);
const StudioSection = lazy(() =>
  import("@/components/sections/StudioSection").then((m) => ({ default: m.StudioSection }))
);
const TeamSection = lazy(() =>
  import("@/components/sections/TeamSection").then((m) => ({ default: m.TeamSection }))
);
const VideoSection = lazy(() =>
  import("@/components/sections/VideoSection").then((m) => ({ default: m.VideoSection }))
);
const TestimonialsSection = lazy(() =>
  import("@/components/sections/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection }))
);
const FAQSection = lazy(() =>
  import("@/components/sections/FAQSection").then((m) => ({ default: m.FAQSection }))
);
const ContactSection = lazy(() =>
  import("@/components/sections/ContactSection").then((m) => ({ default: m.ContactSection }))
);
const Footer = lazy(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer }))
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Suspense fallback={<div className="min-h-screen" />}>
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
      </Suspense>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
