import React from 'react';

const ThemeHeader: React.FC = () => {
  return (
    <div className="level-select-header">
      <h1>匹配挑战</h1>
      <p>选择一个主题开始你的匹配之旅！每个主题包含10个难度递增的关卡。</p>
      <div className="level-stats">
        <div className="stat-item">
          <span className="stat-icon">📚</span>
          <span>3个主题</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🎮</span>
          <span>30个关卡</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🏆</span>
          <span>解锁挑战</span>
        </div>
      </div>
    </div>
  );
};

export default ThemeHeader;