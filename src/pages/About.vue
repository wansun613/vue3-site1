<template>
  <section>
    <div class="section-title-wrapper">
      <div class="section-title">
        <span class="left-bg"></span>
        <span class="right-bg"></span>
        <span class="slash"></span>
        <h1 class="animated-title">会社概要</h1>
      </div>
    </div>
    <!-- 1.文字 -->
    <div class="hero-text">
      <p class="hero-title main">企業理念</p>
      <p>中堅・中小企業の皆様を物流を通して強力にバックアップ</p>
      <p>
        ロジファストは中堅・中小企業の荷主様の本当に役に立つ物流企業を目指しています。中堅・中小企業の皆様は大手企業様と異なり物流部<br />
        門などの専門の物流担当者を置いている会社は少ないと思います。
        中堅・中小企業の皆様は、悪い言い方をすると「片手間で」物流をやら<br />
        れている企業が多いのが実情ではないでしょうか。
      </p>
      <p>
        しかし現在のように、お客様のニーズが刻々と変わる中では、片手間で物流を行っていると、変化への対応が遅れたり、コストが多くかか<br />
        ったり、誤出荷などの品質面で支障をきたしたりと、物流が本業の足を引っ張る結果になっているのが実態なのではないでしょうか？そう<br />
        した中堅・中小企業のみなさまに合ったサービスをロジファストは提供させていただきます。
      </p>
      <p>
        物流コストの把握、物流コストの削減といったコンサルティング業務から、物流業務全般のアウトソーシングや在庫管理の実現といったこ<br />
        とまで、日頃中堅・中小のみなさまが、「困っているけど、どうしたらいいか分からない、対応したいがそれをする人材がいない」と思われ<br />
        ていることを、ロジファストはお客様に代わって実現いたします。
      </p>
    </div>
    <!-- 2.文字 -->
    <div class="hero-text">
      <p class="hero-title main">挨拶日本一の物流企業を目指して</p>
      <p>
        私達は挨拶をとても大切に考えています。挨拶なんて簡単にできるし、そんな大したことじゃないよという方もいらっしゃるかもしれません<br />
        が、簡単にできるが、奥が深く、人間関係を作る重要なモノだと考えています。
      </p>
      <p>
        「おはようございます」「いらっしゃいませ」「こんにちは」「お疲れさまです」
      </p>
      <p>
        といったごく当たり前の言葉が、どれだけきちんと、心を込めて大きな声で言えるか。これは他の仕事にも通じることだと考えています。
      </p>
      <p>
        自分も気持ちよく、相手の人にも気持ちよくなってもらい仕事をする、そんなことが当たり前にできる会社を目指しています。
      </p>
    </div>
    <!-- 社名簡介 -->
    <table class="company-table">
      <tr>
        <th>社名</th>
        <td>ロジファスト株式会社</td>
      </tr>
      <tr>
        <th>創業</th>
        <td>2025年1月10日</td>
      </tr>
      <tr>
        <th>資本金</th>
        <td>900万円</td>
      </tr>
      <tr>
        <th>所在地</th>
        <td>
          〒232-0021<br />
          神奈川県横浜市南区真金町2丁目19-21<br />
          クオス横浜大通り公園704<br />
          TEL:045-315-5316（代表）<br />
          ※営業のお電話はご遠慮ください
        </td>
      </tr>
      <tr>
        <th>代表取締役</th>
        <td>川村　強</td>
      </tr>
      <tr>
        <th>事業業務</th>
        <td>
          倉庫業・ロジスティクス業務<br />
          貨物自動車運送事業<br />
          通関代行業務<br />
          消耗品販売業務<br />
          情報システムの開発及び販売運営業務<br />
          国際宅配業務<br />
          各種物品の企画、製造、販売及び輸出入<br />
          SCMコンサルティング業務
        </td>
      </tr>
      <tr>
        <th>関連会社</th>
        <td>ゴイチマル株式会社</td>
      </tr>
    </table>

    <!-- 主なサービスメニュー -->
    <div class="hero-title-container">
      <p class="hero-title main">主なサービスメニュー</p>
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
  font-size: 28px; /* 第一行最大字体 */
  font-weight: bold; /* 加粗 */
  margin-top: 20px; /* 上邊距 */
  margin-bottom: 10px; /* 下邊距 */
  line-height: 1.6;
  color: #585757;
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
  font-size: 16px;
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
    background-color: #ffffff; /* 白色行 */
  }

  tr:nth-child(even) {
    background-color: #f1efef; /* 淺灰色行 */
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
</style>
