import { useState } from 'react';
import { Leaf, Box, ArrowRight } from 'lucide-react';
import EcoWizard from './EcoWizard';

export default function App() {
  const [showTool, setShowTool] = useState(false);

  if (showTool) {
    return <EcoWizard onCancel={() => setShowTool(false)} />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-24 px-6 relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="font-clash text-lg font-semibold">EcoPack Simplified</span>
          </div>
          <button 
            onClick={() => setShowTool(true)}
            className="flex items-center gap-2 text-sm font-medium bg-[#1a1208] text-white px-4 py-2 rounded-full hover:bg-stone-800 transition-colors"
          >
            Launch Tool <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="text-center max-w-3xl relative z-10 mt-10">
        <h1 className="font-clash text-5xl md:text-6xl font-bold mb-6 text-[#1a1208]">
          Rethink Packaging
        </h1>
        <p className="text-lg text-[#6b4f35] mb-10">
          A simplified mock tool for selecting sustainable packaging options based on product constraints. Used for our college Lab Report submission.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm text-left">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <Box className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-clash text-xl mb-2">Smart Wizard</h3>
            <p className="text-[#6b4f35] text-sm">Select your industry and get precise material recommendations from our local database.</p>
          </div>
          
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm text-left">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Leaf className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-clash text-xl mb-2">Eco-Metrics</h3>
            <p className="text-[#6b4f35] text-sm">View carbon offset percentages and biodegradability statistics instantly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
