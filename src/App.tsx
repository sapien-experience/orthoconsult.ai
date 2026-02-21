import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Brain, MessageSquare } from 'lucide-react';
import { currentTheme } from './themes';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={currentTheme.background}>
      {/* Hero Section */}
      <section className="px-4 pt-16 md:pt-24 pb-8 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
            <span className={currentTheme.titleGradient1}>
              Orthodontic Intelligence. 
            </span>
            <br />
            <span className={currentTheme.titleGradient2}>
              Reimagined.
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-slate-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The first AI consultant built to optimize your entire practice—from staffing to revenue—using real data, predictive modeling, and intelligent scenario testing.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <motion.button 
            className={`${currentTheme.button} text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Early Access
          </motion.button>
        </motion.div>
      </section>

      {/* Trust Panel */}
      <section className="px-4 pt-8 pb-16 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className={`max-w-3xl mx-auto rounded-2xl p-8 md:p-10 border ${currentTheme.trustBorder}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8">
              <div className={`text-5xl md:text-6xl lg:text-7xl font-bold ${currentTheme.trustNumber}`}>
                6,300+
              </div>
              <div className="text-lg md:text-xl font-medium leading-relaxed text-center md:text-left text-slate-600">
                modeled practice-years from simulation experts trusted by Google, Align Technologies, and American Express.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Snapshot */}
      <section className={`px-4 py-8 ${currentTheme.valueSection}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Value Point 1 */}
            <motion.div 
              className="text-center group"
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 ${currentTheme.icon1}`}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-bold mb-4 text-xl text-slate-900">
                Model your practice before making costly decisions
              </h3>
              <p className="leading-relaxed text-lg text-slate-600">
                Forecast staffing, treatment mix, and operational changes using real-time data and predictive simulation.
              </p>
            </motion.div>

            {/* Value Point 2 */}
            <motion.div 
              className="text-center group"
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 ${currentTheme.icon2}`}>
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-bold mb-4 text-xl text-slate-900">
                Diagnose performance gaps instantly
              </h3>
              <p className="leading-relaxed text-lg text-slate-600">
                Track KPIs like revenue per chair, net income, and expense ratios—then test improvements before implementation.
              </p>
            </motion.div>

            {/* Value Point 3 */}
            <motion.div 
              className="text-center group"
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 ${currentTheme.icon3}`}>
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="font-bold mb-4 text-xl text-slate-900">
                Consult with AI, not static spreadsheets
              </h3>
              <p className="leading-relaxed text-lg text-slate-600">
                Get plain-language guidance and live dashboards that evolve with your practice.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className={`px-4 py-20 backdrop-blur-sm ${currentTheme.signupSection}`}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-slate-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to transform your practice?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-slate-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the waitlist for early access to OrthoAI Consult
          </motion.p>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.button
              type="submit"
              className={`${currentTheme.signupButton} text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Waitlist
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

export default App;