import { useEffect } from "react";


const PrivacyAndTerms = () => {

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-white py-16 px-4 border-b border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-black text-[#ec3750] mb-4">
          Redshifted Privacy Notice <br className="hidden md:block" />
          & Terms and Conditions
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-700 font-medium">
          Redshifted is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
          <br></br> Last Updated: Feburary 2026
        </p>
      </div>
    </section>
      <main className="max-w-4xl mx-auto mt-12 px-6 space-y-8">
        
        {/* Section 1: Privacy Notice */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ec3750] text-white font-bold">1</span>
            <h2 className="text-3xl font-extrabold text-slate-900">TLDR;</h2>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-700">
              <span className="font-bold text-slate-900">Redshifted</span> is a student-led initiative. 
              As a fiscally sponsored project, all activities are governed by the overarching 
              privacy standards of the Hack Club Foundation.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Our Operations</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0">
              <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <strong className="block text-[#ec3750] mb-1">Personal Data</strong> 
                Emails (parents & children),  names (parents & children), and signed liability forms provided during registration at one of our events.
                <br></br>
                Emails for our newsletter (automatically opt-in, unsubscribing is possible).
              </li>
              <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <strong className="block text-[#ec3750] mb-1">Usage Data</strong> 
                How you visit our website, whether you click our links or not.
              </li>
              <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <strong className="block text-[#ec3750] mb-1">Cookies</strong> 
                Essential session management for our event websites and communications.
              </li>
              <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <strong className="block text-[#ec3750] mb-1">Communications</strong> 
                  We use email for most private correspondence under the Hack Club Foundation's email service. <br></br> Personal data collection is handled through third-party apps (Fillout).
              </li>
              <li className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <strong className="block text-[#ec3750] mb-1">Financials</strong> 
                Our transactions are processed through the Hack Club Foundation's fiscal sponsorship, so any financial data is handled under their privacy policies.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-2">How We Use Your Information</h3>
            <p className="text-slate-700 leading-relaxed">
              We use your information to provide, maintain, and support our service. Because we are fiscally sponsored, 
              some information may be shared with our sponsor for financial auditing or compliance purposes. Our TOS and Privacy are subject to change based on the Hack Club Foundation's policies, and we will update this page accordingly.
            </p>
          </div>
        </section>

        {/* Section 2: Terms and Conditions */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ec3750] text-white font-bold">2</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Event Terms & Conditions</h2>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-700 mb-8">
              By participating at our events, you agree to be bound by these Terms. 
              If you disagree with any part, you may not participate at our events.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
              <h4 className="text-amber-900 font-bold uppercase tracking-wider text-sm mb-2">Fiscal Sponsorship & Liability</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                All financial transactions, donations, and formal contracts are processed through the Hack Club Foundation. 
                Any legal claims or liabilities are subject to the agreements between this project and its fiscal sponsor.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">User Accounts</h3>
            <p className="text-slate-700 leading-relaxed">
              You are responsible for safeguarding your password and for any activities under your account during an event. 
              We reserve the right to terminate accounts that abuse our event policies or violate community standards.
            </p>
            <br></br>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Event TOS</h3>
            <p className="text-slate-700 leading-relaxed">
              Please refer to <a href="https://hackclub.com/privacy-and-terms/#hack-club-standard-terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-900 transition-colors">Hack Club's Standard Terms and Conditions</a> for detailed information on event participation, code of conduct, and other important guidelines.
            </p>
          </div>
          <br></br>
          <a href="https://hackclub.com/privacy-and-terms/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-900 transition-colors">
            For the full Hack Club Foundation Privacy Policy and Terms of Service, please visit their official page.
          </a>
        </section>
      </main>
    </div>
  );
};

export default PrivacyAndTerms;
