import React from 'react';

interface Level {
  id: number;
  title: string;
  description: string;
  difficulty: '简单' | '中等' | '困难' | '专家';
  unlocked: boolean;
  rules: string[];
  timeLimit?: number;
  targetScore?: number;
  completed?: boolean;
}

interface LevelCardProps {
  level: Level;
  onSelect: () => void;
  getDifficultyColor: (difficulty: string) => string;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, onSelect, getDifficultyColor }) => {
  return (
    <div
      className={`level-card ${!level.unlocked ? 'level-locked' : ''} ${level.completed ? 'level-completed' : ''}`}
    >
      <div className="level-header">
        <div className="level-number">#{level.id}</div>
        <div
          className="level-difficulty"
          style={{ backgroundColor: getDifficultyColor(level.difficulty) }}
        >
          {level.difficulty}
        </div>
      </div>

      <div className="level-title">{level.title}</div>
      <div className="level-desc">{level.description}</div>

      <div className="level-rules">
        <h4>规则说明：</h4>
        <ul>
          {level.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
        {level.timeLimit && (
          <div className="time-limit">⏱️ 时间限制：{level.timeLimit}秒</div>
        )}
        {level.targetScore && (
          <div className="target-score">🎯 目标分数：{level.targetScore}分</div>
        )}
      </div>

      <div className="level-actions">
        <button
          className="level-button"
          onClick={onSelect}
          disabled={!level.unlocked}
        >
          {level.completed ? '🔄 再次挑战' : level.unlocked ? '开始挑战' : '🔒 未解锁'}
        </button>
      </div>
    </div>
  );
};

export default LevelCard;