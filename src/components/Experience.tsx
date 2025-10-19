import { useState } from "react";
import AnimatedCard from "@/components/ui/AnimatedCard";

const experiences = [
  {
    id: "cloudjournee",
    title: "Senior Cloud Engineer",
    company: "Cloudjournee",
    logo: "/cjp.png",
    period: "Dec 2023 - Dec 2025",
    location: "Bangalore, India",
    description: [
      "Managed multi-account AWS infrastructure across 18+ accounts using Terraform, implementing enterprise-grade security with Okta SSO and RBAC controls.",
      "Architected and deployed production-grade EKS clusters from scratch, streamlining upgrade processes that reduced operational overhead by 30%.",
      "Automated infrastructure workflows with Atlantis PR automation and custom tooling, enabling faster deployment cycles and improved team collaboration.",
      "Established comprehensive monitoring and incident management using Datadog and Opsgenie, providing 24/7 on-call support for P1/P2 critical incidents with RCA.",
      "Optimized containerization strategies by refactoring Dockerfiles and automating operational tasks, significantly improving build efficiency and system reliability.",
      "Proactively defined and tracked SLAs & SLOs for core services to maintain reliability and resolution.",
    ],
  },
  {
    id: "cloudifyops",
    title: "Associate DevOps Engineer",
    company: "CloudifyOps",
    logo: "/clops.png",
    period: "Aug 2022 - Dec 2023",
    location: "Bangalore, India",
    description: [
      "Achieved 40% AWS cost reduction through strategic implementation of Reserved Instances, Spot Instances, and proactive cost optimization measures with automated alerting.",
      "Transformed CI/CD pipeline performance by implementing parallel jobs and caching mechanisms, reducing Jenkins build time from 30 minutes to 6 minutes (80% improvement).",
      "Designed and implemented automated build and deployment processes using Jenkins, Bitbucket, and Maven, establishing continuous integration/delivery system for enhanced user experience.",
      "Involved in POCs and R&D on various open-source DevOps tools, evaluating and implementing best practices that improved operational efficiency and team productivity.",
      "Managed end-to-end infrastructure support including nightly builds, backup management, and production troubleshooting, ensuring high availability and system reliability.",
    ],
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);

  const handleTabClick = (id: string) => {
    setActiveExperience(id);
  };

  const activeExp =
    experiences.find((exp) => exp.id === activeExperience) || experiences[0];

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="chip mb-4">My Journey</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible space-x-4 md:space-x-0 md:space-y-2 p-1 pb-4">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    className={`p-4 text-left rounded-lg transition-all flex-shrink-0 flex items-center space-x-3 ${
                      activeExperience === exp.id
                        ? "bg-white dark:bg-black/20 shadow-md"
                        : "hover:bg-white/50 dark:hover:bg-white/5"
                    }`}
                    onClick={() => handleTabClick(exp.id)}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-10 h-10 rounded-full object-contain bg-white p-1 flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <h3
                        className={`font-medium truncate ${
                          activeExperience === exp.id
                            ? "text-yousaf"
                            : "text-foreground/70"
                        }`}
                      >
                        {exp.company}
                      </h3>
                      <p className="text-sm text-foreground/60 truncate">
                        {exp.period}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-8">
              <AnimatedCard className="glass-card rounded-2xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {activeExp.title}
                    </h3>
                    <p className="text-yousaf">{activeExp.company}</p>
                    <p className="text-sm text-foreground/60 mt-1">
                      {activeExp.period} • {activeExp.location}
                    </p>
                  </div>
                  <img
                    src={activeExp.logo}
                    alt={activeExp.company}
                    className="w-16 h-16 rounded-lg object-contain bg-white p-2 hidden sm:block"
                  />
                </div>
                <ul className="space-y-3">
                  {activeExp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yousaf mr-3">•</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;