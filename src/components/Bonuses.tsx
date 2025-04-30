import { Gift, FileText, Zap } from 'lucide-react';
import { AnimatedElement } from './AnimatePresence';

const Bonuses = () => {
  return (
    <section id="bonuses" className="py-20 relative overflow-hidden">
      {/* Animated gradient blob */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      {/* <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium mb-4">Extra Value</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Bonuses</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Register today and receive these valuable resources to accelerate your AI filmmaking journey
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedElement delay={100}>
            <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">Free</div>
              <div className="w-16 h-16 flex items-center justify-center bg-purple-500/10 rounded-lg mb-6">
                <FileText className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free eBook – "5 AI Tools for Visual Creators"</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                A comprehensive guide to the best AI tools for visual creation, with step-by-step tutorials and practical examples.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={200}>
            <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">Free</div>
              <div className="w-16 h-16 flex items-center justify-center bg-purple-500/10 rounded-lg mb-6">
                <Zap className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Prompts e-book for stunning visuals</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                100+ proven prompts that generate jaw-dropping visuals for your videos, saving you hours of experimentation.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement delay={300} className="mt-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <Gift className="h-16 w-16 text-purple-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Workshop Recording Access</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Can't attend live? Don't worry! All registered participants will receive a recording of the workshop that will be available for a limited time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-all shadow-lg hover:shadow-purple-500/20"
                >
                  Secure Your Bonuses Now
                </button>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div> */}
    </section>
  );
};

export default Bonuses;