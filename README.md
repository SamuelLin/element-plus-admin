# element-plus-test

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 命名規範

### 專案檔案命名

#### 目錄名

有複數結構時，要採用複數命名法。例：docs、assets、components、directives、mixins、utils、views

#### 圖片檔名

全部採用小寫方式， 優先選擇單個單詞命名，多個單詞命名以 `_` 分隔

`banner_test.jpg`

#### HTML檔名

全部採用小寫方式， 優先選擇單個單詞命名，多個單詞命名以 `_` 分隔。

`success_report.html`

#### css檔名

全部採用小寫方式，優先選擇單個單詞命名，多個單詞命名以 `-` 分隔

`normalize.scss`
`input-number.scss`

#### js檔名

全部採用小寫方式，優先選擇單個單詞命名，多個單詞命名以 `-` 分隔

`index.js`
`date-util.js`

### vue component 命名

#### vue sfc 命名

單檔案元件名應該始終是 單詞大寫開頭 (PascalCase)

```text
components/
|- MyComponent.vue
```

#### 單例 component 命名

以 `The` 字首命名，以示其唯一性

```text
components/
|- TheHeading.vue
|- TheSidebar.vue
```

#### 基礎 component 命名

基礎元件：不包含業務，獨立、具體功能的基礎元件，比如 日期選擇器 、 模態框 等。這類元件作為專案的基礎控制元件，會被大量使用，因此元件的 API 進行過高強度的抽象，可以通過不同配置實現不同的功能。

應用特定樣式和約定的基礎元件(也就是展示類的、無邏輯的或無狀態、不摻雜業務邏輯的元件) 應該全部以一個特定的字首開頭 —— Base。 基礎元件在一個頁面內可使用多次，在不同頁面內也可複用，是高可複用元件

```text
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
```

#### 業務 component

業務元件：它不像基礎元件只包含某個功能，而是在業務中被多個頁面複用的（具有可複用性），它與基礎元件的區別是，業務元件只在當前專案中會用到，不具有通用性，而且會包含一些業務，比如資料請求；而基礎元件不含業務，在任何專案中都可以使用，功能單一，比如一個具有資料校驗功能的輸入框。

摻雜了複雜業務的元件（擁有自身 data 、 prop 的相關處理）即業務元件 應該以 Custom 字首命名。業務元件在一個頁面內比如：某個頁面內有一個卡片列表，而樣式和邏輯跟業務緊密相關的卡片就是業務元件

```text
components/
|- CustomCard.vue
```

#### 緊密耦合的 component 名

和父元件緊密耦合的子元件應該以父元件名作為字首命名。因為編輯器通常會按字母順序組織檔案，所以這樣做可以把相關聯的檔案排在一起。

```text
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```

#### component 名中單詞順序

元件名應該以高級別的 (通常是一般化描述的) 單詞開頭，以描述性的修飾詞結尾。因為編輯器通常會按字母順序組織檔案，所以現在元件之間的重要關係一目瞭然。如下元件主要是用於搜尋和設定功能。

```text
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

#### 完整的單字

元件名應該傾向於而不是縮寫。

```text
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

### 程式碼變數命名

#### component 名稱

元件名應該始終是多個單詞，應該始終是 PascalCase 的。根元件 App 以及 `<transition>` 、 `<component>` 之類的 Vue 內建元件除外。這樣做可以避免跟現有的以及未來的 HTML 元素相沖突，因為所有的 HTML 元素名稱都是單個單詞的。

```javascript
export default {
  name: 'ToDoList',
  // ...
}
```

#### prop

在宣告 prop 的時候，其命名應該始終使用 camelCase，而在模板和 JSX 中應該始終使用 kebab-case。我們單純的遵循每個語言的約定，在 JavaScript 中更自然的是 camelCase。而在 HTML 中則是 kebab-case。

```html
<WelcomeMessage greeting-text="hi"/>
```

```javascript
export default {
  name: 'MyComponent',
  // ...
  props: {
    greetingText: {
      type: String,
      required: true,
      validator: function (value) {
        return ['syncing', 'synced',].indexOf(value) !== -1
      }
    }
  }
}
```

#### router

命名採用 kebab-case 格式

```javascript
{
  path: '/user-info', // 能解析成 user info
  name: 'UserInfo',
  component: UserInfo,
  meta: {
    title: ' - 使用者',
    desc: ''
  }
},
```

#### 模板中元件

對於絕大多數專案來說，在單檔案元件和字串模板中元件名應該總是 PascalCase 的，但是在 DOM 模板中總是 kebab-case 的。

```html
<!-- 在單檔案元件和字串模板中 --> 
<MyComponent/>

<!-- 在 DOM 模板中 --> 
<my-component></my-component>
```

#### 自閉合元件

在單檔案元件、字串模板和 JSX 中沒有內容的元件應該是自閉合的——但在 DOM 模板裡永遠不要這樣做。

```html
<!-- 在單檔案元件和字串模板中 -->
<MyComponent/>

<!-- 在所有地方 -->
<my-component></my-component>
```

#### 變數

命名方法：camelCase
命名規範：型別 + 物件描述或屬性的方式

```javascript
// bad
var getTitle = "LoginTable"

// good
let tableTitle = "LoginTable"
let mySchool = "我的學校"
```

#### 常量

命名方法：全部大寫下劃線分割
命名規範：使用大寫字母和下劃線來組合命名，下劃線用以分割單詞

```javascript
const MAX_COUNT = 10
const URL = 'http://test.host.com'
```

#### 方法

命名方法：camelCase
命名規範：統一使用動詞或者動詞 + 名詞形式

```text
// 1、普通情況下，使用動詞 + 名詞形式
// bad
go、nextPage、show、open、login

// good
jumpPage、openCarInfoDialog

// 2、請求資料方法，以 data 結尾
// bad
takeData、confirmData、getList、postForm

// good
getListData、postFormData

// 3、單個動詞的情況
init、refresh
```

#### 自定義事件

自定義事件應始終使用 kebab-case 的事件名。
不同於元件和 prop，事件名不存在任何自動化的大小寫轉換。而是觸發的事件名需要完全匹配監聽這個事件所用的名稱。

```javascript
this.$emit('my-event')
```

```html
<MyComponent @my-event="handleDoSomething" />
```

不同於元件和 prop，事件名不會被用作一個 JavaScript 變數名或 property 名，所以就沒有理由使用 camelCase 或 PascalCase 了。並且 v-on 事件監聽器在 DOM 模板中會被自動轉換為全小寫 (因為 HTML 是大小寫不敏感的)，所以  v-on:myEvent 將會變成  v-on:myevent ——導致  myEvent 不可能被監聽到。

由原生事件可以發現其使用方式如下：

```html
<div
  @blur="toggleHeaderFocus"
  @focus="toggleHeaderFocus"
  @click="toggleMenu"
  @keydown.esc="handleKeydown"
  @keydown.enter="handleKeydown"
  @keydown.up.prevent="handleKeydown"
  @keydown.down.prevent="handleKeydown"
  @keydown.tab="handleKeydown"
  @keydown.delete="handleKeydown"
  @mouseenter="hasMouseHoverHead = true"
  @mouseleave="hasMouseHoverHead = false">
</div>
```

而為了區分原生事件和自定義事件在 Vue 中的使用，建議除了多單詞事件名使用 kebab-case 的情況下，命名還需遵守為 `on` + 動詞 的形式，如下：

```html
<!-- 父元件 -->
<div
  @on-search="handleSearch"
  @on-clear="handleClear"
  @on-clickoutside="handleClickOutside">
</div>
```

```javascript
// 子元件
export default {
  methods: {
    handleTriggerItem () {
      this.$emit('on-clear')
    }
  }
}
```

#### 事件方法

命名方法：camelCase
命名規範：handle + 名稱（可選）+ 動詞

```html
<template>
  <div
    @click.native.stop="handleItemClick()"
    @mouseenter.native.stop="handleItemHover()">
  </div>
</template>

<script>
export default {
  methods: {
    handleItemClick () {
      //...
    },
    handleItemHover () {
      //...
    }
  }
}
</script>
```

### git

#### commit 格式

```text
feat:     A new feature
fix:      A bug fix
docs:     Documentation only changes
style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf:     A code change that improves performance
test:     Adding missing tests or correcting existing tests
build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci:       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
chore:    Other changes that don't modify src or test files
revert:   Reverts a previous commit
```

參考 [commitizen](https://github.com/commitizen-tools/commitizen)

#### branch 命名

- `main` or `master`: 自動建立，用於發布重大版本更新
- `dev` or `develop`: 日常開發在此分支上進行
- 臨時性分支
  - `feature`: 它是為了開發某種特定功能，從develop分支上面分出來的。開發完成後，要再並入develop。可以採用feature-的形式命名
  - `release`: 指發布正式版本之前（即合併到master分支之前），我們可能需要有一個預發布的版本進行測試。預發布分支是從develop分支上面分出來的，預發布結束以後，必須合並進develop和master分支。它的命名，可以採用release-的形式
  - `bugfix`: 在開發或測試中發現bug需要修復的分支
  - `hotfix`: 軟體正式發布以後，難免會出現bug。這時就需要創建一個分支，進行bug修補。修補bug分支是從master分支上面分出來的。修補結束以後，再合並進master和develop分支。它的命名，可以採用hotfix-***的形式