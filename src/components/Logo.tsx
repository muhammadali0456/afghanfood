interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  const defaultClasses = "w-80 h-80 md:w-96 md:h-96";
  return (
    <div className="flex flex-col items-center text-center">
      {/* Official Afghan Saffron and Spice Logo */}
      <div className={className ? '' : 'mb-6'}>
        <img 
          src="/lovable-uploads/e3aef8a5-4119-4308-8d9f-0269659e88c0.png"
          alt="Afghan Saffron and Spice - Official Logo"
          className={`${className || defaultClasses} object-cover rounded-full`}
        />
      </div>
    </div>
  );
};

export default Logo;