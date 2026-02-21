import { Outlet, Link } from 'react-router-dom';
import { currentTheme } from '../themes';

function Layout() {
  return (
    <div className={`min-h-screen flex flex-col ${currentTheme.background}`}>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="py-6 px-4 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-slate-600">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
          <Link to="/security" className="hover:text-slate-900 transition-colors">Security</Link>
          <Link to="/eula" className="hover:text-slate-900 transition-colors">EULA</Link>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
