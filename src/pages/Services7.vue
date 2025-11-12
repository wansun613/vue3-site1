<template>
  <section>
    <div class="section-title-wrapper">
      <div class="section-title">
        <span class="left-bg"></span>
        <span class="right-bg"></span>
        <span class="slash"></span>
        <h1 class="animated-title">FBA納品代行</h1>
      </div>
    </div>
    <!-- 1文字 -->
    <div class="hero-text">
      <p class="hero-title main">
        FBAとはAmazonが提供するフルフィルメントサービス
      </p>
      <p>
        FBA（フルフィルメント
        byAmazon）とは、amazon社が提供する納品代行サービスを指します。amazon自体がECにおける商品の保管、注<br />
        文処理、出荷、配送、返品対応、カスタマー対応などの一連のバックヤード業務を代行してくれるため、一気に業務負担が軽減されます。
      </p>
      <p>
        ECの物流作業には在庫管理、受注処理、発送業務、顧客対応など、細かいタスクが多く、タスクを消化するのにリソースがひっ迫する事態<br />
        が起こりがちです。そのような状況を事前に防ぐために、FBAを利用して物流作業をアウトソーシングすることは有効な手段となります。
      </p>
    </div>
    <!-- 2文字 -->
    <div class="hero-text">
      <p class="hero-title main">
        FBA納品業務を代行して面倒な業務の軽減をサポート
      </p>
      <p>
        そして、amazon倉庫へ商品を納品するためには、商品一つ一つにFBA専用の「商品ラベル」を貼り、amazonが定める規格に準じて検品、<br />
        梱包、納品をしなければなりません。
      </p>
      <p>
        ロジファストではこれらの業務を一手にお引き受けすることで、発送手続きにかかっていた時間を商品仕入れ、新商品の開発、サービス向<br />
        上、マーケティングなどのコア業務に集中できる環境を提供します。
      </p>
      <p>
        現在、FBAを利用している方だけでなく、これからFBAを利用される予定の方や本業が忙しく海外からの荷受けや発送する時間がない方、<br />
        仕入れ以外の作業を自動化したいとお考えの方はぜひ、ロジファストのFBA納品代行サービスをご利用ください。
      </p>
    </div>
    <!-- 3文字 -->
    <div class="hero-text">
      <p class="hero-title main">基本的な代行サービスの内容</p>
    </div>
    <!-- 灰色背景文字 -->
    <div class="product-section">
      <ul class="product-list">
        <li>商品の入庫・受け取り</li>
        <li>商品の検品・動作確認</li>
        <li>商品のセット組み・OPP袋入れ</li>
        <li>商品ラベル・配送ラベルの発行</li>
        <li>商品ラベル（バーコード）の貼付け</li>
        <li>商品の梱包・出荷</li>
        <li>Amazon指定倉庫への納品</li>
      </ul>
    </div>

    <!--よくある質問  -->
    <div class="hero-text">
      <p class="hero-title main">FBA納品代行に関するよくある質問</p>
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
    title: 'FBA納品代行サービスとは何ですか？',
    content:
      'FBA納品代行サービスは、AmazonのFBA倉庫に商品を納品する際に、商品準備からラベル貼り、発送までを代行するサービスです。これにより、出品者は在庫管理や出荷の手間を省くことができます。',
  },
  {
    title: 'どのような商品が取り扱い可能ですか？',
    content:
      'ほとんどのカテゴリーの商品が取り扱い可能ですが、一部の危険物や規制品は対応できない場合があります。詳細については、個別にご相談ください。',
  },
  {
    title: '料金体系はどうなっていますか？',
    content:
      '料金体系は、商品数や作業内容によって異なります。詳細な見積もりは、お問い合わせいただければご提供いたします。',
  },
  {
    title: '納品までのリードタイムはどのくらいですか？',
    content:
      '通常、商品が弊社倉庫に到着してから2〜5営業日以内にAmazonのFBA倉庫に納品されます。ただし、数量、繁忙期により多少の遅延が発生する場合があります。',
  },
  {
    title: '商品の保管期間はどのくらいですか？',
    content:
      '通常、商品は弊社倉庫に到着してから迅速にAmazonのFBA倉庫に送付されます。特別な事情がある場合は、事前にご相談ください。',
  },
  {
    title: 'どのようにして商品を送ればよいですか？',
    content:
      '商品は弊社指定の倉庫にお送りください。発送方法や梱包指示については、事前に詳細をご案内いたします。',
  },

  {
    title: '商品のラベル貼りや梱包はどのように行われますか？',
    content:
      'Amazonのガイドラインに従って、商品のラベル貼りや梱包を行います。特殊な要求がある場合は、事前にお知らせください。',
  },
  {
    title: '商品が紛失したり、破損した場合の補償はありますか？',
    content:
      '弊社のミスによる商品紛失や破損については、補償を提供します。ただし、補償範囲については契約内容に基づきます。',
  },

  {
    title: '月間最低利用料や契約期間はありますか？',
    content:
      '月間最低利用料や契約期間については、プランによって異なります。契約前に詳細をご案内いたしますので、ご相談ください。',
  },
  {
    title: 'セット組は可能ですか？',
    content:
      '可能ですが、一部対応できない場合があります。詳細については、個別にご相談ください。',
  },
  {
    title: '納品前に検品や品質チェックは行われますか？',
    content:
      '別途オプションになりますが、品質検品（仕様の確認、傷、汚れなど）、動作確認が可能です。',
  },
  {
    title: '中古商品は受け入れ可能ですか？',
    content: '中古品の受け入れは対応しておりません。',
  },
  {
    title: '大型商品は取り扱いできますか？',
    content: '大型商品のお取り扱いはできません。',
  },
  {
    title: '海外からの商品も取り扱い可能ですか？',
    content:
      'はい、海外からの商品も取り扱い可能です。ただし、関税や輸入手続きについてはお客様のご負担となります。',
  },
  {
    title: '納品代行サービスの開始手続きはどのように行えばよいですか？',
    content: 'お問い合わせいただければ、詳細な手順をご案内いたします。',
  },
  {
    title: '海外のFBA倉庫への納品は可能ですか？',
    content: '海外のFBA倉庫への納品は対応しておりません。。',
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
