import React, { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Conversational Analytics Platform",
    shortDesc: "AI-Powered Data Exploration",
    fullDesc: "Developed a conversational analytics platform enabling non-technical users to explore retail data in natural language and generate interactive KPI dashboards.",
    tech: ["Python", "Streamlit", "LangChain", "ETL"],
    impact: "50% reduction in manual analysis time",
    date: "Dec 2024",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "💬",
  },
  {
    id: 2,
    name: "Sales Data Analysis & Visualization",
    shortDesc: "End-to-End Data Pipeline",
    fullDesc: "Built an end-to-end data analysis pipeline to clean, aggregate, and visualize sales data for customer spend, product revenue, and regional performance.",
    tech: ["Python", "Pandas", "Visualization", "Automation"],
    impact: "40% reduction in manual reporting effort",
    date: "Jun 2024",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: "📊",
  },
  {
    id: 3,
    name: "Telecom Revenue Analysis Dashboard",
    shortDesc: "Power BI Analytics",
    fullDesc: "Built an interactive KPI dashboard analyzing demand-supply dynamics and market share trends of Airtel and Jio in India's telecom duopoly.",
    tech: ["Power BI", "Data Analysis", "KPI Metrics"],
    impact: "Identified high-ARPU growth opportunities",
    date: "May 2024",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    icon: "📱",
  },
];

const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section style={{ padding: "60px 20px", background: "#f8f9fa" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          fontWeight: "700",
          marginBottom: "20px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Featured Projects
      </h2>
      <p style={{ textAlign: "center", color: "#666", fontSize: "18px", marginBottom: "50px" }}>
        Transforming Data into Actionable Insights
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              position: "relative",
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow:
                hoveredId === project.id
                  ? "0 20px 60px rgba(0,0,0,0.3)"
                  : "0 10px 30px rgba(0,0,0,0.1)",
              transform: hoveredId === project.id ? "translateY(-15px) scale(1.02)" : "translateY(0) scale(1)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              cursor: "pointer",
            }}
          >
            {/* Gradient Header */}
            <div
              style={{
                background: project.color,
                height: hoveredId === project.id ? "180px" : "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "60px",
                transition: "all 0.4s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  transform: hoveredId === project.id ? "scale(1.2) rotate(10deg)" : "scale(1) rotate(0deg)",
                  transition: "all 0.4s ease",
                  filter: hoveredId === project.id ? "drop-shadow(0 0 20px rgba(255,255,255,0.5))" : "none",
                }}
              >
                {project.icon}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: "25px" }}>
              <div style={{ marginBottom: "10px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#999",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {project.date}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  color: "#222",
                  transition: "color 0.3s ease",
                }}
              >
                {project.name}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  color: "#667eea",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                {project.shortDesc}
              </p>

              {/* Expandable Description */}
              <p
                style={{
                  fontSize: "15px",
                  color: "#555",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                  maxHeight: hoveredId === project.id ? "200px" : "0px",
                  opacity: hoveredId === project.id ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                {project.fullDesc}
              </p>

              {/* Tech Stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: hoveredId === project.id ? "#667eea" : "#e9ecef",
                      color: hoveredId === project.id ? "white" : "#555",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Impact Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px",
                  background: hoveredId === project.id ? "#f0f7ff" : "#f8f9fa",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                }}
              >
                <span style={{ fontSize: "20px" }}>🎯</span>
                <span style={{ fontSize: "13px", color: "#555", fontWeight: "600" }}>
                  {project.impact}
                </span>
              </div>

              {/* View Details Button */}
              <button
                style={{
                  marginTop: "20px",
                  width: "100%",
                  padding: "14px",
                  background: hoveredId === project.id ? project.color : "transparent",
                  border: `2px solid ${hoveredId === project.id ? "transparent" : "#667eea"}`,
                  color: hoveredId === project.id ? "white" : "#667eea",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {hoveredId === project.id ? "View Full Details →" : "Learn More"}
              </button>
            </div>

            {/* Corner Accent */}
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.3)",
                transform: hoveredId === project.id ? "scale(15)" : "scale(1)",
                transition: "transform 0.6s ease",
                opacity: hoveredId === project.id ? 0.1 : 0,
                pointerEvents: "none",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
