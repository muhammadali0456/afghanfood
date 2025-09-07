import { useState, useEffect } from 'react';

import Logo from "@/components/Logo";
import galleryOrder from '@/galleryOrder.json';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FoodShowcase = () => {
  const [foodImages, setFoodImages] = useState<any[]>([]);

  useEffect(() => {
    const imageModules = import.meta.glob('@/assets/*.{png,jpg,jpeg,svg}');

    const loadImages = async () => {
      const allImagePaths = Object.keys(imageModules);
      
      // Create a map for quick lookup
      const imagePathMap = new Map();
      allImagePaths.forEach(path => {
        const fileName = path.split('/').pop();
        if (fileName) {
          imagePathMap.set(fileName, path);
        }
      });

      // Sort paths based on galleryOrder.json, and add any extras at the end
      const orderedFileNames = [...galleryOrder];
      const existingFileNames = new Set(orderedFileNames);
      imagePathMap.forEach((_, fileName) => {
        if (!existingFileNames.has(fileName)) {
          orderedFileNames.push(fileName);
        }
      });

      const sortedImagePaths = orderedFileNames.map(fileName => imagePathMap.get(fileName)).filter(Boolean) as string[];

      const loadedImages = await Promise.all(
        sortedImagePaths.map(async (path) => {
          const importer = imageModules[path];
          const module = await importer();
          const fileName = path.split('/').pop()?.split('.')[0] || 'gallery image';
          const title = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          return {
            id: path,
            title: title,
            description: "A glimpse of Afghan Saffron & Spice",
            image: (module as any).default,
          };
        })
      );
      setFoodImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-spice-brown font-cardo mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the rich flavors and warm atmosphere of Afghan Saffron & Spice.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-2 space-y-2">
          {foodImages.map((food) => (
            <div key={food.id} className="relative group overflow-hidden rounded-sm shadow-lg break-inside-avoid">
              <img
                src={food.image}
                alt={food.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="font-bold font-cardo text-white text-lg">{food.title}</h3>
                <p className="text-white/90 text-sm">{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('APPETIZER');
  const menuItems = [
    {
      category: "APPETIZER",
      items: [
        {
          name: "Bolani (4 pcs)",
          description: "A traditional Afghan stuffed flatbread, typically filled with potatoes, green onions, and herbs, then pan-fried.",
          price: "$6.00"
        },
        {
          name: "Mantu (4 pcs)",
          description: "Afghan dumplings filled with seasoned ground meat (usually beef or lamb) and onions, steamed and topped with yogurt and sauces.",
          price: "$6.00"
        }
      ]
    },
    {
      category: "GRILL PLATTERS",
      note: "All served with rice and a free soda or water",
      items: [
        {
          name: "Chicken Tikka Kebab",
          description: "Boneless chicken marinated in yogurt and spices, grilled on skewers.",
          price: "$11.99"
        },
        {
          name: "Beef Kofta Kebab",
          description: "Ground beef seasoned with spices, formed into kebabs, and grilled.",
          price: "$11.99"
        },
        {
          name: "Saffron Signature Grill Platter",
          description: "Large combo platter including: 1 Lamb Tikka, 1 Beef Tikka, 1 Chicken Tikka, 2 Beef Kofta, 2 Chicken Kofta. Served with Afghan rice and salad.",
          price: "$59.99"
        },
        {
          name: "Saffron Signature with Lamb Chops",
          description: "Same as above, but includes lamb chops for a premium upgrade.",
          price: "$74.99"
        },
        {
          name: "Chicken Kofta Kebab",
          description: "Seasoned minced chicken skewered and grilled.",
          price: "$11.99"
        },
        {
          name: "Lamb Tikka Kebab",
          description: "Cubes of marinated lamb grilled to perfection.",
          price: "$14.99"
        },
        {
          name: "Kabuli Palow",
          description: "Afghanistan's national dish: steamed rice with raisins, carrots, and seasoned lamb or beef.",
          price: "$14.99"
        },
        {
          name: "Lamb Chops with Rice and Salad",
          description: "Grilled lamb chops served with rice and a side salad.",
          price: "$19.99"
        }
      ]
    },
    {
      category: "BURGERS & SANDWICHES",
      note: "All served with a free can of soda",
      items: [
        {
          name: "Chicken over Rice",
          description: "Grilled chicken served over a bed of seasoned rice.",
          price: "$9.99"
        },
        {
          name: "Lamb over Rice",
          description: "Grilled lamb over seasoned rice.",
          price: "$9.99"
        },
        {
          name: "Lamb & Chicken over Rice",
          description: "A mix of both grilled meats over rice.",
          price: "$9.99"
        },
        {
          name: "Chicken or Lamb on Pita",
          description: "Grilled chicken or lamb served in pita bread.",
          price: "$9.99"
        },
        {
          name: "Chapli Kabab over Rice",
          description: "Spiced, flattened minced meat patty (Afghan-style) served over rice.",
          price: "$9.99"
        },
        {
          name: "Classic Saffron Chicken Sandwich with Fries",
          description: "Marinated grilled chicken sandwich served with fries.",
          price: "$8.99"
        },
        {
          name: "Famous Atish Chicken Sandwich with Fries",
          description: "A spicy grilled chicken sandwich (Atish = “fire”) served with fries.",
          price: "$8.99"
        },
        {
          name: "Classic Cheeseburger with Fries",
          description: "Traditional beef cheeseburger served with fries.",
          price: "$8.89"
        }
      ]
    },
    {
      category: "SIDES & DRINKS",
      items: [
        {
          name: "Baklava (3 pcs)",
          description: "A sweet pastry made of layers of filo dough filled with nuts and soaked in syrup.",
          price: "$3.99"
        },
        {
          name: "Rice Pudding",
          description: "A dessert made from rice mixed with milk, sugar, and sometimes flavored with cardamom or rosewater.",
          price: "$3.99"
        },
        {
          name: "Saffron Green Tea",
          description: "A fragrant green tea infused with saffron.",
          price: "$1.50"
        },
        {
          name: "Soda Can",
          description: "Any standard canned soda drink.",
          price: "$1.50"
        }
      ]
    }
  ];

  const menuCategories = menuItems.map(item => item.category);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById(category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="menu" className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-spice-brown font-cardo mb-8">
            Afghan Menu
          </h2>
          
          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`text-spice-brown font-semibold text-sm tracking-wider transition-colors border-b-2 pb-1 ${
                  activeCategory === category
                    ? 'border-primary text-primary'
                    : 'border-transparent hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Menu Items */}
        <div className="space-y-12">
          {menuItems.map((section) => (
            <div key={section.category} id={section.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')} className="pt-4">
              <h3 className="text-3xl font-bold text-spice-brown font-cardo text-center mb-2">
                {section.category}
              </h3>
              {section.note && (
                <p className="text-center text-muted-foreground mb-8 text-sm italic">{section.note}</p>
              )}
              <div className="space-y-6">
                {section.items.map((item, index) => (
                  <div key={index} className="border-b border-border/20 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-spice-brown font-cardo">
                        {item.name}
                      </h4>
                      <span className="text-primary font-semibold ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
         
        </div>
      </div>
    </section>
  );
};

const CateringSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-spice-brown font-cardo mb-6">
            Bring The Flavor To You.
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Contact us for <span className="font-semibold">Catering</span> information and we will get back to you
          </p>
          <p className="text-lg text-muted-foreground">soon.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-spice-brown mb-2">
              Full Name
            </label>
            <Input
              placeholder="Name (Required)"
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-spice-brown mb-2">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="Email (Required)"
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-spice-brown mb-2">
              Phone Number
            </label>
            <Input
              type="tel"
              placeholder="Phone"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-spice-brown mb-2">
              Message
            </label>
            <Textarea
              placeholder="Message (Required)"
              className="w-full min-h-32"
              required
            />
          </div>

       

          <div className="text-center pt-4">
            <Button variant="spice" size="lg" className="w-full font-cardo">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

const LocationSection = () => {
  const address = "1591 Dutch Broadway, Valley Stream, NY 11580";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-16 px-4 bg-warm-cream/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-spice-brown mb-4 font-cardo">Our Location</h2>
        <p className="text-lg text-foreground mb-8">
          Visit us and experience the authentic taste of Afghanistan.
        </p>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block mt-8 w-full rounded-lg shadow-lg overflow-hidden relative group">
          <img 
            src="/map.png" 
            alt="Map showing the location of Afghan Saffron and Spice" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-colors duration-300 flex items-center justify-center">
            <p className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-cardo tracking-wider">View on Google Maps</p>
          </div>
        </a>
        <div className="mt-4 text-center text-spice-brown">
          <p className="font-bold">{address}</p>
          <p>Ph. 516 825 6666</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="about" className="py-8 px-4 bg-spice-brown text-warm-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Logo className="w-24 h-24" />
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="text-center text-sm text-warm-cream/80">
              <p className="font-bold text-warm-cream">AFGHAN SAFFRON AND SPICE</p>
              <p>1591 Dutch Broadway, Valley Stream, NY 11580</p>
              <p>Ph. 516 825 6666</p>
              <p className="mt-4">&copy; 2024 Afghan Saffron and Spice. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { FoodShowcase, MenuSection, CateringSection, LocationSection, Footer };