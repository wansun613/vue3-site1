<template>
  <section>
    <div class="section-title-wrapper">
      <div class="section-title">
        <span class="left-bg"></span>
        <span class="right-bg"></span>
        <span class="slash"></span>
        <h1 class="animated-title">セット組・同梱物</h1>
      </div>
    </div>
    <!-- 1文字 -->
    <div class="hero-text">
      <p class="hero-title main">単に複数商品を組み合わせるだけでなく、</p>
      <p class="hero-title main">
        商品ごとに異なる販促物封入など様々なアソートに対応
      </p>
      <p>
        セット組みとは2種類以上の商品を組み合わせて、1つの商品として扱うために行う業務を指します。<br />
        物流業界では「詰め合わせ・組み合わせる」の意味であるアソートとも呼ばれ、EC（ネットショップ・通販）の物流現場では同梱作業とし<br />
        て使われています。
      </p>
      <p>セット組の具体例は次のとおりです。</p>
    </div>
    <!-- 灰色背景文字 -->
    <div class="product-section">
      <ul class="product-list">
        <li>商品Aと商品Bを1つずつ組み合わせて、1つの商品Cとする</li>
        <li>商品Aとカタログを組み合わせて、1つの商品Dとする</li>
        <li>商品Aと商品Bと商品Cを組み合わせて、トライアルセットEとする</li>
      </ul>
    </div>
    <!-- 小文字 -->
    <div class="hero-xiao">
      <p>
        ロジファストでは、お客様の販売形態にあわせて様々なセット組に対応しております。決まったセットを詰め合わせすることも、自由に選<br />
        択された商品を詰め合わせすることも可能です。
      </p>
      <p>
        商品の管理方法は2通りあり、商品を個別のSKUとして在庫管理し、出荷時に組み合わせて梱包するパターンと商品の入荷時にセット組みし<br />
        て商品を1つのSKUとして入庫するパターンがあります。
      </p>
    </div>
    <!-- 2文字 -->
    <div class="hero-text">
      <p class="hero-title main">
        顧客一人ひとりに合わせたマーケティングにも対応し、
      </p>
      <p class="hero-title main">
        リピート率の向上やリピート通販の解約防止に貢献します
      </p>
      <p>
        近年、インターネットやスマートフォンの急速な普及によって、個人が収集できる情報が飛躍的に増えました。消費者（エンドユーザー）<br />
        の嗜好は多様化し、ニーズの幅が大きく広がりを見せています。
      </p>
      <p>
        そのような中、EC（ネットショップ・通販）市場では、消費者一人ひとりの購買傾向からニーズを読み取り、個々に対して最適なマーケテ<br />
        ィングを行うECショップが増えています。
      </p>
      <p>
        商品の購入回数、購入金額、誕生日、居住エリア、購入手段などに合せて、最適な販促物やカタログ、ガイドブック、アンケート、プレゼン<br />
        ト、クーポン、サンプル、お客様の声などを同梱することで、リピート率の向上や解約率の低減が期待できます。
      </p>
      <p>
        同梱物は対面接客ができないECにおいて、消費者とコミュニケーションを図る重要な手段のひとつであり、強力な接客ツールと言えます。
      </p>
      <p>
        ロジファストでは、EC運営で培ったノウハウを生かし、お客様の商品特性に合わせた同梱物のご提案も行っております。まずはお気軽にご<br />
        相談ください。
      </p>
    </div>
    <!--よくある質問  -->
    <div class="hero-text">
      <p class="hero-title main">セット組・同梱物に関するよくある質問</p>
      <p>
        お客様から寄せられる質問とその回答をご紹介します。お困りごとがありましたら、どんな些細なこ<br />
        とでも構いません。お気軽に
        <router-link to="/contact" class="contact-link"
          >お問い合わせフォーム</router-link
        >
        よりお問い合わせください。<br />
      </p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions"
        :key="index"
        @click="toggle(index)"
        :class="{ hovered: hoveredIndex === index }"
        @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow" :class="{ open: openIndex === index }">⬇</span>
        </div>
        <div class="accordion-body" v-show="openIndex === index">
          {{ item.content }}
        </div>
      </div>
    </div>
    <!-- 藍色底部 -->
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

    <!------------------下半段頁面 ------------------------------>
    <div class="hero-title-container">
      <p class="hero-title main">その他のメニュー</p>
      <p class="hero-subtitle">MENU</p>
    </div>
    <div class="problem-container">
      <!-- 1 -->
      <div class="problem-box">
        <h3>在庫管理</h3>
        <p>
          最新のクラウド型の物流システム（WMS）、厳しい品質管理体制<br />によって、ECの成長に欠かせない次のような在庫差異の問題を<br />
          解決します。入出庫、在庫、各種データはタイムリーに情報が更<br />新され、オンライン上で作業状況の把握が容易となります。
        </p>
        <button class="detail-btn" @click="goToServices6">詳しく見る</button>
      </div>
      <!-- 2 -->
      <div class="problem-box">
        <h3>ギフト包装</h3>
        <p>
          クリスマスや母の日などのシーズンギフトラッピングはもちろ<br />ん、用途別のラッピングやブランドイメージに合せたオリジナル<br />
          デザインのラッピングにも対応します。これまで冠婚葬祭の引き<br />出物やギフト関連商品で培ったラッピング技術で1つひとつ丁寧<br />にラッピングいたします。
        </p>
        <button class="detail-btn" @click="goToServices9">詳しく見る</button>
      </div>
      <!-- 3 -->
      <div class="problem-box">
        <h3>検品</h3>
        <p>
          経験豊豊富な日本人スタッフが、商品の外観、機能を丁寧に検<br />品・検査いたします。外観目視、機能検査、触手検品、動作確認<br />
          など商品の特性に合わせた検品に対応します。お客様より提供い<br />ただいた検品基準書（確認内容、良・不良基準）に基づいて、テ<br />
          スト検品を実行し、お客様と認識をすり合わせることで検品の精<br />度を向上させます。
        </p>
        <button class="detail-btn" @click="goToServices1">詳しく見る</button>
      </div>
      <!-- 4 -->
      <div class="problem-box">
        <h3>検針</h3>
        <p>
          コンベア型検針機によるスピーディーな残針検査に対応。熟練度<br />の高いスタッフ一人ひとりが商品の質を守るという高い意識を持<br />
          ち、丁寧に厳しく検査し、事故やクレームの防止に努めます。衣<br />料品はもちろん、多種多様な品目の検針も承っております。
        </p>
        <button class="detail-btn" @click="goToServices2">詳しく見る</button>
      </div>
      <!-- 5 -->
      <div class="problem-box">
        <h3>セット組・同梱物</h3>
        <p>
          お客様の販売形態にあわせて様々なセット組に対応しておりま<br />す。決まったセットを詰め合わせすることも、自由に選択された<br />
          商品を詰め合わせすることも可能です。また、EC運営で培った<br />ノウハウを生かし、お客様の商品特性に合わせた同梱物のご提案<br />も行っております。
        </p>
        <button class="detail-btn" @click="goToServices8">詳しく見る</button>
      </div>
      <!-- 6 -->
      <div class="problem-box">
        <h3>タグ・ラベル貼付</h3>
        <p>
          培った厳しい品質管理のもと、熟練の自社スタッフによって細や<br />
          かに作業を行っています。商品管理に必要なバーコードが付いた<br />値札やタグ、国内での流通に必要なラベルなど、様々なラベル・<br />
          タグ貼付け業務に対応しております。
        </p>
        <button class="detail-btn" @click="goToServices5">詳しく見る</button>
      </div>
      <!-- 7 -->
      <div class="problem-box">
        <h3>保管・荷役</h3>
        <p>
          物流拠点は横浜駅から車で25分の場所に位置し、成田空港や羽<br />田空港、大井、横浜埠頭からも近いロケーションです。万が一商<br />
          品に問題が生じた場合にも、すぐに状況を確認できます。コンテ<br />ナが入る屋根付きの十分なスペースで天候に左右されない入庫体<br />
          制を整えており、40フィートの入荷も可能です。
        </p>
        <button class="detail-btn" @click="goToServices4">詳しく見る</button>
      </div>
      <!-- 8 -->
      <div class="problem-box">
        <h3>出荷対応</h3>
        <p>
          EC運営で培った豊富な経験と独自のノウハウによって、大量の<br />注文にもスピードや品質を維持し、安定した発送を実現します。<br />
          ECモールやショッピングカートシステムを自動出荷システムと<br />連携させることで受注情報の吸い上げを自動で行ってくれるの<br />で、社内での物流業務が格段に少なくなります。
        </p>
        <button class="detail-btn" @click="goToServices3">詳しく見る</button>
      </div>
      <!-- 9 -->
      <div class="problem-box">
        <h3>FBA納品代行</h3>
        <p>
          ロジファストではamazonが定める規格に準じた商品ラベル貼<br />付、検品、梱包、納品に対応しております。これらの業務を一手<br />
          にお引き受けすることで、発送手続きにかかっていた時間を商品<br />仕入れ、新商品の開発、サービス向上、マーケティングなどのコ<br />
          ア業務に集中できる環境を提供します。
        </p>
        <button class="detail-btn" @click="goToServices7">詳しく見る</button>
      </div>
      <!-- 10 -->
      <div class="problem-box">
        <h3>オリジナルダンボール作成</h3>
        <p>
          競争の激しいEC（ネットショップ・通販）市場において、商品<br />
          の梱包作業一つをとっても手を抜くことはできません。ECの黎<br />
          明期である1999年から培ってきた梱包資材の知識を活かして、<br />
          梱包のしやすさ、開封時の見栄え、ブランドの個性を活かしたデ<br />
          ザイン、リサイクルに考慮したオリジナルダンボールなど、貴社<br />
          に最も適した梱包資材をご提案いたします。
        </p>
        <button class="detail-btn" @click="goToServices10">詳しく見る</button>
      </div>
      <!-- 11 -->
      <div class="problem-box">
        <h3>返品対応</h3>
        <p>
          ロジファストでは、スムーズな返品処理が行える体制が整ってお<br />
          ります。返品の受付、返送商品の荷受け、商品の検品・仕分け、<br />
          交換品の発送までの一連の業務を代行することで返品対応の業務<br />
          効率化を実現します。また、当社運営ECによる販売代行やバザ<br />
          ールによる再販・アウトレット販売が可能なサービスもご用意し<br />
          ております。
        </p>
        <button class="detail-btn" @click="goToServices11">詳しく見る</button>
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
import { ref } from 'vue';

const router = useRouter();
const openIndex = ref(null);
const hoveredIndex = ref(null);

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
// 下拉箭頭内容
const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const accordions = [
  {
    title: 'どのようなセット組に対応していますか？',
    content:
      '商品を指定の化粧箱から組み立てるセットはもちろん、ギフトラッピングやプライスラベルを貼るなど、様々なセット組に対応しています。一括でまとめてセット作成するパターンと、日々の出庫依頼に合わせて都度セット作成するパターンのいずれも対応しております。',
  },
  {
    title: 'どのような同梱物に対応していますか？',
    content:
      'カタログ、チラシ、納品書、メッセージカード、取扱説明書、保証書、付属品など、様々な同梱物を同梱しております。',
  },
  {
    title: 'セット組をお願いする場合どのようにすればいいですか？',
    content:
      '事前に詳細について打合せさせていただきます。お気軽にご相談ください。',
  },
  {
    title: '同梱物の同梱をお願いする場合どのようにすればいいですか？',
    content:
      '同梱物の管理方法をはじめ事前に詳細について打合せさせていただきます。お気軽にご相談ください。',
  },
  {
    title: '同梱物の在庫管理をお願いできますか？',
    content:
      '通常商品と同様に対応可能です。在庫管理することで同梱物の機会損失防止に繋がります。',
  },
  {
    title: 'リピート通販のような同梱物の対応も可能ですか?',
    content:
      '対応可能です。注文回数に応じて必要な同梱物を紐づけて出荷いたします。',
  },

  {
    title: 'セット組の際、セット品番と単品品番の関連はどうなりますか？',
    content:
      'セット品番で在庫管理する方法と、単品品番で在庫管理を行いセット品番で出庫依頼をいただくと単品品番と紐づいて管理する方法がございます。どちらを選択するかは、詳細をお打合せの上ご提案させていただきます。',
  },
  {
    title: 'どのくらいの量をセットできますか？',
    content:
      'セット内容につきまして事前に詳細について打合せの上ご提案させていただきます。お気軽にご相談ください。',
  },
];
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
  font-size: 20px; /* 第一行最大字体 */
  font-weight: bold; /* 加粗 */
  margin-top: 15px; /* 上邊距 */
  margin-bottom: 10px; /* 下邊距 */
  line-height: 1.6;
  color: #585757;
}
.hero-text p {
  font-size: 16px;
  margin-bottom: 25px;
  color: #5d5c5c;
}
/* xiao */
.hero-xiao {
  width: 80%;
  margin: -5px auto;
  color: #0d0d0d;
  line-height: 1.8;
  margin-bottom: 22px; /* 段落间距 */
}
.hero-xiao p {
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
  margin-bottom: 60px;
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
  max-width: 80%;
  height: auto;
}
/*  */
.problems-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.8;
  text-align: left;
  /* border-radius: 8px; */
  overflow: hidden;
}

.problem-item {
  width: 100%;
  padding: 12px 40px;
  padding-left: 80px;
  /* font-weight: 500; */
  display: flex;
  align-items: center;
  gap: 12px;

  &:nth-child(odd) {
    background-color: #f5f5f5;
  }
  &:nth-child(even) {
    background-color: #e8f2ff;
  }

  &::before {
    content: '➜';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #605f5f;
    color: #fff;
    font-size: 18px;
    /* font-weight: 900; */

    flex-shrink: 0;
  }
}
/* 背景區塊 */
.category-section {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 60px auto;
  flex-wrap: wrap;
  max-width: 960px;
}

.category-box {
  flex: 1 1 30%;
  min-width: 280px;
  max-width: 360px;
  background-color: #f5f5f5;

  padding: 12px 0;
  padding-left: 10px;
  text-align: center;
  font-size: 18px;
  line-height: 1.8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.category-box .problem-item {
  padding: 10px 0;
  &:nth-child(odd) {
    background-color: #f5f5f5;
  }
  &:nth-child(even) {
    background-color: #e8f2ff;
  }
}
/*  */

.text-it {
  font-size: 18px;
  margin-bottom: 25px;
  color: #5d5c5c;
  margin-left: -130px;
}
/*  */
.contact-link {
  color: #0078d4;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #005a9e;
    text-decoration: none;
  }
}
/* 下拉 */
.accor {
  margin-bottom: 80px;
}
.accordion {
  width: 100%;
  max-width: 1000px;
  margin: 15px auto;
  border: 1px solid #dcdcdc;
  overflow: hidden;
  cursor: pointer;
  background-color: #e6faf9;
  transition: background-color 0.3s;

  &.hovered {
    background-color: #1be7a6;
    /* 下拉內容也跟著變綠 */
    .accordion-body {
      background-color: #1be7a6;
    }
  }

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: 400;
  }

  .arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1.6px solid #000;
    color: #000;
    font-size: 12px;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  .accordion-body {
    padding: 16px 20px;
    font-size: 16px;
    line-height: 1.6;
    background-color: #e6faf9;
  }
}
/* 表格 */
.product-table {
  width: 100%;
  max-width: 1000px; /* 最大宽度 */
  border-collapse: collapse;
  font-size: 14px;
  margin: 0 auto;
}

.product-table td {
  padding: 10px 15px;
  border: 1px solid #ccc;
  /* white-space: pre-line;  */
}

.odd-row {
  background-color: #ffffff; /* 白色 */
}

.even-row {
  background-color: #f5f5f5; /* 灰色 */
}
/* 灰色背景文字 */
.highlight-box {
  background-color: #f5f5f5; /* 浅灰色背景 */
  padding: 20px;
  text-align: left; /* 文字居中 */
  font-size: 16px;
  line-height: 1.8;
  border-radius: 6px; /* 可选：圆角 */
  margin: 20px auto; /* 上下间距，水平居中 */
  max-width: 1000px; /* 可选：最大宽度 */
}
/* 3張圖片 */
.storage-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0;
  flex-wrap: wrap; /* 小螢幕自動換行 */
  margin: 60px auto;
  max-width: 1200px;

  .storage-item {
    position: relative;
    width: 360px; /* 根據設計可調 */

    text-align: center; /* 讓圖片水平置中 */

    img {
      width: 86%;
      height: auto;
      display: inline-block;
      object-fit: cover;
    }

    .label {
      position: absolute;
      top: -26px; /* 向上浮一些 */
      left: 24%;
      transform: translateX(-50%);
      color: #505050;
      font-size: 18px;
      font-weight: 600;
      padding: 0;
      background: none; /* 確保無背景 */
    }
  }
}

.product-section {
  background-color: #f5f5f5; /* 灰色背景 */
  padding: 40px 40px;
  border-radius: 2px;
  width: 600px; /* 固定寬度，可調整 */
  margin: 0 auto; /* 讓整個區塊水平居中 */

  .product-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column; /* 垂直排列 */
    gap: 16px; /* 每行間距 */

    li {
      position: relative;
      padding-left: 36px; /* 給圓圈留空間 */
      font-size: 18px;
      color: #333;
      line-height: 1.6;

      /* 圓圈樣式 */
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ffffff; /* 白色背景 */
        border: 8px solid #007bff; /* 藍色邊框 */
      }
    }
  }
}
</style>
