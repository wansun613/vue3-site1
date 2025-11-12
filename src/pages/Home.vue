<template>
  <section>
    <div class="tupian">
      <div class="section-title-wrapper"></div>
      <div class="service-contact-wrapper">
        <!-- 売上アップする -->
        <div class="service-texts">
          <p class="big-text">倉庫完備・EC特化型オーダーメイド物流</p>
          <p class="medium-text">売上アップする<br />EC物流・発送代行</p>
          <p class="small-text">出荷自動化でECの手間とストレスを軽減</p>
          <p class="xiao-text">
            出荷自動化でECの手間とストレスを軽減<br />
            システム連携による発送業務の自動化でコストと時間の削減に貢献<br />
            顧客体験を向上させる丁寧な梱包、多種多様なギフト、梱包資材に対応<br />
            セール、キャンペーン、イベント時の大量出荷に対応して機会損失を軽減
          </p>
        </div>
        <!-- 表單 -->
        <div class="animated-title-contact">
          <div class="contact-form">
            <label>お名前（姓） <span class="required">*</span></label>
            <input type="text" v-model="form.lastName" placeholder="例）山田" />

            <label>お名前（名） <span class="required">*</span></label>
            <input
              type="text"
              v-model="form.firstName"
              placeholder="例）太郎"
            />

            <label>メールアドレス <span class="required">*</span></label>
            <input
              type="email"
              v-model="form.email"
              placeholder="例）info@logifast.jp"
            />

            <label>会社名 <span class="required">*</span></label>
            <input
              type="text"
              v-model="form.company"
              placeholder="例）ロジファスト株式会社"
            />

            <label>電話番号</label>
            <input
              type="text"
              v-model="form.phone"
              placeholder="例）0453155250"
            />
            <button
              type="button"
              @click="submitForm"
              :disabled="loading"
              class="submit-btn"
            >
              送信する
            </button>
          </div>
        </div>
      </div>
      <!-- 圖片 -->
      <div class="image-container">
        <img src="@/assets/beijing.webp" alt="画像" />
      </div>
      <div class="purple-bg">
        <div class="scroll-text">
          EC通販の発送代行・物流代行・物流アウトソーシングなら横浜のロジファスト代行・物流代行・物流アウトソーシングなら横浜のロジファスト株式会社
        </div>
      </div>
    </div>

    <!-- 売上アップするEC物流 -->
    <div class="hero-text">
      <p class="hero-title main">売上アップするEC物流・発送代行とは？</p>
      <p class="hero-title main-ti">ネットショップ・通販など物販事業者を</p>
      <p class="hero-title main-ti">対象にした高品質な発送代行サービスです</p>
    </div>
    <div class="image-container-1">
      <img src="@/assets/outsource_f.webp" alt="アウトソース画像" />
    </div>
    <div class="he-te">
      <div class="hero-text">
        <p class="hero-title main-ti">膨大で多岐に渡るECのバックヤード業務を</p>
        <p class="hero-title main-ti">
          プロである私たちが窓口一本のワンストップでお引き受けし、
        </p>
        <p class="hero-title main-ti">
          商品開発や販促などのコア業務に集中できる環境をご提供します
        </p>
      </div>
    </div>
    <!-- 灰色背景區域 -->
    <div class="hero-section">
      <div class="hero-text">
        <p class="hero-title main-xi">
          こういった課題をお持ちの方におすすめです
        </p>
        <p class="hero-title main-ti">2012年にEC物流を開始して以来、</p>
        <p class="hero-title main-ti">
          あらゆる課題を解決してきた物流のプロフェッショナルにお任せください
        </p>
      </div>

      <div class="problem-lists">
        <!-- 第一組問題列表 -->
        <div class="problem-list">
          <div
            class="problem-item"
            v-for="(item, index) in problems1"
            :key="index"
          >
            <span class="check">✔</span>
            <p>{{ item }}</p>
          </div>
        </div>

        <!-- 第二組問題列表 -->
        <div class="problem-list">
          <div
            class="problem-item"
            v-for="(item, index) in problems2"
            :key="index"
          >
            <span class="check">✔</span>
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
      <div class="contact-btn">
        <router-link to="/problems">解決できる課題を見る</router-link>
      </div>
    </div>
    <!-- 白色區塊 -->
    <div class="hero-text">
      <p class="hero-title main">8つの特長</p>
      <p class="hero-title main-ti">
        単なる商品保管や発送代行だけでなく、在庫管理、返品対応などの
      </p>
      <p class="hero-title main-ti">
        出荷業務全般をサポートすることで売上アップに貢献いたします
      </p>
    </div>
    <!-- 文字+圖片區域 -->
    <div class="feature-section">
      <!-- 左侧文字 -->
      <div class="points-column">
        <div class="point" v-for="(item, index) in points" :key="index">
          <h3 class="point-title">{{ item.title }}</h3>
          <p
            v-for="(p, i) in item.paragraphs"
            :key="i"
            class="point-paragraph"
            :style="{ fontSize: p.size, fontWeight: p.weight || 'normal' }"
          >
            {{ p.text }}
          </p>
        </div>
      </div>

      <!-- 右侧图片 -->
      <div class="image-column">
        <div
          class="image-wrapper"
          v-for="(img, index) in flowImages"
          :key="index"
        >
          <img :src="img" :alt="`ECフロー${index + 1}`" class="flow-image" />
        </div>
      </div>
    </div>
    <!-- 対応可能な業務 -->
    <div class="hero-text">
      <p class="hero-title main">対応可能な業務</p>
      <p class="hero-title main-ti-hi">
        入荷、検品、在庫管理、ピッキング、流通加工、梱包、出荷、返品処理など、
      </p>
      <p class="hero-title main-ti-hi">
        ECに必要なすべてのサービスをワンストップでご提供いたします
      </p>
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
    <!--取り扱い可能な商品  -->
    <div class="hero-text">
      <p class="hero-title main">取り扱い可能な商品</p>
      <p class="hero-title main-ti-hi">多種多様な商品に対応しております</p>
      <p class="hero-title main-ti-hi">
        年間を通じて一定温度を保つことができる定温倉庫もご利用可能です
      </p>
    </div>

    <div class="business-container">
      <!-- 第一个业务卡片 -->
      <div class="business-section large-grid">
        <h2 class="section-title">対応可能な業務</h2>
        <p class="section-desc">
          下記は取り扱い可能な商品の一例です。<br />
          まずはお問い合わせの上ご相談ください。
        </p>

        <div class="services-grid">
          <div
            v-for="(item, index) in services1"
            :key="index"
            class="service-item"
          >
            <img :src="item.src" :alt="item.label" />
            <p>{{ item.label }}</p>
          </div>
        </div>
      </div>
      <!-- 第二个业务卡片 -->
      <div class="business-section small-grid">
        <h2 class="section-title">取り扱い不可な商品</h2>
        <p class="section-desc">
          業務上の関係法令、および倉庫業務環境により、<br />
          下記に該当する商品はお取り扱いができません。
        </p>

        <div class="services-grid">
          <div
            v-for="(item, index) in services2"
            :key="index"
            class="service-item"
          >
            <img :src="item.src" :alt="item.label" />
            <p>{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 取り扱い実績のある商品（一例） -->
    <div class="product-list-section">
      <h3>取り扱い実績のある商品（一例）</h3>
      <p class="product-items">
        ● 革製品・革小物　● 腕時計　● スマートフォングッズ　● ジュエリー　●
        アパレル・ファッション小物　● ペット用品　● 生活雑貨　● キッチン雑貨　 ●
        輸入雑貨　● 収納用品　● 酒・飲料　● 照明器具　● 冠婚葬祭の引出物　 ●
        ボールペン・万年筆等筆記具　● リネン・食器　● 健康食品・化粧品　 ●
        玩具　● キャラクターグッズ　● 美容器具　● イベントグッズ　 ●
        カタログギフト　● スポーツ用品　● カー用品　● バイク用品　 ●
        インテリア小物　● 靴　● アウトドア用品　● ダイエット用品　 ●
        レトルト食品　● インスタント食品　● アクセサリー　● 缶詰・瓶詰　 ●
        介護用品　● ボトルフラワー
      </p>
    </div>
    <!-- 連携可能なシステム -->
    <div class="system-section">
      <h2>連携可能なシステム</h2>
      <p>APIとCSVを使用したシステム連携によって、</p>
      <p>
        あらゆるECモール、カートASP、決済システム、一元管理ツールと連携して自動出荷を可能にします
      </p>
    </div>
    <div class="image-Rakuten">
      <img src="@/assets/Rakuten.webp" alt="連携可能" class="case-image" />
    </div>

    <!--  安心の実績-->
    <div class="system-section-an">
      <h2>安心の実績</h2>
      <p>
        創業12年以上で培った様々なノウハウと時代に合わせて進化した技術を武器に
      </p>
      <p>最高のワンストップEC物流・発送代行サービスを提供いたします</p>
    </div>

    <div class="image-group">
      <div class="image-ten">
        <img src="@/assets/building.webp" alt="building" class="case-image" />
        <p class="image-caption">創業 12年以上</p>
      </div>
      <div class="image-ten">
        <img src="@/assets/delivery.webp" alt="delivery" class="case-image" />
        <p class="image-caption">EC物流 12年以上</p>
      </div>
      <div class="image-ten">
        <img src="@/assets/quality.webp" alt="quality" class="case-image" />
        <p class="image-caption">誤出荷差率 0.0013%以下</p>
      </div>
    </div>

    <!--  お客様の声-->
    <div class="system-section-an">
      <h2>お客様の声</h2>
      <p>多くのお客様から評価の声をいただいております</p>
    </div>

    <div class="testimonial-carousel">
      <!-- 文字顯示區 -->
      <div class="testimonial-content">
        <p>{{ testimonials[currentIndex] }}</p>
      </div>
      <!-- 底部點點 -->
      <div class="dots">
        <span
          v-for="index in testimonials.length"
          :key="index"
          :class="{ active: currentIndex === index - 1 }"
          @click="currentIndex = index - 1"
        ></span>
      </div>
    </div>
    <!--  お客様事例-->
    <div class="system-section-an">
      <h2>お客様事例</h2>
      <p>
        EC物流・発送代行サービスを導入いただいたお客様の一部をご紹介いたします
      </p>
    </div>
    <div class="case-cards-wrapper">
      <div class="case-card">
        <!-- 1.單張圖片居中 -->
        <div class="image-wrapper">
          <img src="@/assets/case.webp" alt="導入事例" class="case-image" />
        </div>
        <!-- 文字 -->
        <div class="hero-text2">
          <p class="hero-title2 main">
            柔軟な検品でクレームを軽減、販売機会の損失を最小限に
          </p>

          <p>
            緊急時の検品とイレギュラーな出荷に迅速に対応することで、ク
            レーム処理時間を短縮し、販売機会の損失を最小限に抑えること
            に成功しました。
          </p>
        </div>
      </div>
      <div class="case-card">
        <!-- 2.單張圖片居中 -->
        <div class="image-wrapper">
          <img
            src="@/assets/case-study.webp"
            alt="導入事例"
            class="case-image"
          />
        </div>
        <!-- 文字 -->
        <div class="hero-text2">
          <p class="hero-title2 main">
            柔軟な検品でクレームを軽減、販売機会の損失を最小限に
          </p>

          <p>
            緊急時の検品とイレギュラーな出荷に迅速に対応することで、ク
            レーム処理時間を短縮し、販売機会の損失を最小限に抑えること
            に成功しました。
          </p>
        </div>
      </div>
      <div class="case-card">
        <!-- 3.單張圖片居中 -->
        <div class="image-wrapper">
          <img
            src="@/assets/case-study-1.webp"
            alt="導入事例"
            class="case-image"
          />
        </div>
        <!-- 文字 -->
        <div class="hero-text2">
          <p class="hero-title2 main">
            柔軟な検品でクレームを軽減、販売機会の損失を最小限に
          </p>

          <p>
            緊急時の検品とイレギュラーな出荷に迅速に対応することで、ク
            レーム処理時間を短縮し、販売機会の損失を最小限に抑えること
            に成功しました。
          </p>
        </div>
      </div>
    </div>
    <!-- 按鈕 -->
    <div class="contact-btn">
      <router-link to="/cases">他の事例を見る</router-link>
    </div>
    <!--料金・プラン  -->
    <div class="system-section-an">
      <h2>料金・プラン</h2>
      <p>料金は使った分だけ、無駄がない料金体系でご提供いたします</p>
      <p>お客様のご要望に準じて最適なプランをご提案いたします</p>
      <p>まずはお問い合わせください</p>
    </div>
    <!-- 按鈕 -->
    <div class="contact-btn">
      <router-link to="/contact">お問い合わせはこちら</router-link>
    </div>
    <!--サービス區塊  -->
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
    <!-- よく質問 -->
    <div class="hero-text">
      <p class="hero-title main">EC物流・発送代行サービスについて寄せられる</p>
      <p class="hero-title main">質問とその回答をご紹介します</p>
      <p>
        保管可能な商品、対応可能なECモール・カートASP、対応可能な業務、費用感など、ロジファストのEC物流・発送代行サービスに関<br />
        する様々な疑問にお答えします。無料相談会や倉庫見学も随時実施しておりますので、お気軽にご相談ください。<br />
      </p>
    </div>

    <!-- 1.よくある質問 -->
    <div class="hero-text">
      <p class="hero-title main">よくある質問</p>
      <p class="hero-title xiao">
        EC物流・発送代行サービスについて寄せられる質問とその回答をご紹介します
      </p>
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
            {{ openIndex1 === index ? '▼' : '▲' }}
          </span>
        </div>
        <div class="accordion-body" v-show="openIndex1 === index">
          {{ item.content }}
        </div>
      </div>
    </div>
    <div class="contact-btn">
      <router-link to="/faq">よくある質問を見る</router-link>
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
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const form = reactive({
  lastName: '', // 姓
  firstName: '', // 名
  email: '',
  company: '',
  phone: '',
});
const loading = ref(false);

const submitForm = async () => {
  // 防止重复提交
  if (loading.value) return;

  loading.value = true;

  const payload = {
    lastName: form.lastName,
    firstName: form.firstName,
    email: form.email,
    company: form.company,
    phone: form.phone,
  };

  console.log('提交数据：', payload);

  try {
    // 模拟 API 调用
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert('送信完了！');
    // 重置表单
    form.lastName = '';
    form.firstName = '';
    form.email = '';
    form.company = '';
    form.phone = '';
  } catch (error) {
    console.error(error);
    alert('送信中出错，请重试');
  } finally {
    loading.value = false;
  }
};

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
  '受注から出荷までをスムーズにしたい',
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
      { text: '面倒な業務をまるっと代行', size: '20px', weight: 'bold' },
      { text: 'EC運営の大変な思いを軽減', size: '20px', weight: 'bold' },
      {
        text: '入荷、検品、在庫管理、ピッキング、流通加工、梱包、出荷、',
        size: '14px',
      },
      {
        text: '返品処理など一連の業務をプロである私たちがお引き受けする',
        size: '14px',
      },
      {
        text: 'ことで、毎日発生する入荷から出荷までの人手作業が不要とな',
        size: '14px',
      },
      {
        text: 'ります。バックヤード業務の足かせがなくなり、売上アップ、',
        size: '14px',
      },
      {
        text: '集客、商品企画などのコア業務に集中できる環境が整います。',
        size: '14px',
      },
      {
        text: 'また窓口が一本化されることで時間の無駄がなくなります。',
        size: '14px',
      },
    ],
  },
  {
    title: 'Point02',
    paragraphs: [
      { text: '繁忙期やイベント時などの', size: '20px', weight: 'bold' },
      { text: '出荷増の波動にもスムーズに対応', size: '20px', weight: 'bold' },
      {
        text: 'ECモールでの大規模セールや季節イベント、テレビで紹介され',
        size: '14px',
      },
      {
        text: 'た場合など、1日の出荷数が通常と比較して数十倍になること',
        size: '14px',
      },
      {
        text: 'は珍しくありません。注文が増加したことで商品発送の遅延や',
        size: '14px',
      },
      {
        text: '誤配送が発生した場合、機会損失になるのはもちろんのこと、',
        size: '14px',
      },
      {
        text: 'ブランドイメージの毀損につながる可能性もあります。ロジフ',
        size: '14px',
      },
      {
        text: 'ァストでは大量注文にも最適な人員配置や臨機応変なレイアウ',
        size: '14px',
      },
      {
        text: 'ト変更により、スピーディーかつスムーズに対応いたします。',
        size: '14px',
      },
    ],
  },
  {
    title: 'Point03',
    paragraphs: [
      { text: '全てのモールやカートと連携して', size: '20px', weight: 'bold' },
      { text: 'オンライン完結を実現', size: '20px', weight: 'bold' },
      {
        text: 'ロジファストではいち早く物流のIT化を取り入れ、あらゆる場',
        size: '14px',
      },
      {
        text: '面でデジタル管理を行っております。最新のクラウド型の物流',
        size: '14px',
      },
      {
        text: 'システム（WMS）により、入出庫確認、在庫確認、各種デー',
        size: '14px',
      },
      {
        text: 'タの管理、部分的な対応依頼もオンライン上で完結できます。',
        size: '14px',
      },
      {
        text: '楽天市場やAmazon、Yahoo!ショッピングなどの大手ECモール',
        size: '14px',
      },
      {
        text: 'をはじめ、さまざまなECモール、カート、決済システム、一元',
        size: '14px',
      },
      {
        text: '管理ツールとシームレスに連携して自動出荷を可能にします。',
        size: '14px',
      },
    ],
  },
  {
    title: 'Point04',
    paragraphs: [
      { text: '高評価レビュー獲得や', size: '20px', weight: 'bold' },
      { text: '顧客満足度を高める施策に対応', size: '20px', weight: 'bold' },
      {
        text: '競争の激しいEC業界で勝ち残っていくために欠かせないのが差',
        size: '14px',
      },
      {
        text: '別化戦略です。しかし商品のコモディティ化が進み、商品や価',
        size: '14px',
      },
      {
        text: '格だけで差別化することが難しい時代になっています。そこで',
        size: '14px',
      },
      {
        text: '当社では顧客とのタッチポイントである物流による差別化を推',
        size: '14px',
      },
      {
        text: '進しております。ガムテープを使わない箱、丁寧な梱包、個別',
        size: '14px',
      },
      {
        text: 'ラッピング、贈答用のし、メッセージカード、顧客や商品ごと',
        size: '14px',
      },
      {
        text: 'に異なる同梱物、無料サンプル同梱、翌日配送、オリジナル資',
        size: '14px',
      },
      {
        text: '材など、顧客体験を向上させる様々な施策をご提案いたしま',
        size: '14px',
      },
      {
        text: 'す。',
        size: '14px',
      },
    ],
  },
  {
    title: 'Point05',
    paragraphs: [
      { text: 'ギフト需要に特化した細やかな', size: '20px', weight: 'bold' },
      { text: 'サービスで顧客体験を向上', size: '20px', weight: 'bold' },
      {
        text: 'ロジファストでは「私たちはチームで連帯し、お客様に最高の',
        size: '14px',
      },
      {
        text: '感動をお届けし、パーソナルギフト市場日本一の倉庫会社とな',
        size: '14px',
      },
      {
        text: 'る」というクレドを旗印として、一般的な物流会社では対応が',
        size: '14px',
      },
      {
        text: '難しい個別商品への名入れ加工やメッセージ加工、オリジナル',
        size: '14px',
      },
      {
        text: '資材を利用したラッピング包装、デパート包装、化粧箱詰めな',
        size: '14px',
      },
      {
        text: 'ど、商品に付加価値を付与できるオプションサービスをご用意',
        size: '14px',
      },
      {
        text: 'しております。',
        size: '14px',
      },
    ],
  },
  {
    title: 'Point06',
    paragraphs: [
      { text: '小ロットでの利用が可能', size: '20px', weight: 'bold' },
      { text: '各種資材も低価格でご提供', size: '20px', weight: 'bold' },
      {
        text: '倉庫はダンボール1箱からご利用いただけます。従量課金で無',
        size: '14px',
      },
      {
        text: '駄がない料金体系を採用。許容以上の坪数を借りて無駄に費用',
        size: '14px',
      },
      {
        text: 'をかける必要はありません。出荷時に必要な発送用のダンボー',
        size: '14px',
      },
      {
        text: 'ル、クラフト紙、エアクッションなどの緩衝材、クラフトテー',
        size: '14px',
      },
      {
        text: 'プ、OPPテープなど、大量仕入れによりコストを抑えた低価格',
        size: '14px',
      },
      {
        text: 'で提供いたします。ロゴや店舗名が印字されたオジリナルのダ',
        size: '14px',
      },
      {
        text: 'ンボールや下げ札、ラベルシールなどにも対応いたします。',
        size: '14px',
      },
    ],
  },
  {
    title: 'Point07',
    paragraphs: [
      { text: '横浜市中内に3つの物流拠点', size: '20px', weight: 'bold' },
      { text: '倉庫の合計延べ床面積1,217坪', size: '20px', weight: 'bold' },
      {
        text: '物流拠点は横浜の中区、南区にあります。横浜駅から車で25分',
        size: '14px',
      },
      {
        text: 'の好立地のため、商品の状態をいつでも確認できます。輸入商',
        size: '14px',
      },
      {
        text: '品の輸送状況に不安がある場合や事前に商品を確認したい場',
        size: '16px',
      },
      {
        text: '合、包装や梱包について実物を見て確認したい場合など、ご自',
        size: '14px',
      },
      {
        text: '身ですぐにご確認いただけます。倉庫の床面積は3,651㎡',
        size: '14px',
      },
      {
        text: '（1,217坪）あり、在庫の保管スペースを気にしていただく必。',
        size: '14px',
      },
      {
        text: '要はありません。安心してEC（ネットショップ・通販）の売上',
        size: '14px',
      },
      {
        text: 'を上げていただけます。',
        size: '14px',
      },
    ],
  },
  {
    title: 'Point08',
    paragraphs: [
      { text: 'PDCA継続による高い物流品質と', size: '20px', weight: 'bold' },
      { text: '万全のサポート体制をご提供', size: '20px', weight: 'bold' },
      {
        text: 'ロジファストでは経験豊富な物流コンサルタントの専任制を採',
        size: '14px',
      },
      {
        text: '用しており、EC物流の新規立ち上げから運用までを一貫して支',
        size: '14px',
      },
      {
        text: '援いたします。定期的に開催する物流ミーティングでは、導入',
        size: '14px',
      },
      {
        text: '組みのご提案を実施。一緒にPDCAサイクルを回すことで、効',
        size: '14px',
      },
      {
        text: '果的な運用をサポートいたします。 またヒューマンエラーが発',
        size: '14px',
      },
      {
        text: '生しない仕組みと独自のノウハウによって、出荷誤差発生率',
        size: '14px',
      },
      {
        text: '0.0013%以下（2020年度実績）という一般的な目標値である誤',
        size: '14px',
      },
      {
        text: '出荷率0.01%を大きく下回る誤差を実現。誤出荷による消費者',
        size: '14px',
      },
      {
        text: '（エンドユーザー）様からのクレームを低減いたします。',
        size: '14px',
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
// 圖片顯示
const images = [
  { file: 'acceptable_products_1.webp', label: '健康食品' },
  { file: 'acceptable_products_2.webp', label: '化粧品' },
  { file: 'acceptable_products_3.webp', label: 'アパレル' },
  { file: 'acceptable_products_4.webp', label: '革製品' },
  {
    file: 'acceptable_products_5.webp',
    label: 'キッチン・トイレ・バス回り用品',
  },
  { file: 'acceptable_products_6.webp', label: 'ステイショナリー用品' },
  { file: 'acceptable_products_7.webp', label: '介護用品' },
  { file: 'acceptable_products_8.webp', label: 'インテリア用品' },
  { file: 'acceptable_products_9.webp', label: 'ギフト用品' },
  { file: 'acceptable_products_10.webp', label: 'アクセサリー' },
  { file: 'acceptable_products_11.webp', label: 'スポーツ用品' },
  { file: 'acceptable_products_12.webp', label: 'ベビー・キッズ用品' },
  { file: 'acceptable_products_13.webp', label: 'キャラクターグッズ' },
  { file: 'acceptable_products_14.webp', label: 'ペット用品' },
  { file: 'acceptable_products_15.webp', label: '酒類・飲料' },
  { file: 'acceptable_products_16.webp', label: '家電・電子機器' },
];
// ✅ 這裡先生成真實可用的圖片路徑
const services1 = images.map((item) => ({
  label: item.label,
  src: new URL(`../assets/images/${item.file}`, import.meta.url).href,
}));

const images2 = [
  {
    file: 'unacceptable_products_1.webp',
    label: '温度管理を伴う商品',
  },
  { file: 'unacceptable_products_2.webp', label: '湿度管理を伴う商品' },
  { file: 'unacceptable_products_3.webp', label: '生鮮食品' },
  { file: 'unacceptable_products_4.webp', label: '危険物' },
  { file: 'unacceptable_products_5.webp', label: '特別管理の商品' },
  { file: 'unacceptable_products_6.webp', label: '匂いを発する商品' },
  { file: 'unacceptable_products_7.webp', label: '大型の商品' },
  { file: 'unacceptable_products_8.webp', label: '医薬品' },
  { file: 'unacceptable_products_9.webp', label: '高価な商品' },
];
const services2 = images2.map((item) => ({
  label: item.label,
  src: new URL(`../assets/images/${item.file}`, import.meta.url).href,
}));

// よくある質問
const openIndex1 = ref(null);
const hoveredIndex1 = ref(null);
const toggle1 = (index) => {
  openIndex1.value = openIndex1.value === index ? null : index;
};

const accordions1 = [
  {
    title: '作業がかなり特殊なのですが、対応可能でしょうか?',
    content:
      'これまでも通電や動作確認などの様々な特殊作業を経験しております。たいていの作業であれば対応可能です。お気軽にご相談ください。',
  },
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
    content:
      '包装紙、巾着、リボンかけなど多彩なラッピングに対応しております。ギフトラッピングの詳細はこちら',
  },
  {
    title: 'あす楽、あすつくは対応可能ですか?',
    content:
      '当日出荷時間内で対応いたします。当日出荷時間については、詳細を打合せした上で決定する形となります。',
  },
  {
    title: '物流倉庫を見学することはできますか?',
    content:
      '実際にロジファストの現場をご覧いただける倉庫見学会を開催しています。作業風景や保管状況など、実際の現場で確認いただけます。',
  },
  {
    title: '個人情報の管理については大丈夫ですか?',
    content: 'プライバシーマークを取得しております。ご安心ください。',
  },
  {
    title: '大体の費用感はどれくらいですか?',
    content:
      '作業内容などの前提条件をヒアリングさせていただき、お見積りいたします。',
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
];
// お客様の声
const currentIndex = ref(0);
const testimonials = ref([
  'いつも細かいリクエストに対応していただき、ありがとうございます。特に少量の商品のバラ出荷に対応していただけるのは本当に助かります。',
  'ウチの社員より、ロジファストさんのほうが厳しく検品してくれるんです。',
  '出荷ミスをガクッと下げて、売上をググっと上げてくれました。細かい心遣いがありがたいです。',
  '特に素晴らしいのが柔軟でスピーディーな対応力。お付き合いする前にはあった出荷ミスもなくなり、丁寧な仕事ぶりに満足。安心して物流を任せられるようになりました。',
  '配送ミスがほとんどなく、信頼性が高いです。',
  'EC事業の成長を強力にサポートしてくれました。',
]);

let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
  }, 3000); // 每 5 秒切换一次
});

onUnmounted(() => {
  clearInterval(intervalId); // 组件销毁时清理定时器
});
</script>

<style scoped>
.tupian {
  position: relative; /* 让遮罩和内容分层 */
  background-image: url('@/assets/warehouse-freight.jpg'); /* 背景图片 */
  background-size: cover; /* 图片铺满容器 */
  background-position: center; /* 图片居中 */
  background-repeat: no-repeat;
  overflow: hidden; /* 防止遮罩或内容外溢 */
  padding: 38px 40px; /* 内容内边距 */
  margin-top: -60px;
}

/* 可选：添加半透明遮罩提高文字可读性 */
.tupian::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(231, 229, 229, 0.3); /* 黑色半透明遮罩，可调透明度 */
  z-index: 0; /* 放在背景层 */
  border-radius: 10px; /* 遮罩跟随圆角 */
}

/* 让内容层叠在遮罩之上 */
.tupian > * {
  position: relative;
  z-index: 1;
}

/* 图片容器可选隐藏或调整大小 */
.image-container img {
  width: 100%; /* 调整图片占容器比例，可改成 70%/60% 根据需要 */
  max-width: 1150px; /* 限制最大宽度 */
  height: auto; /* 保持比例 */
  display: inline-block; /* 让 text-align 居中生效 */
}
.image-container-1 img {
  width: 100%; /* 调整图片占容器比例，可改成 70%/60% 根据需要 */
  max-width: 800px; /* 限制最大宽度 */
  height: auto; /* 保持比例 */
  display: inline-block; /* 让 text-align 居中生效 */
}
/* toubu  */
.section {
  padding: 20px;
}
.he-te {
  margin-bottom: 80px;
}
.hero-text {
  width: 80%;
  max-width: 800px;
  margin: 80px auto 22px auto;
  padding-left: 20px; /* 左边距 */
  padding-right: 20px;
  color: #0d0d0d;
  line-height: 1.8;
  text-align: center;
}

.hero-title.main {
  font-size: 48px; /* 第一行最大字体 */
  font-weight: bold; /* 加粗 */
  margin-top: 20px; /* 上邊距 */
  margin-bottom: 10px; /* 下邊距 */
  line-height: 1.8;
  color: #393939;
}
.hero-title.xiao {
  font-size: 20px; /* 第一行最大字体 */
  font-weight: bold; /* 加粗 */
  margin-top: 20px; /* 上邊距 */
  margin-bottom: 10px; /* 下邊距 */
  line-height: 1.8;
  color: #393939;
}
.hero-title.main-ti {
  font-size: 20px; /* 第一行最大字体 */
  font-weight: bold; /* 加粗 */
  margin-top: 20px; /* 上邊距 */
  margin-bottom: 10px; /* 下邊距 */
  line-height: 1.8;
  color: #393939;
}
.hero-title.main-ti-hi {
  font-size: 20px; /* 第一行最大字体 */
  margin-top: 20px; /* 上邊距 */
  margin-bottom: 10px; /* 下邊距 */
  line-height: 1.8;
  color: #575757;
}
.hero-title.main-xi {
  font-size: 26px; /* 第一行最大字体 */
  font-weight: bold; /* 加粗 */
  margin-top: 20px; /* 上邊距 */
  margin-bottom: 10px; /* 下邊距 */
  line-height: 1.8;
  color: #393939;
}
.hero-text p {
  font-size: 18px;
  margin-bottom: 25px;
  color: #5d5c5c;
}

.section-title-wrapper {
  margin-top: 110px;
  width: 100vw; /* 全屏宽度 */

  position: relative;
  padding: 20px 0; /* 上下间距 */
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
    width: 4ch; /* 根據文字長度調整，1個中文字約1ch */
    opacity: 1;
  }
}

/* 對勾表 */
.problem-lists {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 40px 0 40px 60px;
}
.problem-list {
  flex: 1; /* 左右等寬 */
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  margin: 20px 0;
}

.problem-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  min-height: 40px; /* 統一高度 */
  width: 90%;
}
.problem-item:nth-child(odd) {
  background-color: #f3f4f6; /* 淡灰色 */
}

.problem-item:nth-child(even) {
  background-color: #ffffff; /* 白色 */
}
.check {
  color: #c6a5cd; /* 藍色對勾 */
  font-weight: bold;
  margin-right: 15px;
  font-size: 20px;
}

.problem-item p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}
/* 取り扱い実績のある商品（一例） */
.product-list-section {
  background-color: #eaf4ff; /* 淺藍色背景 */
  border-radius: 4px;
  padding: 10px 40px;
  width: 80%;
  margin: 40px auto;
  line-height: 1.8;
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #191919;
    text-align: center;
  }

  .product-items {
    font-size: 14px;
    text-align: left;
    white-space: pre-wrap; /* 保留換行 */
  }
}
/* 連携可能なシステム */
.system-section {
  text-align: center;
  margin: 40px auto;
  line-height: 1.8;
}

.system-section h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.system-section p {
  font-size: 20px;
  font-weight: 700;
  color: #1d1d1d;
  margin: 0.3rem 0;
}
/* 安心の実績 */
.system-section-an {
  text-align: center;
  margin: 20px auto;
  line-height: 1.8;
}

.system-section-an h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.system-section-an p {
  font-size: 20px;
  font-weight: 400;
  color: #474646;
  margin: 0.3rem 0;
}
/* 3張圖片 */
/* 外層容器：橫向排列並置中 */
.image-group {
  display: flex;
  justify-content: center; /* 水平居中整組圖片 */
  align-items: center;
  gap: 40px; /* 圖片之間的間距，可調整 */
  flex-wrap: wrap; /* 小螢幕自動換行 */
  margin: 40px 0;
}

/* 單張圖片容器 */
.image-ten {
  display: flex;
  flex-direction: column; /* 改成垂直排列 */
  justify-content: center;
  align-items: center;
}
/* 圖片下方文字 */
.image-caption {
  text-align: center; /* 文字居中 */
  margin-top: 12px; /* 與圖片間距 */
  font-size: 16px; /* 文字大小，可調整 */
  color: #333; /* 文字顏色 */
  font-weight: 500; /* 文字粗細，可選 */
}

/* 圖片樣式 */
.image-ten img.case-image {
  width: 200px;
  height: auto;
  transition: all 0.3s ease;
  filter: grayscale(50%) brightness(2) !important;
  opacity: 0.95; /* 可微調淡化效果 */
}

/* 滑鼠懸停時變黑色 */
.image-ten img.case-image:hover {
  filter: grayscale(100%) brightness(0.4) !important; /* 深灰效果 */
  opacity: 1;
}

/* サービス區塊 */
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

.feature-section {
  display: flex;
  gap: 0px; /* 左右间距 */
  margin: 0px 60px;
}

/* 每一組：左文字 + 右圖 */
.feature-item {
  display: flex;
  align-items: flex-start; /* ✅ 僅上對齊 */
  justify-content: space-between;
  gap: 30px;
}
/* 左侧文字列 */
.points-column {
  flex: 1; /* 占剩余空间 */
  color: #4f4f4f; /* 深灰色 */
  line-height: 1.4;
}

/* 右侧图片列 */
.image-column {
  flex: 1; /* 占剩余空间 */
  display: flex;
  flex-direction: column; /* 纵向排列 */
  align-items: flex-start;
  gap: 0;
  align-items: center;
  margin-top: 30px;
}
.image-wrapper {
  width: auto;
  display: flex;
  justify-content: center;
}
.flow-image {
  max-width: 300px; /* 👉 限制圖片最大寬度 */
  height: auto;
}

/*  Point01*/
.point-title {
  font-size: 38px; /* 大小 */
  font-weight: bold; /* 粗体 */
  font-style: italic; /* 倾斜 */
  margin-bottom: 0px; /* 可选：和内容间距 */
  margin-left: 60px;
}
.point-paragraph {
  margin-left: 60px; /* 上下间距 8px */
  line-height: 1.28; /* 控制段落行間距，數字越小越緊湊 */
  margin-bottom: 0; /* 段落間距，可調整 */
}
.image-container {
  margin-top: 120px;
  width: 100%; /* 父容器宽度 */
  text-align: center; /* 图片居中 */
}
.image-container-1 {
  margin-top: 120px;
  width: 100%; /* 父容器宽度 */
  text-align: center; /* 图片居中 */
}

.flow-image {
  max-width: 100%; /* 图片不会超出容器 */
  height: auto; /* 高度自适应 */
}
/* 圖片 */
.image-Rakuten {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中（若容器有高度） */
  margin: 20px 0;
}

.image-Rakuten img {
  max-width: 100%;
  width: 1000px; /* 可依實際大小調整 */
  height: auto;
  border-radius: 8px; /* 可選：圓角 */
}

/* 文字和小圓點 */
.testimonial-carousel {
  display: flex;
  flex-direction: column; /* 垂直排列文字和點點 */
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中整個區塊 */
  text-align: center; /* 文字居中 */
  gap: 16px; /* 文字和點點之間的距離，可調整 */
  padding: 20px; /* 可選，增加內距 */
}
.testimonial-content p {
  font-size: 16px;
  color: #555; /* 灰色文字 */
  background-color: #ebf3fb; /* 淺藍色背景 */
  padding: 40px 80px; /* 內邊距 */
  max-width: 600px; /* 可選，限制寬度 */
  margin: 0 auto; /* 置中 */
  border: 50px solid #e5e3e3; /* 灰色外邊框 */
}
.dots {
  display: flex;
  gap: 8px; /* 點點間距 */
}
.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dots span.active {
  background-color: #0f0f0f;
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
  width: 180px;
  padding: 0 20px; /* 左右内边距 */
  background-color: #0d69cb;
  color: #fff;
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
/* 灰色背景區域 */
/* 整體灰色背景區域 */
.hero-section {
  background-color: #f6f6f6; /* 淺灰背景 */
  padding: 16px 20px; /* 上下間距+左右留白 */
  text-align: center; /* 整體內容居中 */
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
/* 兩邊排列 */
.business-container {
  width: 90%;
  display: flex;
  gap: 1rem; /* 两个卡片间距 */
  flex-wrap: wrap; /* 小屏幕自动换行 */
  margin-left: 60px;
}
/* 圖片框 */
.business-section {
  flex: 1;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px; /* 圆角，可选 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 阴影 */
  border: 1px solid #e0e0e0; /* 浅灰边框，可选 */
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.section-desc {
  color: #666;
  margin-bottom: 2rem;
  text-align: center; /* 文字居中 */
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 6列 */
  grid-template-rows: repeat(6, auto); /* 3行 */
  gap: 6px; /* 间距 */
  justify-items: center; /* 每个 item 水平居中 */
  align-items: center; /* 每个 item 垂直居中 */
}

/* 每个服务项 */
.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.service-item img {
  width: 150px; /* 可根据需要调整 */
  height: 100px;
  object-fit: contain;
  transition: transform 0.3s;
}

.service-item img:hover {
  transform: scale(1.1); /* 悬停放大效果 */
}

.service-item p {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #333;
}
/* 左邊文字 右邊表單  */
.service-contact-wrapper {
  display: flex;
  justify-content: space-between; /* 左右两侧均匀分布 */
  gap: 40px; /* 左右间距 */
  align-items: flex-start; /* 顶部对齐 */
  flex-wrap: wrap; /* 屏幕小可以换行 */
  margin: 40px auto;
  max-width: 1100px;
}

/* 左侧文本宽度 */
.service-texts {
  flex: 1 1 45%; /* 左侧占45%宽度，可调整 */
  margin-top: 120px;
  line-height: 1.2;
}
/* 右侧表单宽度 */
.animated-title-contact {
  flex: 1 1 45%; /* 右侧占45%宽度 */
  max-width: 500px;
}

/* 单独设置不同字号和加粗 */
.service-texts .big-text {
  font-size: 20px;
  font-weight: bold;
}

.service-texts .medium-text {
  font-size: 38px;
  font-weight: bold;
}

.service-texts .small-text {
  font-size: 20px;
  font-weight: bold;
}
.service-texts.xiao-text {
  font-size: 16px;
  font-weight: bold;
}

/* 默认内容段落 */
.service-texts p:not(.big-text):not(.medium-text):not(.small-text) {
  font-size: 16px;
  line-height: 1.8;
}
/* 表單 */
.animated-title-contact {
  max-width: 500px;
  background-color: #f1f1f1; /* 灰色背景 */
  border: 1px solid #c8c5c5; /* 灰色边框 */
  padding: 30px 20px;
  margin: 0 auto; /* 水平居中整个表单容器 */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* 容器内文本居中 */
}
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center; /* 让 input 和 button 水平居中 */
  gap: 12px; /* 表单项间距 */
  width: 100%;
}

.contact-form label {
  align-self: flex-start; /* 标签左对齐 */
  margin-left: 40px;
  color: #5e5d5d;
}

.contact-form input {
  width: 80%; /* 让输入框自适应容器宽度 */
  height: 40px;
  padding: 10px 12px;
  border: 2px solid #fff; /* 白色边框 */
  background-color: #fff; /* 白色背景 */
  border-radius: 6px;
  font-size: 16px;
  outline: none;
}

.contact-form input:focus {
  border-color: #007bff; /* 聚焦时边框蓝色 */
}

.contact-form button {
  width: 86%; /* 按钮宽度 */
  height: 66px;
  padding: 12px;
  background-color: #0459b5; /* 蓝色按钮 */
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.contact-form button:hover {
  background-color: #034388;
}
/* 紫色背景 */
.purple-bg {
  width: 2000px;
  height: 40px;
  background-color: #9c02b1; /* 紫色背景，可调整色值 */
  color: #fff; /* 白色文字 */
  padding: 20px 0; /* 内边距 */
  border-radius: 0; /* 可选圆角 */
  text-align: center; /* 居中显示 */
  font-size: 20px;
  line-height: 1.5;
  font-weight: bold; /* 文字加粗 */
  /* 整体倾斜 */
  transform: skewY(-2deg);
  overflow: hidden; /* 防止滚动文字溢出 */
  position: relative;
  margin-top: -42px;
  margin-left: -60px;
}

/* 让滚动文字不倾斜 */
.purple-bg .scroll-text {
  transform: skewY(2deg); /* 恢复文字水平 */
  display: inline-block;
  position: absolute;
  white-space: nowrap;
  left: -100%; /* 从容器左边外开始 */
  animation: scroll-right 30s linear infinite;
}

/* 动画：从左往右滚动 */
@keyframes scroll-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(200%);
  }
}

/* 圖片文字上下背景 */
/* 外层容器 */
.case-cards-wrapper {
  width: 1200px;
  display: flex;
  flex-wrap: wrap; /* 小屏幕自动换行 */
  gap: 0; /* 卡片间距 */
  justify-content: center; /* 居中排列 */
  margin: 2px 0;
  margin-left: 40px;
}

.case-card {
  flex: 0 1 340px;
  background-color: #fff; /* 白色背景 */
  border: 1px solid #edecec; /* 灰色邊框 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 陰影 */
  border-radius: 0px;
  width: 80%;

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
    border-radius: 0;
  }
}
.hero-text2 {
  padding: 20px 30px;
  color: #333;
  line-height: 1.7;
  text-align: left; /* ✅ 文字靠左 */

  .hero-title2.main {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  p {
    font-size: 14px;
    margin: 6px 0;
  }
}
/* 按鈕 */
.contact-btn {
  width: 100%;
  text-align: center; /* 父容器居中对齐 */
  margin: 30px 0; /* 上下间距，可根据需要调整 */
  margin-left: 60px;
}
/* 下拉 表*/
.accor {
  margin-bottom: 80px;
}
.accordion {
  width: 100%;
  max-width: 1000px;
  margin: 15px auto;
  border: 1px solid #f0eeee;
  overflow: hidden;
  cursor: pointer;
  background-color: #e6f9fd;
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
    color: #3d3d3d;
  }
  .arrow {
    display: inline-block;
    transition: transform 0.3s ease;
  }
  .arrow.open {
    transform: rotate(180deg);
  }

  .accordion-body {
    padding: 16px 20px;
    font-size: 16px;
    line-height: 1.6;

    background-color: #e6f9fd;
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
  background-color: #43b1ed;
  color: #fff;
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
</style>
