import { useEffect } from 'react';
import { currentTheme } from '../themes';

function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service - OrthoAI Consult';
    return () => {
      document.title = 'OrthoAI Consult Landing Page';
    };
  }, []);

  return (
    <article className={`${currentTheme.background} px-4 py-16`}>
      <div className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
          Terms of Service
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          OrthoAI Consult · Effective Date: February 21, 2025
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">1. Services</h2>
          <p className="mb-4">
            OrthoAI Consult provides analytics and reporting services integrating with third-party accounting, CRM, and practice management platforms.
          </p>
          <p>Services are provided to business customers only.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">2. Customer Responsibilities</h2>
          <p className="mb-3">Customer agrees to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide accurate account information</li>
            <li>Obtain all necessary permissions before connecting third-party systems</li>
            <li>Maintain compliance with applicable laws, including healthcare privacy laws</li>
            <li>Safeguard login credentials</li>
          </ul>
          <p>Customer represents that it has authority to grant OrthoAI access to integrated systems.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">3. Third-Party Integrations</h2>
          <p className="mb-4">
            OrthoAI relies on third-party APIs (e.g., QuickBooks). Availability and performance depend on those providers.
          </p>
          <p className="mb-3">We are not responsible for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>API outages</li>
            <li>Third-party policy changes</li>
            <li>Data inaccuracies originating from third-party systems</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">4. Data Ownership</h2>
          <p className="mb-4">
            Customer retains ownership of its data.
          </p>
          <p>
            OrthoAI may use de-identified and aggregated data for analytics, benchmarking, and service improvement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">5. Confidentiality</h2>
          <p>
            Each party agrees to protect the other&apos;s confidential information using reasonable safeguards.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">6. Fees and Payment</h2>
          <p>
            Fees are governed by the applicable subscription agreement or order form.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">7. Disclaimer of Warranties</h2>
          <p className="mb-4">
            Services are provided &quot;as is&quot; and &quot;as available.&quot;
          </p>
          <p>
            To the fullest extent permitted by law, OrthoAI disclaims all implied warranties, including merchantability and fitness for a particular purpose.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">8. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, OrthoAI&apos;s total liability shall not exceed the fees paid by Customer in the twelve (12) months preceding the claim.
          </p>
          <p>
            OrthoAI shall not be liable for indirect, incidental, special, consequential, or punitive damages.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">9. Termination</h2>
          <p className="mb-4">
            Either party may terminate the agreement in accordance with subscription terms.
          </p>
          <p className="mb-3">Upon termination:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access to services ceases</li>
            <li>Data handling follows the Privacy Policy</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">10. Governing Law</h2>
          <p>
            This Agreement is governed by the laws of Delaware, without regard to conflict-of-law principles.
          </p>
        </section>
      </div>
    </article>
  );
}

export default Terms;
