import { useState } from 'react';
import { Leaf, Navigation } from 'lucide-react';
import HomePage from './components/HomePage';
import EcoWizard from './components/EcoWizard';
import Configurator from './components/Configurator';
import EcoImpactPulse from './components/EcoImpactPulse';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch(currentView) {
      case 'wizard': return <EcoWizard onCancel={() => setCurrentView('home')} />;
      case 'configurator': return <Configurator />;
      case 'impact': return <EcoImpactPulse />;
      default: return <HomePage onLaunch={() => setCurrentView('wizard')} />;
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col pt-24 relative overflow-hidden bg-[#faf7f2]">
      {/* Universal Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setCurrentView('home')}
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="font-clash text-lg font-semibold text-[#1a1208]">EcoPack Select</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setCurrentView('home')}
              className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-emerald-600' : 'text-[#6b4f35] hover:text-[#1a1208]'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentView('wizard')}
              className={`text-sm font-medium transition-colors ${currentView === 'wizard' ? 'text-amber-600' : 'text-[#6b4f35] hover:text-[#1a1208]'}`}
            >
              EcoWizard
            </button>
            <button 
              onClick={() => setCurrentView('configurator')}
              className={`text-sm font-medium transition-colors ${currentView === 'configurator' ? 'text-emerald-600' : 'text-[#6b4f35] hover:text-[#1a1208]'}`}
            >
              Configurator
            </button>
            <button 
              onClick={() => setCurrentView('impact')}
              className={`text-sm font-medium transition-colors ${currentView === 'impact' ? 'text-rose-600' : 'text-[#6b4f35] hover:text-[#1a1208]'}`}
            >
              Impact Pulse
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <Navigation className="w-6 h-6 text-[#1a1208]" />
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 pb-12">
        {renderView()}
      </main>
    </div>
  );
}
