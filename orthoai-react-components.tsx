// OrthoAI React Component Library
import React from 'react';

// Theme Context
export const OrthoThemeContext = React.createContext<'current' | 'purple' | 'dark-purple'>('current');

export const OrthoThemeProvider: React.FC<{
  theme: 'current' | 'purple' | 'dark-purple';
  children: React.ReactNode;
}> = ({ theme, children }) => {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <OrthoThemeContext.Provider value={theme}>
      {children}
    </OrthoThemeContext.Provider>
  );
};

// Button Components
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const OrthoButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'ortho-btn';
  const variantClasses = variant === 'primary' ? 'ortho-btn-primary' : 'ortho-btn-secondary';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Typography Components
interface TitleProps {
  level: 'xl' | 'lg' | 'md';
  children: React.ReactNode;
  className?: string;
}

export const OrthoTitle: React.FC<TitleProps> = ({ level, children, className = '' }) => {
  const Component = level === 'xl' ? 'h1' : level === 'lg' ? 'h2' : 'h3';
  const classes = `ortho-title-${level} ${className}`;
  
  return <Component className={classes}>{children}</Component>;
};

interface TextProps {
  size?: 'base' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
}

export const OrthoText: React.FC<TextProps> = ({ size = 'base', children, className = '' }) => {
  const classes = size === 'base' ? '' : `ortho-text-${size}`;
  return <p className={`${classes} ${className}`}>{children}</p>;
};

// Card Components
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const OrthoCard: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div className={`ortho-card ${className}`}>
      {children}
    </div>
  );
};

interface CardIconProps {
  variant: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

export const OrthoCardIcon: React.FC<CardIconProps> = ({ variant, children, className = '' }) => {
  return (
    <div className={`ortho-card-icon ortho-card-icon-${variant} ${className}`}>
      {children}
    </div>
  );
};

// Trust Panel Component
interface TrustPanelProps {
  number: string;
  description: string;
  className?: string;
}

export const OrthoTrustPanel: React.FC<TrustPanelProps> = ({ number, description, className = '' }) => {
  return (
    <div className={`ortho-trust-panel ${className}`}>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8">
        <div className="ortho-trust-number">
          {number}
        </div>
        <div className="ortho-text-lg text-center md:text-left">
          {description}
        </div>
      </div>
    </div>
  );
};

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const OrthoInput: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input className={`ortho-input ${className}`} {...props} />
    </div>
  );
};

// Section Components
interface SectionProps {
  variant?: 'default' | 'hero' | 'value' | 'signup';
  children: React.ReactNode;
  className?: string;
}

export const OrthoSection: React.FC<SectionProps> = ({ 
  variant = 'default', 
  children, 
  className = '' 
}) => {
  const variantClass = variant === 'default' ? 'ortho-section' : `ortho-section-${variant}`;
  
  return (
    <section className={`${variantClass} ${className}`}>
      {children}
    </section>
  );
};

// Container Component
interface ContainerProps {
  size?: 'default' | 'sm';
  children: React.ReactNode;
  className?: string;
}

export const OrthoContainer: React.FC<ContainerProps> = ({ 
  size = 'default', 
  children, 
  className = '' 
}) => {
  const sizeClass = size === 'default' ? 'ortho-container' : 'ortho-container-sm';
  
  return (
    <div className={`${sizeClass} ${className}`}>
      {children}
    </div>
  );
};

// Grid Component
interface GridProps {
  columns?: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

export const OrthoGrid: React.FC<GridProps> = ({ columns = 3, children, className = '' }) => {
  const gridClass = `ortho-grid-${columns}`;
  
  return (
    <div className={`${gridClass} ${className}`}>
      {children}
    </div>
  );
};

// Page Wrapper Component
interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export const OrthoPage: React.FC<PageProps> = ({ children, className = '' }) => {
  return (
    <div className={`ortho-page ${className}`}>
      {children}
    </div>
  );
};

// Example Usage Component
export const OrthoExample: React.FC = () => {
  return (
    <OrthoThemeProvider theme="purple">
      <OrthoPage>
        <OrthoSection variant="hero">
          <OrthoContainer>
            <OrthoTitle level="xl">
              Your Amazing Product
            </OrthoTitle>
            <OrthoText size="xl" className="mb-8">
              Beautiful description text that explains your product
            </OrthoText>
            <OrthoButton variant="primary" size="lg">
              Get Started
            </OrthoButton>
          </OrthoContainer>
        </OrthoSection>

        <OrthoSection>
          <OrthoContainer>
            <OrthoTrustPanel
              number="6,300+"
              description="modeled practice-years from simulation experts trusted by Google, Align Technologies, and American Express."
            />
          </OrthoContainer>
        </OrthoSection>

        <OrthoSection variant="value">
          <OrthoContainer>
            <OrthoGrid columns={3}>
              <OrthoCard>
                <OrthoCardIcon variant={1}>
                  {/* Your icon component here */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </OrthoCardIcon>
                <OrthoTitle level="md" className="mb-4">
                  Amazing Feature
                </OrthoTitle>
                <OrthoText>
                  Description of your amazing feature that helps users.
                </OrthoText>
              </OrthoCard>
              
              {/* Repeat for other cards */}
            </OrthoGrid>
          </OrthoContainer>
        </OrthoSection>

        <OrthoSection variant="signup">
          <OrthoContainer size="sm">
            <OrthoTitle level="lg" className="mb-6">
              Ready to get started?
            </OrthoTitle>
            <div className="flex gap-4">
              <OrthoInput 
                type="email" 
                placeholder="Enter your email"
                className="flex-1"
              />
              <OrthoButton variant="primary">
                Join Waitlist
              </OrthoButton>
            </div>
          </OrthoContainer>
        </OrthoSection>
      </OrthoPage>
    </OrthoThemeProvider>
  );
};