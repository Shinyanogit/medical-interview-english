import React, { useId, useState } from 'react';

type Props = {
  title: string;
  level?: 2 | 3 | 4;
  defaultCollapsed?: boolean;
  children?: React.ReactNode;
};

const Section: React.FC<Props> = ({ title, level = 2, defaultCollapsed = true, children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(defaultCollapsed);
  const contentId = useId();

  const HeadingTag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements;

  return (
    <div className="section">
      <HeadingTag
        className={collapsed ? 'collapsed' : ''}
        role="button"
        aria-expanded={!collapsed}
        aria-controls={contentId}
        onClick={() => setCollapsed(!collapsed)}
      >
        {title}
      </HeadingTag>
      <div
        id={contentId}
        className={`section-content ${collapsed ? 'collapsed' : 'expanded'}`}
        aria-hidden={collapsed}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;

