import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateLevel } from '../utils/levelGenerators';

interface Card {
  id: number;
  type: 'left' | 'right';
  color: string;
  label: string;
  isMatched?: boolean;
  animationDelay?: number;
}

interface Task {
  id: number;
  requirement: string;
  completed: boolean;
}

export const useMatchingGame = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 基本状态
  const [leftCards, setLeftCards] = useState<Card[]>([]);
  const [rightCards, setRightCards] = useState<Card[]>([]);
  const [tasks] = useState<Task[]>([
    { id: 1, requirement: '匹配红色和紫色', completed: false },
    { id: 2, requirement: '匹配青色和靛色', completed: false },
    { id: 3, requirement: '匹配蓝色和粉色', completed: false },
  ]);

  const [matchHistory, setMatchHistory] = useState<Array<{ left: Card; right: Card }>>([]);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [matchRows, setMatchRows] = useState<Array<{ left: Card | null; right: Card | null; rowId: string }>>([
    { left: null, right: null, rowId: '1' },
    { left: null, right: null, rowId: '2' },
    { left: null, right: null, rowId: '3' },
    { left: null, right: null, rowId: '4' },
    { left: null, right: null, rowId: '5' },
  ]);

  const [scores, setScores] = useState<{ red: number; yellow: number; green: number }>({
    red: 0,
    yellow: 0,
    green: 0,
  });
  const [levelCompleted, setLevelCompleted] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [showComboEffect, setShowComboEffect] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [lastMatchTime, setLastMatchTime] = useState<number>(0);

  // 获取当前关卡信息
  const currentLevel = location.state?.level || 1;
  const currentTheme = location.state?.theme || 'arithmetic';

  // 获取关卡目标分数
  const getLevelTarget = (level: number) => {
    const targets = [8, 10, 12, 15, 18, 20, 25, 30, 35, 40];
    return targets[level - 1] || 8;
  };

  // 检查关卡完成条件
  useEffect(() => {
    const totalMatches = scores.red + scores.yellow + scores.green;
    const targetScore = getLevelTarget(currentLevel);

    if (totalMatches >= targetScore && !levelCompleted) {
      setLevelCompleted(true);
      setShowCompletionModal(true);

      // 保存关卡完成状态
      const completedLevels = JSON.parse(localStorage.getItem(`completedLevels_${currentTheme}`) || '[]');
      if (!completedLevels.includes(currentLevel)) {
        completedLevels.push(currentLevel);
        localStorage.setItem(`completedLevels_${currentTheme}`, JSON.stringify(completedLevels));
      }
    }
  }, [scores, currentLevel, currentTheme, levelCompleted]);

  // 初始化关卡
  useEffect(() => {
    const lvl = location.state?.level;
    if (lvl) {
      const levelData = generateLevel(lvl, 12, currentTheme);
      setLeftCards(levelData.leftCards);
      setRightCards(levelData.rightCards);
      setTimeout(() => setIsLoading(false), 500);
    }
  }, [location, currentTheme]);

  const handleClear = () => {
    setMatchHistory([]);
    setCompletedTasks([]);
    setMatchRows([
      { left: null, right: null, rowId: '1' },
      { left: null, right: null, rowId: '2' },
      { left: null, right: null, rowId: '3' },
      { left: null, right: null, rowId: '4' },
      { left: null, right: null, rowId: '5' },
    ]);
    setCombo(0);
    setMaxCombo(0);
    setShowComboEffect(false);
    setLastMatchTime(0);
  };

  const handleContinueToNextLevel = () => {
    setShowCompletionModal(false);
    navigate('/level-select', { state: { theme: currentTheme } });
  };

  const handleBackToThemeSelect = () => {
    setShowCompletionModal(false);
    navigate('/level-select');
  };

  const totalMatches = scores.red + scores.yellow + scores.green;
  const targetScore = getLevelTarget(currentLevel);
  const progressPercent = Math.min((totalMatches / targetScore) * 100, 100);

  return {
    // 状态
    leftCards,
    rightCards,
    tasks,
    matchHistory,
    setMatchHistory,
    completedTasks,
    matchRows,
    setMatchRows,
    scores,
    setScores,
    levelCompleted,
    showCompletionModal,
    setShowCompletionModal,
    showHistoryModal,
    setShowHistoryModal,
    isLoading,
    setIsLoading,
    combo,
    setCombo,
    maxCombo,
    setMaxCombo,
    showComboEffect,
    setShowComboEffect,
    lastMatchTime,
    setLastMatchTime,
    currentLevel,
    currentTheme,
    totalMatches,
    targetScore,
    progressPercent,

    // 方法
    handleClear,
    handleContinueToNextLevel,
    handleBackToThemeSelect,
  };
};