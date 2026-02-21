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
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
          Terms of Service
        </h1>
        <section className="space-y-4 text-slate-600 leading-relaxed">
          <p>Content to be added.</p>
        </section>
      </div>
    </article>
  );
}

export default Terms;
