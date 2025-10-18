import React, { useState, useEffect } from "react";

const PersonalInfo: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("journey");
  const [floatingChars, setFloatingChars] = useState<Array<{ id: number; char: string; left: number; delay: number }>>([]);
  const [typedText, setTypedText] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);

  // Linux terminal commands for animation
  const terminalCommands = [
    "python data_pipeline.py",
    "SELECT * FROM analytics;",
    "docker-compose up -d",
    "git push origin main",
    "streamlit run app.py",
  ];

  // Matrix/Floating characters effect
  useEffect(() => {
    const chars = "PYTHONSQLLINUX01データ⚡🐧💻📊🚀";
    const newChars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setFloatingChars(newChars);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    const currentCommand = terminalCommands[commandIndex];
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentCommand.length) {
        setTypedText(currentCommand.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCommandIndex((prev) => (prev + 1) % terminalCommands.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [commandIndex]);

  const skills = {
    dataEngineering: [
      { name: "Python", level: 90, icon: "🐍" },
      { name: "SQL", level: 85, icon: "🗄️" },
      { name: "ETL Pipelines", level: 85, icon: "⚙️" },
      { name: "Linux", level: 75, icon: "🐧" },
    ],
    dataAnalysis: [
      { name: "Pandas & NumPy", level: 90, icon: "📊" },
      { name: "Power BI", level: 85, icon: "📈" },
      { name: "Tableau", level: 80, icon: "📉" },
      { name: "Excel", level: 85, icon: "📋" },
    ],
    mlAndAI: [
      { name: "Scikit-learn", level: 80, icon: "🤖" },
      { name: "NLP Analytics", level: 75, icon: "💬" },
      { name: "Predictive Modeling", level: 80, icon: "🎯" },
      { name: "LangChain", level: 70, icon: "🔗" },
    ],
    tools: [
      { name: "Git & GitHub", level: 85, icon: "💻" },
      { name: "Streamlit", level: 80, icon: "🚀" },
      { name: "Jupyter Notebook", level: 90, icon: "📓" },
      { name: "Docker", level: 70, icon: "🐳" },
    ],
  };

  const journey = [
    {
      year: "2020",
      title: "Started at NIT Rourkela",
      desc: "Began Dual Degree (B.Tech + M.Tech) in Ceramic Engineering, discovered passion for data and analytics",
      icon: "🎓",
    },
    {
      year: "2023-24",
      title: "Deep Dive into Data Science",
      desc: "Completed 100 Days of Code (Python) and Web Scraping certifications, built multiple data analysis projects",
      icon: "💻",
    },
    {
      year: "Jun-Aug 2025",
      title: "Data Analyst Intern @ PepsalesAI",
      desc: "Built automated data pipelines, applied NLP analytics, improved sales performance accuracy by 15%",
      icon: "🚀",
    },
    {
      year: "2025",
      title: "Graduating & Job-Ready",
      desc: "Equipped with end-to-end data engineering and analytics skills, ready to drive business impact",
      icon: "🎯",
    },
  ];

  const interests = [
    { name: "Data Engineering", icon: "⚙️", desc: "Building scalable ETL pipelines" },
    { name: "Analytics", icon: "📊", desc: "Transforming data into insights" },
    { name: "Automation", icon: "🤖", desc: "Streamlining workflows with Python" },
    { name: "Linux & DevOps", icon: "🐧", desc: "System administration & scripting" },
    { name: "Music Production", icon: "🎵", desc: "Directed live stage productions" },
    { name: "Community Service", icon: "🤝", desc: "Led Rotaract Club initiatives" },
  ];

  return (
    <section style={{ padding: "60px 20px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", position: "relative", overflow: "hidden" }}>
      {/* Floating Characters Animation (Matrix-style) */}
      {floatingChars.map((item) => (
        <div
          key={item.id}
          style={{
            position: "absolute",
            left: `${item.left}%`,
            top: "-50px",
            fontSize: "20px",
            color: "rgba(255, 255, 255, 0.2)",
            fontWeight: "700",
            animation: `float ${5 + item.delay}s linear infinite`,
            animationDelay: `${item.delay}s`,
            pointerEvents: "none",
          }}
        >
          {item.char}
        </div>
      ))}

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(-50px) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(calc(100vh + 100px)) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 5px rgba(100, 181, 246, 0.5);
            }
            50% {
              box-shadow: 0 0 20px rgba(100, 181, 246, 0.8), 0 0 30px rgba(100, 181, 246, 0.6);
            }
          }

          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }

          @keyframes slideIn {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .skill-card {
            animation: slideIn 0.5s ease-out;
          }
        `}
      </style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header with Terminal Animation */}
        <div style={{ textAlign: "center", marginBottom: "50px", color: "white" }}>
          <h2 style={{ fontSize: "48px", fontWeight: "700", marginBottom: "15px", animation: "pulse 2s ease-in-out infinite" }}>
            Hi, I'm Amrit Kalash 👋
          </h2>
          <p style={{ fontSize: "20px", opacity: 0.9, lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            Data Analyst & Engineer from <strong>NIT Rourkela</strong> • Transforming raw data into actionable
            insights through automation, analytics, and engineering excellence
          </p>

          {/* Terminal Window */}
          <div
            style={{
              maxWidth: "600px",
              margin: "30px auto 0",
              background: "#1e1e1e",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
              animation: "glow 3s ease-in-out infinite",
            }}
          >
            {/* Terminal Header */}
            <div style={{ background: "#323232", padding: "10px 15px", display: "flex", gap: "8px", alignItems: "center" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
              <span style={{ marginLeft: "10px", fontSize: "12px", color: "#aaa" }}>amrit@data-engineer:~</span>
            </div>

            {/* Terminal Content */}
            <div style={{ padding: "20px", fontFamily: "monospace", fontSize: "14px" }}>
              <div style={{ color: "#4ec9b0" }}>
                <span style={{ color: "#569cd6" }}>$</span> {typedText}
                <span style={{ animation: "blink 1s step-end infinite", color: "#fff" }}>▋</span>
              </div>
              <div style={{ color: "#6a9955", marginTop: "10px", fontSize: "12px" }}>
                # Running data pipelines with Python, SQL & Linux 🚀
              </div>
            </div>
          </div>

          <div style={{ marginTop: "20px", display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(255,255,255,0.2)", padding: "8px 20px", borderRadius: "20px", fontSize: "14px", fontWeight: "600" }}>
              📍 Bangalore
            </span>
            <span style={{ background: "rgba(255,255,255,0.2)", padding: "8px 20px", borderRadius: "20px", fontSize: "14px", fontWeight: "600" }}>
              🎓 Dual Degree (2020-2025)
            </span>
            <span style={{ background: "rgba(255,255,255,0.2)", padding: "8px 20px", borderRadius: "20px", fontSize: "14px", fontWeight: "600" }}>
              💼 Open to Opportunities
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "40px", flexWrap: "wrap" }}>
          {["journey", "skills", "interests"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              style={{
                padding: "12px 30px",
                background: activeSection === tab ? "white" : "rgba(255,255,255,0.2)",
                color: activeSection === tab ? "#667eea" : "white",
                border: "none",
                borderRadius: "25px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                textTransform: "capitalize",
                transition: "all 0.3s ease",
                transform: activeSection === tab ? "scale(1.05)" : "scale(1)",
              }}
            >
              {tab === "journey" ? "🗺️ My Journey" : tab === "skills" ? "💪 Skills" : "❤️ Interests"}
            </button>
          ))}
        </div>

        {/* Journey Section */}
        {activeSection === "journey" && (
          <div style={{ background: "white", borderRadius: "20px", padding: "40px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <h3 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "30px", color: "#333" }}>
              My Data Journey 🚀
            </h3>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: "30px",
                  top: "0",
                  bottom: "0",
                  width: "4px",
                  background: "linear-gradient(180deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "2px",
                }}
              />

              {journey.map((item, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    paddingLeft: "80px",
                    marginBottom: "40px",
                    transition: "transform 0.3s ease",
                    animation: `slideIn 0.6s ease-out ${index * 0.2}s backwards`,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(10px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "14px",
                      top: "5px",
                      width: "35px",
                      height: "35px",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                      animation: "pulse 2s ease-in-out infinite",
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <span style={{ fontSize: "14px", color: "#999", fontWeight: "700", textTransform: "uppercase" }}>
                      {item.year}
                    </span>
                    <h4 style={{ fontSize: "22px", fontWeight: "700", marginTop: "5px", marginBottom: "8px", color: "#333" }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: "16px", color: "#666", lineHeight: "1.6" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section with Advanced Animations */}
        {activeSection === "skills" && (
          <div style={{ background: "white", borderRadius: "20px", padding: "40px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <h3 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "30px", color: "#333" }}>
              Technical Arsenal 💪
            </h3>

            {Object.entries(skills).map(([category, skillList], catIndex) => (
              <div key={category} style={{ marginBottom: "40px" }}>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "20px",
                    color: "#667eea",
                    textTransform: "capitalize",
                  }}
                >
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h4>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
                  {skillList.map((skill, idx) => (
                    <div
                      key={skill.name}
                      className="skill-card"
                      style={{
                        padding: "20px",
                        background: "#f8f9fa",
                        borderRadius: "15px",
                        transition: "all 0.3s ease",
                        animationDelay: `${(catIndex * 4 + idx) * 0.1}s`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#667eea";
                        e.currentTarget.style.transform = "translateY(-5px) scale(1.03)";
                        e.currentTarget.style.boxShadow = "0 10px 25px rgba(102, 126, 234, 0.3)";
                        const text = e.currentTarget.querySelectorAll("span, div");
                        text.forEach((el: any) => (el.style.color = "white"));
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#f8f9fa";
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                        const nameEl = e.currentTarget.querySelector("span:nth-child(2)") as HTMLElement;
                        const levelEl = e.currentTarget.querySelectorAll("div")[2] as HTMLElement;
                        if (nameEl) nameEl.style.color = "#333";
                        if (levelEl) levelEl.style.color = "#999";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                        <span style={{ fontSize: "24px", animation: "pulse 2s ease-in-out infinite" }}>{skill.icon}</span>
                        <span style={{ fontSize: "16px", fontWeight: "700", color: "#333", transition: "color 0.3s ease" }}>
                          {skill.name}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                          style={{
                            flex: 1,
                            height: "8px",
                            background: "#e0e0e0",
                            borderRadius: "10px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${skill.level}%`,
                              height: "100%",
                              background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                              transition: "width 1s ease",
                              animation: "glow 2s ease-in-out infinite",
                            }}
                          />
                        </div>
                        <div style={{ fontSize: "12px", fontWeight: "700", color: "#999", transition: "color 0.3s ease" }}>
                          {skill.level}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Interests Section */}
        {activeSection === "interests" && (
          <div style={{ background: "white", borderRadius: "20px", padding: "40px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <h3 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "30px", color: "#333" }}>
              What Drives Me ❤️
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
              {interests.map((interest, index) => (
                <div
                  key={index}
                  style={{
                    padding: "30px",
                    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                    borderRadius: "15px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    animation: `slideIn 0.6s ease-out ${index * 0.15}s backwards`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                    e.currentTarget.style.transform = "scale(1.05) rotate(2deg)";
                    const text = e.currentTarget.querySelectorAll("h4, p");
                    text.forEach((el: any) => (el.style.color = "white"));
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)";
                    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                    const h4 = e.currentTarget.querySelector("h4") as HTMLElement;
                    const p = e.currentTarget.querySelector("p") as HTMLElement;
                    if (h4) h4.style.color = "#333";
                    if (p) p.style.color = "#666";
                  }}
                >
                  <div style={{ fontSize: "50px", marginBottom: "15px", animation: "pulse 3s ease-in-out infinite" }}>
                    {interest.icon}
                  </div>
                  <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "10px", color: "#333", transition: "color 0.3s ease" }}>
                    {interest.name}
                  </h4>
                  <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", transition: "color 0.3s ease" }}>
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Stats with Animation */}
            <div style={{ marginTop: "50px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
              {[
                { number: "15+", label: "Projects Completed", icon: "🚀" },
                { number: "50%", label: "Time Saved via Automation", icon: "⚡" },
                { number: "15%", label: "Performance Improvement", icon: "📈" },
                { number: "100%", label: "Passion for Data", icon: "❤️" },
              ].map((stat, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: "center",
                    padding: "25px",
                    background: "#f8f9fa",
                    borderRadius: "15px",
                    transition: "all 0.3s ease",
                    animation: `slideIn 0.8s ease-out ${index * 0.2}s backwards`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 15px 40px rgba(102, 126, 234, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "10px" }}>{stat.icon}</div>
                  <div style={{ fontSize: "32px", fontWeight: "700", color: "#667eea", marginBottom: "5px" }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: "14px", color: "#666", fontWeight: "600" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalInfo;
