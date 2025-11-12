<template>
  <section>
    <div class="section-title-wrapper">
      <div class="section-title">
        <span class="left-bg"></span>
        <span class="right-bg"></span>
        <span class="slash"></span>
        <h1 class="animated-title">資料ダウンロード</h1>
      </div>
    </div>
    <div class="center-text">準備中</div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goToServices1 = () => {
  router.push('/Services1');
};
const goToServices2 = () => {
  router.push('/Services2');
};
const goToServices3 = () => {
  router.push('/Services3');
};
const goToServices4 = () => {
  router.push('/Services4');
};
const goToServices5 = () => {
  router.push('/Services5');
};
const goToServices6 = () => {
  router.push('/Services6');
};
const goToServices7 = () => {
  router.push('/Services7');
};
const goToServices8 = () => {
  router.push('/Services8');
};
const goToServices9 = () => {
  router.push('/Services9');
};
const goToServices10 = () => {
  router.push('/Services10');
};
const goToServices11 = () => {
  router.push('/Services11');
};

const steps = [
  {
    icon: '📞',
    title: 'お問い合わせ',
    text: 'まずは無料相談フォーム、もしくはお電話（045-315-5250）にてお問い合わせください。担当者がご要望をお伺いします。',
  },
  {
    icon: '🗣️',
    title: 'ヒアリング',
    text: 'まずは30〜60分の無料相談で、貴社のEC事業の方針や販売計画、取り扱う商品の特性、入出荷の方法、ビジネスモデルなどについてヒアリングを行います。達成したいこと、現状の課題やお悩みなどをお聞かせください。実践経験豊富な物流コンサルタントが貴社によって理想のEC物流の体制を導きだします。',
  },
  {
    icon: '💡',
    title: 'お見積り・ご提案',
    text: 'ヒアリング内容を元に最適なプラン、お見積り金額のご提案をいたします。ヒアリングやご提案は1回で終わりではありません。初回提案を土台にして、さらに深い内容を追加でお伺いします。',
  },
  {
    icon: '📄',
    title: '最終のご提案・ご契約',
    text: '初回提案でのフィードバックと追加ヒアリングの内容をもとに、より具体的かつ的確なプランをご提案いたします。ご提案内容で合意いただけた場合、費用やサービス開始時期などを確認して、契約の締結を行います。契約の際、お客様にご準備いただく書類はございません。契約書など必要な書類はすべて弊社にてご用意いたします。',
  },
  {
    icon: '🚀',
    title: 'サービス提供',
    text: 'ご契約後、本番稼働に向けた準備を行います。さまざまなECモール・カート、基幹システム、在庫管理システムとのシームレスな連携、作業マニュアルの作成、業務フローの構築、業務移管に伴う在庫の完全一致、目標達成ロードマップなどを固めたうえで、EC物流の運用を開始します。運用後は専任のコンサルタントが伴走し、徹底サポートいたします。',
  },
];
// export default {
//   name: 'Feature',
// };
</script>

<style scoped>
.section {
  padding: 20px;
}

.section-title-wrapper {
  margin-top: 110px;
  width: 100vw; /* 全屏宽度 */
  height: 130px;
  background: linear-gradient(
    to right,
    #f4f2f2 50%,
    #587db8 50%
  ); /* 左白右蓝 */
  position: relative;
  padding: 20px 0; /* 上下间距 */
}

.section-title-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px; /* 分割线宽度 */
}

.section-title {
  position: relative;
  top: -8px; /* 整体往上移动一点 */
  margin-left: 80px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: black;
}

/* 從左向右滑入 */
.animated-title {
  margin-top: 26px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: slide-in 1s forwards;
}
/* 從左向右滑入 */
@keyframes slide-in {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 20ch; /* 根據文字長度調整，1個中文字約1ch */
    opacity: 1;
  }
}
/* 頭部文字 */
.hero-text {
  width: 80%;
  margin: 60px auto;
  color: #0d0d0d;
  line-height: 1.8;
  margin-bottom: 22px; /* 段落间距 */
}

.hero-title.main {
  font-size: 26px; /* 第一行最大字体 */
  font-weight: bold; /* 加粗 */
  margin-top: 20px; /* 上邊距 */
  margin-bottom: 10px; /* 下邊距 */
  line-height: 1.6;
  color: #393939;
}
.hero-text p {
  font-size: 16px;
  margin-bottom: 25px;
  color: #5d5c5c;
}
/* 11個框 */
.problem-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 每行2个 */
  gap: 40px 60px; /* 行间距40px，列间距60px */
  justify-content: center; /* 让最后一行不足时居中 */
  max-width: 1200px;
  margin: 0 auto; /* 整体居中 */
  padding: 40px 0;
}
.problem-box:last-child:nth-child(odd) {
  grid-column: 1 / -1; /* 讓最後一個橫跨兩列 */
  justify-self: center; /* 並在中間對齊 */
}
/* 文字框 */
.problem-box {
  background: rgba(255, 255, 255, 0.8); /* 半透明白底 */
  backdrop-filter: blur(8px); /* 模糊边框效果 */
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 32px 48px;
  max-width: 470px;
  margin: 10px auto;
  color: #333;
  line-height: 1.8;
  border: 1px solid rgba(255, 255, 255, 0.6);
  overflow: hidden;
  padding-bottom: 80px;

  h3 {
    font-size: 22px;
    font-weight: 700;
    color: #222;
    margin-bottom: 16px;
    text-align: left;
  }

  .detail-btn {
    position: absolute;
    right: 24px;
    bottom: 24px;
    background-color: #0078d7;
    color: #fff;
    border: none;
    height: 50px;
    padding: 10px 24px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 120, 215, 0.3);
    transition: all 0.25s ease;

    &:hover {
      background-color: #005fa3;
      box-shadow: 0 6px 14px rgba(0, 120, 215, 0.45);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 3px 8px rgba(0, 120, 215, 0.25);
    }
  }
}
/* 会社 */
.company-table {
  width: 100%;
  max-width: 990px;
  margin: 40px auto;
  border-collapse: collapse;
  font-size: 15px;
  color: #333;
  line-height: 1.7;
  border: 1px solid #ccc; /* 外框線 */

  th,
  td {
    padding: 14px 18px;
    text-align: left;
    vertical-align: top;
    border: 1px solid #ccc; /* 內框線 */
  }

  th {
    width: 180px;
    font-weight: bold;
  }

  tr:nth-child(odd) {
    background-color: #f1efef; /* 淺灰色行 */
  }

  tr:nth-child(even) {
    background-color: #ffffff; /* 白色行 */
  }
}

/* 主メニュー */
.hero-title-container {
  text-align: center; /* 所有文字水平居中 */
  margin-top: 120px;
}

.hero-title.main {
  font-size: 32px;
  font-weight: bold;
  margin: 0;
}

.hero-subtitle {
  font-size: 22px;
  margin: 0;
  color: #5b5a5a;
  margin-top: 20px;
}
/* サービスの流れ */
.process-list {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中所有 process-item */
  gap: 24px; /* 每個項目之間的間距 */
  margin-top: 40px;
}
.process-item {
  background: #edf0f3;
  padding: 30px 40px;
  max-width: 860px;
  width: 100%;
  margin-bottom: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.title-wrapper {
  display: flex; /* 水平排列 */
  align-items: center; /* 垂直居中 */
  gap: 8px; /* 標題和圖標的間距 */
}
.icon {
  font-size: 24px;
  margin-bottom: 12px;
}

.title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #333;
}

.desc {
  margin-left: 40px;
  font-size: 16px;
  color: #555;
  line-height: 1.8;
}
/* 藍色區塊 */
/* 藍色區塊 */
.contact-section {
  height: 110px;
  background-color: #3b67b0; /* 深藍背景 */
  color: #fff; /* 白色文字 */
  text-align: center; /* 文字置中 */
  padding-top: 50px; /* 上右下左內邊距 */
  padding-bottom: 130px;
}
.contact-inner {
  position: relative;
  top: -15px; /* ✅ 向上移動 15px，可自行微調 */
}
.contact-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.contact-subtitle {
  font-size: 1.1rem;
  margin-bottom: 32px;
}
.contact-btn a {
  font-size: 18px;
  display: inline-block; /* 必须加，否则 height 无效 */
  height: 50px; /* 按钮高度 */
  line-height: 50px; /* 文字垂直居中 */
  width: 140px;
  padding: 0 20px; /* 左右内边距 */
  background-color: #fff;
  color: #515050;
  text-decoration: none;

  text-align: center; /* 水平居中 */
  font-weight: 400;
  transition: background-color 0.2s;
  margin-right: 100px;
  margin-bottom: 40px;
}

.contact-btn a:hover {
  background-color: #3b67b0;
}
/* 圖片 */
.image-container {
  text-align: center; /* 圖片置中 */
  margin: 40px 0;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px; /* 可選：圓角 */
}
/* 字體靠右*/
.company-signature {
  text-align: right;
  font-size: 14px; /* 可調整字體大小 */
  color: #333; /* 可選文字顏色 */
  margin-top: 20px;
  margin-right: 46px;
}
/* 聯繫我們 */
.contact-section {
  height: 110px;
  background-color: #3b67b0; /* 深藍背景 */
  color: #fff; /* 白色文字 */
  text-align: center; /* 文字置中 */
  padding-top: 50px; /* 上右下左內邊距 */
  padding-bottom: 130px;
}
.contact-inner {
  position: relative;
  top: -15px; /* ✅ 向上移動 15px，可自行微調 */
}
/* 做邊距 */
.company-info {
  padding-left: 60px; /* 調整左邊距，單位可改 px/rem */
  text-align: left; /* 確保靠左 */
  line-height: 1.5; /* 行距可選 */
  color: #333; /* 文字顏色 */
  font-size: 14px; /* 字體大小 */
}
/* 字體 */
.info-title {
  padding-left: 136px; /* 左邊距，可調整 */
  font-weight: bold; /* 加粗 */
  font-size: 16px; /* 可選字體大小 */
  color: #333; /* 文字顏色 */
}
.company-sig {
  padding-left: 136px; /* 左邊距，可調整 */
  color: #585858; /* 文字顏色 */
  margin-top: -20px;
}
/* 最後表格 */
.center-white {
  text-align: left;
  vertical-align: middle;
  background-color: #fff; /* 白色 */
  padding: 20px 10px; /* 上下内边距，可调整 */
}

.bg-white {
  background-color: #fff;
}

.bg-gray {
  background-color: #f2f2f2; /* 淡灰色，可以根据需要调整 */
}
/* di */
.di {
  margin-bottom: 160px;
}
/* 準備中 */
.center-text {
  text-align: center; /* 水平居中 */
  font-size: 48px;
  padding: 30px 0;
  height: 100px;
}
</style>
