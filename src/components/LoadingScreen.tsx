import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-2 tracking-wider">
        <img src={logo} alt="CathyCouture Logo" className="h-12 w-12 rounded-full object-cover inline-block mr-2" /> CathyCouture
      </h1>
      <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-10 font-body">
        Crafting Elegance
      </p>
      <div className="w-48 h-[1px] bg-muted overflow-hidden rounded-full">
        <div
          className="h-full bg-gradient-gold transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
