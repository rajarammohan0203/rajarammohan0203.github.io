import { useEffect, useRef } from "react";
import AnimatedCard from "./AnimatedCard";

interface Skill {
  name: string;
  icon: string;
  category: string;
  // Remove proficiency from interface
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <AnimatedCard 
      className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
      delay={index * 100}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-10 h-10 object-contain"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">{skill.name}</h3>
          <p className="text-sm text-foreground/60">{skill.category}</p>
        </div>
        
        {/* Remove all proficiency-related elements:
        - Progress bar
        - Percentage display
        - Animation logic
        */}
      </div>
    </AnimatedCard>
  );
};

export default SkillCard;