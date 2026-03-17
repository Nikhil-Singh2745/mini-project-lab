import { useState } from 'react';
import { ChevronRight, ArrowLeft, Check, Sparkles, Factory, Leaf, Recycle, ShieldCheck, DollarSign } from 'lucide-react';
import { materialsData } from '../data/materials';

const QUESTIONS = [
  {
    id: 'industry',
    title: "1. Select Primary Industry",
    options: [
      { id: 'Food', label: 'Food & Beverage', icon: Leaf },
      { id: 'Pharma', label: 'Pharmaceuticals', icon: Factory },
      { id: 'Cosmetic', label: 'Cosmetics & Beauty', icon: Sparkles }
    ]
  },
  {
    id: 'priority',
    title: "2. Select Top Priority",
    options: [
      { id: 'eco', label: 'Maximum Sustainability', icon: Recycle },
      { id: 'durability', label: 'Durability & Protection', icon: ShieldCheck },
      { id: 'cost', label: 'Cost Efficiency', icon: DollarSign }
    ]
  }
];

export default function EcoWizard({ onCancel }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComputing, setIsComputing] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const currentQuestion = QUESTIONS[step];

  const handleOptionSelect = (optionId) => {
    const newAnswers = { ...answers, [currentQuestion.id]: optionId };
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      computeRecommendation(newAnswers);
    }
  };

  const computeRecommendation = (finalAnswers) => {
    setIsComputing(true);
    setTimeout(() => {
      // Simplified Logic: Just match industry for the mock test
      const match = materialsData.find(m => m.category === finalAnswers.industry) || materialsData[0];
      setRecommendation(match);
      setIsComputing(false);
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-[#faf7f2] flex flex-col p-6">
      <button 
        onClick={onCancel}
        className="flex items-center gap-2 text-[#a08060] hover:text-[#1a1208] mb-8 w-fit"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </button>

      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
        {isComputing ? (
          <div className="text-center space-y-4">
            <Sparkles className="w-12 h-12 text-amber-500 animate-pulse mx-auto" />
            <h3 className="font-clash text-2xl">Analyzing Database...</h3>
          </div>
        ) : recommendation ? (
          <div className="w-full">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 font-mono text-xs mb-4">
                <Check className="w-3 h-3" /> MATCH FOUND
              </div>
              <h2 className="font-clash text-4xl text-[#1a1208] mb-4">Recommendation Ready</h2>
            </div>

            <div className="bg-white border border-stone-200 rounded-3xl p-8 flex flex-col md:flex-row gap-8 shadow-sm">
              <div className="flex-1 space-y-6">
                <div>
                  <p className="text-xs font-mono text-amber-600 mb-2 uppercase">{recommendation.category} SECTOR</p>
                  <h3 className="font-clash text-3xl text-[#1a1208] mb-3">{recommendation.name}</h3>
                  <p className="text-[#6b4f35] leading-relaxed">{recommendation.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                    <div className="text-[#a08060] text-xs font-mono mb-1">MATERIAL TYPE</div>
                    <div className="text-[#1a1208] font-semibold">{recommendation.type}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                    <div className="text-[#a08060] text-xs font-mono mb-1">CARBON</div>
                    <div className="text-emerald-600 font-semibold">{recommendation.specs.carbon}</div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="flex-1 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                  <div className="text-6xl font-orbitron font-bold text-[#1a1208] mb-2">{recommendation.ecoScore}</div>
                  <div className="text-xs font-mono text-amber-600 uppercase">Eco Score</div>
                </div>
                <button 
                  onClick={() => { setStep(0); setRecommendation(null); setAnswers({}); }}
                  className="w-full py-3 rounded-xl border border-stone-200 text-[#6b4f35] font-clash hover:bg-stone-50 transition-colors"
                >
                  Restart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-2xl">
            <h2 className="font-clash text-4xl text-[#1a1208] mb-8 text-center">
              {currentQuestion.title}
            </h2>
            <div className="space-y-4">
              {currentQuestion.options.map((option) => {
                const Icon = option.icon;
                const isSelected = answers[currentQuestion.id] === option.id;

                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={`w-full p-6 rounded-2xl border flex items-center gap-5 transition-all
                      ${isSelected ? 'bg-amber-50 border-amber-500' : 'bg-white border-stone-200 hover:border-amber-300'}
                    `}
                  >
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-amber-500 text-white' : 'bg-stone-100 text-[#a08060]'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`font-clash text-xl ${isSelected ? 'text-amber-700' : 'text-[#1a1208]'}`}>
                      {option.label}
                    </h3>
                    <ChevronRight className={`ml-auto w-6 h-6 ${isSelected ? 'text-amber-500' : 'text-stone-300'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
