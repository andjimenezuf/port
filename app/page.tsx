import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import ExperienceSection from "@/components/ExperienceSection"
import AwardsSection from "@/components/AwardsSection"
import EducationSection from "@/components/EducationSection"
import LeadershipSection from "@/components/LeadershipSection"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <LeadershipSection />
      <AwardsSection />
      <ProjectsSection />
    </main>
  )
}
