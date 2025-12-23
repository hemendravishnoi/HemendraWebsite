import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
const experiences = [{
  id: 1,
  role: 'Senior Automation Engineer',
  company: 'GAC Group Holdings',
  period: 'Feb 2023 - Present',
  description: ["Leading the end-to-end QA and test automation strategy for a globally distributed financial platform serving 140+ enterprise clients worldwide",
    "ensuring high reliability, regulatory compliance, and scalability across complex, multi-tenant environments."],
  stack: ['Specflow', 'C#', 'Appium', 'Rest Sharp', 'Playwright', 'TypeScript', 'Git', 'Azure DevOps'],
  details: ['Led the end-to-end QA strategy, including test planning, manual execution, and automation coverage.',
    'Achieved over 70% automation coverage.',
    'Implemented QA best practices and inline with agile testing methodologies.']
}, {
  id: 2,
  role: 'Associate Vice President- QA Automation',
  company: 'JP Morgan & Chase Co.',
  period: 'Jul 2020 - Dec 2022',
  description: ['Led the design and implementation of a robust test automation ecosystem for the Collateral Central platform, a core system',
    'responsible for the management and movement of high-value client financial assets.'],
  stack: ['Java', 'JavaScript', 'Cucumber', 'Rest Assured', 'Mockito', 'AWS'],
  details: ['Designed and architected advanced automation framework to validate complex financial workflows involving asset movements and multi-currency exchanges.',
    'Led a team of SDETs, overseeing development, code reviews,sprint deliverables, and enforcing best practices across automation and documentation efforts.',
    'Implemented Testing Pyramid covering UI, Integration, API, performance, and DB validation, ensuring end-to-end quality and system integrity.']
}, {
  id: 3,
  role: 'Lead SDET',
  company: 'Leadventrue - India',
  period: 'Feb 2018 - Jul 2020',
  description: 'Led automation efforts for the DOMINO platform, driving efficiency, scalability, and quality across UI and backend testing layers.',
  stack: ['Selenium', 'C#', 'Jenkins', 'TestRail', 'Docker', 'Kubernetes'],
  details: ['Increased test coverage and improved ROI by 45%.',
    'Reduced deployment time by 20% and accelerated release cycles by integrating automated tests into CI/CD pipelines.',
    'Reduced production defects by 25% by implementing realtime test case tracking using TestRail.',
    'Contributed to Docker and Kubernetes adoption, enabling parallel test execution and reducing run times by 60%.']
}, {
  id: 4,
  role: 'Senior SDET',
  company: 'Virtusa (Client - NatWest Group)',
  period: 'Sep 2015 - Feb 2018',
  description: 'Led test automation for MIVAL, a core platform ensuring accurate independent financial valuations.',
  stack: ['Selenium', 'Protractor', 'Javascript', 'Jasmine'],
  details: ['Developed UI automation framework using Protractor (Selenium wrapper), Jasmine, and Cucumber (JavaScript) to validate complex financial flows.',
    'Reduced external service costs by 20% by designing and implementing API test automation solutions for MDX services using SOAP UI and Groovy, including advanced mocking strategies to minimize third-party dependencies.',
    'Increased test coverage by 15% by automating high-risk functional areas to ensure comprehensive validation and reduce defect leakage.',
    'Reduced repetitive bugs by 40% by implementing effective and structured test reporting.']
}, {
  id: 5,
  role: 'Senior Software Developer',
  company: 'Infosys',
  period: 'Jun 2010 - Sep 2015',
  description: 'Worked on different projects like British Telecom, Product IGLS & John Wiley',
  stack: ['ASP DotNet', 'SQL', 'Javascript', 'HTML', 'CSS', 'Bitbucket'],
  details: ['Developed web applications using ASP.NET, JavaScript, HTML, CSS, and SQL Server to meet client needs.',
    '20% increase in efficiency through seamless coordination with onshore stakeholders and serving as the primary client liaison.',
    '30% faster delivery by leading cross-functional teams of developers and testers, applying best practices and Agile methodologies.',
    'Improved client response time by 35% by building an automated email notification system, enhancing overall communication efficiency.']
}];
export function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  return <div className="space-y-6">
    {/* <div className="absolute top-6 right-6 text-slate-600">
      {true ? <ChevronUp /> : <ChevronDown />}
    </div>
    <AnimatePresence>
      {true && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} className="bg-slate-950/30 border-t border-slate-800">
        <div className="p-6 pl-[84px]">
          <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">
            Key Achievements
          </h4>
          <ul className="space-y-2"> */}

            {experiences.map((exp, index) => <Card key={exp.id} delay={index * 0.1} className="relative overflow-hidden">
              <div className="p-6 cursor-pointer" onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-cyan-950/30 border border-cyan-900 text-cyan-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-mono bg-slate-950/50 px-3 py-1 rounded-full border border-slate-800 w-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-slate-400 mb-4 pl-[60px]">{exp.description}</p>

                <div className="pl-[60px] flex flex-wrap gap-2 mb-2">
                  {exp.stack.map(tech => <Badge key={tech} variant="default">
                    {tech}
                  </Badge>)}
                </div>

                <div className="p-6 pl-[84px] flex flex-wrap gap-2 mb-2">
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">
                    Key Achievements
                  </h4>
                  {exp.details.map((detail, i) => <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                    {detail}
                  </li>)}
                </div>

                {/* <div className="absolute top-6 right-6 text-slate-600">
          {expandedId === exp.id ? <ChevronUp /> : <ChevronDown />}
        </div> */}
              </div>

              {/* <AnimatePresence>
        {expandedId === exp.id && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} className="bg-slate-950/30 border-t border-slate-800">
          <div className="p-6 pl-[84px]">
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {exp.details.map((detail, i) => <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                {detail}
              </li>)}
            </ul>
          </div>
        </motion.div>}
      </AnimatePresence> */}
            </Card>)}


          {/* </ul>
        </div>
      </motion.div>}
    </AnimatePresence> */}

  </div>;
}