import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Package, TestTube, Globe, CheckCircle2, Circle } from 'lucide-react';
const steps = [{
  id: 'commit',
  label: 'Commit',
  icon: GitCommit
}, {
  id: 'build',
  label: 'Build',
  icon: Package
}, {
  id: 'test',
  label: 'Test',
  icon: TestTube
}, {
  id: 'deploy',
  label: 'Deploy',
  icon: Globe
}];
export function PipelineHero() {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % (steps.length + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, []);
  return <div className="relative w-full max-w-4xl mx-auto py-12 px-4">
      {/* Connecting Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 rounded-full overflow-hidden">
        <motion.div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400" initial={{
        width: '0%'
      }} animate={{
        width: `${activeStep / (steps.length - 1) * 100}%`
      }} transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }} />
      </div>

      {/* Steps */}
      <div className="relative flex justify-between items-center">
        {steps.map((step, index) => {
        const isActive = index <= activeStep;
        const isCurrent = index === activeStep;
        const Icon = step.icon;
        return <div key={step.id} className="flex flex-col items-center gap-4 relative z-10">
              <motion.div initial={false} animate={{
            scale: isCurrent ? 1.2 : 1,
            backgroundColor: isActive ? '#0f172a' : '#0f172a',
            borderColor: isActive ? '#22d3ee' : '#334155'
          }} className={`w-16 h-16 rounded-full border-2 flex items-center justify-center bg-slate-900 transition-colors duration-300 ${isActive ? 'shadow-[0_0_20px_-5px_rgba(34,211,238,0.5)]' : ''}`}>
                <Icon className={`w-8 h-8 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} />

                {/* Status Indicator */}
                <div className="absolute -top-1 -right-1 bg-slate-900 rounded-full">
                  {isActive ? <motion.div initial={{
                scale: 0
              }} animate={{
                scale: 1
              }}>
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 fill-emerald-950" />
                    </motion.div> : <Circle className="w-6 h-6 text-slate-700" />}
                </div>
              </motion.div>

              <div className="text-center">
                <p className={`font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                  {step.label}
                </p>
                {isCurrent && <motion.span initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} className="text-xs text-blue-400 absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    Processing...
                  </motion.span>}
              </div>
            </div>;
      })}
      </div>
    </div>;
}