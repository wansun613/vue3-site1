<template>
  <section>
    <div class="section-title-wrapper">
      <div class="section-title">
        <span class="left-bg"></span>
        <span class="right-bg"></span>
        <span class="slash"></span>
        <h1 class="animated-title">導入事例</h1>
      </div>
    </div>

    <div class="case-card">
      <!-- 單張圖片居中 -->
      <div class="image-wrapper">
        <img src="@/assets/case.webp" alt="導入事例" class="case-image" />
      </div>
      <!-- 文字 -->
      <div class="hero-text">
        <p class="hero-title main">
          柔軟な検品でクレームを軽減、販売機会の損失
        </p>
        <p class="hero-title main">を最小限に</p>
        <p>
          緊急時の検品とイレギュラーな出荷に迅速に対応することで、ク<br />
          レーム処理時間を短縮し、販売機会の損失を最小限に抑えること<br />
          に成功しました。
        </p>
      </div>
    </div>

    <!-- お問い合わせ -->
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
import flow1 from '@/assets/ecorder_flow_f.webp';
import flow2 from '@/assets/feature_img_02.webp';
import flow3 from '@/assets/integration_asp_3.webp';
import flow4 from '@/assets/feature_img_04.webp';
import flow5 from '@/assets/feature_img_05.webp';
import flow6 from '@/assets/feature_img_06.webp';
import flow7 from '@/assets/feature_img_07.webp';
import flow8 from '@/assets/feature_img_08.webp';

const flowImages = [flow1, flow2, flow3, flow4, flow5, flow6, flow7, flow8];

const problems1 = [
  '受注から出荷までをスムーズにしたい在庫数',
  'アウトソース先の品質が低くて困っている',
  '付加価値をつけてリピーターを増やしたい',
  '出荷量が増えて自社対応が難しくなってきた',
  '慢性的な人手不足を解消したい',
  '物流業務に時間を取られてコア業務に集中できない',
];
const problems2 = [
  '在庫数が合わずスムーズな棚卸しが行えない',
  '契約している倉庫のデッドスペースが多すぎる',
  '繁忙期は人手不足により毎日残業が発生している',
  'お客様一人ひとりに合わせた販促施策を行いたい',
  '当日発送して翌日届くエリアを拡大したい',
  '大手企業レベルの物流サービスを実現したい',
];
//
const points = [
  {
    title: 'Point01',
    paragraphs: [
      { text: '面倒な業務をまるっと代行', size: '22px', weight: 'bold' },
      { text: 'EC運営の大変な思いを軽減', size: '22px', weight: 'bold' },
      {
        text: '入荷、検品、在庫管理、ピッキング、流通加工、梱包、出荷、',
        size: '16px',
      },
      {
        text: '返品処理など一連の業務をプロである私たちがお引き受けする',
        size: '16px',
      },
      {
        text: 'ことで、毎日発生する入荷から出荷までの人手作業が不要とな',
        size: '16px',
      },
      {
        text: 'ります。バックヤード業務の足かせがなくなり、売上アップ、',
        size: '16px',
      },
      {
        text: '集客、商品企画などのコア業務に集中できる環境が整います。',
        size: '16px',
      },
      {
        text: 'また窓口が一本化されることで時間の無駄がなくなります。',
        size: '16px',
      },
    ],
  },
  {
    title: 'Point02',
    paragraphs: [
      { text: '繁忙期やイベント時などの', size: '22px', weight: 'bold' },
      { text: '出荷増の波動にもスムーズに対応', size: '22px', weight: 'bold' },
      {
        text: 'ECモールでの大規模セールや季節イベント、テレビで紹介され',
        size: '16px',
      },
      {
        text: 'た場合など、1日の出荷数が通常と比較して数十倍になること',
        size: '16px',
      },
      {
        text: 'は珍しくありません。注文が増加したことで商品発送の遅延や',
        size: '16px',
      },
      {
        text: '誤配送が発生した場合、機会損失になるのはもちろんのこと、',
        size: '16px',
      },
      {
        text: 'ブランドイメージの毀損につながる可能性もあります。ロジフ',
        size: '16px',
      },
      {
        text: 'ァストでは大量注文にも最適な人員配置や臨機応変なレイアウ',
        size: '16px',
      },
      {
        text: 'ト変更により、スピーディーかつスムーズに対応いたします。',
        size: '16px',
      },
    ],
  },
  {
    title: 'Point03',
    paragraphs: [
      { text: '全てのモールやカートと連携して', size: '22px', weight: 'bold' },
      { text: 'オンライン完結を実現', size: '22px', weight: 'bold' },
      {
        text: 'ロジファストではいち早く物流のIT化を取り入れ、あらゆる場',
        size: '16px',
      },
      {
        text: '面でデジタル管理を行っております。最新のクラウド型の物流',
        size: '16px',
      },
      {
        text: 'システム（WMS）により、入出庫確認、在庫確認、各種デー',
        size: '16px',
      },
      {
        text: 'タの管理、部分的な対応依頼もオンライン上で完結できます。',
        size: '16px',
      },
      {
        text: '楽天市場やAmazon、Yahoo!ショッピングなどの大手ECモール',
        size: '16px',
      },
      {
        text: 'をはじめ、さまざまなECモール、カート、決済システム、一元',
        size: '16px',
      },
      {
        text: '管理ツールとシームレスに連携して自動出荷を可能にします。',
        size: '16px',
      },
    ],
  },
  {
    title: 'Point04',
    paragraphs: [
      { text: '高評価レビュー獲得や', size: '22px', weight: 'bold' },
      { text: '顧客満足度を高める施策に対応', size: '22px', weight: 'bold' },
      {
        text: '競争の激しいEC業界で勝ち残っていくために欠かせないのが差',
        size: '16px',
      },
      {
        text: '別化戦略です。しかし商品のコモディティ化が進み、商品や価',
        size: '16px',
      },
      {
        text: '格だけで差別化することが難しい時代になっています。そこで',
        size: '16px',
      },
      {
        text: '当社では顧客とのタッチポイントである物流による差別化を推',
        size: '16px',
      },
      {
        text: '進しております。ガムテープを使わない箱、丁寧な梱包、個別',
        size: '16px',
      },
      {
        text: 'ラッピング、贈答用のし、メッセージカード、顧客や商品ごと',
        size: '16px',
      },
      {
        text: 'に異なる同梱物、無料サンプル同梱、翌日配送、オリジナル資',
        size: '16px',
      },
      {
        text: '材など、顧客体験を向上させる様々な施策をご提案いたしま',
        size: '16px',
      },
      {
        text: 'す。',
        size: '16px',
      },
    ],
  },
  {
    title: 'Point05',
    paragraphs: [
      { text: 'ギフト需要に特化した細やかな', size: '22px', weight: 'bold' },
      { text: 'サービスで顧客体験を向上', size: '22px', weight: 'bold' },
      {
        text: 'ロジファストでは「私たちはチームで連帯し、お客様に最高の',
        size: '16px',
      },
      {
        text: '感動をお届けし、パーソナルギフト市場日本一の倉庫会社とな',
        size: '16px',
      },
      {
        text: 'る」というクレドを旗印として、一般的な物流会社では対応が',
        size: '16px',
      },
      {
        text: '難しい個別商品への名入れ加工やメッセージ加工、オリジナル',
        size: '16px',
      },
      {
        text: '資材を利用したラッピング包装、デパート包装、化粧箱詰めな',
        size: '16px',
      },
      {
        text: 'ど、商品に付加価値を付与できるオプションサービスをご用意',
        size: '16px',
      },
      {
        text: 'しております。',
        size: '16px',
      },
    ],
  },
  {
    title: 'Point06',
    paragraphs: [
      { text: '小ロットでの利用が可能', size: '22px', weight: 'bold' },
      { text: '各種資材も低価格でご提供', size: '22px', weight: 'bold' },
      {
        text: '倉庫はダンボール1箱からご利用いただけます。従量課金で無',
        size: '16px',
      },
      {
        text: '駄がない料金体系を採用。許容以上の坪数を借りて無駄に費用',
        size: '16px',
      },
      {
        text: 'をかける必要はありません。出荷時に必要な発送用のダンボー',
        size: '16px',
      },
      {
        text: 'ル、クラフト紙、エアクッションなどの緩衝材、クラフトテー',
        size: '16px',
      },
      {
        text: 'プ、OPPテープなど、大量仕入れによりコストを抑えた低価格',
        size: '16px',
      },
      {
        text: 'で提供いたします。ロゴや店舗名が印字されたオジリナルのダ',
        size: '16px',
      },
      {
        text: 'ンボールや下げ札、ラベルシールなどにも対応いたします。',
        size: '16px',
      },
    ],
  },
  {
    title: 'Point07',
    paragraphs: [
      { text: '横浜市中内に3つの物流拠点', size: '22px', weight: 'bold' },
      { text: '倉庫の合計延べ床面積1,217坪', size: '22px', weight: 'bold' },
      {
        text: '物流拠点は横浜の中区、南区にあります。横浜駅から車で25分',
        size: '16px',
      },
      {
        text: 'の好立地のため、商品の状態をいつでも確認できます。輸入商',
        size: '16px',
      },
      {
        text: '品の輸送状況に不安がある場合や事前に商品を確認したい場',
        size: '16px',
      },
      {
        text: '合、包装や梱包について実物を見て確認したい場合など、ご自',
        size: '16px',
      },
      {
        text: '身ですぐにご確認いただけます。倉庫の床面積は3,651㎡',
        size: '16px',
      },
      {
        text: '（1,217坪）あり、在庫の保管スペースを気にしていただく必。',
        size: '16px',
      },
      {
        text: '要はありません。安心してEC（ネットショップ・通販）の売上',
        size: '16px',
      },
      {
        text: 'を上げていただけます。',
        size: '16px',
      },
    ],
  },
  {
    title: 'Point08',
    paragraphs: [
      { text: 'PDCA継続による高い物流品質と', size: '22px', weight: 'bold' },
      { text: '万全のサポート体制をご提供', size: '22px', weight: 'bold' },
      {
        text: 'ロジファストでは経験豊富な物流コンサルタントの専任制を採',
        size: '16px',
      },
      {
        text: '用しており、EC物流の新規立ち上げから運用までを一貫して支',
        size: '16px',
      },
      {
        text: '援いたします。定期的に開催する物流ミーティングでは、導入',
        size: '16px',
      },
      {
        text: '組みのご提案を実施。一緒にPDCAサイクルを回すことで、効',
        size: '16px',
      },
      {
        text: '果的な運用をサポートいたします。 またヒューマンエラーが発',
        size: '16px',
      },
      {
        text: '生しない仕組みと独自のノウハウによって、出荷誤差発生率',
        size: '16px',
      },
      {
        text: '0.0013%以下（2020年度実績）という一般的な目標値である誤',
        size: '16px',
      },
      {
        text: '出荷率0.01%を大きく下回る誤差を実現。誤出荷による消費者',
        size: '16px',
      },
      {
        text: '（エンドユーザー）様からのクレームを低減いたします。',
        size: '16px',
      },
    ],
  },
];
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
</script>

<style scoped>
.section {
  padding: 20px;
}
/* 藍白背景 */
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
    width: 10ch; /* 根據文字長度調整，1個中文字約1ch */
    opacity: 1;
  }
}

/* 圖片文字上下背景 */
.case-card {
  background-color: #fff; /* 白色背景 */
  border: 1px solid #edecec; /* 灰色邊框 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 陰影 */
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  margin: 40px auto; /* 置中 */
  overflow: hidden; /* 防止圖片超出邊框 */
  text-align: center;
  padding-bottom: 24px; /* 保留文字區域空間 */
  margin-top: 100px;
  margin-bottom: 60px;
}

.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa; /* 可選：圖片背景 */
  padding: 20px 0;

  img.case-image {
    max-width: 100%;
    width: 400px; /* 可根據實際調整 */
    height: auto;
    border-radius: 8px;
  }
}

.hero-text {
  padding: 20px 30px;
  color: #333;
  line-height: 1.7;
  text-align: left; /* ✅ 文字靠左 */

  .hero-title.main {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  p {
    font-size: 14px;
    margin: 6px 0;
  }
}

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
  background-color: #fcfcfd;
  color: #4e4d4d;
  text-decoration: none;

  text-align: center; /* 水平居中 */
  font-weight: 500;
  transition: background-color 0.2s;
  margin-right: 100px;
  margin-bottom: 40px;
}

.contact-btn a:hover {
  background-color: #3b67b0;
}
</style>
