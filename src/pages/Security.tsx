import { useEffect } from 'react';
import { currentTheme } from '../themes';

function Security() {
  useEffect(() => {
    document.title = 'Security - OrthoAI Consult';
    return () => {
      document.title = 'OrthoAI Consult Landing Page';
    };
  }, []);

  return (
    <article className={`${currentTheme.background} px-4 py-16`}>
      <div className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
          Data Security Overview
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          OrthoAI Consult
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Infrastructure</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hosted on DigitalOcean cloud infrastructure</li>
            <li>Production environments isolated from development</li>
            <li>Encrypted network communications (TLS 1.2+)</li>
            <li>Firewall and network segmentation controls</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Data Protection</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption at rest for stored data</li>
            <li>Role-based access controls</li>
            <li>Principle of least privilege enforced</li>
            <li>Multi-factor authentication for administrative access</li>
            <li>Secure credential and secret management practices</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Integration Security</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>OAuth 2.0 used for third-party integrations</li>
            <li>Tokens securely stored and encrypted</li>
            <li>Access limited to authorized scopes</li>
            <li>Tokens invalidated upon revocation</li>
            <li>No storage of third-party login credentials</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">PHI Handling</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Platform designed to avoid storage of PHI</li>
            <li>Patient identifiers scrubbed, hashed, or anonymized prior to persistence</li>
            <li>No medical records or designated record sets maintained</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Monitoring &amp; Logging</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access logging enabled</li>
            <li>Monitoring for anomalous activity</li>
            <li>Alerting on suspicious access patterns</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-slate-900">Incident Response</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Documented incident response procedures</li>
            <li>Containment, investigation, and remediation protocols</li>
            <li>Notification processes aligned with applicable law</li>
          </ul>
        </section>
      </div>
    </article>
  );
}

export default Security;
