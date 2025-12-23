import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCw, CheckCircle2, XCircle, Terminal } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
type TestResult = {
  id: number;
  name: string;
  status: 'pending' | 'running' | 'passed' | 'failed';
  duration?: string;
};
const INITIAL_TESTS: TestResult[] = [{
  id: 1,
  name: 'should render login form',
  status: 'pending'
}, {
  id: 2,
  name: 'should validate email format',
  status: 'pending'
}, {
  id: 3,
  name: 'should block invalid credentials',
  status: 'pending'
}, {
  id: 4,
  name: 'should redirect on success',
  status: 'pending'
}];
export function TestRunnerDemo() {
  const [tests, setTests] = useState<TestResult[]>(INITIAL_TESTS);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const runTests = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setTests(INITIAL_TESTS.map(t => ({
      ...t,
      status: 'pending'
    })));
    setLogs(['> Starting test suite...', '> Environment: Production-like']);
    for (let i = 0; i < tests.length; i++) {
      // Set current test to running
      setTests(prev => prev.map((t, idx) => idx === i ? {
        ...t,
        status: 'running'
      } : t));
      // Simulate execution time
      await new Promise(resolve => setTimeout(resolve, 800));
      // Randomly fail the 3rd test sometimes for realism, but let's keep it positive for portfolio
      const passed = true;
      setTests(prev => prev.map((t, idx) => idx === i ? {
        ...t,
        status: passed ? 'passed' : 'failed',
        duration: `${Math.floor(Math.random() * 50) + 10}ms`
      } : t));
      setLogs(prev => [...prev, `> ${tests[i].name} ... ${passed ? 'PASS' : 'FAIL'}`]);
    }
    setLogs(prev => [...prev, '> Test suite completed successfully.']);
    setIsRunning(false);
  };
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
      {/* Code View */}
      <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col h-[400px]">
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
          <span className="ml-2 text-xs text-slate-500 font-mono">
            auth.test.ts
          </span>
        </div>
        <div className="p-6 font-mono text-sm text-slate-300 overflow-y-auto">
          <pre className="space-y-1">
            <span className="text-purple-400">describe</span>('
            <span className="text-emerald-400">Auth Flow</span>', () =&gt; {'{'}
            {'\n  '}
            <span className="text-purple-400">it</span>('
            <span className="text-emerald-400">should render login form</span>',{' '}
            <span className="text-blue-400">async</span> () =&gt; {'{'}
            {'\n    '}
            <span className="text-blue-400">await</span> page.
            <span className="text-yellow-400">goto</span>('/login');
            {'\n    '}
            <span className="text-blue-400">await</span> expect(page).
            <span className="text-yellow-400">toHaveTitle</span>(/Login/);
            {'\n  '}
            {'}'});
            {'\n'}
            {'\n  '}
            <span className="text-purple-400">it</span>('
            <span className="text-emerald-400">should validate email</span>',{' '}
            <span className="text-blue-400">async</span> () =&gt; {'{'}
            {'\n    '}
            <span className="text-blue-400">const</span> email = page.
            <span className="text-yellow-400">getByLabel</span>('Email');
            {'\n    '}
            <span className="text-blue-400">await</span> email.
            <span className="text-yellow-400">fill</span>('invalid-email');
            {'\n    '}
            <span className="text-blue-400">await</span> expect(page.
            <span className="text-yellow-400">getByRole</span>('alert')).
            <span className="text-yellow-400">toBeVisible</span>();
            {'\n  '}
            {'}'});
            {'\n'}
            {'\n  '}
            <span className="text-slate-500"> // ... more tests</span>
            {'\n'}
            {'}'});
          </pre>
        </div>
      </div>

      {/* Runner View */}
      <div className="flex flex-col gap-4">
        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col h-[400px]">
          <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-500 font-mono">
                Test Runner
              </span>
            </div>
            <div className="flex gap-2">
              <Badge variant={isRunning ? 'warning' : 'success'}>
                {isRunning ? 'Running' : 'Ready'}
              </Badge>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            <AnimatePresence>
              {tests.map(test => <motion.div key={test.id} initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: 1,
              x: 0
            }} className="flex items-center justify-between p-3 rounded-lg bg-slate-950/50 border border-slate-800/50">
                  <div className="flex items-center gap-3">
                    {test.status === 'pending' && <div className="w-4 h-4 rounded-full border-2 border-slate-700" />}
                    {test.status === 'running' && <RotateCw className="w-4 h-4 text-blue-400 animate-spin" />}
                    {test.status === 'passed' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    {test.status === 'failed' && <XCircle className="w-4 h-4 text-red-400" />}
                    <span className={`text-sm font-mono ${test.status === 'running' ? 'text-blue-400' : 'text-slate-300'}`}>
                      {test.name}
                    </span>
                  </div>
                  {test.duration && <span className="text-xs font-mono text-slate-500">
                      {test.duration}
                    </span>}
                </motion.div>)}
            </AnimatePresence>

            <div className="mt-4 pt-4 border-t border-slate-800">
              {logs.map((log, i) => <motion.div key={i} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} className="text-xs font-mono text-slate-500 mb-1">
                  {log}
                </motion.div>)}
            </div>
          </div>
        </div>

        <Button onClick={runTests} disabled={isRunning} className="w-full" icon={isRunning ? <RotateCw className="animate-spin w-4 h-4" /> : <Play className="w-4 h-4" />}>
          {isRunning ? 'Running Suite...' : 'Run Test Suite'}
        </Button>
      </div>
    </div>;
}