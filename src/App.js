import React, { useState, useEffect } from 'react';

// 主要的簡報應用程式組件
const App = () => {
  // 簡報的內容，以結構化資料呈現
  const presentationContent = [
    {
      title: 'AI飆股預測模型提案', // 主標題 (用於整個應用程式的標題)
      slides: [
        // 封面頁
        {
          type: 'cover', // 標記為封面頁，以便特殊渲染
          coverTitle: 'AI飆股預測模型提案', // 封面頁的題目名稱
          presenter: '報告人：James Lee', // 報告人姓名
        },
        // 簡報的第一頁 (原來的專案概述)
        {
          heading: '專案概述與背景動機',
          subheadings: [
            {
              title: '專案名稱',
              content: [
                '**AI飆股預測**',
                '基於2025年永豐AI GO競賽「股神對決」主題。',
                '運用AI技術預測台灣股市中具有指數增長潛力的股票。'
              ]
            },
            {
              title: '專題背景與動機',
              content: [
                '**實用性強**：股票預測是金融科技領域的核心應用，具有直接的商業價值。',
                '**數據豐富性**：台股市場提供大量歷史數據，適合進行機器學習模型訓練。',
                '**學習價值高**：深入理解金融市場與AI技術應用。',
                '**具商業化潛力**：可擴展為商業級投資決策支援工具，AI Agent市場預計2030年成長至471億美元，年複合成長率高達44.8%。'
              ]
            }
          ]
        },
        // 簡報的第二頁 (專案目標與工作架構)
        {
          heading: '專案目標與工作架構',
          subheadings: [
            {
              title: '專案目標',
              content: [
                '實現**預測飆股的模型建立**，預期包含以下五項工作：',
                '1. **股票歷史數據收集與處理**：使用FinMind API獲取台股歷史數據；整合成交量、市值等市場基本資訊；實施數據清理和標準化處理流程。',
                '2. **飆股二元分類預測模型**：目標定義：預測20個交易日內漲幅超過30%的股票；使用Random Forest和XGBoost組合模型；實現F1-Score評估機制確保模型準確性。',
                '3. **模型性能監控與評估**：實施交叉驗證和超參數優化；建立模型回測機制驗證預測效果。',
                '4. **互動式儀表板**：開發Web應用展示預測結果；提供股票分析和視覺化圖表。',
                '5. **進階模型與自動化架構設計**：功能定義與模型技術選擇（股票型態識別、動態股票標籤、金融消息輿情分析）；模型訓練與優化；自動化工作流規劃與系統整合。'
              ]
            }
          ]
        },
        // 簡報的第三頁 (AI實現方法與技術細節)
        {
          heading: 'AI實現方法與技術細節',
          subheadings: [
            {
              title: 'AI技術領域',
              content: [
                '本專案屬於**機器學習中的監督式學習分類問題**，具體為二元分類任務。',
                '通過學習歷史股票數據中的模式，預測未來股票是否具有飆漲潛力。'
              ]
            },
            {
              title: '演算法與模型架構',
              content: [
                '**主要演算法**：',
                '**Random Forest（隨機森林）**：',
                '- 優勢：處理非線性關係優異，適合金融時間序列特徵。',
                '- 預期準確率：75-85% F1-score。',
                '- 訓練時間：2-4小時。',
                '**XGBoost（極致梯度提升）**：',
                '- 優勢：在時間序列預測中表現卓越，能有效處理複雜模式。',
                '- 支援缺失值處理和異常檢測。',
                '- 可通過超參數調整獲得最佳性能。'
              ]
            }
          ]
        },
        // 簡報的第四頁 (數據來源與格式)
        {
          heading: '數據來源與格式',
          subheadings: [
            {
              title: '數據類型',
              content: ['Excel數據資料（結構化數值數據）']
            },
            {
              title: '數據來源',
              content: [
                'T-Brain競賽的參考資料集（200支股票，21個特徵欄位）。',
                'FinMind API獲取的歷史股價數據。',
                '技術指標計算結果和衍生特徵。'
              ]
            },
            {
              title: '資料格式',
              content: [
                'CSV格式，至少包含以下關鍵欄位：',
                '**基本資訊**：stock_id（股票代碼）、date（交易日期）、OHLC價格',
                '**市場數據**：volume（成交量）、market_cap（市值）、industry_code（產業代碼）',
                '**基本面指標**：pe_ratio（本益比）、pb_ratio（股價淨值比）、roe（股東權益報酬率）、debt_ratio（負債比率）',
                '**技術指標**：rsi、macd、volume_ratio、volatility',
                '**目標變數**：is_bullish_stock（0/1二元標記）',
                '**資料筆數**：預計處理5,000-10,000筆歷史數據，涵蓋3-5年時間週期。'
              ]
            }
          ]
        },
        // 簡報的第五頁 (T-Brain競賽資訊與評估標準)
        {
          heading: 'T-Brain競賽資訊與評估標準',
          subheadings: [
            {
              title: '競賽背景',
              content: [
                '2025永豐AI GO競賽以「股神對決」為主題，由永豐金控攜手趨勢科技共同舉辦。',
                '競賽總獎金高達新台幣50萬元，冠軍隊伍可獲得15萬元獎金，並有機會獲得永豐金控實習機會。'
              ]
            },
            {
              title: '資料集特色',
              content: [
                'T-Brain提供的飆股預測參考資料集具有以下特點：',
                '**規模**：涵蓋200支台股，每支股票包含21個特徵欄位。',
                '**時間跨度**：建議使用3-5年歷史數據進行模型訓練。',
                '**飆股定義**：20個交易日內漲幅超過30%的股票。',
                '**評估標準**：使用F1-Score作為主要評估指標，適合處理類別不平衡問題。'
              ]
            }
          ]
        },
        // 簡報的第六頁 (團隊招募與分工架構)
        {
          heading: '團隊招募與分工架構',
          subheadings: [
            {
              title: '團隊分工結構',
              content: [
                '**基礎建設（發起人負責）**：',
                '- 台股數據處理與清理。',
                '- 新聞資料爬蟲開發(視時間而定)。',
                '- 基礎資料集準備。',
                '**團隊成員核心職責**：',
                '**最低要求（必要義務）**：',
                '1. 模型實作：使用提供的資料集，完成指定模型的程式建構。',
                '2. 結果產出：確保模型能夠正常運行並產生預測結果。',
                '3. 積極參與：參與團隊討論，及時回應專題相關溝通。',
                '4. 簡報製作：共同製作Demo簡報、成果展示工作。',
                '**進階貢獻（加值項目）**：',
                '- 技術優化：模型調教、超參數優化、特徵工程。',
                '- 資料處理：資料標注、資料增強、異常值處理。',
                '- 其他創新：可自行提出額外貢獻價值。'
              ]
            },
            {
              title: '權利與義務框架',
              content: [
                '**團隊成員權利**：',
                '- 獲得完整的資料集和明確執行方向。',
                '- 無需耗費時間進行資料搜集。',
                '- 獲得模型訓練實作經驗。',
                '- 參與技術討論和經驗交流。',
                '- 學習金融投資相關知識。',
                '**團隊成員義務**：',
                '- **準時交付**：按時完成分配的基本任務。',
                '- **品質保證**：確保程式碼可運行且結果正確。',
                '- **協作配合**：配合團隊時程，積極參與討論。',
                '- **額外貢獻**：主動提出並執行個人加值項目。'
              ]
            },
            {
              title: '申請加入流程',
              content: [
                '有意願加入的同學需提供以下資訊：',
                '1. **興趣主題**：選定至少1個感興趣的專題方向。',
                '2. **擅長技能**：相關背景和經驗說明。',
                '3. **實作規劃**：基於目前資訊的具體進度安排。',
                '4. **加值貢獻**：除基本義務外能夠額外貢獻的具體價值。'
              ]
            }
          ]
        },
        // 簡報的第七頁 (補充專案資訊，表格形式)
        {
          heading: '補充專案資訊（擴展選項）',
          isTable: true, // 標記此頁包含表格
          tableData: [
            ['系統功能', '使用模型', '模型選擇原因', '預期精確度', 'Input Data', 'Output Outcome'],
            ['**飆股分類預測**', 'Random Forest + XGBoost', '處理非線性關係優異，適合金融時間序列特徵', '75-85% F1-score', '股價OHLC、技術指標、成交量', '飆股/非飆股二元分類'],
            ['**動態股票標籤**', 'BERT + K-means聚類', 'BERT理解金融文本語義，K-means發現概念股群組', '80-90%聚類品質', '新聞文本、公司基本資料', '概念股標籤（AI概念股、電動車概念股等）'],
            ['**股票型態識別**', 'CNN + LSTM組合', 'CNN擅長圖表模式識別，LSTM處理時間序列依賴', '70-85%準確率', 'K線圖像、價格序列數據', '真突破/假突破/洗盤/盤整/跌破五分類'],
            ['**金融消息輿情**', 'FinBERT + 情感分析', '專門針對金融領域訓練的預訓練模型', '85-95%情感分類準確率', '財經新聞、社群媒體文本', '正面/負面/中性情感分類'],
            ['**量價關係預測**', 'LSTM + 技術指標組合', '量價關係具有時間序列特性，LSTM適合捕捉趨勢', '70-85%準確率', '成交量、價格變動、技術指標', '量增價漲/量增價跌預測'],
            ['**市場異常檢測**', 'DBSCAN + Isolation Forest', '非監督式學習適合發現異常交易模式', '80-90%異常檢測率', '交易量、價格波動、市場指標', '異常股票行為警報']
          ]
        },
        // 簡報的最後一頁
        {
          heading: '謝謝您的聆聽！',
          content: []
        }
      ]
    }
  ];

  // 管理當前幻燈片索引的狀態
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  // 獲取簡報總幻燈片數量
  const totalSlides = presentationContent[0].slides.length;

  // 使用 useEffect 處理鍵盤導航事件
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') { // 按右箭頭鍵移動到下一頁
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') { // 按左箭頭鍵移動到上一頁
        goToPreviousSlide();
      }
    };
    // 添加鍵盤事件監聽器
    window.addEventListener('keydown', handleKeyDown);
    // 組件卸載時移除事件監聽器，防止記憶體洩漏
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]); // 依賴於 currentSlideIndex，當它改變時重新綁定事件

  // 前往下一頁的函數
  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => Math.min(prevIndex + 1, totalSlides - 1));
  };

  // 前往上一頁的函數
  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // 獲取當前要顯示的幻燈片資料
  const currentSlide = presentationContent[0].slides[currentSlideIndex];

  // 渲染內容的輔助函數，處理 Markdown 樣式（粗體、斜體）
  const renderContent = (text) => {
    if (!text) return null; // 如果沒有文本，則不渲染
    // 將 Markdown 格式轉換為 HTML
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // 粗體 **文字**
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // 斜體 *文字*
      .replace(/\[(.*?)\]/g, '<span class="font-mono text-sm px-1 py-0.5 rounded-md bg-gray-200">$1</span>'); // 內聯程式碼 [文字]
    // 使用 dangerouslySetInnerHTML 渲染 HTML 字串
    return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };

  return (
    // 主容器，設置全螢幕高度、居中、背景漸變和字體樣式
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4 font-inter text-gray-800">
      {/* 簡報內容顯示區域的容器，設置最大寬度、圓角、陰影和過渡效果 */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row flex-grow transform transition-all duration-300 hover:scale-[1.01] mb-6">
        {/* 幻燈片內容區域，設置內邊距和內部排版 */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
          {/* 根據幻燈片類型條件渲染內容 (封面頁或內容頁) */}
          {currentSlide.type === 'cover' ? (
            // 封面頁的渲染邏輯
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-8 leading-tight">
                {currentSlide.coverTitle}
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-gray-700">
                {currentSlide.presenter}
              </p>
            </div>
          ) : (
            // 一般內容頁的渲染邏輯
            <div>
              {/* 幻燈片標題 */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-indigo-300 pb-2">
                {currentSlide.heading}
              </h2>

              {/* 副標題和內容列表 */}
              {currentSlide.subheadings && currentSlide.subheadings.map((sub, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-3">
                    {renderContent(sub.title)}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed">
                    {sub.content && sub.content.map((item, i) => (
                      <li key={i}>{renderContent(item)}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* 如果是表格類型的幻燈片，則渲染表格 */}
              {currentSlide.isTable && currentSlide.tableData && (
                <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-50">
                      <tr>
                        {currentSlide.tableData[0].map((header, idx) => (
                          <th key={idx} className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentSlide.tableData.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="px-6 py-4 whitespace-normal text-sm text-gray-700">
                              {renderContent(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* 頁碼顯示，封面頁不顯示頁碼，其他頁碼從1開始計算 */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            {currentSlide.type !== 'cover' && `第 ${currentSlideIndex} 頁 / 共 ${totalSlides - 1} 頁`}
          </div>
        </div>
      </div>

      {/* 導航按鈕，設置樣式和交互邏輯 */}
      <div className="flex space-x-4">
        <button
          onClick={goToPreviousSlide}
          disabled={currentSlideIndex === 0} // 第一頁禁用上一頁按鈕
          className="px-8 py-3 bg-indigo-500 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200 active:scale-95 flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          上一頁
        </button>
        <button
          onClick={goToNextSlide}
          disabled={currentSlideIndex === totalSlides - 1} // 最後一頁禁用下一頁按鈕
          className="px-8 py-3 bg-indigo-500 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all duration-200 active:scale-95 flex items-center justify-center"
        >
          下一頁
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      {/* Tailwind CSS CDN 和 Google Fonts 連結，直接在 JSX 中引入以確保樣式載入 */}
      {/* 這樣就不需要額外的 npm 安裝和配置步驟，直接通過網路載入樣式 */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
    </div>
  );
};

export default App;
