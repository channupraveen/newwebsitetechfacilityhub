import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const words = ["Operations", "Workflows", "Systems", "Processes", "Control"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/40 overflow-hidden min-h-screen flex items-center">
      {/* Chaos to Structure Animation */}
      <div className="absolute inset-0 opacity-35">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* Blue gradient for structure */}
            <linearGradient id="structureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(220, 70%, 50%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(200, 70%, 50%)" stopOpacity="0.7" />
            </linearGradient>
            
            {/* Green gradient for final state */}
            <linearGradient id="completionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(200, 70%, 50%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(175, 70%, 45%)" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Generate 6x5 grid = 30 dots for more visual impact */}
          
          {/* Row 1 - Y: 150 */}
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="120;200;250" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="380;220;150" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="380;350;400" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="280;200;150" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="620;500;550" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="120;180;150" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="880;650;700" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="200;160;150" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="1050;800;850" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="180;140;150" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="1280;950;1000" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="140;200;150" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>

          {/* Row 2 - Y: 250 */}
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="180;180;250" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="450;300;250" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="450;380;400" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="180;280;250" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="680;480;550" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="340;220;250" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="920;620;700" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="280;260;250" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="1100;780;850" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="320;240;250" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="1220;920;1000" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="200;280;250" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>

          {/* Row 3 - Y: 350 */}
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="280;220;250" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="520;380;350" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="320;360;400" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="180;320;350" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="720;520;550" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="420;380;350" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="820;660;700" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="280;320;350" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="1150;820;850" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="420;380;350" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="1320;960;1000" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="320;360;350" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>

          {/* Row 4 - Y: 450 */}
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="150;240;250" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="280;420;450" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="520;340;400" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="520;480;450" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="480;560;550" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="580;420;450" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="950;680;700" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="520;480;450" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="1020;860;850" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="580;420;450" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="1280;980;1000" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="480;460;450" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>

          {/* Row 5 - Y: 550 */}
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="200;260;250" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="620;520;550" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="580;320;400" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="480;580;550" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="420;540;550" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="320;520;550" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="880;720;700" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="620;580;550" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="1180;840;850" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="480;520;550" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle r="4" fill="hsl(220, 70%, 50%)">
            <animate attributeName="cx" values="1250;1020;1000" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="cy" values="620;580;550" dur="8s" repeatCount="indefinite" keyTimes="0;0.5;1" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
          </circle>

          {/* Horizontal Connecting Lines */}
          <line x1="250" y1="150" x2="400" y2="150" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.3;0.5;0.9;1" />
          </line>
          <line x1="400" y1="150" x2="550" y2="150" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.32;0.5;0.9;1" />
          </line>
          <line x1="550" y1="150" x2="700" y2="150" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.34;0.5;0.9;1" />
          </line>
          <line x1="700" y1="150" x2="850" y2="150" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.36;0.5;0.9;1" />
          </line>
          <line x1="850" y1="150" x2="1000" y2="150" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.38;0.5;0.9;1" />
          </line>

          <line x1="250" y1="250" x2="400" y2="250" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.31;0.5;0.9;1" />
          </line>
          <line x1="400" y1="250" x2="550" y2="250" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.33;0.5;0.9;1" />
          </line>
          <line x1="550" y1="250" x2="700" y2="250" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.35;0.5;0.9;1" />
          </line>
          <line x1="700" y1="250" x2="850" y2="250" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.37;0.5;0.9;1" />
          </line>
          <line x1="850" y1="250" x2="1000" y2="250" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.39;0.5;0.9;1" />
          </line>

          <line x1="250" y1="350" x2="400" y2="350" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.32;0.5;0.9;1" />
          </line>
          <line x1="400" y1="350" x2="550" y2="350" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.34;0.5;0.9;1" />
          </line>
          <line x1="550" y1="350" x2="700" y2="350" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.36;0.5;0.9;1" />
          </line>
          <line x1="700" y1="350" x2="850" y2="350" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.38;0.5;0.9;1" />
          </line>
          <line x1="850" y1="350" x2="1000" y2="350" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.40;0.5;0.9;1" />
          </line>

          <line x1="250" y1="450" x2="400" y2="450" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.33;0.5;0.9;1" />
          </line>
          <line x1="400" y1="450" x2="550" y2="450" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.35;0.5;0.9;1" />
          </line>
          <line x1="550" y1="450" x2="700" y2="450" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.37;0.5;0.9;1" />
          </line>
          <line x1="700" y1="450" x2="850" y2="450" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.39;0.5;0.9;1" />
          </line>
          <line x1="850" y1="450" x2="1000" y2="450" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.41;0.5;0.9;1" />
          </line>

          <line x1="250" y1="550" x2="400" y2="550" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.34;0.5;0.9;1" />
          </line>
          <line x1="400" y1="550" x2="550" y2="550" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.36;0.5;0.9;1" />
          </line>
          <line x1="550" y1="550" x2="700" y2="550" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.38;0.5;0.9;1" />
          </line>
          <line x1="700" y1="550" x2="850" y2="550" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.40;0.5;0.9;1" />
          </line>
          <line x1="850" y1="550" x2="1000" y2="550" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.42;0.5;0.9;1" />
          </line>

          {/* Vertical Connecting Lines */}
          <line x1="250" y1="150" x2="250" y2="550" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.31;0.5;0.9;1" />
          </line>
          <line x1="400" y1="150" x2="400" y2="550" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.33;0.5;0.9;1" />
          </line>
          <line x1="550" y1="150" x2="550" y2="550" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.35;0.5;0.9;1" />
          </line>
          <line x1="700" y1="150" x2="700" y2="550" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.37;0.5;0.9;1" />
          </line>
          <line x1="850" y1="150" x2="850" y2="550" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.39;0.5;0.9;1" />
          </line>
          <line x1="1000" y1="150" x2="1000" y2="550" stroke="url(#structureGradient)" strokeWidth="1.5" opacity="0">
            <animate attributeName="opacity" values="0;0;0.6;0.6;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.41;0.5;0.9;1" />
          </line>

          {/* Green completion glow - final state */}
          <circle cx="625" cy="350" r="220" fill="none" stroke="url(#completionGradient)" strokeWidth="2" opacity="0">
            <animate attributeName="opacity" values="0;0;0;0.7;0.4;0" dur="8s" repeatCount="indefinite" keyTimes="0;0.48;0.58;0.68;0.85;1" />
            <animate attributeName="r" values="220;220;250;220" dur="8s" repeatCount="indefinite" keyTimes="0;0.58;0.68;1" />
          </circle>

        </svg>

        {/* Soft background elements */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary/3 rounded-2xl rotate-12 animate-rotate-slower" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-accent/3 rounded-2xl -rotate-12 animate-rotate-reverse-slower" />
        
        {/* Gentle gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl animate-pulse-very-gentle" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/2 rounded-full blur-3xl animate-pulse-very-gentle-delayed" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-8 pb-20 relative w-full">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 animate-fade-in">
            Digitizing Maintenance & Facility{" "}
            <span className="inline-block min-w-[200px] md:min-w-[280px] lg:min-w-[360px] text-left">
              <span 
                className={`text-accent transition-all duration-300 inline-block ${
                  isAnimating ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'
                }`}
              >
                {words[currentWordIndex]}
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 animate-fade-in animation-delay-100">
            TechFacility Hub builds software platforms that help organizations manage maintenance, track issues, and bring operational workflows into one digital system.
          </p>

          {/* Supporting Line */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in animation-delay-150">
            From hospitals to facilities where structured maintenance and accountability are required.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-200">
            <Link to="/services">
              <Button variant="hero" size="xl" className="group">
                View Our Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
