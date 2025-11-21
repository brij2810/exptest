import React from 'react';
import './Sidebar.css';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export interface SidebarProps {
  appName?: string;
  sections: SidebarSection[];
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  appName = 'Account Admin',
  sections,
  className = '',
}) => {
  const appSwitcherIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="4" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );

  return (
    <aside className={`sidebar ${className}`}>
      <div className="sidebar__content">
        <div className="sidebar__header">
          <button className="sidebar__app-switcher" aria-label="App Switcher">
            {appSwitcherIcon}
          </button>
          <h2 className="sidebar__app-name">{appName}</h2>
        </div>
        <nav className="sidebar__nav">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="sidebar__section">
              <div className="sidebar__section-title">{section.title}</div>
              <div className="sidebar__section-items">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    className={`sidebar__item ${item.active ? 'sidebar__item--active' : ''}`}
                    onClick={item.onClick}
                  >
                    {item.icon && <span className="sidebar__item-icon">{item.icon}</span>}
                    <span className="sidebar__item-label">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

