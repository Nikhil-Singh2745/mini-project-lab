import { Leaf, Box, ArrowRight } from 'lucide-react';

export default function HomePage({ onLaunch }) {
  return (
    <div className="text-center max-w-3xl relative z-10 mt-10">
      <h1 className="font-clash text-5xl md:text-6xl font-bold mb-6 text-[#1a1208]">
        Rethink Packaging
      </h1>
      <p className="text-lg text-[#6b4f35] mb-10">
        A simplified mock tool for selecting sustainable packaging options based on product constraints. Used for our college Lab Report submission.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm text-left hover:border-emerald-300 transition-colors">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
            <Box className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="font-clash text-xl mb-2">Smart Wizard</h3>
          <p className="text-[#6b4f35] text-sm">Select your industry and get precise material recommendations from our local database.</p>
        </div>
        
        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm text-left hover:border-amber-300 transition-colors">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <Leaf className="w-5 h-5 text-amber-600" />
          </div>
          <h3 className="font-clash text-xl mb-2">Eco-Metrics</h3>
          <p className="text-[#6b4f35] text-sm">View carbon offset percentages and biodegradability statistics instantly.</p>
        </div>
      </div>

      <button 
        onClick={onLaunch}
        className="mx-auto flex items-center justify-center gap-2 text-lg font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all"
      >
        Launch Tools <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
