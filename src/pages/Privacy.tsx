import { useEffect } from 'react';
import { currentTheme } from '../themes';

function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy - OrthoAI Consult';
    return () => {
      document.title = 'OrthoAI Consult Landing Page';
    };
  }, []);

  return (
    <article className={`${currentTheme.background} px-4 py-16`}>
      <div className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          OrthoAI Consult · Effective Date: February 21, 2025
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">1. Scope and Role</h2>
          <p className="mb-4">
            OrthoAI Consult (“OrthoAI,” “we,” “our,” or “us”) provides business analytics and performance intelligence services to orthodontic practices and dental organizations (“Customers”).
          </p>
          <p className="mb-4">
            Our services are business-to-business offerings and are not directed to individual patients.
          </p>
          <p>
            For data accessed through Customer-authorized integrations, OrthoAI acts as a data processor/service provider on behalf of the Customer. The Customer remains the data controller/business.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">2. Categories of Information Collected</h2>
          <h3 className="text-lg font-medium mb-3 text-slate-800">A. Customer Account Information</h3>
          <p className="mb-3">We collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Organization name</li>
            <li>Login credentials</li>
            <li>Billing and subscription details</li>
            <li>Communications sent to us</li>
          </ul>
          <h3 className="text-lg font-medium mb-3 text-slate-800">B. Integration Data (Customer-Authorized)</h3>
          <p className="mb-3">
            When authorized via OAuth, we access limited data from:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-2">
            <li>QuickBooks Online and other accounting platforms</li>
            <li>Practice Management Systems (PMS)</li>
            <li>CRM systems</li>
          </ul>
          <p className="mb-3">Categories may include:</p>
          <ul className="list-disc pl-6 mb-3 space-y-2">
            <li>Financial transaction records</li>
            <li>Revenue and expense data</li>
            <li>Invoice and payment data</li>
            <li>Procedure codes and timestamps</li>
            <li>Operational performance metrics</li>
          </ul>
          <p>
            We access only the scopes explicitly authorized by the Customer.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">3. Treatment of Patient Information and PHI</h2>
          <p className="mb-4">
            OrthoAI Consult is architected to avoid storage of Protected Health Information (PHI).
          </p>
          <p className="mb-4">
            In certain integration workflows, limited patient identifiers may be transiently processed to correlate financial transactions with procedures or timelines. In such cases:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Personally identifiable patient information (including names, birthdates, addresses, demographic details, and medical histories) is not retained.</li>
            <li>Identifiers are scrubbed, hashed, tokenized, or anonymized prior to persistence.</li>
            <li>Stored data is limited to de-identified or anonymized datasets necessary for analytics.</li>
            <li>OrthoAI does not intentionally maintain medical records, treatment histories, or designated record sets.</li>
          </ul>
          <p>
            Customers are responsible for ensuring their own compliance with applicable healthcare privacy laws.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">4. Purposes of Processing</h2>
          <p className="mb-3">We process data solely to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide analytics, reporting, and benchmarking services</li>
            <li>Generate financial and operational insights</li>
            <li>Maintain and improve platform functionality</li>
            <li>Provide customer support</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mb-3">We do not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sell personal information</li>
            <li>Use Customer data for advertising</li>
            <li>Share Customer financial data for marketing purposes</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">5. Data Minimization</h2>
          <p>
            We limit data collection to what is reasonably necessary to provide our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">6. Data Retention</h2>
          <p className="mb-4">
            We retain Customer data:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>For the duration of the service relationship; and</li>
            <li>As required for legitimate business purposes or legal compliance.</li>
          </ul>
          <p className="mb-4">
            Upon termination or written request:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>OAuth credentials are revoked or deleted</li>
            <li>Customer data is deleted in accordance with our retention schedule, subject to backup cycles</li>
            <li>De-identified or aggregated data may be retained for statistical and analytical purposes</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">7. Subprocessors</h2>
          <p className="mb-4">
            We use trusted infrastructure providers, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>DigitalOcean – cloud hosting</li>
            <li>Apideck – integration and OAuth infrastructure</li>
            <li>Payment processors (if applicable)</li>
            <li>Security and monitoring providers</li>
          </ul>
          <p>
            Subprocessors are bound by contractual confidentiality and security obligations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">8. Security Safeguards</h2>
          <p className="mb-4">
            We implement reasonable administrative, technical, and organizational safeguards, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>TLS encryption in transit</li>
            <li>Encryption at rest</li>
            <li>Role-based access controls</li>
            <li>Audit logging and monitoring</li>
            <li>Secure credential storage</li>
            <li>Hashing/anonymization of identifiers prior to persistence</li>
          </ul>
          <p>
            No system is completely secure; however, we apply industry-standard protections appropriate to the sensitivity of financial data.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">9. OAuth Authorization and Revocation</h2>
          <p className="mb-4">
            Customers authorize integrations via OAuth. Customers may revoke access at any time by:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Disconnecting integrations within the OrthoAI platform; or</li>
            <li>Revoking access within the third-party provider&apos;s settings.</li>
          </ul>
          <p>
            Upon revocation, tokens are invalidated and access ceases.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">10. Data Subject Rights</h2>
          <p className="mb-4">
            Where applicable, individuals may have rights to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access personal data</li>
            <li>Correct inaccuracies</li>
            <li>Request deletion</li>
            <li>Object to or restrict processing</li>
          </ul>
          <p>
            Requests may be submitted to:{' '}
            <a
              href="mailto:darren@orthoaiconsult.com"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              darren@orthoaiconsult.com
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}

export default Privacy;
