# 面試題目產生器專案規劃

## 1. 技術需求分析
- 純 HTML/CSS/JavaScript 實作
- 使用 Bootstrap 5.2 作為 UI 框架
- 需要在 CodePen 上運行
- 不使用 Node.js 或任何打包工具

## 2. 資料結構設計

```javascript
const interviewQuestions = [
  {
    category: "HTML/CSS 基礎",
    questions: [
      {
        question: "HTML 中 <section> 與 <div> 有什麼差異？",
        answer: "section 有語意，適合用來表示網頁中的一個區塊主題；div 無語意，純粹為排版用途。"
      },
      // ... 其他問題
    ]
  },
  // ... 其他類別
];
```

## 3. 頁面佈局設計
- 使用 Bootstrap Grid System
- 一排N個 columns（使用 `col-md-4`，根據interviewQuestions長度計算N個）
- 每個 column 包含：
  - 類別標題（題目類型）
  - Bootstrap Card 元件
  - Card 內使用 Bootstrap Accordion 元件

## 4. 元件結構
```
└── 主容器 (.container)
    └── 列 (.row)
        └── 欄位 (.col-md-4) × 3
            └── 卡片 (.card)
                ├── 卡片標題 (.card-header)
                └── 手風琴容器 (.accordion)
                    └── 手風琴項目 (.accordion-item) × N
                        ├── 問題標題 (.accordion-header)
                        └── 答案內容 (.accordion-collapse)
```

## 5. 實作重點
1. **HTML 結構**
   - 使用語意化標籤
   - Bootstrap 類別正確使用
   - 適當的 ARIA 標籤

2. **CSS 設計**
   - 響應式設計考量
   - 統一的色彩主題
   - 適當的間距與排版

3. **JavaScript 功能**
   - 動態生成問題卡片
   - Accordion 互動控制
   - 資料管理與渲染分離

## 6. 開發步驟
1. 建立基礎 HTML 結構
2. 引入 Bootstrap CDN
3. 實作資料結構
4. 開發動態渲染邏輯
5. 實作互動功能
6. 優化與測試

## 7. 效能考量
- 避免不必要的 DOM 操作
- 使用事件委派處理互動
- 最小化重繪與重排

## 8. 使用者體驗
- 清晰的視覺層級
- 流暢的展開/收合動畫
- 適當的間距與留白
- 良好的閱讀體驗

## 9. 後續優化方向
- 新增搜尋功能
- 加入題目分類篩選
- 支援本地儲存
- 加入深色模式
- 列印優化 