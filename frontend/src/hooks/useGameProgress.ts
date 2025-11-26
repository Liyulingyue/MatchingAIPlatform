import { useState, useEffect } from 'react';
import type { GameProgress } from '../types/game';

export const useGameProgress = () => {
  const [gameProgress, setGameProgress] = useState<GameProgress>({});

  // 从localStorage加载游戏进度
  useEffect(() => {
    const savedProgress = localStorage.getItem('matchingGameProgress');
    if (savedProgress) {
      setGameProgress(JSON.parse(savedProgress));
    }
  }, []);

  return { gameProgress, setGameProgress };
};