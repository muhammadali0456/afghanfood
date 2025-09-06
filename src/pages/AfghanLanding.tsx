import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { FoodShowcase, MenuSection, CateringSection, LocationSection, Footer } from "@/components/EnhancedSections";

const AfghanLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-8 md:py-12">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mb-12 md:mb-16"
        >
          <Logo />
        </motion.div>


        {/* Hero Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="text-center mb-12 max-w-4xl"
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-spice-brown leading-tight font-cardo">
            Experience the
          </h3>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-spice-brown leading-tight mb-8 font-cardo">
            Flavors of Afghanistan
          </h3>
        </motion.div>

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

      
      </div>

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