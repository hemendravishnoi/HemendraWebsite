import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PipelineHero } from '../components/PipelineHero';
import { TestRunnerDemo } from '../components/TestRunnerDemo';
import { SkillsMatrix } from '../components/SkillsMatrix';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
export function Portfolio() {
  return <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans">
    {/* Navigation */}
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-100">
            QA<span className="text-cyan-400">.Dev</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#demo" className="hover:text-cyan-400 transition-colors">
            Demo
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">
            Experience
          </a>
          <a href="/Documents/HemendraVishnoi.pdf" download="Hemendra_Resume.pdf">
            <Button variant="outline" className="shrink-0">
              Download Resume
            </Button>
          </a>
          <a href="/Documents/Hemendra_CoverLetter.pdf" download="Hemendra_CoverLetter.pdf">
            <Button variant="outline" className="shrink-0">
              Download Cover Letter
            </Button>
          </a>
          <a href="#footer">
            <Button variant="primary" className="py-2 px-4 text-sm">
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </nav>

    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-8">
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="space-y-4 max-w-3xl">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-mono mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new projects
          </div> */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100">
            Hello, I'm, Hemendra<br />
            <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Building 'Quality Without Silos'
            </span>
            <p></p>
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-lime-600 font-bold">
              Where Automation Bridges Testing and Development
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-justify">
            QA Architect driving modern quality engineering through scalable automation frameworks, CI/CD integration, Agile testing practices,
            data-driven RCA and shift-left quality strategies for fast-moving product teams.
          </p>

          {/* <p className="text-lg text-yellow-100 max-w-2xl mx-auto leading-relaxed text-justify font-semibold  space-x-6">
            <span className="text-amber-500 text-2xl">Test Strategy & Risk-Based Planning </span>
            <span className="text-cyan-400 text-xl">LLM & Gen-AI Response Validation (Accuracy, Bias, Hallucinations) </span>
            <span className="text-lime-300 text-lg">Designing scalable UI/mobile automation frameworks </span>
            <span className="text-indigo-500 text-2xl">Intelligent API, Contract & Schema Validation </span>
            <span className="text-fuchsia-400 text-lg">Mocking & service virtualization </span>
            <span className="text-orange-600 text-lg">Database validation </span>
            <span className="text-teal-300 text-lg">Test data management </span>
            <span className="text-rose-500 text-xl">Test observability </span>
            <span className="text-yellow-300 text-2xl">Autonomous Test Execution & Self-Healing Frameworks </span>
            <span className="text-purple-500 text-xl">Cloud based & containerized test platforms </span>
            <span className="text-emerald-400 text-2xl">Shift-Left & Shift-Right Quality with Observability</span>
          </p> */}
        </motion.div>

        <div className="flex gap-4">
          <Button variant="secondary" icon={<Github className="w-4 h-4" />} onClick={() => window.open("https://github.com/hemendravishnoi", "_blank")}>
            GitHub
          </Button>
          <Button variant="secondary" icon={<Linkedin className="w-4 h-4" />} onClick={() => window.open("https://www.linkedin.com/in/hemendra-vishnoi-60419211a/", "_blank")}>
            LinkedIn
          </Button>
          <Button variant="secondary" icon={<Mail className="w-4 h-4" />} onClick={() => window.open("mailto:hemendravishnoi@gmail.com?subject=Let's%20connect&body=Hi%20Hemendra,", "_blank")}>
            Email
          </Button>
        </div>

        <div className="w-full pt-12">
          <PipelineHero />
        </div>
         <p className="text-lg text-yellow-100 max-w-4xl mx-auto leading-relaxed text-justify font-semibold  space-x-10">
            <span className="text-amber-500 text-2xl">Test Strategy & Risk-Based Planning </span>
            <span className="text-cyan-400 text-3xl">Automated LLM & Gen-AI Response Validation</span>
            <span className="text-cyan-400 text-sm">(Accuracy, Bias, Hallucinations) </span>
            <span className="text-lime-300 text-xl">Scalable UI/mobile automation frameworks </span>
            <span className="text-indigo-500 text-2xl">Intelligent API Automation, Contract & Schema Validation </span>
            <span className="text-fuchsia-400 text-xl">Mocking & service virtualization </span>
            <span className="text-orange-600 text-2xl">Database validation </span>
            <span className="text-teal-300 text-xl">Test data management </span>
            <span className="text-rose-500 text-xl">Test observability </span>
            <span className="text-yellow-300 text-2xl">Autonomous Test Execution & Self-Healing Frameworks </span>
            <span className="text-purple-500 text-xl">Cloud based & containerized test platforms </span>
            <span className="text-emerald-400 text-2xl">Shift-Left & Shift-Right Quality with Observability</span>
          </p>
      </section>

      {/* Demo Section */}
      <section id="demo" className="scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">
            Live Execution
          </h2>
          <p className="text-slate-400">
            Interactive demonstration of a modern test runner interface.
          </p>
        </div>
        <TestRunnerDemo />
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              Technical Arsenal
            </h2>
            <p className="text-slate-400 max-w-xl">
              A comprehensive toolkit for ensuring software quality across the
              entire stack.
            </p>
          </div>
          <a href="/Documents/HemendraVishnoi.pdf" download="Hemendra_Resume.pdf">
            <Button variant="outline" className="shrink-0">
              Download Resume
            </Button>
          </a>
          <a href="/Documents/Hemendra_CoverLetter.pdf" download="Hemendra_CoverLetter.pdf">
            <Button variant="outline" className="shrink-0">
              Download Cover Letter
            </Button>
          </a>
        </div>
        <SkillsMatrix />
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-24 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">
            Professional Journey
          </h2>
          <p className="text-slate-400">
            Track record of delivering high quality in fast-paced
            environments.
          </p>
        </div>
        <ExperienceTimeline />
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t border-slate-800 pt-12 pb-8 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-slate-500">
            <p className="text-5xl text-white text-left mb-4">
              Let's Talk
            </p>
            <p className="text-2xl text-white text-left mb-4">
              <a href="mailto:hemendravishnoi@gmail.com?subject=Let's%20connect&body=Hi%20Hemendra,">hemendravishnoi@gmail.com</a>
            </p>
          </div>
          <div className="text-slate-500 text-left md:text-right">
            <p className="text-right text-2xl mb-4 text-white font-semibold">
              "Quality isn’t tested in later. It’s engineered upfront."
            </p>
            <p className="text-right text-slate-600 text-sm">
              © {new Date().getFullYear()} Hemendra Vishnoi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  </div>;
}