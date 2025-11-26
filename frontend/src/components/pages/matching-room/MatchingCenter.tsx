import React from 'react';
import MatchArea from './MatchArea';

interface Card {
  id: number;
  type: 'left' | 'right';
  color: string;
  label: string;
  isMatched?: boolean;
  animationDelay?: number;
}

interface MatchingCenterProps {
  matchRows: Array<{ left: Card | null; right: Card | null; rowId: string }>;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>, rowId: string, slotSide: 'left' | 'right') => void;
}

const MatchingCenter: React.FC<MatchingCenterProps> = ({
  matchRows,
  onDragOver,
  onDragLeave,
  onDrop
}) => {
  return (
    <div className="matching-center">
      <MatchArea
        title="左侧匹配区"
        rows={matchRows}
        side="left"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      />
      <MatchArea
        title="右侧匹配区"
        rows={matchRows}
        side="right"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      />
    </div>
  );
};

export default MatchingCenter;