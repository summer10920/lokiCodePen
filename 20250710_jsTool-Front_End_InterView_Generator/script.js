// 面試題目資料
const interviewQuestions = [
  {
    category: "HTML/CSS 基礎",
    bgColor: "#007bff",
    questions: [
      {
        question: "HTML 中 <section> 與 <div> 有什麼差異？",
        answer: "section 有語意，適合用來表示網頁中的一個區塊主題；div 無語意，純粹為排版用途。",
        code: `<!-- 適合使用 section 的情況 -->
<section class="news-content">
  <h2>最新消息</h2>
  <article>新聞內容...</article>
</section>

<!-- 適合使用 div 的情況 -->
<div class="layout-container">
  <div class="left-column">...</div>
  <div class="right-column">...</div>
</div>`,
        language: "markup"
      },
      {
        question: "什麼是 Flexbox？常見屬性有哪些？",
        answer: "Flexbox 是用來建立一維排版的 CSS 模型，常見屬性包含：水平分布、垂直置中、自動換行等功能。",
        code: `.container {
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
        language: "css"
      },
      {
        question: "如何設定響應式圖片？例 w600 圖片在瀏覽器尺寸 w300 上畫面，等比例最佳顯示不超出畫面",
        answer: "響應式圖片可以通過多種方式實現，包括使用 max-width、srcset 屬性或 picture 元素等方式。",
        code: `<!-- 基本響應式 -->
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
        language: "markup"
      },
      {
        question: "z-index 為何無效？",
        answer: "z-index 必須配合 position 屬性才能生效，且只在同一個堆疊上下文中比較。",
        code: `/* ❌ z-index 無效 */
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
        language: "css"
      },
      {
        question: "CSS Grid 和 Flexbox 的使用場景有何不同？",
        answer: "Grid 適合二維佈局（行列），Flexbox 適合一維佈局（單行或單列）。Grid 適合整體頁面佈局，Flexbox 適合元件內部排列。",
        code: `/* Grid 佈局範例 */
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
        language: "css"
      },
      {
        question: "transition 和 animation 兩者有何不同？",
        answer: "transition 用於狀態變化的漸變效果，animation 用於定義關鍵幀動畫。transition 較簡單但只能定義起始和結束狀態，animation 可以定義多個關鍵幀。",
        code: `/* Transition 範例 */
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
        language: "css"
      },
      {
        question: "CSS 權重（Specificity）是如何計算的？",
        answer: "CSS 權重由四個等級組成：行內樣式(1000) > ID(100) > 類別/屬性/偽類(10) > 元素/偽元素(1)。!important 會覆蓋所有其他樣式。",
        code: `/* 權重: 1 */
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
        language: "css"
      },
      {
        question: "解釋 BEM 命名規範",
        answer: "BEM 是 Block-Element-Modifier 的縮寫，用於 CSS 類別命名。Block 是獨立實體，Element 是 Block 的一部分，Modifier 是 Block 或 Element 的變體。",
        code: `<!-- BEM 命名範例 -->
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
        language: "markup"
      },
      {
        question: "CSS 中的偽類（Pseudo-classes）和偽元素（Pseudo-elements）有什麼區別？",
        answer: "偽類用於定義元素的特殊狀態（如 :hover、:first-child），使用單冒號；偽元素用於創建不在文檔樹中的元素（如 ::before、::after），使用雙冒號。",
        code: `/* 偽類示例 */
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
        language: "css"
      },
      {
        question: "CSS 預處理器（如 Sass）的主要功能有哪些？",
        answer: "CSS 預處理器提供變數、巢狀語法、混入（mixin）、函數、繼承等功能，幫助更好地組織和維護 CSS 程式碼。",
        code: `// SCSS 語法範例
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
        language: "css"
      },
      {
        question: "RWD 響應式網頁設計的實作原理是什麼？透過哪些 CSS 技術實現？",
        answer: "RWD 透過 CSS Media Queries、相對單位、Flexbox/Grid 佈局、響應式圖片等技術實現。核心原理是根據螢幕尺寸動態調整佈局和樣式，確保在不同設備上都有良好的使用者體驗。",
        code: `/* 1. Media Queries - 根據螢幕尺寸調整樣式 */
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
        language: "css"
      },
    ]
  },
  {
    category: "JavaScript 基礎",
    bgColor: "#28a745",
    questions: [
      {
        question: "JavaScript 中 == 與 === 有何不同？",
        answer: "== 會進行類型轉換後比較，=== 則是嚴格比較，不會進行類型轉換。",
        code: `// == 會進行類型轉換
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
        language: "javascript"
      },
      {
        question: "解釋 DOM 事件的傳遞機制（Event Propagation）",
        answer: "DOM 事件傳遞分為三個階段：捕獲（Capturing）、目標（Target）和冒泡（Bubbling）。事件先從根節點向下捕獲到目標元素，然後再向上冒泡。可以使用 stopPropagation() 阻止傳遞，preventDefault() 阻止默認行為。",
        code: `// 1. 事件傳遞的三個階段
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
        language: "javascript"
      },
      {
        question: "什麼是閉包（closure）？",
        answer: "閉包是一個函式能夠存取其外層作用域變數的特性，常用於建立私有變數和資料封裝。",
        code: `function createCounter() {
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
        language: "javascript"
      },
      {
        question: "為什麼 0.1 + 0.2 !== 0.3？如何解決這個問題？",
        answer: "由於 JavaScript 使用 IEEE 754 雙精度浮點數標準， 0.1、0.2、0.3 在二進位中都是無限循環小數。將這些二進位數轉換為十進位時會產生捨入誤差，導致 0.1 + 0.2 的結果不等於精確的 0.3。使用 toFixed()、Math.round() 或乘以 10 的冪次來解決。",
        code: `// 二進位轉十進位的精度問題
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
        language: "javascript"
      },
      {
        question: "Promise 和 async/await 的使用場景和差異",
        answer: "Promise 用於處理非同步操作，提供鏈式調用；async/await 是基於 Promise 的語法糖，讓非同步程式碼更像同步程式碼，更容易理解和維護。",
        code: `// Promise 方式
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
        language: "javascript"
      },
      {
        question: "為什麼在 JavaScript 中使用解構（Destructuring）來處理物件和陣列？",
        answer: "解構可以安全地複製資料而不修改原始資料，避免意外的記憶體污染。這在處理不可變性（Immutability）時特別有用，能確保函數的純粹性和可預測性。",
        code: `// ❌ 直接修改原始資料
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
        language: "javascript"
      },
      {
        question: "解釋 JavaScript 中的 this 關鍵字",
        answer: "this 代表『目前執行環境下的物件』，它的值取決於函數是如何被呼叫。一般函數中，this 代表全域物件（非嚴格模式下為 window，嚴格模式下為 undefined）；物件方法中，this 代表該物件本身；箭頭函數的 this 取決於外層作用域，不會被呼叫方式改變。",
        code: `// 1. 全域函數
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
        code: `// ❌ 傳統的防錯方式：醜陋且冗長
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
        language: "javascript"
      },
      {
        question: "在陣列中提取特定 Value 時，filter() 和 find() 的效能差異是什麼？",
        answer: "find() 找到符合條件的 Value 就會立即返回並停止迴圈，而 filter() 會遍歷整個陣列。當只需要找到一個符合的 Value 時，使用 find() 效能較佳。",
        code: `const users = [
  { id: 1, name: "小明", age: 20 },
  { id: 2, name: "小華", age: 25 },
  { id: 3, name: "小李", age: 30 }
];

// filter() 會遍歷整個陣列（3次迴圈）
const userFilter = users.filter(user => user.id === 1)[0];

// find() 找到後立即返回（1次迴圈就停止）
const userFind = users.find(user => user.id === 1);`,
        language: "javascript"
      },
      {
        question: "驗證陣列中是否存在特定 Value 的方法，some() 和 find() 有什麼區別？",
        answer: "some() 只返回 true/false，找到符合條件就停止；find() 返回 Value 本身，適合需要使用該 Value 的場景。兩者都是找到後立即返回，但 some() 的記憶體使用較少。",
        code: `// some(): 只需知道是否存在
const hasAdmin = users.some(u => u.role === 'admin');

// find(): 需要使用該元素
const admin = users.find(u => u.role === 'admin');
if (admin) {
  console.log(admin.name);
}`,
        language: "javascript"
      },
      {
        question: "如何使用原生 JavaScript 深層複製（Deep Clone）一個含巢狀結構的純資料物件？",
        answer: "原生 JavaScript 可以使用 JSON.parse/stringify、遞迴函數或 structuredClone API 來實現深層複製。每種方法都有其適用場景和限制，需要根據資料類型選擇合適的方法。",
        code: `// 巢狀物件範例
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
        language: "javascript"
      },
    ]
  },
  {
    category: "通用框架觀念",
    bgColor: "#6f42c1",
    questions: [
      {
        question: "什麼是 SPA（Single Page Application）？它的優缺點是什麼？",
        answer: "SPA 是只需載入單一頁面的應用程式，透過 JavaScript 動態更新內容。優點包含使用者體驗佳、前後端分離；缺點包含首次載入較慢、SEO 較難處理。",
        code: `// React Router 範例
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
        language: "markup"
      },
      {
        question: "解釋 MVVM（Model-View-ViewModel）架構模式",
        answer: "MVVM 是一種架構模式，Model 處理資料邏輯，View 負責畫面呈現，ViewModel 作為中介者處理資料綁定和狀態管理。Vue 是典型的 MVVM 框架，Angular 也高度符合 MVVM 架構，但同時融合了更多現代設計模式。",
        code: `// Vue.js MVVM 範例
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
        language: "javascript"
      },
      {
        question: "什麼是狀態管理（State Management）？為什麼需要它？",
        answer: "狀態管理用於處理應用程式的資料狀態，集中管理和共享資料。當應用程式變大時，可以避免 prop drilling 問題，並使資料流更容易追蹤和維護。",
        code: `// Redux 範例
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
        language: "javascript"
      },
      {
        question: "解釋元件生命週期（Component Lifecycle）的概念",
        answer: "元件生命週期是框架中元件從建立到銷毀的整個過程，包含掛載、更新和卸載等階段。不同框架有不同的生命週期鉤子。",
        code: `// React 生命週期
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
        language: "javascript"
      },
      {
        question: "什麼是響應式程式設計（Reactive Programming）？",
        answer: "響應式程式設計是一種基於資料流和變化傳遞的程式設計範式。當資料改變時，相依於該資料的程式碼會自動執行，實現資料和 UI 的同步。",
        code: `// RxJS 範例
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
        language: "javascript"
      },
      {
        question: "什麼是 Virtual DOM？它如何提升效能？",
        answer: "Virtual DOM 是真實 DOM 的 JavaScript 表示，框架通過比較新舊 Virtual DOM 的差異，最小化真實 DOM 操作，從而提升效能。",
        code: `// 簡化的 Virtual DOM 實現
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
        language: "javascript"
      },
      {
        question: "解釋 SSR（Server-Side Rendering）和 CSR（Client-Side Rendering）的差異",
        answer: "SSR 在伺服器端生成完整 HTML，有利於 SEO 和首次載入速度；CSR 在客戶端動態生成內容，適合互動性強的應用。現代框架常常結合兩者優點。",
        code: `// Next.js SSR 範例
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
        language: "javascript"
      },
      {
        question: "前端效能優化的常見策略有哪些？",
        answer: "前端效能優化包含：程式碼分割、懶加載、快取策略、圖片優化、減少 HTTP 請求、使用 CDN、壓縮資源等多個面向。",
        code: `// React 程式碼分割
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
        language: "javascript"
      },
      {
        question: "什麼是前端路由（Frontend Routing）？它的主要用途和特色是什麼？",
        answer: "前端路由是一種在單頁應用（SPA）中管理不同頁面或視圖的技術，無需重新載入整個頁面。主要用途包括：實現單頁應用的多頁面體驗、管理應用狀態、改善使用者體驗。特色包含：無需伺服器請求、更快的頁面切換、保持應用狀態、支援瀏覽器前進後退功能。",
        code: `// SPA 路由的兩種主要方式
      
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
        language: "javascript"
      },
      {
        question: "請解釋 Bootstrap 與 Tailwind CSS 的差異性？各自的優缺點為何？",
        answer: "Bootstrap 是一套預設設計風格的 UI 元件框架，提供大量現成的元件和響應式排版。Tailwind CSS 則是原子化（utility-first）的 CSS 框架，強調用 class 組合快速客製化設計。Bootstrap 上手快、開發速度快，但客製化彈性較低。Tailwind 彈性高、可完全自訂設計，但初學者需適應大量 class 組合，且專案初期較無 UI 樣式。",
        code: `// Bootstrap 範例：直接使用元件 class
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
        code: `// 不乾淨的 React 元件（過大、命名不明、重複邏輯）
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
        code: `import { Component, OnInit } from '@angular/core';

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
        language: "javascript"
      },
      {
        question: "解釋 Angular 中的服務（Service）和依賴注入（DI）",
        answer: "服務是用於共享資料和邏輯的可重用類別，依賴注入則是 Angular 的核心特性，用於管理組件和服務之間的依賴關係。",
        code: `// 定義服務
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

// 在組件中使用服務
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
        language: "javascript"
      },
      {
        question: "什麼是 Angular 中的變更檢測（Change Detection）？",
        answer: "變更檢測是 Angular 用來同步模型和視圖的機制，當應用程式資料改變時，Angular 會自動更新對應的 DOM。",
        code: `import { Component, ChangeDetectionStrategy } from '@angular/core';

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
        language: "javascript"
      },
      {
        question: "Angular 中的指令（Directive）有哪些類型？",
        answer: "Angular 指令分為三種：元件指令（@Component）、結構指令（*ngIf、*ngFor）和屬性指令（[ngStyle]、[ngClass]）。每種指令都有其特定用途。",
        code: `// 結構指令範例
@Component({
  template: \`
    <div *ngIf="isLoggedIn">
      Welcome back!
    </div>
    <ul>
      <li *ngFor="let item of items; let i = index">
        {{i}}: {{item.name}}
      </li>
    </ul>
  \`
})

// 自定義屬性指令
@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}`,
        language: "javascript"
      },
      {
        question: "Angular 中的管道（Pipe）是什麼？",
        answer: "管道用於轉換顯示值，Angular 提供了許多內建管道如 date、currency 等。也可以通過 @Pipe 裝飾器創建自定義管道。",
        code: `// 內建管道使用
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
        language: "javascript"
      },
      {
        question: "Angular 中的路由守衛（Route Guards）有什麼用途？",
        answer: "路由守衛用於控制路由的訪問權限，包括 CanActivate（訪問權限）、CanDeactivate（離開確認）、Resolve（預加載數據）等。",
        code: `// 認證守衛
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login'], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
}

// 離開確認守衛
@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<FormComponent> {
  canDeactivate(component: FormComponent): boolean {
    if (component.form.dirty) {
      return confirm('您有未保存的更改，確定要離開嗎？');
    }
    return true;
  }
}

// 路由配置
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canDeactivate: [UnsavedChangesGuard]
  }
];`,
        language: "javascript"
      },
      {
        question: "Angular 中的表單處理方式有哪些？",
        answer: "Angular 提供兩種表單處理方式：模板驅動表單（Template-driven forms）和響應式表單（Reactive forms）。響應式表單提供更好的型別安全和測試能力。",
        code: `// 響應式表單
@Component({
  template: \`
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div>
        <input formControlName="email" type="email">
        <div *ngIf="email.invalid && email.touched">
          <span *ngIf="email.errors?.required">
            Email is required
          </span>
          <span *ngIf="email.errors?.email">
            Invalid email format
          </span>
        </div>
      </div>
      <button type="submit" [disabled]="userForm.invalid">
        Submit
      </button>
    </form>
  \`
})
export class UserFormComponent {
  userForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder) {}

  get email() {
    return this.userForm.get('email');
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}`,
        language: "javascript"
      },
      {
        question: "Angular 中的模組（NgModule）是什麼？如何組織模組？",
        answer: "NgModule 是 Angular 的基本構建塊，用於組織相關的組件、指令、管道等。好的模組組織可以提高代碼的可維護性和可重用性。",
        code: `// 特性模組
@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }

// 共享模組
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }

// 根模組
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    SharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }`,
        language: "javascript"
      },
      {
        question: "Angular 中的 HTTP 攔截器（Interceptor）是什麼？",
        answer: "HTTP 攔截器用於攔截和修改 HTTP 請求/響應，常用於添加認證標頭、處理錯誤、顯示加載狀態等。",
        code: `@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // 添加認證標頭
    const authReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        \`Bearer \${this.authService.getToken()}\`
      )
    });

    return next.handle(authReq).pipe(
      catchError(error => {
        if (error.status === 401) {
          this.authService.logout();
        }
        return throwError(error);
      })
    );
  }
}

// 註冊攔截器
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})`,
        language: "javascript"
      },
      {
        question: "Angular 中的狀態管理方案有哪些？",
        answer: "Angular 提供多種狀態管理方案，包括服務+RxJS、NgRx（Redux 模式）、NGXS 等。選擇合適的方案取決於應用的複雜度。",
        code: `// 使用 RxJS 的狀態管理
@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state = new BehaviorSubject<AppState>(initialState);
  
  select<T>(selector: (state: AppState) => T): Observable<T> {
    return this.state.pipe(
      map(selector),
      distinctUntilChanged()
    );
  }

  dispatch(action: Action) {
    const currentState = this.state.value;
    const newState = reducer(currentState, action);
    this.state.next(newState);
  }
}

// NgRx 狀態管理
// actions.ts
export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

// reducer.ts
export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users
  }))
);

// effects.ts
@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() => this.userService.getUsers()
        .pipe(
          map(users => loadUsersSuccess({ users }))
        ))
    )
  );
}`,
        language: "javascript"
      },
      {
        question: "Angular 中的效能優化技巧有哪些？",
        answer: "Angular 效能優化包括使用 OnPush 變更檢測策略、追蹤函數、延遲加載、預加載、AOT 編譯等多個方面。",
        code: `// OnPush 策略
@Component({
  selector: 'app-item',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input() item: Item;
}

// 追蹤函數
@Component({
  template: \`
    <div *ngFor="let item of items; trackBy: trackByFn">
      {{item.name}}
    </div>
  \`
})
export class ListComponent {
  trackByFn(index: number, item: any): number {
    return item.id;
  }
}

// 延遲加載模組
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => 
      import('./admin/admin.module').then(m => m.AdminModule)
  }
];

// 預加載策略
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ]
})`,
        language: "javascript"
      },
      {
        question: "Angular 中的單元測試如何進行？",
        answer: "Angular 使用 Jasmine 框架和 Karma 測試運行器進行單元測試。測試內容包括組件、服務、管道等各個部分。",
        code: `// 組件測試
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UserService', ['getUsers']);
    
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: UserService, useValue: spy }
      ]
    }).compileComponents();

    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users', (done) => {
    const testUsers = [
      { id: 1, name: 'Test User' }
    ];
    
    userService.getUsers.and.returnValue(of(testUsers));

    component.ngOnInit();
    
    fixture.detectChanges();
    
    expect(component.users).toEqual(testUsers);
    done();
  });
});

// 服務測試
describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AuthService ]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should authenticate user', () => {
    const testCredentials = {
      email: 'test@example.com',
      password: 'password'
    };

    service.login(testCredentials).subscribe(response => {
      expect(response.token).toBeTruthy();
    });

    const req = httpMock.expectOne('/api/login');
    expect(req.request.method).toBe('POST');
    req.flush({ token: 'fake-jwt-token' });
  });
});`,
        language: "javascript"
      },
      {
        question: "Angular 從版本 9 到 20 任意列舉一些編寫工具上的重大改變？",
        answer: "(1) Angular 12 移除 View Engine，全面改用 Ivy 編譯器；(2) Angular 14 推出 Standalone Components，不再強制需要 NgModule；(3) Angular 16 引入 Signals 用於狀態管理；(4) Angular 17 推出新的控制流語法 @if/@for，不再需要 CommonModule；(5) Angular 20 引入 Defer Block 延遲載入功能。",
        code: `// Angular 14: Standalone Components
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
        language: "javascript"
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
                <h2 class="accordion-header" id="${headingId}">
                    <button class="accordion-button collapsed" type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#${collapseId}">
                        ${escapeHtml(q.question)}
                    </button>
                </h2>
                <div id="${collapseId}" 
                     class="accordion-collapse collapse" 
                     data-bs-parent="#accordion${categoryIndex}">
                    <div class="accordion-body">
                        <div class="answer-content">
                            ${escapeHtml(q.answer)}
                        </div>
                        ${q.code ? `<pre><code class="language-${q.language || 'javascript'}">${escapeHtml(q.code)}</code></pre>` : ''}
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