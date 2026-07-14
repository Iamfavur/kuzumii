import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, AlertTriangle, Clock, Search, FileText, CheckCircle2, 
  ChevronRight, UploadCloud, Network, Zap, Lock, Users, Activity, 
  BookOpen, Building2, Server, DollarSign, Cloud, FileSpreadsheet, ArrowRight
} from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-lime-500 selection:text-zinc-950 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-lime-500 flex items-center justify-center shadow-[0_0_15px_rgba(132,204,22,0.5)]">
              <ShieldCheck className="w-5 h-5 text-zinc-950" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">kuzumii</span>
          </div>
          <a href="#waitlist" className="px-5 py-2 bg-zinc-900 border border-lime-500/50 text-lime-400 rounded-lg hover:bg-lime-500 hover:text-zinc-950 transition-all font-semibold text-sm">
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* 1. HERO SECTION & THE SOLUTION */}
      <section className="pt-40 pb-20 px-6 relative flex flex-col items-center text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-500/10 blur-[150px] rounded-full pointer-events-none" />
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-lime-400 text-sm font-bold mb-8">
            <Zap className="w-4 h-4" /> The AI Security Questionnaire Copilot
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white">
            From 5 Days to <br className="hidden md:block" />
            <span className="text-lime-400">30 Minutes.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Upload your SOC 2 reports, ISO certifications, and internal policies. When a new customer sends a 300-question Excel sheet, our AI automatically reads every question, finds the evidence, and exports the completed spreadsheet instantly.
          </p>

          <form id="waitlist" onSubmit={handleSubmit} className="max-w-md mx-auto mb-6 flex flex-col sm:flex-row gap-3">
            {submitted ? (
              <div className="w-full p-4 rounded-lg bg-lime-500/10 border border-lime-500/30 text-lime-400 flex items-center justify-center gap-2 font-bold">
                <CheckCircle2 className="w-5 h-5" /> Priority Access Confirmed.
              </div>
            ) : (
              <>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your work email" required className="flex-1 bg-zinc-900 border border-zinc-800 text-white px-5 py-4 rounded-lg focus:outline-none focus:border-lime-500 transition-all" />
                <button type="submit" className="bg-lime-500 hover:bg-lime-400 text-zinc-950 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_35px_rgba(132,204,22,0.5)]">
                  Automate Now
                </button>
              </>
            )}
          </form>
        </motion.div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-24 px-6 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AlertTriangle className="w-12 h-12 text-lime-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Enterprise Sales Bottleneck</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Before a bank, hospital, or large enterprise buys your software, their procurement teams send you massive security assessments. Deals get delayed, and security teams become bottlenecks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-4">You are constantly bombarded with:</h3>
              <ul className="space-y-3 text-zinc-400">
                {['200–500 security questions', 'Privacy & GDPR questionnaires', 'Vendor risk assessments', 'ISO 27001 & SOC 2 questionnaires', 'AI governance forms'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-red-500">✗</span> {item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-4">Answering the same things over and over:</h3>
              <div className="space-y-3 text-zinc-400 italic">
                <p className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">"Do you encrypt data at rest?"</p>
                <p className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">"How are user passwords stored?"</p>
                <p className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">"Describe your disaster recovery process."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. USER WORKFLOW (5 STEPS) */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">How Kuzumii Works</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">A seamless workflow that completely eliminates manual data entry.</p>
          </div>

          <div className="space-y-8">
            {[
              { step: "1", title: "Company Setup & Knowledge Base", icon: <UploadCloud />, desc: "Create an account and upload your Security policies, SOC 2 Reports, Privacy Policies, and previous questionnaires." },
              { step: "2", title: "AI Knowledge Extraction", icon: <Network />, desc: "The AI extracts controls, policies, and certifications to build a comprehensive 'Compliance Graph'. (e.g., maps AES-256 Encryption to Security Policy Section 4)." },
              { step: "3", title: "Upload Questionnaire", icon: <FileSpreadsheet />, desc: "User uploads the massive VendorSecurityAssessment.xlsx containing 300 questions from a new client." },
              { step: "4", title: "AI Auto-Fill & Evidence Linking", icon: <Zap />, desc: "The AI answers every question instantly. 'Do you encrypt data at rest?' -> 'Yes, using AES-256'. It attaches a Confidence Score (95%) and cites the exact Source Document." },
              { step: "5", title: "Human Review", icon: <CheckCircle2 />, desc: "Reviewers see color-coded results: Green (High confidence), Yellow (Needs review), Red (No evidence found). Drastically reduces risk before exporting." }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row gap-6 items-start bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-lime-500/30 transition-colors">
                <div className="shrink-0 w-16 h-16 rounded-full bg-zinc-950 border border-lime-500 flex items-center justify-center text-lime-400 text-2xl font-bold shadow-[0_0_15px_rgba(132,204,22,0.2)]">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">{item.icon} {item.title}</h3>
                  <p className="text-lg text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE FEATURES (10 ITEMS) */}
      <section className="py-24 px-6 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">10 Core Features of the AI Copilot</h2>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "1. Security Questionnaire Autofill", desc: "Our flagship feature. Upload the questionnaire and get answers instantly." },
              { title: "2. Compliance Knowledge Vault", desc: "Stores SOC2, ISO27001, HIPAA, GDPR, and policies in a searchable database." },
              { title: "3. Evidence Mapping", desc: "Every answer links to proof. E.g., 'DisasterRecoveryPolicy.pdf page 8'." },
              { title: "4. Version Control", desc: "Track changes over time. The system remembers if a policy changed from March to June." },
              { title: "5. AI Gap Detection", desc: "Identifies missing controls. If a customer asks about pen tests and there's no evidence, the system warns you." },
              { title: "6. Security Trust Center", desc: "Public portal showing your certifications and compliance status so buyers can self-serve." },
              { title: "7. Customer-Specific Answers", desc: "AI adjusts wording automatically based on whether the client needs HIPAA, GDPR, or Govt terms." },
              { title: "8. AI Compliance Chat", desc: "Like ChatGPT for compliance. Ask: 'Do we have evidence for data retention?' and get cited answers." },
              { title: "9. Automated RFP Responses", desc: "Upload an RFP document and the AI drafts technical, security, and company responses." },
              { title: "10. Microsoft Copilot Integration", desc: "Open questionnaires in Excel, send to Kuzumii, and get them back completed via M365." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                <h3 className="text-xl font-bold text-lime-400 mb-3">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. ADVANCED ENTERPRISE FEATURES */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Advanced Enterprise Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <Users className="w-10 h-10 text-lime-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Multi-Team Collaboration</h3>
              <p className="text-zinc-400">Security, Legal, Sales, and Compliance teams can seamlessly review different sections of the same document simultaneously.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <Activity className="w-10 h-10 text-lime-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Strict Approval Workflows</h3>
              <p className="text-zinc-400">Draft → Review → Approve → Export. Maintain strict operational control before sending anything to a client.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <Lock className="w-10 h-10 text-lime-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Immutable Audit Trails</h3>
              <p className="text-zinc-400">Records exactly who changed what, when they changed it, and why. Crucial for enterprise compliance.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <BookOpen className="w-10 h-10 text-lime-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">AI Answer Library</h3>
              <p className="text-zinc-400">Every approved answer becomes reusable. Over time, the AI learns your exact preferred wording and becomes more accurate every month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHO IS THIS FOR (CUSTOMERS) & 7. PRICING */}
      <section className="py-24 px-6 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">Who Uses Kuzumii?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['SaaS Companies', 'Fintech Startups', 'Healthtech Startups', 'AI Startups', 'Cybersecurity Companies', 'Government Contractors'].map((tag, i) => (
                <span key={i} className="px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-full text-lime-400 font-semibold flex items-center gap-2">
                  <Building2 className="w-4 h-4" /> {tag}
                </span>
              ))}
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center text-white mb-12">Clear SaaS Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-4xl font-extrabold text-lime-400 mb-6">$99<span className="text-lg text-zinc-500 font-normal">/month</span></p>
              <ul className="text-zinc-400 space-y-4 mb-8 text-left">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-lime-500" /> 100 Questions included</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-lime-500" /> Basic Knowledge Vault</li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-zinc-950 font-bold transition-all">Get Started</button>
            </div>
            
            {/* Growth */}
            <div className="bg-zinc-950 p-8 rounded-2xl border-2 border-lime-500 text-center relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(132,204,22,0.15)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-500 text-zinc-950 px-4 py-1 rounded-full font-bold text-sm">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
              <p className="text-4xl font-extrabold text-lime-400 mb-6">$399<span className="text-lg text-zinc-500 font-normal">/month</span></p>
              <ul className="text-zinc-400 space-y-4 mb-8 text-left">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-lime-500" /> Unlimited Questionnaires</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-lime-500" /> Evidence Mapping</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-lime-500" /> Security Trust Center</li>
              </ul>
              <button className="w-full py-3 rounded-lg bg-lime-500 text-zinc-950 hover:bg-lime-400 font-bold transition-all">Go Growth</button>
            </div>

            {/* Enterprise */}
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-4xl font-extrabold text-lime-400 mb-6">$2,000+<span className="text-lg text-zinc-500 font-normal">/month</span></p>
              <ul className="text-zinc-400 space-y-4 mb-8 text-left">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-lime-500" /> Custom Workflows & SSO</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-lime-500" /> Immutable Audit Logs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-lime-500" /> Private Cloud Deployment</li>
              </ul>
              <button className="w-full py-3 rounded-lg border border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-zinc-950 font-bold transition-all">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ENTERPRISE CLOUD READY (MS ISV / AWS ACTIVATE) */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center">
          <Cloud className="w-16 h-16 text-lime-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Built for the Enterprise Cloud</h2>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            Kuzumii is clear B2B software solving a real business problem with measurable ROI. It is an AI-powered, document-heavy platform built natively for robust cloud infrastructure, making it incredibly easy to use
          </p>
        </div>
      </section>

      {/* 9. FOOTER CTA */}
      <footer className="pt-20 pb-10 px-6 bg-zinc-950 relative border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Reduce completion time from days to minutes.</h2>
          
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-lime-500 hover:bg-lime-400 text-zinc-950 px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-[0_0_25px_rgba(132,204,22,0.4)] mb-16 inline-flex items-center gap-2">
            Automate Questionnaires Now <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="border-t border-zinc-800 pt-8 text-zinc-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 Kuzumii Inc. All rights reserved.</p>
            <div className="flex gap-6 font-medium">
              <span className="hover:text-zinc-400 cursor-pointer">Privacy</span>
              <span className="hover:text-zinc-400 cursor-pointer">Terms</span>
              <span className="hover:text-zinc-400 cursor-pointer">Contact</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;