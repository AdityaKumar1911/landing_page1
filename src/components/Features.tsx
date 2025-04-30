import { Check, Film, Lightbulb, Video, Users, Gift, Award, Palette, Zap, BookOpen, Briefcase } from 'lucide-react';
import { AnimatedElement } from './AnimatePresence';

const Features = () => {
  const features = [
    { 
      icon: <Film className="h-6 w-6 text-purple-500" />,
      title: "What is AI Filmmaking & Why It's the Future",
      description: "Discover how AI is revolutionizing video creation and why it's becoming essential for creators."
    },
    { 
      icon: <Video className="h-6 w-6 text-purple-500" />, 
      title: "Behind the Scenes: Viral Reels Made with AI",
      description: "See the exact process of how viral videos are created using AI tools, step by step."
    },
    { 
      icon: <Lightbulb className="h-6 w-6 text-purple-500" />,
      title: "Tools You Can Start Using Today – FREE & Easy",
      description: "Get hands-on with accessible AI video tools that require no technical expertise."
    },
    { 
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Create a Video Live with Us Using AI Tools",
      description: "Follow along as we create a professional-quality video from scratch using AI."
    },
    { 
      icon: <Gift className="h-6 w-6 text-purple-500" />,
      title: "Bonus: Free Prompts e-book for stunning visuals",
      description: "Receive a curated collection of prompts that generate amazing visual results."
    }
  ];

  const expertiseAreas = [
    { icon: <Palette className="h-5 w-5 text-purple-500" />, text: "AI Direction" },
    { icon: <Zap className="h-5 w-5 text-purple-500" />, text: "Visual Effects" },
    { icon: <BookOpen className="h-5 w-5 text-purple-500" />, text: "Storytelling" },
    { icon: <Briefcase className="h-5 w-5 text-purple-500" />, text: "Technical Innovation" }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedElement>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium mb-4">Workshop Curriculum</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Step into the future of filmmaking where creativity meets AI magic in this comprehensive workshop
            </p>
          </div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {features.map((feature, index) => {
    // For first 3 items, render normally
    if (index < 3) {
      return (
        <AnimatedElement key={index} delay={100 * (index + 1)}>
          <div className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all hover:bg-white/10 dark:hover:bg-gray-800/80 h-full">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-lg mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </div>
        </AnimatedElement>
      );
    }

    // For last 2 items, wrap them in a centered flex container
    if (index === 3) {
      return (
        <div key="last-row" className="lg:col-span-3 flex justify-center gap-8">
          {[features[3], features[4]].map((f, i) => (
            <AnimatedElement key={i} delay={100 * (3 + i + 1)}>
              <div className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all hover:bg-white/10 dark:hover:bg-gray-800/80 h-full w-full max-w-md">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-500/10 rounded-lg mb-6">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{f.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      );
    }

    return null;
  })}
</div>



        {/* Image Section */}
        <AnimatedElement delay={600} className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI-powered video editing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <img 
                src="https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Creative filmmaking process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedElement>

        {/* No Experience Required Section */}
        <AnimatedElement delay={700} className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">No Experience Required</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Start your journey into AI-powered filmmaking regardless of your current skill level. Our workshop is designed to guide you from the basics to advanced techniques.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Step-by-step guidance for beginners</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Hands-on practice with real tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <span>Interactive learning environment</span>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-square">
              <img 
                src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Learning filmmaking" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedElement>

        {/* Additional Image Section */}
        <AnimatedElement delay={750} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-xl aspect-video md:aspect-square">
              <img 
                src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Creative process" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-video md:aspect-square">
              <img 
                src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Video production" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-video md:aspect-square">
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Content creation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedElement>

        {/* Exclusive Bonuses Preview */}
        {/* <AnimatedElement delay={800} className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative overflow-hidden rounded-xl aspect-square">
              <img 
                src="https://images.pexels.com/photos/7147854/pexels-photo-7147854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Workshop bonuses" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-6">Exclusive Bonuses</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Get additional resources worth ₹5,000 completely free with your workshop registration. Accelerate your learning with our carefully curated bonus materials.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Gift className="h-6 w-6 text-purple-500 mr-3 mt-1" />
                  <span>AI Tools eBook (Worth ₹2,000)</span>
                </li>
                <li className="flex items-start">
                  <Gift className="h-6 w-6 text-purple-500 mr-3 mt-1" />
                  <span>Premium Prompts Collection (Worth ₹1,500)</span>
                </li>
                <li className="flex items-start">
                  <Gift className="h-6 w-6 text-purple-500 mr-3 mt-1" />
                  <span>Workshop Recording Access (Worth ₹1,500)</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedElement> */}

        {/* Mentor Section */}
        <AnimatedElement delay={900} className="mt-20">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Meet Your Mentor</h3>
                <h4 className="text-xl font-semibold text-purple-400 mb-2">Prashaant C Raval</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
  Seasoned industry expert and certified professional from Autodesk & Adobe, 
  Prashaant C Raval brings over 18 years of experience in the creative and design industries. 
  As an AI filmmaker and highly skilled artist, he has contributed to a diverse range of national 
  and international projects, delivering top-tier creative solutions across various domains.
  <br /><br />
  Prashaant is deeply passionate about education. He has mentored hundreds of students through 
  institutes, universities, and online platforms. His experience extends beyond the classroom—he's 
  conducted numerous webinars and seminars, sharing insights on the latest industry trends and tools.
  <br /><br />
  With a strong foundation in both artistic design and technical execution, he empowers learners 
  to build real-world, future-ready skills. His hands-on, practical teaching approach ensures students 
  are equipped to meet the evolving demands of the creative world.
  <br /><br />
  Join Prashaant C Raval and learn from a dedicated industry professional committed to nurturing 
  the next generation of creative talent.
</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {expertiseAreas.map((area, index) => (
                    <div key={index} className="flex items-center bg-purple-500/10 rounded-full px-4 py-2">
                      {area.icon}
                      <span className="ml-2 text-sm font-medium">{area.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <Award className="h-5 w-5" />
                  <span className="ml-2 text-gray-600 dark:text-gray-300">5.0 Rating from 200+ Students</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Conducted numerous Webinars and Seminars on industry trends</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Created over 500 AI-generated videos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Helped 1000+ students master video creation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Experience in both national and international projects</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Join Prashaant and learn from an industry professional dedicated to nurturing the next generation of creative talent.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="relative overflow-hidden rounded-xl aspect-square">
                  <img 
                    src="https://res.cloudinary.com/dshwmd54t/image/upload/v1745995954/Untitled_design_18_owl5ac.png" 
                    alt="Prashaant C Raval - Workshop Mentor" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Features;