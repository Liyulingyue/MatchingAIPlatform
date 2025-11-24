import { useState } from 'react';
import '../styles/MatchingRoom.css';

interface Card {
  id: number;
  type: 'left' | 'right';
  color: string;
  label: string;
}

interface Task {
  id: number;
  requirement: string;
  completed: boolean;
}

interface DraggedCard {
  card: Card;
  source: 'left' | 'right';
}

function MatchingRoom() {
  const [leftCards] = useState<Card[]>([
    { id: 1, type: 'left', color: '#FF6B6B', label: '红' },
    { id: 2, type: 'left', color: '#4ECDC4', label: '青' },
    { id: 3, type: 'left', color: '#45B7D1', label: '蓝' },
    { id: 4, type: 'left', color: '#FFA07A', label: '橙' },
    { id: 5, type: 'left', color: '#98D8C8', label: '绿' },
    { id: 6, type: 'left', color: '#F7DC6F', label: '黄' },
    { id: 13, type: 'left', color: '#E74C3C', label: '赤' },
    { id: 14, type: 'left', color: '#3498DB', label: '碧' },
    { id: 15, type: 'left', color: '#2ECC71', label: '翠' },
    { id: 16, type: 'left', color: '#F39C12', label: '金' },
    { id: 17, type: 'left', color: '#9B59B6', label: '兰' },
    { id: 18, type: 'left', color: '#1ABC9C', label: '湖' },
    { id: 19, type: 'left', color: '#E67E22', label: '橘' },
    { id: 20, type: 'left', color: '#16A085', label: '墨' },
    { id: 21, type: 'left', color: '#27AE60', label: '松' },
    { id: 22, type: 'left', color: '#2980B9', label: '海' },
    { id: 23, type: 'left', color: '#8E44AD', label: '葡' },
    { id: 24, type: 'left', color: '#F1C40F', label: '柠' },
    { id: 37, type: 'left', color: '#C0392B', label: '枫' },
    { id: 38, type: 'left', color: '#D35400', label: '焦' },
    { id: 39, type: 'left', color: '#17A589', label: '竹' },
    { id: 40, type: 'left', color: '#2874A6', label: '靛' },
    { id: 41, type: 'left', color: '#6C3483', label: '梅' },
    { id: 42, type: 'left', color: '#717D7E', label: '灰' },
    { id: 43, type: 'left', color: '#DC7633', label: '铜' },
    { id: 44, type: 'left', color: '#138D75', label: '青松' },
    { id: 45, type: 'left', color: '#1F618D', label: '深海' },
    { id: 46, type: 'left', color: '#7D3C98', label: '茄' },
    { id: 47, type: 'left', color: '#B7950B', label: '芥' },
    { id: 48, type: 'left', color: '#186A3B', label: '森' },
    { id: 49, type: 'left', color: '#943126', label: '栗' },
    { id: 50, type: 'left', color: '#76448A', label: '莓' },
    { id: 51, type: 'left', color: '#154360', label: '夜' },
    { id: 52, type: 'left', color: '#0E6251', label: '藻' },
    { id: 53, type: 'left', color: '#7E5109', label: '琥' },
    { id: 54, type: 'left', color: '#784212', label: '棕褐' },
    { id: 73, type: 'left', color: '#922B21', label: '酒红' },
    { id: 74, type: 'left', color: '#633974', label: '紫檀' },
    { id: 75, type: 'left', color: '#21618C', label: '靛蓝' },
    { id: 76, type: 'left', color: '#196F3D', label: '墨绿' },
    { id: 77, type: 'left', color: '#B9770E', label: '金棕' },
    { id: 78, type: 'left', color: '#6E2C00', label: '深棕' },
    { id: 79, type: 'left', color: '#512E5F', label: '暗紫' },
    { id: 80, type: 'left', color: '#0B5345', label: '墨青' },
    { id: 81, type: 'left', color: '#7B241C', label: '暗红' },
    { id: 82, type: 'left', color: '#145A32', label: '深绿' },
    { id: 83, type: 'left', color: '#0E6655', label: '松绿' },
    { id: 84, type: 'left', color: '#7B7D7D', label: '铁灰' },
    { id: 85, type: 'left', color: '#34495E', label: '石青' },
    { id: 86, type: 'left', color: '#641E16', label: '绛红' },
    { id: 87, type: 'left', color: '#4A235A', label: '紫红' },
    { id: 88, type: 'left', color: '#154360', label: '藏青' },
    { id: 89, type: 'left', color: '#0B5345', label: '青绿' },
    { id: 90, type: 'left', color: '#7E5109', label: '土黄' },
  ]);

  const [rightCards] = useState<Card[]>([
    { id: 7, type: 'right', color: '#BB8FCE', label: '紫' },
    { id: 8, type: 'right', color: '#85C1E2', label: '靛' },
    { id: 9, type: 'right', color: '#F8B88B', label: '棕' },
    { id: 10, type: 'right', color: '#FADBD8', label: '粉' },
    { id: 11, type: 'right', color: '#D5F4E6', label: '薄荷' },
    { id: 12, type: 'right', color: '#FDEBD0', label: '奶油' },
    { id: 25, type: 'right', color: '#AED6F1', label: '天' },
    { id: 26, type: 'right', color: '#F5B7B1', label: '樱' },
    { id: 27, type: 'right', color: '#D7BDE2', label: '薰' },
    { id: 28, type: 'right', color: '#A9DFBF', label: '抹' },
    { id: 29, type: 'right', color: '#FAD7A0', label: '杏' },
    { id: 30, type: 'right', color: '#D5DBDB', label: '银' },
    { id: 31, type: 'right', color: '#F8C471', label: '沙' },
    { id: 32, type: 'right', color: '#A3E4D7', label: '湾' },
    { id: 33, type: 'right', color: '#EBDEF0', label: '雾' },
    { id: 34, type: 'right', color: '#ABEBC6', label: '茶' },
    { id: 35, type: 'right', color: '#F9E79F', label: '米' },
    { id: 36, type: 'right', color: '#D6EAF8', label: '冰' },
    { id: 55, type: 'right', color: '#F1948A', label: '霞' },
    { id: 56, type: 'right', color: '#C39BD3', label: '丁香' },
    { id: 57, type: 'right', color: '#7FB3D5', label: '晴' },
    { id: 58, type: 'right', color: '#76D7C4', label: '碧玉' },
    { id: 59, type: 'right', color: '#F7DC6F', label: '鹅黄' },
    { id: 60, type: 'right', color: '#E8DAEF', label: '梦' },
    { id: 61, type: 'right', color: '#D2B4DE', label: '紫罗' },
    { id: 62, type: 'right', color: '#A9CCE3', label: '浅蓝' },
    { id: 63, type: 'right', color: '#A2D9CE', label: '青瓷' },
    { id: 64, type: 'right', color: '#FAD7A0', label: '鸭黄' },
    { id: 65, type: 'right', color: '#EDBB99', label: '桃' },
    { id: 66, type: 'right', color: '#D7DBDD', label: '月白' },
    { id: 67, type: 'right', color: '#F5CBA7', label: '杏仁' },
    { id: 68, type: 'right', color: '#A9DFBF', label: '豆沙' },
    { id: 69, type: 'right', color: '#D6EAF8', label: '水蓝' },
    { id: 70, type: 'right', color: '#FADBD8', label: '玫瑰' },
    { id: 71, type: 'right', color: '#E8F8F5', label: '雪' },
    { id: 72, type: 'right', color: '#FCF3CF', label: '象牙' },
    { id: 91, type: 'right', color: '#F2D7D5', label: '淡粉' },
    { id: 92, type: 'right', color: '#EBDEF0', label: '浅紫' },
    { id: 93, type: 'right', color: '#D4E6F1', label: '淡蓝' },
    { id: 94, type: 'right', color: '#D1F2EB', label: '薄青' },
    { id: 95, type: 'right', color: '#FCF3CF', label: '米黄' },
    { id: 96, type: 'right', color: '#EAECEE', label: '银白' },
    { id: 97, type: 'right', color: '#F6DDCC', label: '杏白' },
    { id: 98, type: 'right', color: '#E5E8E8', label: '云白' },
    { id: 99, type: 'right', color: '#FEF9E7', label: '乳白' },
    { id: 100, type: 'right', color: '#F4ECF7', label: '藕粉' },
    { id: 101, type: 'right', color: '#EAF2F8', label: '湖蓝' },
    { id: 102, type: 'right', color: '#E8F6F3', label: '淡青' },
    { id: 103, type: 'right', color: '#FEF5E7', label: '鹅蛋' },
    { id: 104, type: 'right', color: '#F9EBEA', label: '绯红' },
    { id: 105, type: 'right', color: '#F4ECF7', label: '淡紫' },
    { id: 106, type: 'right', color: '#E9F7EF', label: '豆青' },
    { id: 107, type: 'right', color: '#FDF2E9', label: '杏黄' },
    { id: 108, type: 'right', color: '#FDFEFE', label: '霜白' },
  ]);

  const [tasks] = useState<Task[]>([
    { id: 1, requirement: '匹配红色和紫色', completed: false },
    { id: 2, requirement: '匹配青色和靛色', completed: false },
    { id: 3, requirement: '匹配蓝色和粉色', completed: false },
  ]);

  const [draggedCard, setDraggedCard] = useState<DraggedCard | null>(null);
  const [matchHistory, setMatchHistory] = useState<Array<{ left: Card; right: Card }>>([]);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [matchRows, setMatchRows] = useState<Array<{ left: Card | null; right: Card | null; rowId: string }>>([
    { left: null, right: null, rowId: '1' },
    { left: null, right: null, rowId: '2' },
    { left: null, right: null, rowId: '3' },
    { left: null, right: null, rowId: '4' },
    { left: null, right: null, rowId: '5' },
  ]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const handleDragStart = (card: Card, source: 'left' | 'right') => {
    setDraggedCard({ card, source });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const performMatchWithCards = (leftCard: Card, rightCard: Card) => {
    const newMatch = { left: leftCard, right: rightCard };
    setMatchHistory([...matchHistory, newMatch]);

    // 检查是否完成任务
    if (
      (leftCard.label === '红' && rightCard.label === '紫') ||
      (leftCard.label === '青' && rightCard.label === '靛') ||
      (leftCard.label === '蓝' && rightCard.label === '粉')
    ) {
      const taskIndex = tasks.findIndex(
        (t) =>
          (t.requirement.includes(leftCard.label) &&
            t.requirement.includes(rightCard.label))
      );
      if (taskIndex !== -1 && !completedTasks.includes(taskIndex)) {
        setCompletedTasks([...completedTasks, taskIndex]);
      }
    }

    setDraggedCard(null);
  };

  const handleDropOnCard = (
    e: React.DragEvent<HTMLDivElement>,
    targetCard: Card
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (!draggedCard) return;

    // 左右卡片需要交叉匹配
    if (draggedCard.source !== targetCard.type) {
      if (draggedCard.source === 'left') {
        performMatchWithCards(draggedCard.card, targetCard);
      } else {
        performMatchWithCards(targetCard, draggedCard.card);
      }
    }

    setDraggedCard(null);
  };

  const handleDropOnSlot = (
    e: React.DragEvent<HTMLDivElement>,
    rowId: string,
    slotSide: 'left' | 'right'
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (!draggedCard) return;

    // 左侧卡片拖到左侧槽位，右侧卡片拖到右侧槽位
    if (
      (slotSide === 'left' && draggedCard.source === 'left') ||
      (slotSide === 'right' && draggedCard.source === 'right')
    ) {
      setMatchRows(
        matchRows.map((row) => {
          if (row.rowId === rowId) {
            if (slotSide === 'left') {
              const updatedRow = { ...row, left: draggedCard.card };
              // 自动匹配如果两侧都有卡片
              if (updatedRow.right) {
                performMatchWithCards(updatedRow.left!, updatedRow.right);
                return { ...row, left: null, right: null };
              }
              return updatedRow;
            } else {
              const updatedRow = { ...row, right: draggedCard.card };
              // 自动匹配如果两侧都有卡片
              if (updatedRow.left) {
                performMatchWithCards(updatedRow.left, updatedRow.right!);
                return { ...row, left: null, right: null };
              }
              return updatedRow;
            }
          }
          return row;
        })
      );
    }

    setDraggedCard(null);
  };

  const handleClear = () => {
    setMatchHistory([]);
    setCompletedTasks([]);
    setDraggedCard(null);
    setMatchRows([
      { left: null, right: null, rowId: '1' },
      { left: null, right: null, rowId: '2' },
      { left: null, right: null, rowId: '3' },
      { left: null, right: null, rowId: '4' },
      { left: null, right: null, rowId: '5' },
    ]);
  };

  return (
    <div className="matching-room">
      <div className="task-area">
        <div className="task-container">
          <div className="task-header">
            <h2>任务目标</h2>
            <div className="drag-tip">
              <span className="drag-tip-icon">🎯</span>
              <span className="drag-tip-text">拖拽匹配</span>
            </div>
          </div>
          <div className="tasks-list">
            {tasks.map((task, index) => (
              <div
                key={task.id}
                className={`task-item ${completedTasks.includes(index) ? 'completed' : ''}`}
              >
                <span className="task-status">
                  {completedTasks.includes(index) ? '✓' : '○'}
                </span>
                <span className="task-text">{task.requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="main-content">
        {/* 左侧卡池 */}
        <div className="card-pool left-pool">
          <h3>左侧卡池</h3>
          <div className="cards-grid">
            {leftCards.map((card) => (
              <div
                key={card.id}
                className={`card ${draggedCard?.card.id === card.id ? 'dragging' : ''}`}
                style={{ backgroundColor: card.color }}
                draggable
                onDragStart={() => handleDragStart(card, 'left')}
                onDragEnd={() => setDraggedCard(null)}
                title="拖拽到右侧卡片进行匹配"
              >
                <span className="card-label">{card.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 中间匹配区 */}
        <div className="matching-center">
          {/* 左匹配区 */}
          <div className="match-area left-match-area">
            <div className="match-area-title">左侧匹配</div>
            <div className="match-rows">
              {matchRows.map((row) => (
                <div key={row.rowId} className="match-row">
                  <div
                    className={`match-slot left-slot ${draggedCard?.source === 'left' ? 'drag-over' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDropOnSlot(e, row.rowId, 'left')}
                  >
                    {row.left ? (
                      <div
                        className="selected-card"
                        style={{ backgroundColor: row.left.color }}
                      >
                        <span>{row.left.label}</span>
                      </div>
                    ) : (
                      <div className="slot-hint">拖拽</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右匹配区 */}
          <div className="match-area right-match-area">
            <div className="match-area-title">右侧匹配</div>
            <div className="match-rows">
              {matchRows.map((row) => (
                <div key={row.rowId} className="match-row">
                  <div
                    className={`match-slot right-slot ${draggedCard?.source === 'right' ? 'drag-over' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDropOnSlot(e, row.rowId, 'right')}
                  >
                    {row.right ? (
                      <div
                        className="selected-card"
                        style={{ backgroundColor: row.right.color }}
                      >
                        <span>{row.right.label}</span>
                      </div>
                    ) : (
                      <div className="slot-hint">拖拽</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧卡池 */}
        <div className="card-pool right-pool">
          <h3>右侧卡池</h3>
          <div className="cards-grid">
            {rightCards.map((card) => (
              <div
                key={card.id}
                className={`card ${draggedCard?.card.id === card.id ? 'dragging' : ''}`}
                style={{ backgroundColor: card.color }}
                draggable
                onDragStart={() => handleDragStart(card, 'right')}
                onDragEnd={() => setDraggedCard(null)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDropOnCard(e, card)}
                title="拖拽到左侧卡片进行匹配"
              >
                <span className="card-label">{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="control-area">
        <button className="clear-button" onClick={handleClear}>
          清空
        </button>
        <div className="stats">
          已完成: {completedTasks.length} / {tasks.length} | 已匹配: {matchHistory.length}
        </div>
        <button 
          className="history-button" 
          onClick={() => setShowHistoryModal(true)}
        >
          📋 历史记录 ({matchHistory.length})
        </button>
      </div>

      {/* 匹配历史弹窗 */}
      {showHistoryModal && (
        <div className="modal-overlay" onClick={() => setShowHistoryModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>匹配历史</h2>
              <button 
                className="modal-close-button" 
                onClick={() => setShowHistoryModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              {matchHistory.length === 0 ? (
                <p className="empty-history">暂无匹配记录</p>
              ) : (
                <div className="history-grid">
                  {matchHistory.map((match, index) => (
                    <div key={index} className="history-card">
                      <div className="history-number">#{index + 1}</div>
                      <div className="history-match">
                        <div
                          className="history-color-large"
                          style={{ backgroundColor: match.left.color }}
                        >
                          {match.left.label}
                        </div>
                        <span className="history-arrow-large">→</span>
                        <div
                          className="history-color-large"
                          style={{ backgroundColor: match.right.color }}
                        >
                          {match.right.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MatchingRoom;