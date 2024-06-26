import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import MusicSchoolTestimonials from "@/components/TestimonialCard";
import UpComingWebinars from "@/components/UpComingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased ">
      <div>
        <HeroSection />
        <FeaturedCourses />
        <MusicSchoolTestimonials/>
        <UpComingWebinars/>
        <Instructors/>
        <Footer/>
      </div>
    </main>
  );
}
