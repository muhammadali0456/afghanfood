import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { FoodShowcase, MenuSection, CateringSection,  LocationSection, Footer } from "@/components/EnhancedSections";
import heroVideo from "@/assets/herovideo.mp4";

const AfghanLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="w-full">
        {/* Hero with Background Video */}
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full min-h-[100svh] md:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center mb-12 pb-24 md:pb-24"
          aria-label="Welcome to Afghan Saffron and Spice"
        >
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

          <div className="relative z-10 text-center px-4 max-w-4xl pt-20 md:pt-24 lg:pt-28">
            <div className="mb-4 md:mb-8 flex justify-center">
              <Logo className="w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-cardo drop-shadow-md">
              Experience the Authentic Flavors of Afghanistan
            </h1>
            <p className="text-sm md:text-xl text-white/90 mt-4 md:mt-6 max-w-2xl md:max-w-3xl mx-auto font-cardo drop-shadow">
()              Discover Premium Afghan saffron, traditional spices, and authentic cuisine crafted with fresh ingredients and time-honored recipes.
            </p>
            <div className="mt-8">
              <Button
                variant="spice"
                size="lg"
                className="text-lg px-12 py-6 rounded-full text-white uppercase tracking-wider font-cardo"
                onClick={() => { document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                VIEW MENU
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Food Showcase Section */}
      <AnimatedSection>
        <FoodShowcase />
      </AnimatedSection>

      {/* Menu Section */}
      <AnimatedSection>
        <MenuSection />
      </AnimatedSection>

      {/* Catering Section */}
      <AnimatedSection>
        <CateringSection />
      </AnimatedSection>

      {/* Location Section */}
      <AnimatedSection>
        <LocationSection />
      </AnimatedSection>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AfghanLanding;