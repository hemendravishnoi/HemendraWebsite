import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Code2, Layout, Database, Terminal, Cloud, Shield } from 'lucide-react';
const skillCategories = [{
  title: 'Automation Tools',
  icon: Code2,
  skills: ['Playwright', 'Cypress', 'Selenium', 'Appium', , 'Rest Assured', 'Protractor', 'WebdriverIO'],
  color: 'text-cyan-400'
},{
  title: 'Automation Frameworks',
  icon: Shield,
  skills: ['Specflow', 'Cucumber', 'TDD', 'BDD', 'Jasmine', 'TestNG', 'JUnit', 'XUnit'],
  color: 'text-red-400'
}, {
  title: 'Testing Types',
  icon: Layout,
  skills: ['Unit Testing', 'Integration Testing', 'Regression', 'E2E Testing', 'API Testing', 'Performance Testing'],
  color: 'text-blue-400'
}, {
  title: 'CI/CD & DevOps',
  icon: Cloud,
  skills: ['GitHub', 'BitBucket', 'Jenkins', 'Azure DevOps', 'Docker', 'Kubernetes','AWS'],
  color: 'text-purple-400'
}, {
  title: 'Programming Languages',
  icon: Terminal,
  skills: ['c#', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'Cassandra'],
  color: 'text-emerald-400'
}, {
  title: 'Project Management',
  icon: Database,
  skills: ['JIRA', 'TestRail', 'XRay', 'Azure DevOps', 'AWS', 'HP-QC'],
  color: 'text-amber-400'
}];
export function SkillsMatrix() {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {skillCategories.map((category, index) => {
      const Icon = category.icon;
      return <Card key={category.title} delay={index * 0.1} hover className="p-6 group">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors`}>
            <Icon className={`w-6 h-6 ${category.color}`} />
          </div>
          <h3 className="text-lg font-bold text-slate-100">
            {category.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map(skill => <Badge key={skill} variant="outline" className="group-hover:border-slate-600 transition-colors">
            {skill}
          </Badge>)}
        </div>

        {/* Decorative gradient blob */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
      </Card>;
    })}
  </div>;
}