<template>
  <nav class="navbar">
    <!-- 左側 Logo -->
    <router-link to="/" class="logo">
      <img src="@/assets/lgf-logo-top.webp" alt="ロジファスト株式会社" />
    </router-link>

    <!-- 中間導航項目 -->
    <ul class="nav-links">
      <li>
        <router-link to="/feature" class="nav-item" active-class="active-link"
          >特長</router-link
        >
      </li>
      <li>
        <router-link to="/pallet" class="nav-item" active-class="active-link"
          >パレット</router-link
        >
      </li>

      <li class="dropdown">
        <!-- 改成 router-link 並保留箭頭符號 -->
        <router-link
          to="/problems"
          class="dropdown-toggle"
          active-class="active-link"
          exact="false"
        >
          解決できる課題 ▼
        </router-link>
        <ul class="dropdown-menu">
          <li>
            <router-link to="/problems1"
              >アウトソース先の品質が低くて困っている</router-link
            >
          </li>
          <li>
            <router-link to="/problems2"
              >受注から出荷までをスムーズにしたい</router-link
            >
          </li>
          <li>
            <router-link to="/problems3"
              >出荷量が増えて自社対応が難しくなってきた</router-link
            >
          </li>
          <li>
            <router-link to="/problems4"
              >慢性的な人手不足を解消したい</router-link
            >
          </li>
          <li>
            <router-link to="/problems5"
              >付加価値をつけてリピーターを増やしたい</router-link
            >
          </li>
        </ul>
      </li>

      <li class="dropdown">
        <!-- 改成 router-link，可點擊跳轉 -->
        <router-link
          to="/services"
          class="dropdown-toggle"
          active-class="active-link"
        >
          対応可能な業務 ▼
        </router-link>
        <ul class="dropdown-menu">
          <li><router-link to="/services1">検品</router-link></li>
          <li><router-link to="/services2">検針</router-link></li>
          <li><router-link to="/services3">出荷対応</router-link></li>
          <li><router-link to="/services4">保管・荷役</router-link></li>
          <li><router-link to="/services5">タグ・ラベル貼付</router-link></li>
          <li><router-link to="/services6">在庫管理</router-link></li>
          <li><router-link to="/services7">FBA納品代行</router-link></li>
          <li><router-link to="/services8">セット組・同梱物</router-link></li>
          <li><router-link to="/services9">ギフト包装</router-link></li>
          <li>
            <router-link to="/services10">オリジナルダンボール作成</router-link>
          </li>
          <li><router-link to="/services11">返品対応</router-link></li>
        </ul>
      </li>

      <li>
        <router-link to="/faq" class="nav-item" active-class="active-link"
          >よくある質問</router-link
        >
      </li>
      <li>
        <router-link to="/cases" class="nav-item" active-class="active-link"
          >事例</router-link
        >
      </li>
      <li>
        <router-link to="/pricing" class="nav-item" active-class="active-link"
          >料金</router-link
        >
      </li>
      <li>
        <router-link to="/about" class="nav-item" active-class="active-link"
          >会社概要</router-link
        >
      </li>
    </ul>

    <!-- 右側按鈕 -->
    <div class="contact-btn">
      <router-link to="/contact">お問い合わせ</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  position: fixed; /* 固定在視窗 */
  top: 0; /* 頂部對齊 */
  left: 0; /* 左側對齊 */
  width: 100%; /* 全屏寬度 */
  height: 90px;
  background-color: #ffffff; /* 背景色，可根據設計調整 */
  z-index: 1000; /* 層級高，保證在內容之上 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px 10px 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 可選：底部陰影 */
}
/* 避免固定後內容被遮擋，可在主體加上 padding-top */
body {
  padding-top: 80px; /* 根據 navbar 高度調整 */
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px; /* 图片和文字间距 */
}
.logo img {
  height: 40px;
  margin-right: 10px;
  height: auto; /* 高度自适应，保持比例 */
}
/* 设置文字颜色和字体粗细 */
.logo span {
  color: #1a2b4d; /* 墨蓝色，可根据需求调整 */
  font-weight: bold;
  font-size: 20px; /* 根据需要调整大小 */
}
.nav-links {
  display: flex;
  font-size: 14px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-links li {
  margin: 0 15px;
  position: relative;
}
.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}
/* 鼠标悬停变蓝 */
.nav-links li a:hover,
.nav-links li span:hover {
  color: #212b81;
}

/* 下拉主體 */
.nav-links li.dropdown {
  position: relative;
  list-style: none;
}

.nav-links li.dropdown:hover .dropdown-menu {
  display: block;
}
/* 高亮 */
.active-link {
  color: #212b81;
  font-weight: bold;
}
.nav-links a.active-link {
  color: #212b81;
  font-weight: bold;
}

.dropdown-menu li a.active-link {
  color: #212b81;
  font-weight: bold;
}

/* 下拉選單區塊 */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 220px; /* ✅ 加寬，讓字不擠 */
  white-space: nowrap; /* ✅ 不折行 */
  z-index: 1000;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  padding: 0;
}

/* 每個項目 */
.dropdown-menu li {
  border-bottom: 1px solid #eee;
  list-style: none;
}

.dropdown-menu li:last-child {
  border-bottom: none;
}

/* 連結樣式 */
.dropdown-menu a {
  display: block;
  padding: 10px 18px;
  color: #333;
  font-size: 14px;
  font-weight: 500; /* ✅ 字體略寬帶（比正常稍粗） */
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
}

/* hover 效果 */
.dropdown-menu a:hover {
  background-color: #f8f9fa;
  color: #007bff;
}

/* 標題樣式 */
.dropdown > span {
  cursor: pointer;
  color: #333;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.dropdown > span:hover {
  color: #007bff;
}

/* 按鈕 */
.contact-btn a {
  display: inline-block; /* 必须加，否则 height 无效 */
  height: 62px; /* 按钮高度 */
  line-height: 62px; /* 文字垂直居中 */
  padding: 0 20px; /* 左右内边距 */
  background-color: #4998ec;
  color: #fff;
  text-decoration: none;

  text-align: center; /* 水平居中 */
  font-weight: 400;
  transition: background-color 0.2s;
  margin-right: 100px;
}

.contact-btn a:hover {
  background-color: #0056b3;
}
</style>
