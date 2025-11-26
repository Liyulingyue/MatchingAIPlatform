import React from 'react';

interface Card {
  id: number;
  type: 'left' | 'right';
  color: string;
  label: string;
  isMatched?: boolean;
  animationDelay?: number;
}

interface MatchSlotProps {
  card: Card | null;
  side: 'left' | 'right';
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, rowId: string, slotSide: 'left' | 'right') => void;
  rowId: string;
}

const MatchSlot: React.FC<MatchSlotProps> = ({
  card,
  side,
  onDragOver,
  onDragLeave,
  onDrop,
  rowId
}) => {
  return (
    <div
      className={`match-slot ${side}-slot`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={(e) => onDrop(e, rowId, side)}
    >
      {card ? (
        <div
          className="selected-card"
          style={{ backgroundColor: card.color }}
        >
          <div className="card-content">
            <span>{card.label}</span>
            <div className="card-glow"></div>
          </div>
        </div>
      ) : (
        <div className="slot-hint">
          <div className="hint-icon">{side === 'left' ? '⬅️' : '➡️'}</div>
          <div className="hint-text">拖拽</div>
        </div>
      )}
    </div>
  );
};

export default MatchSlot;