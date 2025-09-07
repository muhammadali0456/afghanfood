import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";
import { FoodShowcase, MenuSection, CateringSection,  LocationSection, Footer } from "@/components/EnhancedSections";

const AfghanLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 py-8 md:py-12">
        {/* Logo Section */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mb-12 md:mb-16"
          aria-label="Afghan Saffron and Spice logo"
        >
          <Logo />
        </motion.section>

        {/* Hero Text */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="text-center mb-12 max-w-4xl"
          aria-label="Welcome message"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-spice-brown leading-tight font-cardo">
            Experience the Authentic Flavors of Afghanistan
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-3xl mx-auto font-cardo">
            Discover Premium Afghan saffron, traditional spices, and authentic cuisine crafted with fresh ingredients and time-honored recipes.
          </p>
        </motion.section>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          className="mb-16"
        >
          <Button 
            variant="spice" 
            size="lg" 
            className="text-lg px-12 py-6 rounded-full text-white uppercase tracking-wider font-cardo"
            onClick={() => { document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            VIEW MENU
          </Button>
        </motion.div>
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