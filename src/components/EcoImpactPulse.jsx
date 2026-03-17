import { useState } from 'react';
import { Globe, TrendingUp, AlertCircle } from 'lucide-react';
import { materialsData } from '../data/materials';

export default function EcoImpactPulse() {
  const [adoptionRate, setAdoptionRate] = useState(25);
  const activeMaterial = materialsData[0]; // Hardcoded mushroom mycelium for simplicity
  
  // Fake math just for visual demonstration
  const globalPlastics = 400; // Million tons
  const co2Saved = (1.5 * (adoptionRate/100) * globalPlastics).toFixed(1);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8 mt-4">
      
      {/* Simulation Viewport */}
      <div className="flex-1 rounded-3xl bg-stone-800 p-8 relative overflow-hidden min-h-[400px] flex items-center justify-center shadow-xl">
        <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-700 ${adoptionRate > 50 ? 'from-emerald-900/50 to-teal-900/50' : 'from-rose-900/50 to-orange-900/50'}`} />
        
        <div className="relative text-center flex flex-col items-center">
          <Globe className={`w-32 h-32 mb-6 transition-all duration-700 ${adoptionRate > 50 ? 'text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]' : 'text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.5)]'}`} />
          <h2 className="font-clash text-3xl text-white mb-2">Global Impact View</h2>
          <p className="text-stone-400 text-sm max-w-md">
            Simulate the effect of worldwide adoption of {activeMaterial.name}. The higher the adoption, the more CO₂ is prevented from entering the atmosphere.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full md:w-96 flex flex-col justify-center gap-6">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div className="flex justify-between items-end mb-4">
            <label className="text-xs font-mono text-[#6b4f35] uppercase tracking-wider">Global Adoption</label>
            <span className="text-4xl font-black font-orbitron text-amber-600">{adoptionRate}%</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={adoptionRate}
            onChange={(e) => setAdoptionRate(parseInt(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm border-l-4 border-l-emerald-500">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-stone-50 rounded-lg">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-xs font-mono text-[#a08060] uppercase tracking-wider">CO₂ Diverted</span>
          </div>
          <div className="text-4xl font-orbitron font-bold text-[#1a1208] mb-1">
            {co2Saved} <span className="text-xl text-[#a08060]">M tonnes</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-stone-50 rounded-lg">
              <AlertCircle className="w-5 h-5 text-lime-600" />
            </div>
            <span className="text-xs font-mono text-[#a08060] uppercase tracking-wider">Degradation Avg</span>
          </div>
          <div className="text-3xl font-orbitron font-bold text-[#1a1208]">
            {activeMaterial.specs.degradeDays} Days
          </div>
        </div>
      </div>

    </div>
  );
}
