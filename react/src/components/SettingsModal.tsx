import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { LayoutMode, useLayout } from '../context/LayoutContext';

type Props = {
  open: boolean;
  onClose: () => void;
  contentMode: "react" | "html";
  setContentMode: (mode: "react" | "html") => void;
};

const SettingsModal: React.FC<Props> = ({
  open,
  onClose,
  contentMode,
  setContentMode,
}) => {
  const { theme, setTheme } = useTheme();
  const { layout, setLayout } = useLayout();

  if (!open) return null;

  return (
    <div className="settings-modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="settings-content">
        <div className="settings-header">
          <h2>設定</h2>
          <button className="close-button" onClick={onClose} aria-label="閉じる">&times;</button>
        </div>
        <div className="settings-item">
          <span className="settings-label">ダークモード</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'auto')}
            />
            <span className="toggle-slider" />
          </label>
        </div>
        <div className="settings-item">
          <span className="settings-label">コンテンツモード</span>
          <div className="layout-options">
            {(['react', 'html'] as const).map((mode) => (
              <label className="radio-option" key={mode}>
                <input
                  type="radio"
                  name="contentMode"
                  value={mode}
                  checked={contentMode === mode}
                  onChange={() => setContentMode(mode)}
                />
                <span>{mode === 'react' ? 'React表示' : 'HTML表示'}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="settings-item">
          <span className="settings-label">レイアウト</span>
          <div className="layout-options">
            {(['auto', 'two-column', 'single-column'] as LayoutMode[]).map((mode) => (
              <label className="radio-option" key={mode}>
                <input
                  type="radio"
                  name="layoutMode"
                  value={mode}
                  checked={layout === mode}
                  onChange={() => setLayout(mode)}
                />
                <span>{mode === 'auto' ? '自動' : mode === 'two-column' ? '2段組' : '1段組'}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
