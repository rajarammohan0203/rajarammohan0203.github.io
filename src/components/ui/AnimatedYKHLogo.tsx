import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ui/ThemeProvider";

const AnimatedYKHLogo = ({ size = 40 }: { size?: number }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");

    if (paths) {
      paths.forEach((path, index) => {
        const length = path.getTotalLength();

        // Reset path
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;

        // Animate path
        path.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], {
          duration: 1500,
          delay: index * 150,
          fill: "forwards",
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        });
      });
    }
  }, [theme]);

  // return (
  //   <svg
  //     ref={svgRef}
  //     width={size}
  //     height={size}
  //     viewBox="0 0 100 100"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //     className="transition-colors duration-300"
  //   >
  //     {/* S letter */}
  //     <path
  //       d="M20 30C20 25 25 20 30 20H45C50 20 55 25 55 30C55 35 50 40 45 40H35C30 40 25 45 25 50C25 55 30 60 35 60H50C55 60 60 65 60 70C60 75 55 80 50 80H30C25 80 20 75 20 70"
  //       stroke="currentColor"
  //       strokeWidth="4"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       fill="none"
  //       className="text-primary"
  //     />

  //     {/* R letter */}
  //     <path
  //       d="M70 20V80"
  //       stroke="currentColor"
  //       strokeWidth="4"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="text-primary"
  //     />
  //     <path
  //       d="M70 20H85C90 20 95 25 95 30V40C95 45 90 50 85 50H70"
  //       stroke="currentColor"
  //       strokeWidth="4"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="text-primary"
  //     />
  //     <path
  //       d="M82 50L95 80"
  //       stroke="currentColor"
  //       strokeWidth="4"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="text-primary"
  //     />

  //     {/* Decorative circle */}
  //     {/* <circle
  //       cx="50"
  //       cy="50"
  //       r="40"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeDasharray="6 4"
  //       className="text-foreground/30"
  //     /> */}
  //   </svg>
  // );
};

export default AnimatedYKHLogo;