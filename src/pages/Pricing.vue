<template>
  <section>
    <div class="section-title-wrapper">
      <div class="section-title">
        <span class="left-bg"></span>
        <span class="right-bg"></span>
        <span class="slash"></span>
        <h1 class="animated-title">料金</h1>
      </div>
    </div>
    <div class="hero-text">
      <p class="hero-title main">一度のミスが致命的なECの現場に</p>
      <p class="hero-title main">
        品質と価格のバランスがとれた最適なプランをご提案
      </p>
      <p>
        当社より安いEC物流サービスを提供する会社はたくさんあります。そのなかで当社が選ばれつづけてきた理由のひとつは、お客様のニーズ<br />
        に的確に対応しつつ、お客様の期待に沿ったクオリティを安定的にご提供できているからと考えています。
      </p>
      <p>
        消費者にとって届く商品は、かけがえのないものであり、EC事業者にとって1億分の1のミスであっても、消費者からすれば1分の1であり、<br />
        一度のミスでブランドや企業に対する悪い印象を決定づけることにもなりかねません。
      </p>
      <p>
        私たちは常にお客様と一体であり、受け手の気持ちを察しながら仕事に向き合う、お客様の感動が私たちの感動であり、それが私たちの誇<br />
        りである会社を目指しております。商品を受け取った消費者が感動し、また同じECショップで商品を購入したいと思えるようなクオリティ<br />
        を維持し続けることが、結果的にEC事業者様の満足につながると考えております。
      </p>
    </div>
    <div class="problem-box-shang">
      <h1>料金の目安</h1>
      <p>PRICING</p>
    </div>
    <!-- 背景字段 -->
    <div class="problem-box">
      <p class="box-1">
        料金は使った分だけ、無駄がない料金体系でご提供いたします
      </p>
      <p class="box-2">
        お客様のご要望に準じて最適なプランをご提案いたします<br />
        まずはお問い合わせください
      </p>
      <button class="detail-btn" @click="Contact">お問い合わせはこちら</button>
    </div>

    <div class="hero-title-container">
      <p class="hero-title main">サービス提供までの流れ</p>
      <p class="hero-subtitle">Flow</p>
    </div>
    <div class="process-list">
      <div class="process-item" v-for="(step, index) in steps" :key="index">
        <div class="title-wrapper">
          <div class="icon">{{ step.icon }}</div>
          <h3 class="title">{{ step.title }}</h3>
        </div>
        <p class="desc">{{ step.text }}</p>
      </div>
    </div>
    <div class="contact-section">
      <div class="contact-inner">
        <h2 class="contact-title">まずはお気軽にお問い合わせください</h2>
        <p class="contact-subtitle">
          オンライン相談・倉庫見学など柔軟に対応いたします
        </p>
        <div class="contact-btn">
          <router-link to="/contact">お問い合わせ</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const Contact = () => {
  router.push('/Contact');
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
  font-size: 28px; /* 第一行最大字体 */
  font-weight: bold; /* 加粗 */
  margin-top: 20px; /* 上邊距 */
  margin-bottom: 10px; /* 下邊距 */
  line-height: 1.6;
  color: #585757;
}
.hero-text p {
  font-size: 18px;
  margin-bottom: 25px;
  color: #5d5c5c;
}
/* shang */
.problem-box-shang {
  text-align: center;
  margin-top: 100px;
  h1 {
    font-size: 38px;
    font-weight: 700;
    color: #222;
    margin-bottom: 16px;
  }
  p {
    font-size: 28px;
    color: #5d5d5d;
  }
}

/* 文字框 */
.problem-box {
  background: rgba(255, 255, 255, 0.8); /* 半透明白底 */
  backdrop-filter: blur(8px); /* 模糊边框效果 */
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 32px 48px;
  max-width: 1000px;
  margin: 10px auto;
  color: #333;
  line-height: 1.8;
  border: 1px solid rgba(255, 255, 255, 0.6);
  overflow: hidden;
  padding-bottom: 80px;
  text-align: center;
  .box-1 {
    font-size: 16px;
    color: #7c7b7b;
  }
  .box-2 {
    font-size: 22px;
    color: #383838;
    font-weight: bold; /* 或 700 */
  }

  .detail-btn {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
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
    text-align: center;

    &:hover {
      background-color: #005fa3;
      box-shadow: 0 6px 14px rgba(0, 120, 215, 0.45);
      transform: translate(-50%, -2px);
    }

    &:active {
      transform: translate(-50%, 0);
      box-shadow: 0 3px 8px rgba(0, 120, 215, 0.25);
    }
  }
}
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
</style>
