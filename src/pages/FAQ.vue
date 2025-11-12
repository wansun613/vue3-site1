<template>
  <section>
    <div class="section-title-wrapper">
      <div class="section-title">
        <span class="left-bg"></span>
        <span class="right-bg"></span>
        <span class="slash"></span>
        <h1 class="animated-title">よくある質問</h1>
      </div>
    </div>
    <!-- 1文字 -->
    <div class="hero-text">
      <p class="hero-title main">EC物流・発送代行サービスについて寄せられる</p>
      <p class="hero-title main">質問とその回答をご紹介します</p>
      <p>
        保管可能な商品、対応可能なECモール・カートASP、対応可能な業務、費用感など、ロジファストのEC物流・発送代行サービスに関<br />
        する様々な疑問にお答えします。無料相談会や倉庫見学も随時実施しておりますので、お気軽にご相談ください。<br />
      </p>
    </div>

    <!-- 1. EC物流代行について -->
    <div class="hero-text">
      <p class="hero-title main">EC物流代行について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions1"
        :key="'a1-' + index"
        @click="toggle1(index)"
        :class="{ hovered: hoveredIndex1 === index }"
        @mouseenter="hoveredIndex1 = index"
        @mouseleave="hoveredIndex1 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex1 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex1 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 2. FBA納品代行について -->
    <div class="hero-text">
      <p class="hero-title main">FBA納品代行について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions2"
        :key="'a2-' + index"
        @click="toggle2(index)"
        :class="{ hovered: hoveredIndex2 === index }"
        @mouseenter="hoveredIndex2 = index"
        @mouseleave="hoveredIndex2 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex2 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex2 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 3. オリジナルダンボール作成について -->
    <div class="hero-text">
      <p class="hero-title main">オリジナルダンボール作成について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions3"
        :key="'a3-' + index"
        @click="toggle3(index)"
        :class="{ hovered: hoveredIndex3 === index }"
        @mouseenter="hoveredIndex3 = index"
        @mouseleave="hoveredIndex3 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex3 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex3 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 4. 名入れギフトについて -->
    <div class="hero-text">
      <p class="hero-title main">名入れギフトについて</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions4"
        :key="'a4-' + index"
        @click="toggle4(index)"
        :class="{ hovered: hoveredIndex4 === index }"
        @mouseenter="hoveredIndex4 = index"
        @mouseleave="hoveredIndex4 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex4 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex4 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 5. ギフト包装について -->
    <div class="hero-text">
      <p class="hero-title main">ギフト包装について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions5"
        :key="'a5-' + index"
        @click="toggle5(index)"
        :class="{ hovered: hoveredIndex5 === index }"
        @mouseenter="hoveredIndex5 = index"
        @mouseleave="hoveredIndex5 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex5 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex5 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 6. ご契約について -->
    <div class="hero-text">
      <p class="hero-title main">ご契約について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions6"
        :key="'a6-' + index"
        @click="toggle6(index)"
        :class="{ hovered: hoveredIndex6 === index }"
        @mouseenter="hoveredIndex6 = index"
        @mouseleave="hoveredIndex6 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex6 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex6 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 7. セット組・同梱物について -->
    <div class="hero-text">
      <p class="hero-title main">セット組・同梱物について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions7"
        :key="'a7-' + index"
        @click="toggle7(index)"
        :class="{ hovered: hoveredIndex7 === index }"
        @mouseenter="hoveredIndex7 = index"
        @mouseleave="hoveredIndex7 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex7 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex7 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 8. タグ・ラベル貼付について -->
    <div class="hero-text">
      <p class="hero-title main">タグ・ラベル貼付について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions8"
        :key="'a8-' + index"
        @click="toggle8(index)"
        :class="{ hovered: hoveredIndex8 === index }"
        @mouseenter="hoveredIndex8 = index"
        @mouseleave="hoveredIndex8 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex8 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex8 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 9. 保管・荷役について -->
    <div class="hero-text">
      <p class="hero-title main">保管・荷役について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions9"
        :key="'a9-' + index"
        @click="toggle9(index)"
        :class="{ hovered: hoveredIndex9 === index }"
        @mouseenter="hoveredIndex9 = index"
        @mouseleave="hoveredIndex9 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex9 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex9 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 10. 出荷・発送について -->
    <div class="hero-text">
      <p class="hero-title main">出荷・発送について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions10"
        :key="'a10-' + index"
        @click="toggle10(index)"
        :class="{ hovered: hoveredIndex10 === index }"
        @mouseenter="hoveredIndex10 = index"
        @mouseleave="hoveredIndex10 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex10 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex10 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 11. 出荷対応について -->
    <div class="hero-text">
      <p class="hero-title main">出荷対応について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions11"
        :key="'a11-' + index"
        @click="toggle11(index)"
        :class="{ hovered: hoveredIndex11 === index }"
        @mouseenter="hoveredIndex2 = index"
        @mouseleave="hoveredIndex2 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex11 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex11 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 12. 在庫管理について -->
    <div class="hero-text">
      <p class="hero-title main">在庫管理について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions12"
        :key="'a12-' + index"
        @click="toggle12(index)"
        :class="{ hovered: hoveredIndex12 === index }"
        @mouseenter="hoveredIndex12 = index"
        @mouseleave="hoveredIndex12 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex12 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex12 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 13. 料金について -->
    <div class="hero-text">
      <p class="hero-title main">料金について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions13"
        :key="'a13-' + index"
        @click="toggle13(index)"
        :class="{ hovered: hoveredIndex13 === index }"
        @mouseenter="hoveredIndex13 = index"
        @mouseleave="hoveredIndex13 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex13 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex13 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 14. 検品について -->
    <div class="hero-text">
      <p class="hero-title main">検品について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions14"
        :key="'a14-' + index"
        @click="toggle14(index)"
        :class="{ hovered: hoveredIndex14 === index }"
        @mouseenter="hoveredIndex14 = index"
        @mouseleave="hoveredIndex14 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex14 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex14 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 15. 検針について -->
    <div class="hero-text">
      <p class="hero-title main">検針について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions15"
        :key="'a15-' + index"
        @click="toggle15(index)"
        :class="{ hovered: hoveredIndex15 === index }"
        @mouseenter="hoveredIndex15 = index"
        @mouseleave="hoveredIndex15 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex15 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex15 === index">
          {{ item.content }}
        </div>
      </div>
    </div>

    <!-- 16.運営会社について -->
    <div class="hero-text">
      <p class="hero-title main">運営会社について</p>
    </div>
    <div class="accor">
      <div
        class="accordion"
        v-for="(item, index) in accordions16"
        :key="'a16-' + index"
        @click="toggle16(index)"
        :class="{ hovered: hoveredIndex16 === index }"
        @mouseenter="hoveredIndex16 = index"
        @mouseleave="hoveredIndex16 = null"
      >
        <div class="accordion-header">
          <span>{{ item.title }}</span>
          <span class="arrow">
            {{ openIndex16 === index ? '－' : '＋' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex16 === index">
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
// EC物流代行について
const openIndex1 = ref(null);
const hoveredIndex1 = ref(null);
const toggle1 = (index) => {
  openIndex1.value = openIndex1.value === index ? null : index;
};

const accordions1 = [
  {
    title: '対応しているECサイトなどはありますか?',
    content:
      '楽天市場、Yahoo!ショッピングといったモールとはAPI連携にて対応可能です。その他多数のカートや 受注管理システムとの連携も可能です。',
  },
  {
    title: 'リピート通販は対応可能ですか?',
    content:
      '当社の倉庫管理システムは、リピート通販に対応したシステムとなっております。',
  },
  {
    title: 'ギフトラッピングは対応可能ですか?',
    content: '包装紙、巾着、リボンかけなど多彩なラッピングに対応しております。',
  },
  {
    title: 'BtoBとBtoCの両方に対応できますか?',
    content: 'はい。どちらか一方だけでも対応できます。',
  },
  {
    title: 'どのような受注管理ソフトでも対応できますか?',
    content:
      'CSVファイルで受注データを出力いただければ、問題ありません。一部API連携のソフトもございます。受注管理ソフトをお持ちでない場合は、当社提供のソフトを利用いただけます。',
  },
  {
    title: '季節による出荷の波動があるのですが、対応可能でしょうか?',
    content:
      'はい。最適な人員配置や臨機応変なレイアウト変更にて波動にもスムーズに対応します。',
  },
  {
    title: '印刷物を同梱してもらうことはできますか?',
    content: 'はい。チラシやサンプルなども封入同梱いたします。',
  },
  {
    title: 'インターネット通販を行っているのですが、どこまで対応できますか?',
    content:
      'システム連携やギフトラッピングはもちろん、販売代行に至るまでのサービスを提供いたします。',
  },
  {
    title: '物量が少ないのですが、対応可能でしょうか?',
    content:
      '当社は中堅・中小企業のための物流企業です。物量が少ないからといって、お断りすることはありま せん。丁寧に対応させていただきます。',
  },
];
//
//FBA納品代行について
const openIndex2 = ref(null);
const hoveredIndex2 = ref(null);
const toggle2 = (index) => {
  openIndex2.value = openIndex2.value === index ? null : index;
};
const accordions2 = [
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
    content: 'お问い合わせいただければ、详细な手顺をご案内いたします',
  },
  {
    title: '海外のFBA倉庫への納品は可能ですか？',
    content: '海外のFBA倉庫への納品は対応しておりません。',
  },
];
//オリジナルダンボール作成について
const openIndex3 = ref(null);
const hoveredIndex3 = ref(null);
const toggle3 = (index) => {
  openIndex3.value = openIndex3.value === index ? null : index;
};
const accordions3 = [
  {
    title: 'どのようなダンボールがありますか？',
    content:
      '通常よく見る無地で宅配サイズに合わせたダンボールから、ネコポスサイズのもの、ショップのロゴや店舗名を印刷したもの、目立つよう白地のダンボール、こわれものが多い場合は強度のあるダンボールや内側にプチプチのついた袋タイプのものなど、お客様に合わせたダンボールをご提案いたします。',
  },
  {
    title: 'ダンボール以外にもオリジナリティーを出せるものはありますか？',
    content:
      'ダンボールをとめるテープ自体にショップのロゴや店舗名を印刷したり、緩衝材もハート型をしたプチプチを使用したり、ピンク色のクラフト紙を使用するケースがございます。',
  },
  {
    title: '少量からでも作成してもらえますか？',
    content: '1枚あたりの単価は上がってしまいますが少量からでも作成可能です。',
  },
  {
    title: 'ギフト関連についても対応可能ですか？',
    content:
      '包装紙や巾着などのラッピング、熨斗付けやメッセージカード、手提げ袋の同梱、ギフトボックスへのセット組などを行っております。',
  },
  {
    title: 'サスティナブルやエコの素材も準備できますか？',
    content:
      'ダンボール自体が古紙として再利用されてる他に、土にかえる緩衝材や脱プラスチック素材の緩衝材などもご提案できます。',
  },
  {
    title: 'チラシの作成もお願いできますか？',
    content:
      'チラシの作成は行っておりません。作成したチラシを印刷し同梱することは可能です。',
  },
  {
    title: '季節やイベントに合わせて変更することも可能ですか？',
    content:
      'クリスマスなどのシーズンイベントに合わせて、各種資材を変更することも可能です。お気軽にご相談ください。',
  },
  {
    title: 'なるべくコストを抑えてオリジナリティーを出す方法はありますか？',
    content:
      'お客様の出荷量が少ない場合は、無駄な保管費用が発生しないよう少量から作成。出荷量が増えてきたら、ボリュームディスカウントのメリットを活かし大量に作成することをお勧めします。お客様の状況に合わせてご提案いたします。',
  },
];
//名入れギフトについて
const openIndex4 = ref(null);
const hoveredIndex4 = ref(null);
const toggle4 = (index) => {
  openIndex4.value = openIndex4.value === index ? null : index;
};
const accordions4 = [
  {
    title: '加工できないものはありますか?',
    content:
      '名入れ面が平面でないもの（でこぼこ、ざらざらしているもの）、PET（ペットボトルなどのポリエチレン製品）。ご判断が難しい場合は、お気軽に内容をお知らせください。',
  },
  {
    title: '何文字まで入れられますか?',
    content:
      '商品サイズ、文字の大きさによります。一行にたくさんの文字を入れたい場合は文字サイズが小さくなり、文字がつぶれて綺麗に仕上がりません。最適な文字数をご提案させていただきます。',
  },
  {
    title: '文字（フォント）の種類は選べますか',
    content:
      '日本語対応3種、英語2種を用意しております。別途オプションでGooleフォントの利用が可能ですのでご相談下さい。',
  },
  {
    title: '名入れの位置はどこになりますか？',
    content: '商品により都度最適な位置をご提案させていただきます。',
  },
  {
    title: '色は指定できますか？',
    content:
      '色の指定はできません。素材の色となります。（色入れ、色付けは行っておりません）',
  },
  {
    title: '旧字体は入れられますか？',
    content:
      '旧字の使用は可能です。サポートする文字コードはShift JISになります。髙のような外字は使用できません。',
  },
  {
    title: '文字数が多いので2行に分けて印刷したいのですが出来ますか？',
    content: '可能ですが商品の大きさ、形状により1行となります。',
  },
  {
    title: 'ワンポイントマークを入れられますか？',
    content: '可能です。ご相談ください。',
  },
  {
    title: 'ワンポイントマークのデータの入稿方法を教えてください？',
    content: 'PNGでデータをお送り下さい。',
  },
  {
    title: 'ワンポイントマークを入れる位置は決まっているのですか?',
    content:
      'ご相談ください。ご希望の位置に印字できるか確認が必要です。場合によりご希望の位置にできない場合があります。',
  },
  {
    title: 'ラッピングの種類は指定できますか?',
    content:
      '巾着、包装紙2種類からお選び頂けます。指定の包装がある場合、ご相談ください。',
  },
  {
    title: '曲がりくねった指輪に刻印可能ですか？',
    content: '申し訳ございません。機械の特性上、曲面に刻印できません。',
  },
  {
    title: '加工の失敗とかミスはありますか？',
    content:
      '刻印加工も手作業と同じで人間がする事ですので、失敗することもあります。また、同じ商品でも素材の固体差がありますので、レーザー刻印機器の出力設定は同じでも仕上がりが変わることがあります。弊社実績で1.56%のミス率となっています。',
  },
  {
    title: '失敗した時は商品を弁償してくれますか？',
    content: '申し訳ございません。基本、弁償はお断りします。',
  },
  {
    title: '名入れだけしてもらえますか？',
    content:
      '申し訳ございません。物流業務を含めたサービスとなっているため名入れのみの対応はしておりません。',
  },
  {
    title: '物流代行の料金表はありますか？',
    content:
      '物流の御見積の費用項目は、作業内容や物量によって大きく変わるため、まずは業務内容や物量、御社の実現したいことをヒアリングさせていただきます。',
  },
  {
    title: '契約期間はありますか？',
    content:
      '契約期間を1年以上から適用させていただいております。その後自動更新となります。',
  },
  {
    title: '365日対応可能ですか？',
    content: '可能です。ご相談ください。',
  },
];
//5.ギフト包装について
const openIndex5 = ref(null);
const hoveredIndex5 = ref(null);
const toggle5 = (index) => {
  openIndex5.value = openIndex5.value === index ? null : index;
};
const accordions5 = [
  {
    title: 'どのようなギフト包装に対応していますか？',
    content:
      '冠婚葬祭やギフト関連で培った経験と技術をもとに、包装紙でのラッピング、ひも付き巾着やリボン、お客様オリジナルの資材でのラッピングなどに対応しております。',
  },
  {
    title: 'ギフト包装をお願いする場合どのようにすればいいですか？',
    content:
      '包装内容について事前に打合せさせていただきます。お気軽にご相談ください。',
  },
  {
    title: 'ギフト包装資材の在庫管理をお願いできますか？',
    content:
      '通常商品と同様に対応可能です。在庫管理することで包装資材の機会損失防止に繋がりま',
  },
  {
    title:
      'ギフト包装を取り入れたいが、どのように進めていけばいいかわかりません？',
    content:
      'まずはお気軽にご相談ください。これまで様々なギフト包装を行ってきたノウハウをもとに、お客様に合ったギフト包装をご提案いたします。',
  },
  {
    title: 'ギフト包装の他にメッセージカードなどを添えることは可能ですか？',
    content: 'どのくらいの量をギフト包装できますか？',
  },
  {
    title: 'どのくらいの量をギフト包装できますか？',
    content:
      '包装内容につきまして事前に詳細について打合せの上ご提案させていただきます。お気軽にご相談ください。',
  },
  {
    title: '季節ごとにギフト包装を変えることはできますか？',
    content:
      'クリスマスなどのシーズンイベントに合わせて、変更することも可能です。お気軽にご相談ください。',
  },
  {
    title: 'ギフト包装以外のギフト対応サービスはありますか？',
    content:
      '新たなサービスとして、お客様の商品自体にお名前やメッセージ、ロゴなどをレーザー機を使って名入れをするサービスをはじめました。まずはお気軽にご相談ください。',
  },
];
//ご契約について
const openIndex6 = ref(null);
const hoveredIndex6 = ref(null);
const toggle6 = (index) => {
  openIndex6.value = openIndex6.value === index ? null : index;
};
const accordions6 = [
  {
    title: '物流倉庫を見学することはできますか？',
    content:
      'かのうです。作業風景や保管状況など、実際の現場で確認いただけます。',
  },
  {
    title: '契約期間はありますか？',
    content:
      '2年契約となります。その後1年毎自動更新となります。期間内解約については、3ヶ月前通知にて可能です。',
  },
  {
    title: '乗換えの際の移行はスムーズに移行できますか？',
    content:
      'これまでの経験を基に、システム面や在庫の移動をスムーズに行います。',
  },
];
//セット組・同梱物について
const openIndex7 = ref(null);
const hoveredIndex7 = ref(null);
const toggle7 = (index) => {
  openIndex7.value = openIndex7.value === index ? null : index;
};
const accordions7 = [
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
//タグ・ラベル貼付について
const openIndex8 = ref(null);
const hoveredIndex8 = ref(null);
const toggle8 = (index) => {
  openIndex8.value = openIndex8.value === index ? null : index;
};
const accordions8 = [
  {
    title: '化粧品のラベル貼りや貼替えなども対応していますか？',
    content: '化粧品製造業許可を取得していない為、対応しておりません。',
  },
  {
    title: 'ラベルの作成からお願いできますか？',
    content:
      '商品コードの作成から行っています。その他商品名や販売価格などの作成も可能です。事前にご連絡いただくなど詳細を確認させていただき、お客様に合わせたラベルの内容やサイズをご提案いたします。',
  },
  {
    title: 'どんなタグ付けやラベル貼りを行っていますか？',
    content:
      'JANコードや品番ラベル、プライスタグや輸入品などの日本語表示ラベル、品質保持期限ラベル、封緘ラベル、送り状ラベル貼りなどがございます。',
  },
  {
    title: 'バーコードラベルも作成できますか？',
    content:
      '作成可能です。事前にご連絡いただくなど詳細を確認させていただき、お客様に合わせたラベルの内容やサイズをご提案いたします。',
  },
  {
    title: '一日にどのくらいのタグ付けやラベル貼りに対応してもらえますか？',
    content:
      'タグ付けやラベル貼りの位置や商品特性によって変わります。事前にご連絡いただくなど詳細を確認させていただき、可能な限り対応させていただきます。',
  },
  {
    title:
      '当日入庫したものを当日タグ付けやラベル貼りしてもらうことは可能ですか？',
    content:
      '事前にご連絡いただくなど詳細を確認させていただき、可能な限り対応させていただきます。',
  },
  {
    title: '土日・祝日の対応は可能ですか?',
    content:
      '事前にご連絡いただくなど詳細を確認させていただき、可能な限り対応させていただきます。',
  },
];
//保管・荷役について
const openIndex9 = ref(null);
const hoveredIndex9 = ref(null);
const toggle9 = (index) => {
  openIndex9.value = openIndex9.value === index ? null : index;
};
const accordions9 = [
  {
    title: '保管できない商品はありますか？',
    content:
      '温度管理を伴う商品、湿度管理を伴う商品、生鮮食品、危険物、特別管理の商品、匂いを発する（臭いが外部に漏れなければ可能）商品、大型の商品、医薬品、高価な商品などは保管できません。',
  },
  {
    title: '保管している商品を廃棄したい場合は、どうすればいいですか？',
    content:
      '当社と提携している廃棄業者を利用しての処分、もしくは海外転売することが可能です。 当社が運営している楽天市場、Yahoo!ショッピングのECサイトでの販売も可能です。また、年1回バ ザールを開催していますのでそちらもご利用下さい。',
  },
  {
    title: '商品の入出庫管理はどのようになってますか？',
    content:
      '倉庫管理システムにてハンディスキャナーを用いて、商品照合並びに数量確認を行います。出庫は入庫日の古い順に出庫する先入れ先出しが基本となりますが、食品などの品質保持期限のあるものは期限の近いものから出庫を。ロット管理が必要なものはロット指定での出庫も対応いたします。',
  },
  {
    title: '保管できない商品はありますか？',
    content:
      '生物や温度管理、湿度管理を伴う商品、匂いを発する商品、危険物や医薬品、重量物や大型商品、高額商品など、法令に基づいて保管できない商品がございます。',
  },
  {
    title: 'どのような保管方法がありますか？',
    content:
      'パレット保管や棚保管を中心に、商品サイズや入出庫の頻度、在庫管理の単位（ケース単位、ピース単位など）に合わせて、適正な保管を行います。一括入庫でまとまった量を保管する場合は、保管スペースをアクティブとリザーブに分け、アクティブは棚保管、リザーブはパレット保管とするなど、効率的な保管方法を提案いたします。',
  },
  {
    title: '保管料金の最少単位はありますか？',
    content:
      '1パレット（1.1mX1.1m）もしくは1棚（1.8mX0.45m）が最小単位となります。',
  },
  {
    title: '当日入庫したものを当日出庫することはできますか？',
    content: '基本的に対応しておりません。',
  },
  {
    title: '土日・祝日の入出庫対応は可能ですか？',
    content: '平日のみの対応となっております。',
  },
  {
    title: '商品の納入方法はどのようなものがありますか？',
    content:
      '宅配便、トラック混載便、トラックチャーター便（2t、4t、10t）、海上コンテナ、自家用車での持ち込み、郵便などがございます。',
  },
  {
    title: '海上コンテナ４０フィートの荷降ろしもできますか？',
    content:
      '可能です。２０フィートも可能です。パレット降ろしとバラ降ろしで料金が異なります。',
  },
  {
    title: '商品はどのように入庫されますか？',
    content:
      'お客様からいただいた入庫情報を基に、お客様と取り決めた入庫作業内容で荷受け後担当の作業チームが商品照合、数量確認の上システム計上し所定の保管場所に商品を格納いたします。お客様の方で弊社システムにログインいただくと、入庫情報が確認いただけます。',
  },
  {
    title: '商品はどのように出庫されますか？',
    content:
      'お客様からいただいた出庫情報を基に、お客様と取り決めた出庫作業内容で担当の作業チームが商品照合、数量確認の上所定の保管場所から商品を出庫、梱包いたします。荷渡し場にて運送会社へ引き渡します。お客様の方で弊社システムにログインいただくと、運送会社問合せ番号等の出庫情報が確認いただけます。',
  },
  {
    title: '保管するにあたって最小単位はありますか？',
    content:
      '1点からの保管も可能ですが、保管料金としては1パレット（1.1mX1.1m）もしくは1棚（1.8mX0.45m）分の料金がかかります。',
  },
  {
    title: '取扱商品はどんなものがありますか？',
    content:
      'キッチン・トイレ・バス回り用品、革小物類、ステーショナリーなど、セレクトショップや百貨店など街で目にする生活雑貨品を多く取り扱っております。',
  },
  {
    title: '定温倉庫は何度に設定していますか？',
    content: '24時間365日14度で設定しております。湿度は管理しておりません。',
  },
];
//出荷・発送について
const openIndex10 = ref(null);
const hoveredIndex10 = ref(null);
const toggle10 = (index) => {
  openIndex10.value = openIndex10.value === index ? null : index;
};
const accordions10 = [
  {
    title: '作業がかなり特殊なのですが、対応可能でしょうか？',
    content:
      'これまでも通電や動作確認などの様々な特殊作業を経験しております。たいていの作業であれば対応可能です。お気軽にご相談ください。',
  },
  {
    title: 'あす楽、あすつくは対応可能ですか？',
    content:
      '当日出荷時間内で対応いたします。当日出荷時間については、詳細を打合せした上で決定する形となります。',
  },
  {
    title: '出荷の品質保持はどのようにして行われますか？',
    content:
      'バーコードスキャン、ISO9001（品質向上を目的とした品質マネジメントシステム規格）で培ったノウハウを基に正確な出荷を行います。',
  },
  {
    title: '当日出荷は何時まで対応可能ですか？',
    content:
      '詳細を打合せした上で決定する形となります。また緊急出荷などがある場合もご相談ください。柔軟に対応させていただきます。',
  },
];
//出荷対応について
const openIndex11 = ref(null);
const hoveredIndex11 = ref(null);
const toggle11 = (index) => {
  openIndex11.value = openIndex11.value === index ? null : index;
};
const accordions11 = [
  {
    title: '受注データの受け渡しはどうなりますか？',
    content:
      'ECモールやカートシステムとの自動連係を行う方法と、利用しているシステムから受注データをCSVファイルで出力し弊社システムに落とす方法と、弊社から提供するCSVファイルフォーマットに受注情報を入力し弊社システムに落とす方法の３パターンで受け渡しが可能です。',
  },
  {
    title: '当日出荷は対応可能ですか？',
    content:
      '対応可能です。物量や作業内容により締め時間を設定させていただきます。',
  },
  {
    title: '在庫の確認をしたいときはどうすればいいですか？',
    content:
      '弊社システムにログインいただければ、いつでも確認いただけます。在庫の他に、入庫や出庫の確認も可能です。',
  },
  {
    title: '一日にどのくらいの出荷に対応してもらえますか？',
    content:
      '作業内容や締め時間によって変わります。事前にご連絡いただくなど詳細 を確認させていただき、可能な限り対応させていただきます。',
  },
  {
    title: '当日入庫したものを当日出庫してもらうことは可能ですか？',
    content: '基本的に対応しておりません。',
  },
  {
    title: '土日・祝日の出庫対応は可能ですか？',
    content: '平日のみの対応となっております。',
  },
  {
    title: 'チラシやカタログなどを一緒に梱包して出庫してもらえますか？',
    content:
      '可能です。システムで商品と紐づけたり、注文者名と紐づけたりすることで、 自動的に必要なチラシやカタログを一緒に出庫いたします。',
  },
  {
    title: 'ギフトラッピングやメッセージカードの対応は可能ですか？',
    content: 'デパート包装、リボンがけなど様々なラッピングが可能です。',
  },
  {
    title: '出荷をキャンセルの対応は可能ですか？',
    content:
      'システムでキャンセルできます。キャンセル出来ない場合は、既に作業中もしくは作業完了している為、お電話で対応いたします。別途キャンセル料金が発生致します。',
  },
  {
    title: '出荷ミスがあった時はどのように対応してもらえますか？',
    content:
      '再出荷等、状況に応じて対応させていただきます。その後、発生原因を追及し再発防止策立案実施について、お客様に報告させていただきます。',
  },
  {
    title: '発送用段ボールなどの包装資材の手配も可能ですか？',
    content:
      '可能です。発送用段ボールは60サイズ～１６０サイズまで、その他緩衝材やテープ類を大量購入にて安価で取り揃えております。',
  },
  {
    title: '配送業者の指定はありますか？',
    content: '佐川急便、ヤマト運輸からお選びいただきます。',
  },
  {
    title: 'リピート通販の出庫にも対応できますか？',
    content:
      'システムもリピート通販に対応していますので、お気軽にお問合せください。',
  },
  {
    title: '受注処理対応もお願いできますか？',
    content: '申し訳ございません。現状対応しておりません。',
  },
  {
    title: '締め時間を過ぎての出庫はお願いできますか？',
    content: '状況に応じて判断させていただきますので、ご連絡ください。',
  },
];
//在庫管理について
const openIndex12 = ref(null);
const hoveredIndex12 = ref(null);
const toggle12 = (index) => {
  openIndex12.value = openIndex12.value === index ? null : index;
};
const accordions12 = [
  {
    title: '在庫管理はどのように行っていますか？',
    content:
      '最新のクラウド型の在庫管理システムを活用し、商品や入出庫頻度に合わせた保管レイアウトやロケーション管理を行い、正確でスムーズな入出庫管理を行っております。',
  },
  {
    title: '在庫誤差はありますか？',
    content:
      '近い将来誤差ゼロ実現を目指し、現在は出荷誤差発生率0.007%のところまで来ました。今後も誤差発生時のQC活動を徹底し、精度向上を目指します。',
  },
  {
    title: '在庫の確認をしたいときはどうすればいいですか？',
    content:
      '弊社システムにログインいただければ、いつでも確認いただけます。在庫の他に、入庫や出庫の確認も可能です。',
  },
  {
    title: '賞味期限などのロット管理も可能ですか？',
    content:
      '賞味期限の他に品質保持期限や製造ロットナンバー、シリアルナンバーなども管理可能です。',
  },
  {
    title: '販売管理も可能ですか？',
    content: '対応しておりません。',
  },
  {
    title: '仕入れや発注管理も可能ですか?',
    content: '対応しておりません。',
  },
  {
    title: '商品以外のチラシやカタログなどの販促も在庫管理できますか？',
    content:
      '商品同様可能です。包装紙やショッパーなども実際に在庫管理を行っております。',
  },
  {
    title: '在庫に誤差が見つかった場合はどうなりますか？',
    content:
      '取り急ぎ実在庫に合わせ在庫調整の上、誤差原因調査の上誤差理由を報告させていただきます。当社の問題で誤差が発生した場合については、対策立案の上再発防止に努めます。',
  },
];
//料金について
const openIndex13 = ref(null);
const hoveredIndex13 = ref(null);
const toggle13 = (index) => {
  openIndex13.value = openIndex13.value === index ? null : index;
};
const accordions13 = [
  {
    title: '大体の費用感はどれくらいですか？',
    content:
      '作業内容などの前提条件をヒアリングさせていただき、お見積りいたします。',
  },
  {
    title: 'どういった料金がかかりますか？',
    content:
      '基本的には、保管料、入庫料、出庫料、付帯作業料、配送料がかかります。',
  },
];
//検品について
const openIndex14 = ref(null);
const hoveredIndex14 = ref(null);
const toggle14 = (index) => {
  openIndex14.value = openIndex14.value === index ? null : index;
};
const accordions14 = [
  {
    title: 'どのような檢品可能ですか？',
    content:
      '財布、バッグなどの縫製品以外に、文具、食器、ガラス製品、時計などの小型電子機器などの実績があります。どんな商品でも一度ご相談ください。※化粧品、管理医療機器の検品はできません。',
  },
  {
    title: '作業の依頼はいつまでに申し込めばいいですか？',
    content:
      '入荷日とご希望納期をわかり次第お知らせいただければ、速やかに作業段取りを調整いたします。',
  },
  {
    title: '一日にどのくらいの数量の作業が可能ですか？',
    content:
      '製品、検品内容により異なります。詳細をお知らせ頂ければ、日数をお伝えすることは可能です。',
  },
  {
    title: '当日に依頼して、当日のうちに仕上げてもらうことは可能ですか？',
    content: '基本的に対応しておりません。',
  },
  {
    title: '土日・祝日の対応は可能ですか？',
    content: '平日のみの対応となっております。',
  },
  {
    title: 'コンテナの荷役は可能ですか？',
    content: '20フィート、40フィートともに問題ございません。',
  },
  {
    title: '検品料金はどれくらいかかりますか？',
    content:
      '製品の種類や検査方法、検査頻度によって異なります。詳細を確認後、都度見積もりいたします。',
  },
  {
    title: '検品基準はどうやって設定されますか？',
    content:
      '検品開始前にお客様と検品基準の打ち合わせをいたします。チェックポイントなどはできるだけ細かくお知らせください。',
  },
  {
    title: '不良品が見つかった場合、どう対処しますか？',
    content: '不良品が発生した場合は、メール・電話で連絡させていただきます。。',
  },
  {
    title: '検品後の荷物を保管していただくことは可能でしょうか。',
    content: '可能です。別途保管費用が発生致します。',
  },
  {
    title: 'カートンなどの包装資材の手配も可能ですか。',
    content: '可能です。弊社で準備する場合実費を請求させていただきます。',
  },
  {
    title: '各店舖に配分出荷や個人宅直送は可能ですか？',
    content:
      '可能です。弊社ではさまざまなメーカー様からのご依頼で、舗配分出荷や個人宅直送など数多くの作業実績がございます。',
  },
  {
    title: '検品場所へ伺い、不良品のチェックをすることは可能ですか？',
    content: '可能です。ご希望の場合はご連絡ください。',
  },
  {
    title: '修理対応はしていますか？',
    content: '申し訳ありません。修理の対応はしておりません。',
  },
  {
    title: '検針の依頼もできますか？',
    content: 'ローラー検針器のみ対応できます。',
  },
];
//検針について
const openIndex15 = ref(null);
const hoveredIndex15 = ref(null);
const toggle15 = (index) => {
  openIndex15.value = openIndex15.value === index ? null : index;
};
const accordions15 = [
  {
    title: 'どのような檢針ですか？',
    content:
      'コンベア型の検針機で、ベルトコンベアの上に商品を置き、センサーを通過させ折れ針などの金属を探知、検針いたします。センサー部分の関係で高さ7cmまでの金属類の付属物のない商品であれば検針可能です。検針精度は1.2mm以上の金属を探知することができます。',
  },
  {
    title: '検針可能な商品はどんなものがありますか?',
    content:
      'センサー部分の関係で高さ7cmまでの金属類の付属物のない商品であれば検針可能 です。(シャツやブラウスなどの衣料品、帽子、ペットウェア、タオル、玄関マット、ぬいぐるみなど)',
  },
  {
    title: '作業の依頼はいつまでに申し込めばいいですか？',
    content:
      '入荷日とご希望納期をわかり次第お知らせいただければ、速やかに作業段取りを調整いたします。',
  },
  {
    title: '一日にどのくらいの数量の検針が可能ですか？',
    content:
      '商品や商品包装状況により異なります。詳細をお知らせ頂ければ、日数をお伝えすることは可能です。',
  },
  {
    title: '当日に依頼して、当日のうちに仕上げてもらうことは可能ですか？',
    content: '基本的に対応しておりません。',
  },
  {
    title: '土日・祝日の対応は可能ですか？',
    content: '平日のみの対応となっております。',
  },

  {
    title: '検針料金はどれくらいかかりますか？',
    content:
      '商品や数量、商品包装状況によって異なります。詳細を確認後、都度見積もりいたします。',
  },
  {
    title: '検針精度はどうやって確認されますか？',
    content:
      '検針前に1.2mmの金属テスターにて正常に動作するか確認してから検針を行います。',
  },
  {
    title: '異物が見つかった場合、どう対処しますか？',
    content: '異物が発生した場合は、メール・電話で連絡させていただきます。',
  },
  {
    title: '検針後の荷物を保管していただくことは可能でしょうか。',
    content: '可能です。別途保管費用が発生致します。',
  },
  {
    title: '発送用段ボールなどの包装資材の手配も可能ですか？',
    content: '可能です。弊社で準備する場合実費を請求させていただきます。',
  },
  {
    title: '各店舖に配分出荷や個人宅直送は可能ですか？',
    content:
      '可能です。弊社ではさまざまなメーカー様からのご依頼で、舗配分出荷や個人宅直送など数多くの作業実績がございます。',
  },
  {
    title: '検針場所へ伺い、異物のあった商品のチェックをすることは可能ですか？',
    content: '可能です。ご希望の場合はご連絡ください。',
  },
  {
    title: '修理対応はしていますか？',
    content: '申し訳ありません。修理の対応はしておりません。',
  },
  {
    title: '検品の依頼もできますか？',
    content:
      'はい、キズやワレカケ等、様々な目視検品を行っております。詳細をお聞かせください。',
  },
];
//運営会社について
const openIndex16 = ref(null);
const hoveredIndex16 = ref(null);
const toggle16 = (index) => {
  openIndex16.value = openIndex16.value === index ? null : index;
};
const accordions16 = [
  {
    title: '個人情報の管理については大丈夫ですか？',
    content: 'プライバシーマークを取得しております。ご安心ください。',
  },
  {
    title: 'セキュリティー対策や災害対策などはされていますか？',
    content:
      'セキュリティーにおいては、機械警備や警備員が常駐しております。災害対策においては、非常用電源設備を設置し、停電時でも物流を止めることはございません。',
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
  font-size: 19px; /* 第一行最大字体 */
  font-weight: bold; /* 加粗 */
  margin-top: 15px; /* 上邊距 */
  margin-bottom: 10px; /* 下邊距 */
  line-height: 1.6;
  color: #1a1919;
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
  background-color: #fff;
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
    color: #166da4;
  }

  /* .arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1.6px solid #000;
    color: #000;
    font-size: 12px;
  } */

  .arrow.open {
    transform: rotate(180deg);
  }

  .accordion-body {
    padding: 16px 20px;
    font-size: 16px;
    line-height: 1.6;
    background-color: #fafafa;
  }
}
</style>
