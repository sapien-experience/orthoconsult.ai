import { useEffect } from 'react';
import { currentTheme } from '../themes';

function Eula() {
  useEffect(() => {
    document.title = 'End User License Agreement - OrthoAI Consult';
    return () => {
      document.title = 'OrthoAI Consult Landing Page';
    };
  }, []);

  return (
    <article className={`${currentTheme.background} px-4 py-16`}>
      <div className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
          End User License Agreement
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          OrthoAI Consult · Effective Date: February 21, 2025
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">1. Agreement</h2>
          <p className="mb-4">
            This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) and OrthoAI Consult (&quot;OrthoAI,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) governing your access to and use of the OrthoAI Consult software platform and related services (the &quot;Services&quot;).
          </p>
          <p>By accessing or using the Services, you agree to be bound by this Agreement.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">2. License Grant</h2>
          <p className="mb-4">
            Subject to your compliance with this Agreement and payment of applicable fees, OrthoAI grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for your internal business purposes.
          </p>
          <p>No ownership rights are transferred to you.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">3. Restrictions</h2>
          <p className="mb-3">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reverse engineer, decompile, or disassemble the Services</li>
            <li>Copy, modify, or create derivative works of the Services</li>
            <li>Resell, sublicense, or distribute the Services</li>
            <li>Use the Services to violate any applicable law</li>
            <li>Attempt unauthorized access to systems or data</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">4. Customer Data and Integrations</h2>
          <h3 className="text-lg font-medium mb-3 text-slate-800">4.1 Customer Data</h3>
          <p className="mb-4">
            You retain ownership of all data you provide or authorize us to access through third-party integrations (&quot;Customer Data&quot;).
          </p>
          <p className="mb-6">
            You grant OrthoAI a limited license to process Customer Data solely to provide the Services.
          </p>
          <h3 className="text-lg font-medium mb-3 text-slate-800">4.2 Third-Party Integrations</h3>
          <p className="mb-4">
            The Services may integrate with third-party platforms, including but not limited to QuickBooks Online and other accounting or practice management systems.
          </p>
          <p className="mb-3">You:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Represent that you have authority to grant access to such systems</li>
            <li>Acknowledge that integration availability depends on third-party providers</li>
            <li>Agree that OrthoAI is not responsible for third-party platform changes, outages, or data inaccuracies</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">5. Healthcare Data Disclaimer</h2>
          <p className="mb-4">
            OrthoAI Consult is designed to avoid storage of Protected Health Information (PHI). While limited patient identifiers may be transiently processed to correlate financial and operational data, such identifiers are scrubbed, hashed, tokenized, or anonymized prior to persistence.
          </p>
          <p className="mb-4">
            OrthoAI does not maintain medical records or designated record sets.
          </p>
          <p>
            You are responsible for determining your compliance obligations under healthcare privacy laws.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">6. Intellectual Property</h2>
          <p className="mb-4">
            All rights, title, and interest in and to the Services, including all intellectual property rights, remain the exclusive property of OrthoAI Consult.
          </p>
          <p>No rights are granted except as expressly set forth in this Agreement.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">7. Fees and Payment</h2>
          <p className="mb-4">
            Use of the Services may require payment of subscription fees as specified in your order form or subscription agreement.
          </p>
          <p>Failure to pay applicable fees may result in suspension or termination of access.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">8. Confidentiality</h2>
          <p>
            Each party agrees to maintain the confidentiality of non-public information disclosed in connection with the Services and to use such information solely for purposes of this Agreement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">9. Disclaimer of Warranties</h2>
          <p className="mb-4">
            THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot;
          </p>
          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORTHOAI DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p className="mb-3">OrthoAI does not warrant that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Services will be uninterrupted or error-free</li>
            <li>Third-party integrations will remain available</li>
            <li>Analytics results will be error-free</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">10. Limitation of Liability</h2>
          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>OrthoAI&apos;s total liability arising out of or related to this Agreement shall not exceed the total fees paid by Customer in the twelve (12) months preceding the event giving rise to the claim.</li>
            <li>OrthoAI shall not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">11. Term and Termination</h2>
          <p className="mb-4">
            This Agreement remains in effect while you use the Services.
          </p>
          <p className="mb-3">
            OrthoAI may suspend or terminate access if you:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Violate this Agreement</li>
            <li>Fail to pay applicable fees</li>
            <li>Use the Services in a manner that creates legal risk</li>
          </ul>
          <p className="mb-3">Upon termination:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your license ends immediately</li>
            <li>Access to the Services ceases</li>
            <li>Data handling follows the Privacy Policy</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">12. Export Compliance</h2>
          <p>
            You agree to comply with all applicable export control laws and regulations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">13. Governing Law</h2>
          <p>
            This Agreement is governed by the laws of [Insert State], without regard to conflict-of-law principles.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">14. Modifications</h2>
          <p>
            OrthoAI may update this Agreement from time to time. Continued use of the Services after updates constitutes acceptance of the revised Agreement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">15. Contact Information</h2>
          <p className="mb-2">
            OrthoAI Consult<br />
            [Insert Business Address]
          </p>
          <p>
            <a
              href="mailto:privacy@orthoaiconsult.com"
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

export default Eula;
