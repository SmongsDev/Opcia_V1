// src/components/Sections/SolutionSection.jsx
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SolutionSection = () => {
  const [activeOverlay, setActiveOverlay] = useState(null);

  const solutions = [
    { title: "Consulting", width: "409px", image: "images/solution/consulting.png" },
    { title: "moDon-D", width: "865px", featured: true, image: "images/solution/modon-d.png" },
    { title: "moDon-H", width: "717px", image: "images/solution/modon-h.png" },
    { title: "moDon-I", width: "807px", image: "images/solution/modon-i.png" }
  ];

  const secondRowSolutions = [
    { title: "moDon-W", width: "613px", image: "images/solution/modon-w.png" },
    { title: "Cyber Training Platform", width: "491px", image: "images/solution/cyber-training.png" },
    { title: "moDon-M", width: "666px", image: "images/solution/modon-m.png" },
    { title: "moDon-N", width: "483px", image: "images/solution/modon-n.png" },
    { title: "Satellite Image Analysis", width: "530px", featured: true, image: "images/solution/satellite-analysis.png" }
  ];

  // DestinationCard 컴포넌트
  const DestinationCard = ({ title, width, featured, image }) => {
    const descriptions = {
      "Consulting": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-D": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-H": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-I": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-W": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "Cyber Training Platform": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-M": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "moDon-N": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      "Satellite Image Analysis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    };

    const renderOverlay = () => {
      // Consulting 오버레이 레이아웃 (첨부 이미지 참고)
      if (title === "Consulting") {
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setActiveOverlay(null)}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="rounded-2xl p-10 max-w-5xl w-full text-left relative"
              style={{
                background: 'rgba(20,20,20,0.57)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#fff',
                cursor: 'auto'
              }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400" style={{ letterSpacing: 0 }}>
                Consulting
              </h2>
              <ul className="space-y-3 text-base md:text-lg text-white list-disc pl-6">
                <li>Facility-specific consulting on penetration testing, vulnerability analysis, and training</li>
                <li>Independent or partner-led engagements based on project needs</li>
                <li>Cyber &amp; physical penetration testing, vulnerability research, compliance advisory</li>
                <li>Security awareness and professional workforce training</li>
              </ul>
              <button
                className="absolute top-4 right-6 text-2xl text-white font-bold"
                onClick={() => setActiveOverlay(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        );
      }
      if (title === "Cyber Training Platform") {
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setActiveOverlay(null)}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="rounded-2xl p-10 max-w-5xl w-full text-left relative"
              style={{
                background: 'rgba(20,20,20,0.57)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#fff',
                cursor: 'auto'
              }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400" style={{ letterSpacing: 0 }}>
                Consulting
              </h2>
              <ul className="space-y-3 text-base md:text-lg text-white list-disc pl-6">
                <li>Facility-specific consulting on penetration testing, vulnerability analysis, and training</li>
                <li>Independent or partner-led engagements based on project needs</li>
                <li>Cyber &amp; physical penetration testing, vulnerability research, compliance advisory</li>
                <li>Security awareness and professional workforce training</li>
              </ul>
              <button
                className="absolute top-4 right-6 text-2xl text-white font-bold"
                onClick={() => setActiveOverlay(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        );
      }
      // moDon-I 상세 오버레이 레이아웃 (첨부 이미지 참고)
      if (title === "moDon-I") {
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setActiveOverlay(null)}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="rounded-2xl p-10 max-w-5xl w-full text-left relative"
              style={{
                background: 'rgba(20,20,20,0.57)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#fff',
                cursor: 'auto'
              }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
                moDon-I : IoT Monitoring and Blocking Solution
              </h2>
              <div className="mb-6 text-base md:text-lg">
                <span className="text-white/80">
                  Whitelist-based access control and blocking solution developed in{' '}
                  <span className="underline text-orange-300 font-semibold">Rust Language</span>
                </span>
              </div>
              <ul className="mb-8 space-y-2 list-disc pl-6 text-base">
                <li>Detects and collects malicious processes and binaries running on IoT/IIoT devices</li>
                <li>Monitors specific directories in real time and dumps created binaries upon detection</li>
                <li>Blocks binaries identified as malicious</li>
                <li>Detects and blocks connections to C2 (Command and Control) servers</li>
                <li>Provides real-time alerts and customizable policies via the IDX management interface</li>
                <li>Supports legacy systems and over 20 IoT CPU architectures and operating systems</li>
              </ul>
              <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-center">
                <img
                  src="images/solution/modon-i-diagram.png"
                  alt="moDon-I Architecture"
                  className="rounded-lg shadow-lg object-contain w-full md:w-2/3 bg-gray-100"
                  style={{ maxHeight: 220 }}
                />
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="font-bold mb-2">1. Malware and Detection & Blocking Anomalous Process</div>
                  <div className="border-l-4 border-yellow-400 pl-4 text-base mb-4">
                    Detects abnormal processes by comparing real-time process activity against a whitelist of known legitimate processes
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-bold mb-2">2. File/Directory Anomaly Detection Blocking</div>
                  <div className="border-l-4 border-yellow-400 pl-4 text-base mb-4">
                    Monitors user-defined paths to detect unauthorized file or directory creation, modification, or deletion activities
                  </div>
                </div>
              </div>
              <button
                className="absolute top-4 right-6 text-2xl text-white font-bold"
                onClick={() => setActiveOverlay(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        );
      }
      // moDon-D 상세 오버레이 레이아웃 (첨부 이미지 참고)
      if (title === "moDon-D") {
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setActiveOverlay(null)}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="rounded-2xl p-10 max-w-4xl w-full text-left relative"
              style={{
                background: 'rgba(20,20,20,0.57)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#fff',
                cursor: 'auto'
              }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold mb-6 text-yellow-400" style={{ letterSpacing: 0 }}>
                moDon-D
              </h2>
              <ul className="mb-6 space-y-4 text-base">
                <li>
                  <span className="font-bold text-white">Drone Anti-Forensics:</span>
                  <span className="ml-2 text-white/90">
                    A set of techniques designed to evade detection or hinder investigation by manipulating or concealing data collected by drones. Typically used to obscure illegal drone activities and disrupt forensic analysis.
                  </span>
                </li>
                <li>
                  <span className="font-bold text-white">Encrypted Data Types:</span>
                  <span className="ml-2 text-white/90">
                    Includes video, image, GPS information, and log data related to sensor activity
                  </span>
                  <ol className="list-decimal pl-6 mt-2 space-y-1 text-white/90">
                    <li>Software-based data encryption</li>
                    <li>Optimized encryption targeting specific data types</li>
                    <li>Hardware-based encryption</li>
                    <li>Power-efficient design for minimal battery consumption</li>
                  </ol>
                  <div className="border-l-2 border-white/60 pl-4 mt-4 text-white/80 text-sm">
                    Firmware-level encryption + hardware-integrated security = end-to-end protection covering camera modules, sensors, and system logs<br />
                    Lightweight and power-optimized for minimal battery consumption &rarr; <span className="text-yellow-400 font-semibold">ModOn-D is ready for real-world deployment.</span>
                  </div>
                </li>
              </ul>
              <button
                className="absolute top-4 right-6 text-2xl text-white font-bold"
                onClick={() => setActiveOverlay(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        );
      }
      // moDon-H 상세 오버레이 레이아웃 (첨부 이미지 참고)
      if (title === "moDon-H") {
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setActiveOverlay(null)}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="rounded-2xl p-8 md:p-12 max-w-4xl w-full text-left relative flex flex-col"
              style={{
                background: 'rgba(20,20,20,0.57)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#fff',
                cursor: 'auto'
              }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#facc15", letterSpacing: 0 }}>
                <span className="text-yellow-400">moDon-H:</span> <span className="text-white">Industrial Honeynet</span>
              </h2>
              <ul className="mb-8 space-y-3 text-base md:text-lg">
                <li>Diverts attacks away from real systems using actual industrial equipment</li>
                <li>Built with PLCs and HMIs to simulate physical control environments</li>
                <li>Segmented networks and intentional vulnerabilities attract and monitor attackers</li>
                <li>Attack patterns are analyzed to strengthen real-world defenses</li>
              </ul>
              <div className="flex justify-center mb-2">
                <img
                  src="images/solution/modon-h-diagram.png"
                  alt="moDon-H Industrial Honeynet Diagram"
                  className="rounded-lg shadow-lg bg-gray-100 object-contain"
                  style={{ maxHeight: 320, maxWidth: "100%" }}
                />
              </div>
              <div className="text-right text-xs text-white/60 mt-1 pr-1">Taffy Pot</div>
              <button
                className="absolute top-4 right-6 text-2xl text-white font-bold"
                onClick={() => setActiveOverlay(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        );
      }
      // moDon-M 상세 오버레이 레이아웃 (첨부 이미지 참고)
      if (title === "moDon-M") {
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setActiveOverlay(null)}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="rounded-2xl p-8 md:p-12 max-w-3xl w-full text-left relative flex flex-col"
              style={{
                background: 'rgba(20,20,20,0.57)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#fff',
                cursor: 'auto'
              }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#f59e1a", letterSpacing: 0 }}>
                <span className="text-yellow-400">moDon-M:</span> <span className="text-white">Military Cybersecurity Services</span>
              </h2>
              <div className="mb-4">
                <div className="font-semibold text-lg text-white mb-2">Need for Military Cybersecurity</div>
                <ul className="list-disc pl-6 space-y-1 text-base text-white/90">
                  <li>Drones, sensors, and comms systems are key cyber targets</li>
                  <li>More mission failures and data leaks from GPS spoofing &amp; drone hacks</li>
                  <li>Legacy defenses struggle with real-time, complex threats</li>
                  <li>Proactive security is essential for military systems and networks</li>
                </ul>
              </div>
              <div className="mb-4">
                <div className="font-semibold text-lg text-white mb-2">Technologies &amp; Capabilities</div>
                <ul className="list-disc pl-6 space-y-2 text-base text-white/90">
                  <li>
                    IoT vulnerability analysis and hacking prevention
                    <ul className="list-disc pl-6 text-sm mt-1">
                      <li>(CCTV, routers, drones, multifunction devices, robots, etc.)</li>
                    </ul>
                  </li>
                  <li>
                    Development and analysis of secure drone firmware
                    <ul className="list-disc pl-6 text-sm mt-1">
                      <li>Includes anti-forensics design to prevent data recovery from downed mission drones</li>
                    </ul>
                  </li>
                  <li>
                    Multi-platform analysis tools for ARM, PPC, MIPS, etc.
                    <ul className="list-disc pl-6 text-sm mt-1">
                      <li>Uses AI-powered analysis to assess potential vulnerabilities</li>
                    </ul>
                  </li>
                  <li>Network and infrastructure security implementation (service integration projects)</li>
                  <li>
                    Security assessment of foreign security equipment
                    <ul className="list-disc pl-6 text-sm mt-1">
                      <li>Including unauthorized and uncertified imported devices</li>
                    </ul>
                  </li>
                  <li>
                    CTI (Cyber Threat Intelligence) via satellite communication monitoring
                    <ul className="list-disc pl-6 text-sm mt-1">
                      <li>Tracking satellite phone activity within domestic use</li>
                    </ul>
                  </li>
                  <li>
                    THA (Threat Hunting Analysis)
                    <ul className="list-disc pl-6 text-sm mt-1">
                      <li>Detection of abnormal or emerging threats</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mb-2">
                <div className="font-semibold text-lg text-white mb-2">Expected Benefits</div>
                <ul className="list-disc pl-6 space-y-1 text-base text-white/90">
                  <li>Lightweight agent enables real-time anomaly detection for stable, continuous operation</li>
                  <li>Firmware and data encryption blocks classified info leaks at the source</li>
                  <li>AI-driven response counters zero-day and insider threats instantly</li>
                  <li>Meets global cybersecurity standards (e.g., EU CRA) for defense market readiness</li>
                </ul>
              </div>
              <button
                className="absolute top-4 right-6 text-2xl text-white font-bold"
                onClick={() => setActiveOverlay(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        );
      }
      // moDon-W 상세 오버레이 레이아웃 (첨부 이미지 참고)
      if (title === "moDon-W") {
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setActiveOverlay(null)}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="rounded-2xl p-8 md:p-12 max-w-5xl w-full text-left relative flex flex-col"
              style={{
                background: 'rgba(20,20,20,0.57)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#fff',
                cursor: 'auto'
              }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#f59e1a", letterSpacing: 0 }}>
                <span className="text-yellow-400">moDon-W : Wireless Communication Intelligence</span>
              </h2>
              <ul className="mb-6 space-y-2 text-base md:text-lg list-disc pl-6">
                <li>Tracking mobile phones and IoT devices over cellular networks (3G, 4G, 5G)</li>
                <li>Locating Wi-Fi &amp; cellular devices, access points, routers, and IoT equipment with precise geolocation</li>
                <li>Denial of service (DoS) on cellular and Wi-Fi networks</li>
                <li>IMSI and MAC address acquisition for identification and tracking</li>
                <li>Detection of hidden wireless devices (phones, recorders, cameras, routers, laptops, etc.)</li>
                <li>Simultaneous L-band monitoring of Iridium, Thuraya, and IsatPhone Pro satellite handsets using a unified sensor</li>
                <li>Integration of wireless intelligence into proprietary Webint system (OSINT + SIGINT + Deep Web + SNS)</li>
              </ul>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <img
                  src="images/solution/modon-w-1.png"
                  alt="moDon-W system 1"
                  className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
                  style={{ objectFit: "cover" }}
                />
                <img
                  src="images/solution/modon-w-2.png"
                  alt="moDon-W system 2"
                  className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
                  style={{ objectFit: "cover" }}
                />
                <img
                  src="images/solution/modon-w-3.png"
                  alt="moDon-W system 3"
                  className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
                  style={{ objectFit: "cover" }}
                />
                <img
                  src="images/solution/modon-w-4.png"
                  alt="moDon-W system 4"
                  className="rounded-lg shadow-lg object-cover w-full h-36 bg-gray-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <button
                className="absolute top-4 right-6 text-2xl text-white font-bold"
                onClick={() => setActiveOverlay(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        );
      }
      // Satellite Image Analysis 상세 오버레이 레이아웃 (첨부 이미지 참고)
      if (title === "Satellite Image Analysis") {
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setActiveOverlay(null)}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="rounded-2xl p-8 md:p-12 max-w-5xl w-full text-left relative flex flex-col bg-opacity-90"
              style={{
                background: 'rgba(20,20,20,0.57)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#fff',
                cursor: 'auto'
              }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">
                Satellite Image Analysis
              </h2>
              <ul className="mb-4 space-y-2 text-base md:text-lg">
                <li>Satellite Vision based Cargo Demand Modeling &amp; Prediction</li>
                <li>
                  <span className="font-semibold text-white">Data:</span>
                  <ul className="list-disc pl-6 mt-1 space-y-1 text-white/90">
                    <li>
                      Satellite Image from Maxar, Planet Labs, Arlula
                    </li>
                    <li>Air Cargo Warehouses Data</li>
                    <li>International Logistics Company Data</li>
                  </ul>
                </li>
              </ul>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <img
                  src="images/solution/satellite-plane-2.png"
                  alt="Satellite plane 1"
                  className="rounded-lg shadow-lg object-cover w-full h-48 bg-gray-100"
                  style={{ objectFit: "cover" }}
                />
                <img
                  src="images/solution/satellite-plane-1.png"
                  alt="Satellite plane 2"
                  className="rounded-lg shadow-lg object-cover w-full h-48 bg-gray-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <img
                    src="images/solution/satellite-align.png"
                    alt="Deep Learning-based alignment"
                    className="rounded-lg shadow-lg object-contain w-full bg-gray-100"
                    style={{ maxHeight: 200 }}
                  />
                </div>
                <img
                  src="images/solution/satellite-pose.png"
                  alt="Pose estimation"
                  className="rounded-lg shadow-lg object-contain w-full bg-gray-100"
                  style={{ maxHeight: 200 }}
                />
              </div>
              <button
                className="absolute top-4 right-6 text-2xl text-white font-bold"
                onClick={() => setActiveOverlay(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        );
      }
      // moDon-N 상세 오버레이 레이아웃 (첨부 이미지 참고)
      if (title === "moDon-N") {
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setActiveOverlay(null)}
            style={{ cursor: 'pointer' }}
          >
            <div
              className="rounded-2xl p-8 md:p-12 max-w-5xl w-full text-left relative flex flex-col bg-opacity-90"
              style={{
                background: 'rgba(20,20,20,0.57)',
                boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#fff',
                cursor: 'auto'
              }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-6 text-2xl text-white font-bold"
                onClick={() => setActiveOverlay(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-yellow-400" style={{ letterSpacing: 0 }}>
                moDon-N : Network Traffic and Log Anomaly Detection & Analysis
              </h2>
              <ul className="mb-6 space-y-2 text-base md:text-lg list-disc pl-6">
                <li>Compact network devices deployable without impacting existing industrial environments</li>
                <li>Designed for proactive detection and early response rather than direct blocking, considering the constraints of industrial environments</li>
                <li>Supports analysis of over 40 industrial protocols</li>
                <li>Customizable to fit specific site requirements</li>
                <li>Real-time monitoring of network traffic</li>
                <li>Visual dashboards and anomaly history management tools</li>
                <li>Immediate alert transmission via messenger or email upon abnormal traffic detection</li>
              </ul>
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1 flex flex-col">
                  <img
                    src="images/solution/modon-n-1.png"
                    alt="moDon-N Dashboard 1"
                    className="rounded-lg shadow-lg object-contain bg-gray-100 mb-4"
                    style={{ maxHeight: 220, width: "100%", maxWidth: 380 }}
                  />
                  <div className="font-bold text-lg mb-2 text-white">Key Features</div>
                  <ol className="list-decimal pl-6 space-y-1 text-base text-white/90">
                    <li>Anomaly behavior detection and real-time response</li>
                    <li>Support for industrial network protocols</li>
                    <li>Compatibility with existing network infrastructure</li>
                    <li>Network traffic logging and management</li>
                    <li>Alert and notification system</li>
                    <li>Data visualization dashboard</li>
                  </ol>
                </div>
                <div className="flex-1 flex flex-col">
                  <img
                    src="images/solution/modon-n-2.png"
                    alt="moDon-N Dashboard 2"
                    className="rounded-lg shadow-lg object-contain bg-gray-100 mb-6"
                    style={{ maxHeight: 220, width: "100%", maxWidth: 380 }}
                  />
                  <div className="font-bold text-lg mb-2 text-white">Deployment Benefits</div>
                  <ul className="list-disc pl-6 space-y-1 text-base text-white/90">
                    <li>Enhanced Real-Time Security</li>
                    <li>Minimized Risk Exposure</li>
                    <li>Improved Operational Efficiency</li>
                    <li>Compliance with Laws & Regulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      }
    };
  return (
    <>
      <div
        className={`solution-card ${featured ? 'featured' : ''} relative rounded-lg text-white group cursor-pointer overflow-hidden`}
        style={{ width, height: '22rem' }}
        onClick={() => setActiveOverlay(title)}
      >
        {/* 배경 이미지 */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ height: '22rem' }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'block';
          }}
        />
        <div className="absolute inset-0 pointer-events-none rounded-lg"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800" style={{ display: 'none' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-300"></div>
        <div className="absolute top-4 right-4 z-20">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/60 group-hover:bg-white transition-all duration-300 opacity-80 group-hover:opacity-100">
            <ArrowRight className="w-7 h-7 transition-colors duration-300 group-hover:text-black text-white" />
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-0">
          <div className="w-full">
            <div className="transition-all duration-300">
              <div className="w-full px-8 pb-8">
                <div
                  className="transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 absolute left-0 right-0 bottom-0 mx-8 mb-8"
                  style={{
                    borderRadius: '28px',
                    background: 'rgba(255,255,255,0.18)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)',
                    padding: '2rem 1.5rem',
                    position: 'absolute',
                    zIndex: 10,
                  }}
                >
                  <h3
                    className="font-alata text-xl lg:text-3xl xl:text-5xl font-medium tracking-[-1.44px] leading-tight mb-4 opacity-90"
                  >
                    {title}
                  </h3>
                  <p
                    className="font-normal"
                    style={{
                      fontSize: '0.9rem',
                      color: '#fff',
                      lineHeight: '1.2',
                      margin: 0,
                    }}
                  >
                    {descriptions[title]}
                  </p>
                </div>
                <div className="transition-all duration-300 opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-4 relative z-10">
                  <h3 className="font-alata text-xl lg:text-3xl xl:text-5xl font-medium tracking-[-1.44px] leading-tight mb-4 opacity-90">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      {activeOverlay === title && renderOverlay()}
    </>
  );
};

  return (
    <section id="solution" className="bg-white px-6 lg:px-12 py-24">
      <div className="flex flex-col items-start gap-[120px] relative bg-white overflow-hidden">
        {/* Header Section */}
        <div className="flex items-end justify-start lg:justify-end gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full mb-20">
          <div className="flex flex-col items-start gap-[10px] sm:gap-[12px] lg:gap-[15px] relative flex-1 grow">
            <div className="flex h-[80px] sm:h-[120px] lg:h-[178px] items-end justify-start lg:justify-end gap-[36px] sm:gap-[54px] lg:gap-[72px] relative self-stretch w-full">
              <div className="flex flex-col items-start gap-[10px] sm:gap-[12px] lg:gap-[15px] relative flex-1 grow">
                <div className="relative w-fit font-alata font-normal text-black text-4xl sm:text-6xl lg:text-[75px] tracking-[0.5px] sm:tracking-[1px] lg:tracking-[2.25px] leading-[28px] sm:leading-[40px] lg:leading-[75px] whitespace-nowrap overflow-hidden text-ellipsis">
                  Solution
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Cards Section */}
        <div className="relative w-full">
          <div className="solution-cards-container overflow-x-auto pb-4">
            <div className="flex flex-col items-center gap-8 lg:gap-14 min-w-max lg:min-w-[2898px]">
              {/* First Row */}
              <div className="flex items-start gap-3 lg:gap-5 w-full">
                {solutions.map((solution, index) => (
                  <DestinationCard
                    key={index}
                    title={solution.title}
                    width={solution.width}
                    featured={solution.featured}
                    image={solution.image}
                  />
                ))}
              </div>

              {/* Second Row */}
              <div className="flex items-start gap-3 lg:gap-5 w-full">
                {secondRowSolutions.map((solution, index) => (
                  <DestinationCard
                    key={index}
                    title={solution.title}
                    width={solution.width}
                    featured={solution.featured}
                    image={solution.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;