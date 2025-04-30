import { CalendarIcon, Clock, MapPin } from 'lucide-react';
import { AnimatedElement } from './AnimatePresence';

const Registration = () => {
  return (
    <section id="register" className="py-12 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-4">Limited Time Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Register Now – Limited Seats!</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join us for this exclusive workshop and transform your video creation process with AI.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={100}>
            <div className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-2xl border border-purple-500/20">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-6">Workshop Details</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 rounded-lg mr-4 flex-shrink-0">
                        <CalendarIcon className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Date</h4>
                        <p className="text-gray-500 dark:text-gray-400">[Insert Date]</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 rounded-lg mr-4 flex-shrink-0">
                        <Clock className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Duration</h4>
                        <p className="text-gray-500 dark:text-gray-400">2 Hours of Live Training</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex items-center justify-center bg-purple-500/10 rounded-lg mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-gray-500 dark:text-gray-400">Live & Interactive on Zoom / Google Meet</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* <div className="p-4 bg-purple-900/20 rounded-lg mb-6">
                    <p className="text-sm text-purple-200">
                      <span className="font-bold">Note:</span> The workshop will be recorded and available for replay for a limited time for all registered participants.
                    </p>
                  </div> */}
                </div>
                
                <div className="md:w-1/2">
                  <div className="text-center mb-6">
                    <div className="inline-block rounded-full bg-green-500/10 text-green-400 px-4 py-1 text-sm font-medium mb-2">
                      Special Launch Price
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl font-bold">₹49</span>
                      <span className="ml-2 text-gray-500 dark:text-gray-400 line-through">₹499</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">90% OFF - Today Only!</p>
                  </div>
                  
                  <div className="space-y-4">
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl text-white font-medium text-lg transition-all shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1">
                      Register for ₹49 Only
                    </button>
                    
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      Secure payment via Razorpay
                    </p>
                  </div>
                  
                  {/* <div className="mt-6 p-4 bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-blue-200">
                      <span className="font-bold">100% Satisfaction Guarantee:</span> If you're not completely satisfied with the workshop, we'll refund your payment - no questions asked.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Registration;