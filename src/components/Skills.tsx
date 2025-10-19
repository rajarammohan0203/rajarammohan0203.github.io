import { useState, useEffect } from "react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import SkillCard from "@/components/ui/SkillCard";

interface Skill {
  name: string;
  icon: string;
  category: string;
  // Remove proficiency from interface
}

const skills: Skill[] = [
  {
    name: "AWS",
    icon: "https://www.svgrepo.com/show/448266/aws.svg",
    category: "Cloud",
  },
  {
    name: "Azure",
    icon: "https://www.svgrepo.com/show/452062/microsoft.svg",
    category: "Cloud",
  },
  {
    name: "Oracle",
    icon: "https://www.svgrepo.com/show/303303/oracle-6-logo.svg",
    category: "Cloud", 
  },
  {
    name: "Terraform",
    icon: "https://www.svgrepo.com/show/354447/terraform-icon.svg",
    category: "IaC",
  },
  {
    name: "Postgres",
    icon: "https://www.svgrepo.com/show/373965/pgsql.svg",
    category: "Database",
  },
  {
    name: "Microsoft SQL Server",
    icon: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
    category: "Database",
  },
  {
    name: "Kubernetes",
    icon: "https://www.svgrepo.com/show/448233/kubernetes.svg",
    category: "Container Orchestration",
  },
  {
    name: "Docker",
    icon: "https://www.svgrepo.com/show/452192/docker.svg",
    category: "Containerization",
  },
  {
    name: "Helm",
    icon: "https://www.svgrepo.com/show/448231/helm.svg",
    category: "Container Orchestration",
  },
  {
    name: "Jenkins",
    icon: "https://www.svgrepo.com/show/373699/jenkins.svg",
    category: "CI/CD",
  },
  {
    name: "GitHub Actions",
    icon: "https://www.svgrepo.com/show/512317/github-142.svg",
    category: "CI/CD",
  },
  {
    name: "Circle CI",
    icon: "https://www.svgrepo.com/show/442967/brand-circleci.svg",
    category: "CI/CD",
  },
  {
    name: "Bitbucket",
    icon: "https://www.svgrepo.com/show/452166/bitbucket.svg",
    category: "CI/CD",
  },
  {
    name: "Argo CD",
    icon: "./argo.png",
    category: "CI/CD",
  },
  {
    name: "GitLab CI/CD",
    icon: "https://www.svgrepo.com/show/353785/gitlab.svg",
    category: "CI/CD",
  },
  {
    name: "Ansible",
    icon: "https://www.svgrepo.com/show/373429/ansible.svg",
    category: "Configuration Management",
  },
  {
    name: "Git",
    icon: "https://www.svgrepo.com/show/452210/git.svg",
    category: "Version Control",
  },
  {
    name: "Linux",
    icon: "https://www.svgrepo.com/show/448236/linux.svg",
    category: "Operating System",
  },
  {
    name: "Python",
    icon: "https://www.svgrepo.com/show/452091/python.svg",
    category: "Programming",
  },
  {
    name: "Bash",
    icon: "https://www.svgrepo.com/show/353478/bash-icon.svg",
    category: "Programming",
  },
  {
    name: "AWS CloudFormation",
    icon: "https://images.seeklogo.com/logo-png/43/2/aws-cloudformation-logo-png_seeklogo-430935.png",
    category: "IaC",
  },
  {
    name: "Prometheus",
    icon: "https://www.svgrepo.com/show/354219/prometheus.svg",
    category: "Monitoring",
  },
  {
    name: "Grafana",
    icon: "https://www.svgrepo.com/show/448228/grafana.svg",
    category: "Monitoring",
  },
  {
    name: "Datadog",
    icon: "https://www.svgrepo.com/show/448219/datadog.svg",
    category: "Monitoring",
  },
  {
    name: "ELK Stack",
    icon: "https://www.svgrepo.com/show/373575/elastic.svg",
    category: "Monitoring",
  },
  {
    name: "SonarQube",
    icon: "https://www.svgrepo.com/show/354365/sonarqube.svg",
    category: "Security",
  },
  {
    name: "Snyk",
    icon: "https://www.svgrepo.com/show/448249/snyk.svg",
    category: "Security",
  },
  {
    name: "Trivy",
    icon: "/trivy.png",
    category: "Security",
  },
  {
    name: "OWASP ZAP",
    icon: "./owasp.png",
    category: "Security",
  },
  {
    name: "Nginx",
    icon: "https://www.svgrepo.com/show/373924/nginx.svg",
    category: "Gateway",
  },
  {
    name: "AWS API Gateway",
    icon: "https://www.svgrepo.com/show/353444/aws-api-gateway.svg",
    category: "Gateway",
  },
];

// Rest of the component stays the same
const categories = Array.from(new Set(skills.map((skill) => skill.category)));

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="chip mb-4">My Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === "All"
                ? "bg-yousaf text-white"
                : "bg-accent text-accent-foreground hover:bg-accent/80"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-yousaf text-white"
                  : "bg-accent text-accent-foreground hover:bg-accent/80"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;