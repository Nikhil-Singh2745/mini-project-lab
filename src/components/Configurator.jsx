import { useState } from 'react';
import { Box, Layers, MousePointerClick, CheckCircle } from 'lucide-react';
import { materialsData } from '../data/materials';

export default function Configurator() {
  const [activeMaterial, setActiveMaterial] = useState(materialsData[0]);

  return (
    <div className="w-full h-full min-h-[500px] flex flex-col md:flex-row gap-6 p-6">

      <div className="w-full md:w-80 flex flex-col gap-4">
        <div className="glass-panel p-5 rounded-2xl bg-white/60">
          <h2 className="font-clash text-2xl text-[#1a1208] mb-2 flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600" /> Materials
          </h2>
          <p className="text-[#6b4f35] text-sm mb-4">Select a material to apply to the mockup.</p>
          <div className="space-y-2">
            {materialsData.map((mat) => (
              <button
                key={mat.id}
                onClick={() => setActiveMaterial(mat)}
                className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all ${
                  activeMaterial.id === mat.id 
                    ? 'bg-emerald-50 border-emerald-400 shadow-sm' 
                    : 'bg-white border-stone-200 hover:bg-stone-50'
                }`}
              >
                <div className="font-medium text-sm text-[#1a1208]">{mat.name}</div>
                {activeMaterial.id === mat.id && <CheckCircle className="w-4 h-4 text-emerald-600" />}
              </button>
            ))}
          </div>
        </div>
      </div>


      <div className="flex-1 rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100/50 to-stone-200/50" />
        <div className="relative text-center flex flex-col items-center">
          <Box className="w-24 h-24 text-stone-300 group-hover:text-amber-500 transition-colors duration-500 mb-4" />
          <h3 className="font-clash text-xl text-stone-500">Interactive 3D Viewport</h3>
          <p className="text-stone-400 text-sm mt-2 max-w-sm">
            (3D WebGL features omitted in this simplified version. Imagine `{activeMaterial.name}` rendered here.)
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-stone-400 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-sm">
            <MousePointerClick className="w-3 h-3" /> DRAG TO ROTATE
          </div>
        </div>
      </div>


      <div className="w-full md:w-80 flex flex-col gap-4">
        <div className="glass-panel p-5 rounded-2xl bg-white/60 h-full">
          <h2 className="font-clash text-2xl text-[#1a1208] mb-4">Specifications</h2>
          
          <div className="mb-6 p-4 bg-stone-100 rounded-xl border border-stone-200 text-center">
            <div className="text-sm text-[#6b4f35] mb-1">Eco Score</div>
            <div className="text-5xl font-orbitron font-bold text-amber-600">{activeMaterial.ecoScore}</div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs font-mono text-[#a08060] mb-1 uppercase">Material Name</div>
              <div className="font-medium text-[#1a1208]">{activeMaterial.name}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-[#a08060] mb-1 uppercase">Carbon Footprint</div>
              <div className="font-medium text-emerald-600">{activeMaterial.specs.carbon} vs Baseline</div>
            </div>
            <div>
              <div className="text-xs font-mono text-[#a08060] mb-1 uppercase">Degradability</div>
              <div className="font-medium text-[#1a1208]">{activeMaterial.specs.degradeDays} Days</div>
            </div>
            <div>
              <div className="text-xs font-mono text-[#a08060] mb-1 uppercase">Description</div>
              <div className="text-sm text-[#6b4f35] leading-relaxed">{activeMaterial.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
