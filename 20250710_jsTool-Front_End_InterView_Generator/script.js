// 面試題目資料
const interviewQuestions = [
  {
    category: "HTML/CSS 基礎",
    bgColor: "#007bff",
    questions: [
      {
        question: "HTML 中 <section> 與 <div> 有什麼差異？",
        answer: "section 有語意，適合用來表示網頁中的一個區塊主題；div 無語意，純粹為排版用途。",
        aCode: `<!-- 適合使用 section 的情況 -->
<section class="news-content">
  <h2>最新消息</h2>
  <article>新聞內容...</article>
</section>

<!-- 適合使用 div 的情況 -->
<div class="layout-container">
  <div class="left-column">...</div>
  <div class="right-column">...</div>
</div>`,
        aLang: "markup"
      },
      {
        question: "什麼是 HTML 空元素（void elements）？請舉例說明並解釋為什麼不需要結尾標籤",
        answer: "元素稱為空元素（void elements）或非置換元素（non-replaced elements），它們不需要包內容或任何子元素，只代表一個功能或資源。input 代表輸入欄位，img 代表圖片，hr 代表水平分隔線。在 HTML5 中，這些標籤可以寫成 <input /> 或 <input>，但建議使用 <input> 的簡潔寫法。其他常見的空元素包括 br、meta、link、area、base、col、embed、source、track、wbr 等。",
        aCode: `<!-- 空元素（非置換元素）範例 -->
<!-- 輸入欄位 -->
<input type="text" name="username" placeholder="請輸入用戶名">
<input type="password" name="password">
<input type="email" name="email" required>
<input type="checkbox" name="agree" id="agree">
<input type="radio" name="gender" value="male">

<!-- 圖片 -->
<img src="logo.png" alt="公司標誌" width="200" height="100">
<img src="avatar.jpg" alt="用戶頭像" class="rounded">

<!-- 分隔線 -->
<hr>
<hr style="border: 2px solid red;">

<!-- 換行 -->
<p>第一行文字<br>第二行文字</p>

<!-- 其他常見空元素 -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
<area shape="rect" coords="0,0,100,100" href="link.html">

<!-- 空元素的特點 -->
<!-- 1. 沒有內容，只代表功能 -->
<!-- 2. 不需要結尾標籤 -->
<!-- 3. 可以包含屬性 -->
<!-- 4. 在 HTML5 中結尾斜線是可選的 -->

<!-- 常見錯誤 -->
<!-- ❌ 錯誤寫法 -->
<input type="text"></input>
<img src="image.jpg"></img>
<hr></hr>

<!-- ✅ 正確寫法 -->
<input type="text">
<img src="image.jpg">
<hr>`,
        aLang: "markup"
      },
      {
        question: "HTML 可以做哪些事情提升 SEO？",
        answer: "HTML SEO 優化包含：使用語意化標籤（header、nav、main...）、正確的標題層級（h1-h6）、meta 標籤優化（title、description、keywords）、圖片 alt 屬性、Open Graph 標籤、連結的 title 屬性、無障礙設計、viewport meta 標籤等。",

        aCode: `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- HTML Meta 標籤 -->
  <title>網頁標題 - 品牌名稱</title>
  <meta name="description" content="網頁描述，150-160字元最佳">
  <meta name="keywords" content="關鍵字1,關鍵字2,關鍵字3">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph HTML 標籤 -->
  <meta property="og:title" content="分享標題">
  <meta property="og:description" content="分享描述">
  <meta property="og:image" content="https://example.com/image.jpg">
</head>
<body>
  <!-- HTML 語意化結構 -->
  <header>
    <nav>
      <ul>
        <li><a href="/" title="首頁">首頁</a></li>
        <li><a href="/about" title="關於我們">關於我們</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h1>主要標題（每頁只有一個）</h1>
    
    <article>
      <h2>文章標題</h2>
      <h3>章節標題</h3>
      <p>文章內容...</p>
      
      <!-- HTML 圖片優化 -->
      <img src="product.jpg" 
           alt="產品名稱和描述" 
           title="產品詳細資訊"
           loading="lazy">
      
      <!-- HTML 連結優化 -->
      <p>相關文章：<a href="/related-article" title="相關文章標題">相關文章</a></p>
    </article>

    <aside>
      <h3>相關內容</h3>
      <ul>
        <li><a href="/related1" title="相關文章1">相關文章1</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024 版權所有</p>
  </footer>
</body>
</html>

<!-- HTML SEO 優化重點 -->
<!-- 1. 語意化標籤：讓搜尋引擎理解內容結構 -->
<!-- 2. Meta 標籤：提供頁面資訊給搜尋引擎 -->
<!-- 3. 標題層級：正確的 h1-h6 結構 -->
<!-- 4. 圖片 alt 和 title：描述圖片內容 -->
<!-- 5. 連結 title：提供額外資訊 -->`,
        aLang: "markup"
      },
      {
        question: "什麼是 Flexbox？常見屬性有哪些？",
        answer: "Flexbox 是用來建立一維排版的 CSS 模型，常見屬性包含：水平分布、垂直置中、自動換行等功能。",
        aCode: `.container {
  display: flex;
  justify-content: space-between; /* 水平分布 */
  align-items: center;      /* 垂直置中 */
  flex-wrap: wrap;          /* 自動換行 */
}

.item {
  flex: 1;                 /* 彈性佔比 */
  flex-basis: 200px;       /* 基礎寬度 */
  flex-shrink: 0;          /* 禁止縮小 */
}`,
        aLang: "css"
      },
      {
        question: "如何設定響應式圖片？例 w600 圖片在瀏覽器尺寸 w300 上畫面，等比例最佳顯示不超出畫面",
        answer: "響應式圖片可以通過多種方式實現，包括使用 max-width、srcset 屬性或 picture 元素等方式。",
        aCode: `<!-- 基本響應式 -->
<img src="image.jpg" style="max-width: 100%; height: auto;">

<!-- 使用 srcset -->
<img srcset="image-200w.jpg 200w, image-300w.jpg 300w, image-400w.jpg 400w"
     sizes="(max-width: 200px) 200px, (max-width: 300px) 300px, 400px"
     src="image-400w.jpg">

<!-- 使用 picture 元素 -->
<picture>
  <source media="(min-width: 300px)" srcset="image-400w.jpg">
  <source media="(min-width: 200px)" srcset="image-300w.jpg">
  <img src="image-200w.jpg">
</picture>

/* CSS 控制方式 */
.responsive-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

@media (max-width: 768px) {
  .responsive-image {
    object-fit: contain;
  }
}`,
        aLang: "markup"
      },
      {
        question: "z-index 為何無效？",
        answer: "z-index 必須配合 position 屬性才能生效，且只在同一個堆疊上下文中比較。",
        aCode: `/* ❌ z-index 無效 */
.element {
  z-index: 999; /* 無效，因為沒有 position */
}

/* ✅ z-index 有效 */
.element {
  position: relative; /* 或 absolute, fixed */
  z-index: 999;      /* 現在會生效 */
}

/* ⚠️ 堆疊內容注意事項 */
.parent {
  position: relative;
  z-index: 1;
}
.child {
  position: absolute;
  z-index: 999; /* 只在父層內容比較 */
}`,
        aLang: "css"
      },
      {
        question: "CSS Grid 和 Flexbox 的使用場景有何不同？",
        answer: "Grid 適合二維佈局（行列），Flexbox 適合一維佈局（單行或單列）。Grid 適合整體頁面佈局，Flexbox 適合元件內部排列。",
        aCode: `/* Grid 佈局範例 */
.grid-layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

/* Flexbox 佈局範例 */
.flex-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
        aLang: "css"
      },
      {
        question: "transition 和 animation 兩者有何不同？",
        answer: "transition 用於狀態變化的漸變效果，animation 用於定義關鍵幀動畫。transition 較簡單但只能定義起始和結束狀態，animation 可以定義多個關鍵幀。",
        aCode: `/* Transition 範例 */
.button {
  background: blue;
  transition: all 0.3s ease;
}
.button:hover {
  background: red;
  transform: scale(1.1);
}

/* Animation 範例 */
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.bouncing-element {
  animation: bounce 1s infinite ease-in-out;
}`,
        aLang: "css"
      },
      {
        question: "CSS 權重（Specificity）是如何計算的？",
        answer: "CSS 權重由四個等級組成：行內樣式(1000) > ID(100) > 類別/屬性/偽類(10) > 元素/偽元素(1)。!important 會覆蓋所有其他樣式。",
        aCode: `/* 權重: 1 */
p { color: gray; }

/* 權重: 10 */
.text { color: black; }

/* 權重: 100 */
#title { color: blue; }

/* 權重: 11 (10 + 1) */
.text p { color: red; }

/* 權重: 20 (10 + 10) */
.container .text { color: green; }

/* 最高權重 */
p { color: purple !important; }`,
        aLang: "css"
      },
      {
        question: "解釋 BEM 命名規範",
        answer: "BEM 是 Block-Element-Modifier 的縮寫，用於 CSS 類別命名。Block 是獨立實體，Element 是 Block 的一部分，Modifier 是 Block 或 Element 的變體。",
        aCode: `<!-- BEM 命名範例 -->
<div class="card">                    <!-- Block -->
  <h2 class="card__title">           <!-- Element -->
    標題
  </h2>
  <p class="card__content">          <!-- Element -->
    內容
  </p>
  <button class="card__button">      <!-- Element -->
    按鈕
  </button>
  <button class="card__button--disabled"> <!-- Element with Modifier -->
    禁用按鈕
  </button>
</div>

/* CSS */
.card { }
.card__title { }
.card__content { }
.card__button { }
.card__button--disabled { }`,
        aLang: "markup"
      },
      {
        question: "CSS 中的偽類（Pseudo-classes）和偽元素（Pseudo-elements）有什麼區別？",
        answer: "偽類用於定義元素的特殊狀態（如 :hover、:first-child），使用單冒號；偽元素用於創建不在文檔樹中的元素（如 ::before、::after），使用雙冒號。",
        aCode: `/* 偽類示例 */
.link:hover {
  color: red;
}

.list li:first-child {
  font-weight: bold;
}

.input:focus {
  border-color: blue;
}

/* 偽元素示例 */
.quote::before {
  content: "「";
  color: #666;
}

.quote::after {
  content: "」";
  color: #666;
}

/* 常見應用：清除浮動 */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

/* 組合使用 */
.tooltip:hover::after {
  content: attr(data-tip);
  position: absolute;
  background: black;
  color: white;
  padding: 5px;
}`,
        aLang: "css"
      },
      {
        question: "CSS 預處理器（如 Sass）的主要功能有哪些？",
        answer: "CSS 預處理器提供變數、巢狀語法、混入（mixin）、函數、繼承等功能，幫助更好地組織和維護 CSS 程式碼。",
        aCode: `// SCSS 語法範例
$primary-color: #007bff;
$spacing: 20px;

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 1200px;
  padding: $spacing;
  
  // 巢狀語法
  .header {
    background: $primary-color;
    @include flex-center;
    
    &:hover {
      opacity: 0.9;
    }
  }
}

// 繼承
%button-base {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}

.button-primary {
  @extend %button-base;
  background: $primary-color;}`,
        aLang: "css"
      },
      {
        question: "RWD 響應式網頁設計的實作原理是什麼？透過哪些 CSS 技術實現？",
        answer: "RWD 透過 CSS Media Queries、相對單位、Flexbox/Grid 佈局、響應式圖片等技術實現。核心原理是根據螢幕尺寸動態調整佈局和樣式，確保在不同設備上都有良好的使用者體驗。",
        aCode: `/* 1. Media Queries - 根據螢幕尺寸調整樣式 */
.container {
  width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
}

/* 2. 相對單位 - 適應不同螢幕 */
.responsive-text {
  font-size: 2rem;        /* 相對於根元素 */
  line-height: 1.5em;     /* 相對於字體大小 */
  width: 90vw;            /* 視窗寬度的 90% */
  max-width: 100%;        /* 不超過容器寬度 */
}

/* 3. Flexbox 響應式佈局 */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.flex-item {
  flex: 1 1 300px;        /* 基礎寬度 300px，可伸縮 */
}

@media (max-width: 768px) {
  .flex-item {
    flex: 1 1 100%;       /* 小螢幕時佔滿寬度 */
  }
}

/* 4. CSS Grid 響應式佈局 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* 5. 響應式圖片 */
.responsive-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

/* 6. 視窗單位 */
.full-height {
  height: 100vh;          /* 視窗高度 */
  width: 100vw;           /* 視窗寬度 */
}

/* 7. 容器查詢 (Container Queries) */
.card {
  container-type: inline-size;
}

@container (max-width: 400px) {
  .card-content {
    font-size: 0.9rem;
  }
}`,
        aLang: "css"
      },
    ]
  },
  {
    category: "JavaScript 基礎",
    bgColor: "#28a745",
    questions: [
      {
        question: "運算子 == 與 === 有何不同？",
        answer: "== 會進行類型轉換後比較，=== 則是嚴格比較，不會進行類型轉換。",
        aCode: `// == 會進行類型轉換
1 == '1'     // true
0 == false   // true
null == undefined  // true

// === 不會進行類型轉換
1 === '1'    // false
0 === false  // false
null === undefined // false

// 建議使用 === 的情況
if (someValue === null) {
  // 明確檢查 null
}

// 可以使用 == 的情況
if (someValue == null) {
  // 同時檢查 null 和 undefined
}`,
        aLang: "javascript"
      },
      {
        question: "解釋 DOM 事件的傳遞機制（Event Propagation）",
        answer: "DOM 事件傳遞分為三個階段：捕獲（Capturing）、目標（Target）和冒泡（Bubbling）。事件先從根節點向下捕獲到目標元素，然後再向上冒泡。可以使用 stopPropagation() 阻止傳遞，preventDefault() 阻止默認行為。",
        aCode: `// 1. 事件傳遞的三個階段
document.querySelector('#parent').addEventListener('click', (e) => {
  console.log('捕獲階段');
}, true);  // true 表示在捕獲階段處理

document.querySelector('#child').addEventListener('click', (e) => {
  console.log('目標階段');
  // e.stopPropagation();  // 阻止事件繼續傳遞
});

document.querySelector('#grandparent').addEventListener('click', (e) => {
  console.log('冒泡階段');
}, false);  // false 表示在冒泡階段處理（默認）

// 2. 阻止事件傳遞和默認行為
document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();     // 阻止連結跳轉
  e.stopPropagation();   // 阻止事件冒泡
});

// 3. 實際應用：模態框點擊外部關閉
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {  // 只在點擊遮罩層時關閉
    modal.style.display = 'none';
  }
});`,
        aLang: "javascript"
      },
      {
        question: "什麼是閉包（closure）？",
        answer: "閉包是一個函式能夠存取其外層作用域變數的特性，常用於建立私有變數和資料封裝。",
        aCode: `function createCounter() {
  let count = 0;  // 私有變數
  
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1

// 實際應用：防抖（debounce）
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}`,
        aLang: "javascript"
      },
      {
        question: "為什麼 0.1 + 0.2 !== 0.3？如何解決這個問題？",
        answer: "由於 JavaScript 使用 IEEE 754 雙精度浮點數標準， 0.1、0.2、0.3 在二進位中都是無限循環小數。將這些二進位數轉換為十進位時會產生捨入誤差，導致 0.1 + 0.2 的結果不等於精確的 0.3。使用 toFixed()、Math.round() 或乘以 10 的冪次來解決。",
        aCode: `// 二進位轉十進位的精度問題
// 0.1 的二進位：0.0001100110011001100110011001100110011001100110011001101...
// 0.2 的二進位：0.0011001100110011001100110011001100110011001100110011010...
// 0.3 的二進位：0.01001100110011001100110011001100110011001100110011001101...

// 這些都是無限循環小數，轉換為十進位時會產生捨入誤差
console.log(0.1 + 0.2);        // 0.30000000000000004 (捨入誤差)
console.log(0.1 + 0.2 === 0.3); // false
        
        // 浮點數精度問題
console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// 解決方案 1：使用 toFixed()
const result1 = (0.1 + 0.2).toFixed(1);
console.log(result1);           // "0.3"
console.log(parseFloat(result1) === 0.3); // true

// 解決方案 2：使用 Math.round()
const result2 = Math.round((0.1 + 0.2) * 10) / 10;
console.log(result2);           // 0.3

// 解決方案 3：轉換為整數運算
const result3 = (0.1 * 10 + 0.2 * 10) / 10;
console.log(result3);           // 0.3

// 解決方案 4：使用 Number.EPSILON
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log(isEqual(0.1 + 0.2, 0.3)); // true

// 實際應用：金額計算
const price = 19.99;
const quantity = 3;
const total = price * quantity;
console.log(total);                    // 59.970000000000006
console.log(total.toFixed(2));         // "59.97"`,
        aLang: "javascript"
      },
      {
        question: "Promise 和 async/await 的使用場景和差異",
        answer: "Promise 用於處理非同步操作，提供鏈式調用；async/await 是基於 Promise 的語法糖，讓非同步程式碼更像同步程式碼，更容易理解和維護。",
        aCode: `// Promise 方式
function fetchData() {
  return fetch('api/data')
    .then(response => response.json())
    .then(data => processData(data))
    .catch(error => console.error(error));
}

// async/await 方式
async function fetchData() {
  try {
    const response = await fetch('api/data');
    const data = await response.json();
    return processData(data);
  } catch (error) {
    console.error(error);
  }
}

// 實際應用：並行請求
async function fetchMultipleData() {
  try {
    const [users, posts] = await Promise.all([
      fetch('api/users').then(r => r.json()),
      fetch('api/posts').then(r => r.json())
    ]);
    return { users, posts };
  } catch (error) {
    console.error(error);
  }
}`,
        aLang: "javascript"
      },
      {
        question: "為什麼在 JavaScript 中使用解構（Destructuring）來處理物件和陣列？",
        answer: "解構可以安全地複製資料而不修改原始資料，避免意外的記憶體污染。這在處理不可變性（Immutability）時特別有用，能確保函數的純粹性和可預測性。",
        aCode: `// ❌ 直接修改原始資料
function updateUserBad(user) {
  user.name = 'New Name';     // 污染原始物件
  user.age += 1;             // 修改原始資料
  return user;
}

// ✅ 使用解構來安全地處理資料
function updateUserGood(user) {
  // 解構並建立新物件，原始資料不變
  const { ...newUser } = user;
  newUser.name = 'New Name';
  newUser.age += 1;
  return newUser;
}

// 使用展開運算子也是常見做法
function updateUserBetter(user) {
  return {
    ...user,              // 複製原始資料
    name: 'New Name',     // 只更新需要的屬性
    age: user.age + 1
  };
}

const user = {
  name: 'Old Name',
  age: 25
};

console.log('原始:', user);
console.log('更新後:', updateUserGood(user));
console.log('原始依然是:', user);  // 原始資料不變`,
        aLang: "javascript"
      },
      {
        question: "解釋 JavaScript 中的 this 關鍵字",
        answer: "this 代表『目前執行環境下的物件』，它的值取決於函數是如何被呼叫。一般函數中，this 代表全域物件（非嚴格模式下為 window，嚴格模式下為 undefined）；物件方法中，this 代表該物件本身；箭頭函數的 this 取決於外層作用域，不會被呼叫方式改變。",
        aCode: `// 1. 全域函數
function show() {
  console.log(this);
}
show(); // 瀏覽器下為 window，嚴格模式下為 undefined

// 2. 物件方法
const obj = {
  name: '小明',
  sayHi() {
    console.log(this.name);
  }
};
obj.sayHi(); // '小明'，this 指向 obj

// 3. 建構函數
function Person(name) {
  this.name = name;
}
const p = new Person('小華');
console.log(p.name); // '小華'，this 指向新建立的物件

// 4. call/apply/bind 改變 this
function greet() {
  console.log(this.name);
}
const user = { name: '小美' };
greet.call(user); // '小美'

// 5. 箭頭函數
const arrow = () => {
  console.log(this);
};
arrow(); // this 取決於外層作用域（例如 window 或上層函數）

const obj2 = {
  name: '小王',
  say: () => {
    console.log(this.name);
  }
};
obj2.say(); // undefined，因為箭頭函數沒有自己的 this`
      },
      {
        question: "student?.name 中的問號（?.）是什麼意思？為什麼要使用它？",
        answer: "這是 Optional Chaining（可選鏈）運算符，用來安全地存取可能為 null 或 undefined 的物件屬性。它可以避免出現 'Cannot read property of null' 的錯誤，讓程式碼更簡潔安全。",
        aCode: `// ❌ 傳統的防錯方式：醜陋且冗長
if (student && student.name) {
  console.log(student.name);
}

// ✅ 使用 Optional Chaining：簡潔安全
console.log(student?.name);  // 若 student 是 null，返回 undefined

// 實際應用場景
const data = {
  user: null,
  settings: {
    theme: 'dark'
  }
};

// 深層物件存取
console.log(data.user?.profile?.name);  // undefined
console.log(data.settings?.theme);      // 'dark'

// 搭配函數調用
data.user?.save?.();  // 安全地調用可能不存在的方法`,
        aLang: "javascript"
      },
      {
        question: "請說明陣列方法 filter、map、find、some、includes、reduce 的適合用途和返回類型？",
        answer: "filter() 用於篩選符合條件的元素，返回新陣列；map() 用於轉換每個元素，返回新陣列；find() 用於找到第一個符合條件的元素，返回元素或 undefined；some() 用於檢查是否存在符合條件的元素，返回布林值；includes() 用於檢查是否包含特定值，返回布林值；reduce() 用於累積運算，返回單一值。所有方法都不會修改原始陣列。",
        aCode: `const users = [
  { id: 1, name: "小明", age: 20, role: "user" },
  { id: 2, name: "小華", age: 25, role: "admin" },
  { id: 3, name: "小李", age: 30, role: "user" },
  { id: 4, name: "小王", age: 18, role: "user" }
];

// filter(): 篩選符合條件的元素
// 用途：篩選資料
// 返回：新陣列
const adults = users.filter(user => user.age >= 20);
console.log(adults); // [{ id: 1, name: "小明", age: 20 }, { id: 2, name: "小華", age: 25 }, { id: 3, name: "小李", age: 30 }]

// map(): 轉換每個元素
// 用途：資料轉換
// 返回：新陣列
const userNames = users.map(user => user.name);
console.log(userNames); // ["小明", "小華", "小李", "小王"]

// find(): 找到第一個符合條件的元素
// 用途：查找特定元素
// 返回：元素或 undefined
const admin = users.find(user => user.role === 'admin');
console.log(admin); // { id: 2, name: "小華", age: 25, role: "admin" }

// some(): 檢查是否存在符合條件的元素
// 用途：存在性檢查
// 返回：布林值
const hasAdmin = users.some(user => user.role === 'admin');
console.log(hasAdmin); // true

// includes(): 檢查是否包含特定值
// 用途：簡單值的存在性檢查
// 返回：布林值
const names = ["小明", "小華", "小李"];
const hasXiaoMing = names.includes("小明");
console.log(hasXiaoMing); // true

// reduce(): 累積運算
// 用途：將陣列歸納為單一值
// 返回：累積結果
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

const maxAge = users.reduce((max, user) => Math.max(max, user.age), 0);
console.log(maxAge); // 30

// 實際應用場景
const orders = [
  { id: 1, amount: 100, status: "已完成" },
  { id: 2, amount: 200, status: "處理中" },
  { id: 3, amount: 150, status: "已完成" },
  { id: 4, amount: 300, status: "已取消" }
];

// 使用 filter 篩選已完成的訂單
const completedOrders = orders.filter(order => order.status === "已完成");

// 使用 map 取得所有金額
const amounts = orders.map(order => order.amount);

// 使用 find 找到特定訂單
const order2 = orders.find(order => order.id === 2);

// 使用 some 檢查是否有取消的訂單
const hasCancelled = orders.some(order => order.status === "已取消");

// 使用 includes 檢查狀態類型
const validStatuses = ["已完成", "處理中", "已取消"];
const isValidStatus = (status) => validStatuses.includes(status);

// 使用 reduce 計算總金額
const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

// 使用 reduce 分組統計
const statusCount = orders.reduce((acc, order) => {
  acc[order.status] = (acc[order.status] || 0) + 1;
  return acc;
}, {});`,
        aLang: "javascript"
      },
      {
        question: "如何使用原生 JavaScript 深層複製（Deep Clone）一個含巢狀結構的純資料物件？",
        answer: "原生 JavaScript 可以使用 JSON.parse/stringify、遞迴函數或 structuredClone API 來實現深層複製。每種方法都有其適用場景和限制，需要根據資料類型選擇合適的方法。",
        aCode: `// 巢狀物件範例
const originalObj = {
  name: "小明",
  age: 25,
  address: {
    city: "台北",
    district: "信義區",
    details: {
      street: "松仁路",
      number: 100
    }
  },
  hobbies: ["讀書", "運動"],
  friends: [
    { name: "小華", age: 24 },
    { name: "小李", age: 26 }
  ]
};

// ❌ 淺層複製 - 只複製參考
const shallowCopy = { ...originalObj };
shallowCopy.address.city = "高雄";  // 會影響原始物件
console.log(originalObj.address.city); // "高雄"

// ✅ 方法 1：JSON.parse/stringify
const deepCopy1 = JSON.parse(JSON.stringify(originalObj));
deepCopy1.address.city = "台中";
console.log(originalObj.address.city); // "台北" (原始物件不變)

// 限制：無法處理函數、undefined、Symbol、BigInt、Date
const objWithFunction = {
  name: "測試",
  sayHello: function() { console.log("Hello"); },
  undefinedValue: undefined,
  date: new Date()
};
const jsonCopy = JSON.parse(JSON.stringify(objWithFunction));
console.log(jsonCopy.sayHello); // undefined
console.log(typeof jsonCopy.date); // "string" (變成字串)

// ✅ 方法 2：遞迴深層複製
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }
  
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
}

const deepCopy2 = deepClone(originalObj);
deepCopy2.address.city = "台南";
console.log(originalObj.address.city); // "台北"

// ✅ 方法 3：structuredClone (ES2022，現代瀏覽器)
if (typeof structuredClone !== 'undefined') {
  const deepCopy3 = structuredClone(originalObj);
  deepCopy3.address.city = "花蓮";
  console.log(originalObj.address.city); // "台北"
}

// 測試各種資料類型
function testDeepClone() {
  const testObj = {
    string: "字串",
    number: 123,
    boolean: true,
    null: null,
    undefined: undefined,
    date: new Date(),
    array: [1, 2, { deep: "value" }],
    object: { nested: { value: "test" } },
    func: function() { return "test"; }
  };
  
  const cloned = deepClone(testObj);
  cloned.object.nested.value = "changed";
  
  console.log(testObj.object.nested.value); // "test" (原始不變)
  console.log(cloned.object.nested.value);  // "changed" (複製的改變)
  console.log(cloned.func()); // "test" (函數正常運作)
}`,
        aLang: "javascript"
      },
      {
        question: `以下程式碼的輸出結果是什麼？為什麼？`,
        qCode: `let num=10;
const item1 = { num };
const item2 = item1;
const item3 = {...item2};
item2.num = 20;
item3.num = 30;
console.log(num, item1.num, item2.num, item3.num);
`,
        qLang: "javascript",
        answer: "輸出是 10 20 20 30。num 是原始型別，值不會被物件操作影響。item1 和 item2 指向同一個物件，item2.num = 20 會同時改變 item1.num。item3 則是用展開運算子建立的新物件，item3.num = 30 只會影響 item3，不會影響 item1 或 item2。",
        aCode: ``,
        aLang: "javascript"
      }
    ]
  },
  {
    category: "通用框架觀念",
    bgColor: "#6f42c1",
    questions: [
      {
        question: "什麼是 SPA（Single Page Application）？它的優缺點是什麼？",
        answer: "SPA 是只需載入單一頁面的應用程式，透過 JavaScript 動態更新內容。優點包含使用者體驗佳、前後端分離；缺點包含首次載入較慢、SEO 較難處理。",
        aCode: `// React Router 範例
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}`,
        aLang: "markup"
      },
      {
        question: "解釋 MVVM（Model-View-ViewModel）架構模式",
        answer: "MVVM 是一種架構模式，Model 處理資料邏輯，View 負責畫面呈現，ViewModel 作為中介者處理資料綁定和狀態管理。Vue 是典型的 MVVM 框架，Angular 也高度符合 MVVM 架構，但同時融合了更多現代設計模式。",
        aCode: `// Vue.js MVVM 範例
export default {
  // Model: 資料
  data() {
    return {
      users: [],
      loading: false
    }
  },
  
  // ViewModel: 計算屬性和方法
  computed: {
    activeUsers() {
      return this.users.filter(user => user.isActive)
    }
  },
  methods: {
    async fetchUsers() {
      this.loading = true
      this.users = await api.getUsers()
      this.loading = false
    }
  },
  
  // View: 模板
  template: \`
    <div>
      <div v-if="loading">Loading...</div>
      <ul v-else>
        <li v-for="user in activeUsers">
          {{ user.name }}
        </li>
      </ul>
    </div>
  \`
}`,
        aLang: "javascript"
      },
      {
        question: "什麼是狀態管理（State Management）？為什麼需要它？",
        answer: "狀態管理用於處理應用程式的資料狀態，集中管理和共享資料。當應用程式變大時，可以避免 prop drilling 問題，並使資料流更容易追蹤和維護。",
        aCode: `// Redux 範例
// Action
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: { text }
})

// Reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.payload.text, completed: false }]
    default:
      return state
  }
}

// Store
const store = createStore(todoReducer)

// Component
function TodoList() {
  const todos = useSelector(state => state)
  const dispatch = useDispatch()
  
  return (
    <div>
      {todos.map(todo => <TodoItem {...todo} />)}
      <button onClick={() => dispatch(addTodo('New Task'))}>
        Add Todo
      </button>
    </div>
  )
}`,
        aLang: "javascript"
      },
      {
        question: "解釋元件生命週期（Component Lifecycle）的概念",
        answer: "元件生命週期是框架中元件從建立到銷毀的整個過程，包含掛載、更新和卸載等階段。不同框架有不同的生命週期鉤子。",
        aCode: `// React 生命週期
class Example extends React.Component {
  constructor(props) {
    super(props)
    // 初始化
  }

  componentDidMount() {
    // 元件掛載後
    // 適合發送 API 請求
  }

  componentDidUpdate(prevProps, prevState) {
    // 元件更新後
    if (prevProps.id !== this.props.id) {
      // 處理 props 變化
    }
  }

  componentWillUnmount() {
    // 元件即將卸載
    // 清理訂閱、計時器等
  }
}

// Vue 3 生命週期
export default {
  setup() {
    onMounted(() => {
      // 元件掛載後
    })
    
    onUpdated(() => {
      // 元件更新後
    })
    
    onUnmounted(() => {
      // 元件卸載後
    })
  }
}`,
        aLang: "javascript"
      },
      {
        question: "什麼是響應式程式設計（Reactive Programming）？",
        answer: "響應式程式設計是一種基於資料流和變化傳遞的程式設計範式。當資料改變時，相依於該資料的程式碼會自動執行，實現資料和 UI 的同步。",
        aCode: `// RxJS 範例
const input$ = fromEvent(inputElement, 'input')
  .pipe(
    map(e => e.target.value),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term => 
      ajax.getJSON(\`/api/search?q=\${term}\`)
    )
  )
  .subscribe(results => {
    updateUI(results)
  })

// Vue 3 Composition API
const searchResults = ref([])
const searchTerm = ref('')

// 自動追蹤相依性
watchEffect(async () => {
  if (searchTerm.value) {
    searchResults.value = await fetchResults(searchTerm.value)
  }
})`,
        aLang: "javascript"
      },
      {
        question: "什麼是 Virtual DOM？它如何提升效能？",
        answer: "Virtual DOM 是真實 DOM 的 JavaScript 表示，框架通過比較新舊 Virtual DOM 的差異，最小化真實 DOM 操作，從而提升效能。",
        aCode: `// 簡化的 Virtual DOM 實現
class VNode {
  constructor(tag, props, children) {
    this.tag = tag
    this.props = props
    this.children = children
  }
}

function createElement(tag, props, ...children) {
  return new VNode(tag, props, children)
}

// 比較算法
function diff(oldVNode, newVNode) {
  if (!oldVNode) {
    return { type: 'CREATE', newVNode }
  }
  
  if (!newVNode) {
    return { type: 'REMOVE' }
  }
  
  if (oldVNode.tag !== newVNode.tag) {
    return { type: 'REPLACE', newVNode }
  }
  
  return {
    type: 'UPDATE',
    props: diffProps(oldVNode.props, newVNode.props),
    children: diffChildren(oldVNode.children, newVNode.children)
  }
}`,
        aLang: "javascript"
      },
      {
        question: "解釋 SSR（Server-Side Rendering）和 CSR（Client-Side Rendering）的差異",
        answer: "SSR 在伺服器端生成完整 HTML，有利於 SEO 和首次載入速度；CSR 在客戶端動態生成內容，適合互動性強的應用。現代框架常常結合兩者優點。",
        aCode: `// Next.js SSR 範例
// pages/users.js
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/users')
  const users = await res.json()
  
  return {
    props: { users }
  }
}

export default function Users({ users }) {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}

// CSR 範例
function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])
  
  if (loading) return <Loading />
  
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}`,
        aLang: "javascript"
      },
      {
        question: "前端效能優化的常見策略有哪些？",
        answer: "前端效能優化包含：程式碼分割、懶加載、快取策略、圖片優化、減少 HTTP 請求、使用 CDN、壓縮資源等多個面向。",
        aCode: `// React 程式碼分割
const OtherComponent = React.lazy(() => import('./OtherComponent'))

function MyComponent() {
  return (
    <Suspense fallback={<Loading />}>
      <OtherComponent />
    </Suspense>
  )
}

// 圖片懶加載
<img 
  loading="lazy"
  src="large-image.jpg"
  alt="Lazy loaded image"
/>

// Service Worker 快取
const CACHE_NAME = 'my-site-cache-v1'
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  )
})

// 使用 Web Workers 處理複雜運算
const worker = new Worker('worker.js')
worker.postMessage({ data: complexData })
worker.onmessage = event => {
  updateUI(event.data)
}`,
        aLang: "javascript"
      },
      {
        question: "什麼是前端路由（Frontend Routing）？它的主要用途和特色是什麼？",
        answer: "前端路由是一種在單頁應用（SPA）中管理不同頁面或視圖的技術，無需重新載入整個頁面。主要用途包括：實現單頁應用的多頁面體驗、管理應用狀態、改善使用者體驗。特色包含：無需伺服器請求、更快的頁面切換、保持應用狀態、支援瀏覽器前進後退功能。",
        aCode: `// SPA 路由的兩種主要方式
      
      // 1. Hash Router（Hash 路由）
      // 使用 URL 的 hash 部分，以 # 開頭
      // https://example.com/#/home
      // https://example.com/#/about
      // https://example.com/#/products
      
      // 優點：相容性好，不需要伺服器配置
      // 缺點：URL 較醜，SEO 較差
      
      // 2. Browser Router（瀏覽器路由）
      // 使用 HTML5 History API，看起來像真實路徑
      // https://example.com/home
      // https://example.com/about
      // https://example.com/products
      
      // 優點：URL 美觀，SEO 友好
      // 缺點：需要伺服器配置（所有路由都指向 index.html）

      // nginx.conf 
      location /app/ {
        alias /usr/share/nginx/html/dist/;
        index index.html index.htm;
        try_files $uri $uri/ /app/index.html;
    }
      
      // SPA 路由的工作原理
      // 1. 框架初始化時設定入口路由
      // 2. 監聽 URL 變化
      // 3. 解析路徑並對應到相應元件
      // 4. 動態渲染對應的元件
      
      // 路由配置範例
      const routes = {
        '/': HomePage,           // 首頁
        '/about': AboutPage,     // 關於頁面
        '/products': ProductsPage, // 產品頁面
        '/contact': ContactPage   // 聯絡頁面
      }
      
      // 路由的特色
      // 1. 無需重新載入頁面
      // 2. 保持應用狀態
      // 3. 支援瀏覽器歷史記錄
      // 4. 改善使用者體驗
      // 5. 減少伺服器負載
      
      // 實際應用場景
      // - 電商網站：商品列表 → 商品詳情 → 購物車
      // - 管理後台：儀表板 → 用戶管理 → 設定
      // - 部落格：文章列表 → 文章內容 → 評論`,
        aLang: "javascript"
      },
      {
        question: "請解釋 Bootstrap 與 Tailwind CSS 的差異性？各自的優缺點為何？",
        answer: "Bootstrap 是一套預設設計風格的 UI 元件框架，提供大量現成的元件和響應式排版。Tailwind CSS 則是原子化（utility-first）的 CSS 框架，強調用 class 組合快速客製化設計。Bootstrap 上手快、開發速度快，但客製化彈性較低。Tailwind 彈性高、可完全自訂設計，但初學者需適應大量 class 組合，且專案初期較無 UI 樣式。",
        aCode: `// Bootstrap 範例：直接使用元件 class
      <button class="btn btn-primary">按鈕</button>
      <div class="row">
        <div class="col-md-6">左側</div>
        <div class="col-md-6">右側</div>
      </div>
      
      // Tailwind CSS 範例：組合原子 class
      <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">按鈕</button>
      <div class="flex flex-row">
        <div class="w-1/2">左側</div>
        <div class="w-1/2">右側</div>
      </div>
      
      // 差異重點
      // 1. Bootstrap 提供現成 UI 元件與設計風格，Tailwind 提供原子化 class 讓你自由組合
      // 2. Bootstrap 客製化需覆蓋原有樣式，Tailwind 可直接組合出獨特設計
      // 3. Bootstrap 適合快速開發、設計統一的專案，Tailwind 適合需要高度自訂的專案
      // 4. Bootstrap class 較少，Tailwind class 較多但語意明確`
      },
      {
        question: "請舉例說明在前端框架（如 React/Vue/Angular）中，如何實踐 Clean Code？並說明元件設計時應注意哪些原則。",
        answer: "在框架開發中，Clean Code 實踐包含：1. 元件單一職責（每個元件只做一件事）；2. 適當拆分元件，避免過大元件；3. 明確命名元件、props、事件；4. 避免 props drilling，善用狀態管理或 context；5. 重複邏輯抽離為自訂 Hook/Composables/Service；6. 保持元件可讀性與可測試性。",
        aCode: `// 不乾淨的 React 元件（過大、命名不明、重複邏輯）
      function UserProfile(props) {
        // 取得用戶資料、處理表單、顯示列表、處理通知...全部寫在一起
        // ...
        return (
          <div>
            {/* 很多內容 */}
          </div>
        );
      }
      
      // 乾淨的 React 元件（單一職責、拆分、命名明確）
      function UserProfile({ user }) {
        return (
          <div>
            <UserInfo user={user} />
            <UserPosts userId={user.id} />
            <UserSettings user={user} />
          </div>
        );
      }
      
      // 重複邏輯抽離為 Hook
      function useUserData(userId) {
        const [user, setUser] = useState(null);
        useEffect(() => { /* 取得資料 */ }, [userId]);
        return user;
      }
      
      // Vue/Angular 也同理，應該拆分元件、明確命名、抽離重複邏輯
      // Vue: <UserInfo :user="user" />、composables
      // Angular: <app-user-info [user]="user"></app-user-info">、service`
      }
    ]
  },
  {
    category: "Angular 基礎",
    bgColor: "#dd0031",
    questions: [
      {
        question: "Angular 中的 ngOnInit 和 constructor 有什麼區別？",
        answer: "constructor 是 TypeScript 的類別建構子，在依賴注入時使用；ngOnInit 是生命週期鉤子，在所有資料綁定完成後執行初始化邏輯。",
        aCode: `import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<div>{{data}}</div>'
})
export class ExampleComponent implements OnInit {
  private data: string;

  constructor(private service: DataService) {
    // 用於依賴注入
    // 不應該在這裡執行複雜的初始化邏輯
  }

  ngOnInit() {
    // 在這裡執行初始化邏輯
    this.service.getData().subscribe(
      result => this.data = result
    );
  }
}`,
        aLang: "javascript"
      },
      {
        question: "解釋 Angular 中的服務（Service）和依賴注入（DI）",
        answer: "服務是用於共享資料和邏輯的可重用類別，依賴注入則是 Angular 的核心特性，用於管理元件和服務之間的依賴關係。",
        aCode: `// 定義服務
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}

// 在元件中使用服務
@Component({
  selector: 'app-user-list'
})
export class UserListComponent {
  users: User[] = [];

  constructor(private userService: UserService) {
    // 服務通過 DI 系統自動注入
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}`,
        aLang: "javascript"
      },
      {
        question: "什麼是 Angular 中的變更檢測（Change Detection）？",
        answer: "變更檢測是 Angular 用來同步模型和視圖的機制，當應用程式資料改變時，Angular 會自動更新對應的 DOM。",
        aCode: `import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-performance',
  template: '{{data | json}}',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerformanceComponent {
  data: any;

  constructor(private cd: ChangeDetectorRef) {}

  updateData() {
    this.data = newData;
    // 手動觸發變更檢測
    this.cd.detectChanges();
  }

  ngOnInit() {
    // 停用自動變更檢測
    this.cd.detach();
  }
}`,
        aLang: "javascript"
      },
      {
        question: "解釋 Angular 中的三種類型指令（Directive）？",
        answer: `Angular 指令分三種：\n1. 元件指令（@Component）：建立 UI 元件，最常見。\n2. 結構指令（如 *ngIf、*ngFor）：改變 DOM 結構，決定要不要顯示、重複渲染。\n3. 屬性指令（如 [ngStyle]、[ngClass]、自訂 highlight）：改變元素外觀或行為。`,
        aCode: `// 1. 元件指令（最常見）
@Component({
  selector: 'app-hello',
  template: '<h1>Hello!</h1>'
})
export class HelloComponent {}

// 2. 結構指令：*ngIf、*ngFor
<div *ngIf="isShow">只在 isShow 為 true 時顯示</div>
<ul>
  <li *ngFor="let item of items">{{item}}</li>
</ul>

// 3. 屬性指令：ngStyle、ngClass、自訂 highlight
<p [ngStyle]="{color: 'red'}">紅色文字</p>
<p [ngClass]="'big-text'">大字</p>
<p highlight="yellow">滑鼠移上會變色</p>

// 自訂 highlight 屬性指令
@Directive({ selector: '[highlight]' })
export class HighlightDirective {
  @Input('highlight') color: string;
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = this.color || 'yellow';
  }
  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
}`,
        aLang: "javascript"
      },
      {
        question: "Angular 中的管道（Pipe）是什麼？",
        answer: "管道用於轉換顯示值，Angular 提供了許多內建管道如 date、currency 等。也可以通過 @Pipe 裝飾器創建自定義管道。",
        aCode: `// 內建管道使用
@Component({
  template: \`
    <p>{{ date | date:'yyyy-MM-dd' }}</p>
    <p>{{ price | currency:'USD' }}</p>
    <p>{{ text | uppercase }}</p>
  \`
})

// 自定義管道
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    return items.filter(item => 
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}

// 使用自定義管道
@Component({
  template: \`
    <input [(ngModel)]="searchText">
    <ul>
      <li *ngFor="let item of items | filter:searchText">
        {{item.name}}
      </li>
    </ul>
  \`
})`,
        aLang: "javascript"
      },
      {
        question: "Angular 中的路由守衛（Route Guards）有什麼用途？",
        answer: "路由守衛用於控制路由的訪問權限，包括 CanActivate（訪問權限）、CanDeactivate（離開確認）、Resolve（預加載數據）等。",
        aCode: `// 認證守衛
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}

// 離開確認守衛
@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<FormComponent> {
  canDeactivate(component: FormComponent): boolean {
    if (component.form.dirty) {
      return confirm('您有未保存的更改，確定要離開嗎？');
    }
    return true;
  }
}

// Resolve 預先取得資料
@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const userId = route.paramMap.get('id');
    return this.userService.getUserById(userId);
  }
}

// 路由配置
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canDeactivate: [UnsavedChangesGuard]
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    resolve: { user: UserResolver }
  }
];

// 在 UserDetailComponent 中取得 resolve 的資料
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }
}`,
        aLang: "javascript"
      },
      {
        question: "請說明 Angular 生命週期中的 ngOnInit 與 ngAfterContentInit 有什麼差異？適合在什麼時機做處理",
        answer: `ngOnInit 是元件本身初始化時呼叫，適合做元件自己的資料初始化、API 請求等。  
      ngAfterContentInit 則是在內容投影（ng-content）完成後呼叫，這時才能安全地取得或操作投影進來的內容（如 @ContentChild、slot、富文本編輯器等）。如果需要初始化或操作 ng-content 投影進來的 DOM、元件或第三方套件，必須等到 ngAfterContentInit 之後再執行。否則在 ngOnInit 階段這些內容還沒準備好，會導致初始化失敗或取不到參考。
      
      - 元件本身資料初始化 → 用 ngOnInit
      - 需要操作/初始化投影內容或第三方套件 → 用 ngAfterContentInit
      `,
        aCode: `@Component({
        selector: 'app-wrapper',
        template: '<ng-content></ng-content>'
      })
      export class WrapperComponent implements OnInit, AfterContentInit {
        @ContentChild('projected') projected: ElementRef;
      
        ngOnInit() {
          // 此時 projected 尚未可用
        }
      
        ngAfterContentInit() {
          // 此時 projected 已可用，可以安全操作或初始化第三方套件
          if (this.projected) {
            // 例如：initThirdParty(this.projected.nativeElement);
          }
        }
      }
      
      // 父元件範例
      @Component({
        template: \`
          <app-wrapper>
            <div #projected>投影內容</div>
          </app-wrapper>
        \`
      })
      export class ParentComponent {}
      `,
        aLang: "javascript"
      },
      {
        question: "Angular 中的 NgModule 與 Standalone Components 有什麼差異？",
        answer: "NgModule 是 Angular 傳統的模組化方式，需要明確定義 declarations、imports、exports 等。Standalone Components 是 Angular 14+ 推出的新方式，元件可以獨立存在，不需要 NgModule 包裝，更簡潔且符合現代前端開發趨勢。",
        aCode: `// 傳統 NgModule 方式
// --------------------------------
// user-list.component.ts
@Component({
  selector: 'app-user-list',
  template: \`
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
  \`
})
export class UserListComponent {
  users = ['小明', '小華', '小美'];
}

// user.module.ts
@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule],
  exports: [UserListComponent]
})
export class UserModule { }

// app.module.ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

// app.component.html
<app-user-list></app-user-list>

// 現代 Standalone Components 方式
// --------------------------------
// user-list.component.ts
@Component({
  selector: 'app-user-list',
  standalone: true, // 關鍵差異
  imports: [CommonModule],
  template: \`
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
  \`
})
export class UserListComponent {
  users = ['小明', '小華', '小美'];
}

// app.component.ts
@Component({
  selector: 'app-root',
  standalone: true, // 關鍵差異
  imports: [UserListComponent],
  template: \`<app-user-list></app-user-list>\`
})
export class AppComponent {}

// main.ts
bootstrapApplication(AppComponent);
`,
        aLang: "javascript"
      },
      {
        question: "什麼是 NgRx？它的核心概念有哪些？",
        answer: "NgRx 是基於 Redux 模式的 Angular 狀態管理庫，包含 Store（狀態容器）、Actions（動作）、Reducers（狀態更新器）、Effects（副作用處理）、Selectors（狀態選擇器）等核心概念。它提供可預測的狀態管理，適合大型應用程式。",
        aCode: `// 1. Actions - 定義動作
      import { createAction, props } from '@ngrx/store';
      
      export const loadUsers = createAction('[User] Load Users');
      export const loadUsersSuccess = createAction(
        '[User] Load Users Success',
        props<{ users: User[] }>()
      );
      export const loadUsersFailure = createAction(
        '[User] Load Users Failure',
        props<{ error: string }>()
      );
      
      // 2. Reducer - 處理狀態更新
      import { createReducer, on } from '@ngrx/store';
      
      export interface UserState {
        users: User[];
        loading: boolean;
        error: string | null;
      }
      
      const initialState: UserState = {
        users: [],
        loading: false,
        error: null
      };
      
      export const userReducer = createReducer(
        initialState,
        on(loadUsers, state => ({
          ...state,
          loading: true,
          error: null
        })),
        on(loadUsersSuccess, (state, { users }) => ({
          ...state,
          users,
          loading: false
        })),
        on(loadUsersFailure, (state, { error }) => ({
          ...state,
          error,
          loading: false
        }))
      );
      
      // 3. Effects - 處理副作用（API 呼叫）
      import { Injectable } from '@angular/core';
      import { Actions, createEffect, ofType } from '@ngrx/effects';
      import { map, mergeMap, catchError } from 'rxjs/operators';
      import { of } from 'rxjs';
      
      @Injectable()
      export class UserEffects {
        loadUsers$ = createEffect(() =>
          this.actions$.pipe(
            ofType(loadUsers),
            mergeMap(() => this.userService.getUsers()
              .pipe(
                map(users => loadUsersSuccess({ users })),
                catchError(error => of(loadUsersFailure({ error: error.message })))
              ))
          )
        );
      
        constructor(
          private actions$: Actions,
          private userService: UserService
        ) {}
      }
      
      // 4. Selectors - 選擇狀態
      import { createSelector, createFeatureSelector } from '@ngrx/store';
      
      export const selectUserState = createFeatureSelector<UserState>('users');
      
      export const selectAllUsers = createSelector(
        selectUserState,
        state => state.users
      );
      
      export const selectUsersLoading = createSelector(
        selectUserState,
        state => state.loading
      );
      
      // 5. 在元件中使用
      @Component({
        selector: 'app-user-list',
        template: \`
          <div *ngIf="loading$ | async">載入中...</div>
          <ul *ngIf="users$ | async as users">
            <li *ngFor="let user of users">{{ user.name }}</li>
          </ul>
          <button (click)="loadUsers()">載入用戶</button>
        \`
      })
      export class UserListComponent {
        users$ = this.store.select(selectAllUsers);
        loading$ = this.store.select(selectUsersLoading);
      
        constructor(private store: Store) {}
      
        loadUsers() {
          this.store.dispatch(loadUsers());
        }
      }
      
      // 6. 應用程式配置
      @NgModule({
        imports: [
          StoreModule.forRoot({ users: userReducer }),
          EffectsModule.forRoot([UserEffects])
        ]
      })
      export class AppModule { }
      
      // 7. 實際應用場景 - 購物車
      export const addToCart = createAction(
        '[Cart] Add Item',
        props<{ item: Product }>()
      );
      
      export const removeFromCart = createAction(
        '[Cart] Remove Item',
        props<{ itemId: string }>()
      );
      
      const cartReducer = createReducer(
        { items: [] },
        on(addToCart, (state, { item }) => ({
          ...state,
          items: [...state.items, item]
        })),
        on(removeFromCart, (state, { itemId }) => ({
          ...state,
          items: state.items.filter(item => item.id !== itemId)
        }))
      );`,
        aLang: "javascript"
      },
      {
        question: "什麼是 NgRx Facade 模式？它的作用是什麼？",
        answer: "NgRx Facade 是一種設計模式，用來隱藏 NgRx 的複雜性，為元件提供簡潔的 API。Facade 封裝了 Actions、Selectors 和 Effects，讓元件不需要直接與 Store 互動，提高程式碼的可維護性和可測試性。",
        aCode: `// 傳統方式 - 元件直接與 Store 互動
      @Component({
        selector: 'app-user-list',
        template: \`
          <div *ngIf="loading$ | async">載入中...</div>
          <ul *ngIf="users$ | async as users">
            <li *ngFor="let user of users">{{ user.name }}</li>
          </ul>
          <button (click)="loadUsers()">載入用戶</button>
        \`
      })
      export class UserListComponent {
        users$ = this.store.select(selectAllUsers);
        loading$ = this.store.select(selectUsersLoading);
      
        constructor(private store: Store) {}
      
        loadUsers() {
          this.store.dispatch(loadUsers());
        }
      }
      
      // Facade 模式 - 封裝 Store 邏輯
      @Injectable({ providedIn: 'root' })
      export class UserFacade {
        // 公開 Observable
        users$ = this.store.select(selectAllUsers);
        loading$ = this.store.select(selectUsersLoading);
        error$ = this.store.select(selectUsersError);
      
        constructor(
          private store: Store,
          private userService: UserService
        ) {}
      
        // 公開方法
        loadUsers() {
          this.store.dispatch(loadUsers());
        }
      
        addUser(user: User) {
          this.store.dispatch(addUser({ user }));
        }
      
        deleteUser(userId: string) {
          this.store.dispatch(deleteUser({ userId }));
        }
      
        // 計算屬性
        get activeUsers$() {
          return this.users$.pipe(
            map(users => users.filter(user => user.isActive))
          );
        }
      
        get userCount$() {
          return this.users$.pipe(
            map(users => users.length)
          );
        }
      }
      
      // 使用 Facade 的元件 - 更簡潔
      @Component({
        selector: 'app-user-list',
        template: \`
          <div *ngIf="loading$ | async">載入中...</div>
          <div *ngIf="error$ | async as error" class="error">{{ error }}</div>
          <ul *ngIf="users$ | async as users">
            <li *ngFor="let user of users">{{ user.name }}</li>
          </ul>
          <p>總用戶數: {{ userCount$ | async }}</p>
          <p>活躍用戶: {{ activeUsers$ | async | json }}</p>
          <button (click)="loadUsers()">載入用戶</button>
          <button (click)="addNewUser()">新增用戶</button>
        \`
      })
      export class UserListComponent {
        users$ = this.userFacade.users$;
        loading$ = this.userFacade.loading$;
        error$ = this.userFacade.error$;
        userCount$ = this.userFacade.userCount$;
        activeUsers$ = this.userFacade.activeUsers$;
      
        constructor(private userFacade: UserFacade) {}
      
        loadUsers() {
          this.userFacade.loadUsers();
        }
      
        addNewUser() {
          this.userFacade.addUser({ id: '3', name: '新用戶', isActive: true });
        }
      }
      
      // 更複雜的 Facade 範例 - 購物車
      @Injectable({ providedIn: 'root' })
      export class CartFacade {
        items$ = this.store.select(selectCartItems);
        total$ = this.store.select(selectCartTotal);
        itemCount$ = this.store.select(selectCartItemCount);
      
        constructor(private store: Store) {}
      
        addToCart(product: Product) {
          this.store.dispatch(addToCart({ product }));
        }
      
        removeFromCart(productId: string) {
          this.store.dispatch(removeFromCart({ productId }));
        }
      
        updateQuantity(productId: string, quantity: number) {
          this.store.dispatch(updateQuantity({ productId, quantity }));
        }
      
        clearCart() {
          this.store.dispatch(clearCart());
        }
      
        // 計算屬性
        get hasItems$() {
          return this.itemCount$.pipe(
            map(count => count > 0)
          );
        }
      
        get isCartEmpty$() {
          return this.itemCount$.pipe(
            map(count => count === 0)
          );
        }
      }
      
      // 使用購物車 Facade
      @Component({
        selector: 'app-cart',
        template: \`
          <div *ngIf="hasItems$ | async; else emptyCart">
            <div *ngFor="let item of items$ | async">
              {{ item.name }} - {{ item.price | currency }}
              <button (click)="removeItem(item.id)">移除</button>
            </div>
            <p>總計: {{ total$ | async | currency }}</p>
            <button (click)="clearCart()">清空購物車</button>
          </div>
          <ng-template #emptyCart>
            <p>購物車是空的</p>
          </ng-template>
        \`
      })
      export class CartComponent {
        items$ = this.cartFacade.items$;
        total$ = this.cartFacade.total$;
        hasItems$ = this.cartFacade.hasItems$;
      
        constructor(private cartFacade: CartFacade) {}
      
        removeItem(productId: string) {
          this.cartFacade.removeFromCart(productId);
        }
      
        clearCart() {
          this.cartFacade.clearCart();
        }
      }`,
        aLang: "javascript"
      },
      {
        question: "Angular 從版本 9 到 20 任意列舉一些編寫工具上的重大改變？",
        answer: "(1) Angular 12 移除 View Engine，全面改用 Ivy 編譯器；(2) Angular 14 推出 Standalone Components，不再強制需要 NgModule；(3) Angular 16 引入 Signals 用於狀態管理；(4) Angular 17 推出新的控制流語法 @if/@for，不再需要 CommonModule；(5) Angular 20 引入 Defer Block 延遲載入功能。",
        aCode: `// Angular 14: Standalone Components
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-root'
})

// Angular 16: Signals 狀態管理
count = signal(0);
doubled = computed(() => this.count() * 2);

// Angular 17: 新控制流語法
@if (isLoggedIn()) {
  <user-profile/>
} @else {
  <login-form/>
}

// Angular 20: Defer Block
@defer {
  <heavy-component/>
} @placeholder {
  <loading-spinner/>
}`,
        aLang: "javascript"
      },
      {
        question: "RxJS 中的 Subject、BehaviorSubject、ReplaySubject 有什麼差異？",
        answer: "Subject 是基本的多播 Observable，可以同時向多個訂閱者發送資料。BehaviorSubject 會記住最後一個值並發送給新訂閱者，適合狀態管理。ReplaySubject 會記住指定數量的值，適合需要快取歷史資料的場景。",
        aCode: `// 基本 Subject - 多播 Observable
      const subject = new Subject<string>();
      subject.subscribe(value => console.log('Observer A:', value));
      subject.subscribe(value => console.log('Observer B:', value));
      
      subject.next('Hello');
      // 輸出: Observer A: Hello, Observer B: Hello
      
      // BehaviorSubject - 記住最後一個值，適合狀態管理
      const userSubject = new BehaviorSubject<User | null>(null);
      userSubject.subscribe(user => console.log('Observer A:', user));
      // 新訂閱者立即收到初始值 null
      
      userSubject.next({ id: 1, name: '小明' });
      // 輸出: Observer A: { id: 1, name: '小明' }
      
      userSubject.subscribe(user => console.log('Observer B:', user));
      // 輸出: Observer B: { id: 1, name: '小明' } (新訂閱者收到最後一個值)
      
      // ReplaySubject - 記住指定數量的值，適合快取
      const messageSubject = new ReplaySubject<string>(3); // 記住最後 3 個值
      messageSubject.next('訊息1');
      messageSubject.next('訊息2');
      messageSubject.next('訊息3');
      messageSubject.next('訊息4');
      
      messageSubject.subscribe(msg => console.log('新訂閱者:', msg));
      // 輸出: 新訂閱者: 訊息2, 新訂閱者: 訊息3, 新訂閱者: 訊息4
      
      // 實際應用場景
      // BehaviorSubject - 用戶狀態管理
      class UserService {
        private userSubject = new BehaviorSubject<User | null>(null);
        public user$ = this.userSubject.asObservable();
      
        login(user: User) {
          this.userSubject.next(user);
        }
      
        logout() {
          this.userSubject.next(null);
        }
      }
      
      // ReplaySubject - 聊天訊息快取
      class ChatService {
        private messageSubject = new ReplaySubject<Message>(10); // 記住最後 10 條訊息
        public messages$ = this.messageSubject.asObservable();
      
        sendMessage(message: Message) {
          this.messageSubject.next(message);
        }
      }
      
      // Subject - 事件處理
      class EventService {
        private clickSubject = new Subject<MouseEvent>();
        public click$ = this.clickSubject.asObservable();
      
        handleClick(event: MouseEvent) {
          this.clickSubject.next(event);
        }
      }`,
        aLang: "javascript"
      },
      {
        question: "RxJS 中的 map、filter、switchMap、mergeMap 有什麼差異？",
        answer: `map 會把資料流中的每個值做轉換（像陣列 map），filter 只留下符合條件的值，switchMap 會切換到最新的內部 Observable（常用於搜尋），mergeMap 會同時處理多個內部 Observable（常用於多筆 API）。`,
        aCode: `import { of, fromEvent } from 'rxjs';
import { map, filter, switchMap, mergeMap } from 'rxjs/operators';

// map：每個值都乘 2
of(1, 2, 3).pipe(
  map(x => x * 2)
).subscribe(console.log); // 2, 4, 6

// filter：只留下大於 1 的值
of(1, 2, 3).pipe(
  filter(x => x > 1)
).subscribe(console.log); // 2, 3

// switchMap：只取最新的搜尋結果
fromEvent(inputEl, 'input').pipe(
  switchMap(e => fakeSearch(e.target.value))
).subscribe(console.log);

// mergeMap：同時發多個請求，全部都會回來
of('A', 'B').pipe(
  mergeMap(x => fakeApi(x))
).subscribe(console.log);

// 假設 fakeSearch, fakeApi 都回傳 Observable`,
        aLang: "javascript"
      },
      {
        question: "RxJS 中的 combineLatest 是什麼？它的使用場景？",
        answer: "combineLatest 會等待所有 Observable 都發出至少一個值後，才開始發出組合後的值。每當任何一個 Observable 發出新值時，都會重新組合所有 Observable 的最新值。適用於需要同時監聽多個資料來源的場景，但要注意初始值問題和記憶體洩漏。",
        aCode: `// 基本用法 - 組合兩個 Observable
      const user$ = new BehaviorSubject<User>({ id: 1, name: '小明' });
      const settings$ = new BehaviorSubject<Settings>({ theme: 'dark', language: 'zh' });
      
      combineLatest([user$, settings$]).pipe(
        map(([user, settings]) => ({
          user,
          settings
        }))
      ).subscribe(data => {
        console.log('組合資料:', data);
        // 輸出: { user: { id: 1, name: '小明' }, settings: { theme: 'dark', language: 'zh' } }
      });
      
      // 實際應用 - 購物車和用戶資訊
      class CartComponent {
        cart$ = this.cartService.getCart();
        user$ = this.userService.getCurrentUser();
        products$ = this.productService.getProducts();
      
        // 組合購物車、用戶和產品資訊
        cartWithUser$ = combineLatest([this.cart$, this.user$, this.products$]).pipe(
          map(([cart, user, products]) => ({
            cart,
            user,
            products,
            canCheckout: user.isLoggedIn && cart.items.length > 0
          }))
        );
      
        constructor(
          private cartService: CartService,
          private userService: UserService,
          private productService: ProductService
        ) {}
      }
      
      // 表單驗證 - 組合多個輸入欄位
      @Component({
        template: \`
          <form>
            <input [(ngModel)]="email" placeholder="Email">
            <input [(ngModel)]="password" type="password" placeholder="Password">
            <input [(ngModel)]="confirmPassword" type="password" placeholder="Confirm Password">
            <button [disabled]="!(isFormValid$ | async)">註冊</button>
          </form>
        \`
      })
      export class RegistrationComponent {
        email = '';
        password = '';
        confirmPassword = '';
      
        // 組合表單驗證
        isFormValid$ = combineLatest([
          fromEvent(this.emailInput.nativeElement, 'input').pipe(
            map(event => event.target.value),
            map(email => this.isValidEmail(email))
          ),
          fromEvent(this.passwordInput.nativeElement, 'input').pipe(
            map(event => event.target.value),
            map(password => password.length >= 6)
          ),
          fromEvent(this.confirmPasswordInput.nativeElement, 'input').pipe(
            map(event => event.target.value),
            map(confirmPassword => confirmPassword === this.password)
          )
        ]).pipe(
          map(([isEmailValid, isPasswordValid, isConfirmValid]) => 
            isEmailValid && isPasswordValid && isConfirmValid
          )
        );
      }
      
      // 注意事項 1: 初始值問題
      // ❌ 錯誤做法 - 可能不會觸發
      const user$ = this.userService.getUser(); // 可能還沒有值
      const settings$ = this.settingsService.getSettings(); // 可能還沒有值
      
      combineLatest([user$, settings$]).subscribe(([user, settings]) => {
        // 可能永遠不會執行，因為某個 Observable 還沒有發出值
      });
      
      // ✅ 正確做法 - 使用 BehaviorSubject 或 startWith
      const user$ = this.userService.getUser().pipe(
        startWith(null)
      );
      const settings$ = this.settingsService.getSettings().pipe(
        startWith({ theme: 'light', language: 'en' })
      );
      
      combineLatest([user$, settings$]).subscribe(([user, settings]) => {
        // 會立即執行，因為有初始值
      });
      
      // 注意事項 2: 記憶體洩漏
      @Component({
        template: \`
          <div *ngIf="data$ | async as data">
            {{ data | json }}
          </div>
        \`
      })
      export class DataComponent implements OnInit, OnDestroy {
        private destroy$ = new Subject<void>();
        
        data$ = combineLatest([
          this.userService.getUser(),
          this.settingsService.getSettings()
        ]).pipe(
          takeUntil(this.destroy$) // 防止記憶體洩漏
        );
      
        ngOnInit() {
          // 初始化
        }
      
        ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }
      
      // 實際應用 - 即時搜尋和篩選
      class ProductSearchComponent {
        searchTerm$ = new BehaviorSubject<string>('');
        category$ = new BehaviorSubject<string>('all');
        priceRange$ = new BehaviorSubject<{min: number, max: number}>({min: 0, max: 1000});
      
        // 組合搜尋條件
        filteredProducts$ = combineLatest([
          this.searchTerm$,
          this.category$,
          this.priceRange$
        ]).pipe(
          debounceTime(300), // 防抖
          switchMap(([searchTerm, category, priceRange]) => 
            this.productService.searchProducts({
              searchTerm,
              category,
              priceRange
            })
          )
        );
      
        updateSearch(term: string) {
          this.searchTerm$.next(term);
        }
      
        updateCategory(category: string) {
          this.category$.next(category);
        }
      
        updatePriceRange(range: {min: number, max: number}) {
          this.priceRange$.next(range);
        }
      }
      
      // 進階用法 - 條件組合
      class DashboardComponent {
        // 根據用戶權限顯示不同內容
        dashboardData$ = combineLatest([
          this.userService.getCurrentUser(),
          this.permissionService.getPermissions()
        ]).pipe(
          switchMap(([user, permissions]) => {
            if (permissions.canViewAdmin) {
              return combineLatest([
                this.adminService.getAdminData(),
                this.userService.getAllUsers()
              ]).pipe(
                map(([adminData, users]) => ({ adminData, users, type: 'admin' }))
              );
            } else {
              return this.userService.getUserData(user.id).pipe(
                map(userData => ({ userData, type: 'user' }))
              );
            }
          })
        );
      }`,
        aLang: "javascript"
      },
      {
        question: "RxJS 中的 takeUntil 是什麼？它和 unsubscribe 有什麼不同？",
        answer: `takeUntil 是 RxJS 的一個操作符，用來自動管理訂閱的生命週期。當指定的 Observable（通常是 Subject）發出值時，takeUntil 會自動取消訂閱。unsubscribe 則是手動取消訂閱的方法。兩者都能終止資料流，但 takeUntil 更適合用於元件銷毀、路由切換等自動化場景，能有效避免記憶體洩漏。`,
        aCode: `// 1. 使用 takeUntil 自動取消訂閱（推薦）
      @Component({
        selector: 'app-demo',
        template: '<div>{{ data }}</div>'
      })
      export class DemoComponent implements OnInit, OnDestroy {
        data: string;
        private destroy$ = new Subject<void>();
      
        ngOnInit() {
          interval(1000).pipe(
            takeUntil(this.destroy$)
          ).subscribe(val => {
            this.data = '計時器：' + val;
          });
        }
      
        ngOnDestroy() {
          // 發出值，自動取消所有 takeUntil(this.destroy$) 的訂閱
          this.destroy$.next();
          this.destroy$.complete();
        }
      }
      
      // 2. 使用 unsubscribe 手動取消訂閱
      @Component({
        selector: 'app-demo2',
        template: '<div>{{ data }}</div>'
      })
      export class Demo2Component implements OnInit, OnDestroy {
        data: string;
        private sub: Subscription;
      
        ngOnInit() {
          this.sub = interval(1000).subscribe(val => {
            this.data = '計時器：' + val;
          });
        }
      
        ngOnDestroy() {
          // 需要手動呼叫 unsubscribe
          this.sub.unsubscribe();
        }
      }
      
      /*
      差異說明：
      - takeUntil 適合多個訂閱共用同一個銷毀訊號，程式碼更簡潔，容易維護。
      - unsubscribe 需手動管理每一個 Subscription，若遺漏會造成記憶體洩漏。
      - 在 Angular、React 等框架中，建議用 takeUntil 結合 Subject 處理元件銷毀時的自動取消訂閱。
      */`
      }
    ]
  }
];

// 處理 HTML 字元轉義
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 隨機抽取題目
function getRandomQuestions(questions, count) {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, questions.length));
}

// 渲染隨機題目卡片
function renderRandomQuestionCards() {
  const container = document.getElementById('questionCards');
  container.innerHTML = ''; // 清空現有內容

  interviewQuestions.forEach((category, index) => {
    const randomQuestions = getRandomQuestions(category.questions, 5);
    const categoryCard = document.createElement('div');
    categoryCard.className = 'col';
    categoryCard.innerHTML = `
      <div class="card h-100">
        <div class="card-header" style="--category-bg: ${category.bgColor}">
          ${escapeHtml(category.category)} (隨機 ${randomQuestions.length} 題)
        </div>
        <div class="card-body">
          <div class="accordion" id="accordion${index}">
            ${renderQuestions(randomQuestions, index)}
          </div>
        </div>
      </div>
    `;
    container.appendChild(categoryCard);
  });

  // 重新初始化 Prism
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
}

// 初始化應用
function initializeApp() {
  renderQuestionCards();

  // 添加隨機抽題按鈕事件監聽
  const randomizeBtn = document.getElementById('randomizeBtn');
  randomizeBtn.addEventListener('click', renderRandomQuestionCards);
}

// 渲染問題卡片
function renderQuestionCards() {
  const container = document.getElementById('questionCards');
  interviewQuestions.forEach((category, index) => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'col';
    categoryCard.innerHTML = `
            <div class="card h-100">
                <div class="card-header" style="--category-bg: ${category.bgColor}">
                    ${escapeHtml(category.category)}
                </div>
                <div class="card-body">
                    <div class="accordion" id="accordion${index}">
                        ${renderQuestions(category.questions, index)}
                    </div>
                </div>
            </div>
        `;
    container.appendChild(categoryCard);
  });
  // 重新初始化 Prism
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
}

// 渲染問題列表
function renderQuestions(questions, categoryIndex) {
  return questions.map((q, index) => {
    const questionId = `question-${categoryIndex}-${index}`;
    const headingId = `heading-${questionId}`;
    const collapseId = `collapse-${questionId}`;

    return `
            <div class="accordion-item">
                <h2 class="accordion-header accordion-button collapsed" id="${headingId}" data-bs-toggle="collapse" data-bs-toggle="collapse" data-bs-target="#${collapseId}">
                  <div>
                  <span>${escapeHtml(q.question)}</span>
                  ${q.qCode ? `<pre><code class="language-${q.qLang || 'javascript'}">${escapeHtml(q.qCode)}</code></pre>` : ''}
                  </div>
                </h2>
                <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#accordion${categoryIndex}">
                    <div class="accordion-body">
                        <span class="answer-content">${escapeHtml(q.answer)}</span>
                        ${q.aCode ? `<pre><code class="language-${q.aLang || 'javascript'}">${escapeHtml(q.aCode)}</code></pre>` : ''}
                    </div>
                </div>
            </div>
        `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', function () {
  initializeApp();

  const themeSwitch = document.getElementById('themeToggleSwitch');
  if (themeSwitch) {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
      themeSwitch.checked = true;
    }
    themeSwitch.addEventListener('change', function () {
      if (themeSwitch.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    });
  }
}); 