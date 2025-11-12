<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- 第1部分：公司信息 -->
      <div class="footer-column">
        <div class="logo">
          <img src="@/assets/lgf-logo-ht.webp" alt="ロジファスト株式会社" />
        </div>
        <p>〒232-0021<br />神奈川県横浜市南区真金町2丁目19-21</p>
        <p>クオス横浜大通り公園704</p>
        <p>mail. info@logifast.jp</p>
        <p>tel. 045-315-5316</p>
        <p>
          url.
          <a href="http://localhost:5174/home" target="_blank"
            >http://localhost:5174/home</a
          >
        </p>
        <div class="social-icons">
          <a href="/home" class="fab fa-facebook-f" title="Facebook"></a>
          <a href="/home" class="fab fa-twitter" title="Twitter"></a>
          <a href="/home" class="fab fa-instagram" title="Instagram"></a>
          <a href="/home" class="fab fa-youtube" title="YouTube"></a>
          <a href="/home" class="fab fa-linkedin-in" title="LinkedIn"></a>
        </div>
      </div>

      <!-- 第2部分：导航链接 -->
      <div class="footer-column">
        <ul>
          <li><router-link to="/">EC物流・発送代行TOP</router-link></li>
          <li><router-link to="/feature">特長</router-link></li>
          <li><router-link to="/pricing">料金</router-link></li>
          <li><router-link to="/faq">よくある質問</router-link></li>
          <li><router-link to="/cases">導入事例</router-link></li>
          <li><router-link to="/resources">お役立ち資料</router-link></li>
          <li><router-link to="/contact">お問い合わせ</router-link></li>
        </ul>
      </div>

      <!-- 第3部分：対応可能な業務 -->
      <div class="footer-column">
        <ul>
          <li><router-link to="services">対応可能な業務</router-link></li>
          <li><router-link to="services1">検品</router-link></li>
          <li><router-link to="services2">検針</router-link></li>
          <li><router-link to="services3">出荷対応</router-link></li>
          <li><router-link to="services4">保管・荷役</router-link></li>
          <li><router-link to="services5">タグ・ラベル貼付</router-link></li>
          <li><router-link to="services6">在庫管理</router-link></li>
          <li><router-link to="services7">FBA納品代行</router-link></li>
          <li><router-link to="services8">セット組・同梱物</router-link></li>
          <li><router-link to="services9">ギフト包装</router-link></li>
          <li>
            <router-link to="services10">オリジナルダンボール作成</router-link>
          </li>
          <li><router-link to="services11">返品対応</router-link></li>
        </ul>
      </div>

      <!-- 第4部分：会社情報 -->
      <div class="footer-column">
        <ul>
          <li><router-link to="/about">会社概要</router-link></li>
          <li><router-link to="/privacy">個人情報保護方針</router-link></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">© 2025 LOGIFAST, INC. All rights reserved.</div>
  </footer>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
</script>
<style scoped>
.footer {
  background-color: #374151; /* 深灰 */
  color: white;
  padding: 40px 20px;
}

.footer a {
  color: #3b82f6; /* 蓝色 */
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer-container {
  display: flex;
  flex-wrap: wrap; /* 小屏幕换行 */
  gap: 20px;
}

.footer-column {
  flex: 1 1 220px; /* 等宽，最小宽度 220px */
  min-width: 220px;
  padding-left: 30px; /* 每列左边间距 */
  font-size: 13px;
}

.footer-title {
  font-weight: bold;
  font-size: 13px;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 13px; /* 设置字体大小 */
}

.footer-column li {
  margin-bottom: 6px;
}
.footer-column a {
  color: white; /* 链接文字白色 */
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: #3b82f6; /* 悬停蓝色 */
}
.social-icons {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  color: #9ca3af; /* 灰色文字 */
  font-size: 12px;
  font-family: sans-serif; /* 可选字体 */
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
  color: #f4f4f6; /* 墨蓝色，可根据需求调整 */
  font-weight: bold;
  font-size: 18px; /* 根据需要调整大小 */
}
/* 圖標 */
.social-icons a {
  font-size: 14px; /* 图标大小 */
  color: #007bff; /* 蓝色 */
  margin-right: 12px; /* 间距 */
  text-decoration: none;
  display: inline-block;
}

.social-icons a:hover {
  opacity: 0.8; /* 鼠标悬停淡化效果 */
}
</style>
