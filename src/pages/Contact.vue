<template>
  <section class="contact-section">
    <div class="section-title-wrapper">
      <div class="section-title">
        <span class="left-bg"></span>
        <span class="right-bg"></span>
        <span class="slash"></span>
        <h1>お問い合わせ</h1>
      </div>
    </div>
    <div class="contact-form-section">
      <p class="intro-text">
        ロジファストのEC（ネットショップ・通販）物流代行・発送代行サービスに興味を<br />持っていただき、ありがとうございます。
        EC物流に関するお困りごとがありました<br />ら、どんな些細なことでも構いません。まずは私たちへご相談ください。
      </p>
      <p>1～2営業日以内に、担当よりメールにて返信させていただきます。</p>

      <div class="contact-form">
        <label>お名前 <span class="required">*</span></label>
        <input type="text" v-model="form.name" placeholder="例）山田 太郎" />

        <label>メールアドレス <span class="required">*</span></label>
        <input
          type="email"
          v-model="form.email"
          placeholder="この項目は必須です"
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
          placeholder="例）045-315-5250"
        />

        <label>ご相談内容（複数選択可）</label>
        <div class="checkbox-group">
          <label
            ><input
              type="checkbox"
              value="EC物流・発送代行"
              v-model="form.consultation"
            />
            EC物流・発送代行</label
          >
          <label
            ><input
              type="checkbox"
              value="ギフト物流"
              v-model="form.consultation"
            />
            ギフト物流</label
          >
          <label
            ><input
              type="checkbox"
              value="販売代行"
              v-model="form.consultation"
            />
            販売代行</label
          >
          <label
            ><input
              type="checkbox"
              value="その他"
              v-model="form.consultation"
            />
            その他</label
          >
        </div>

        <label>導入希望時期</label>
        <div class="radio-group">
          <label
            ><input type="radio" value="すぐにでも" v-model="form.time" />
            すぐにでも</label
          >
          <label
            ><input type="radio" value="1ヶ月以内" v-model="form.time" />
            1ヶ月以内</label
          >
          <label
            ><input type="radio" value="2ヶ月以内" v-model="form.time" />
            2ヶ月以内</label
          >
          <label
            ><input type="radio" value="3ヶ月以内" v-model="form.time" />
            3ヶ月以内</label
          >
          <label
            ><input type="radio" value="半年以内" v-model="form.time" />
            半年以内</label
          >
          <label
            ><input type="radio" value="1年以内" v-model="form.time" />
            1年以内</label
          >
          <label
            ><input type="radio" value="情報収集段階" v-model="form.time" />
            情報収集段階</label
          >
        </div>

        <label>ご相談内容の詳細 <span class="required">*</span></label>
        <textarea rows="5" v-model="form.details"></textarea>

        <div class="agreement">
          <label
            ><input type="checkbox" v-model="form.agree" />
            個人情報の取り扱いに同意する</label
          >
          <p class="note">
            <a href="/privacy" target="_blank" class="privacy-link">
              お問い合わせ及び資料請求における個人情報の取扱いについて
            </a>
            に同意の上、送信ボタンをクリックしてください。
          </p>
        </div>

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
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  consultation: [],
  time: '',
  details: '',
  agree: false,
});

const loading = ref(false);

const submitForm = async () => {
  if (!form.agree) {
    alert('個人情報の取り扱いに同意してください');
    return;
  }

  loading.value = true;
  try {
    // 模拟异步请求
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('表单提交数据：', JSON.stringify(form));
    alert('送信が完了しました。ありがとうございます！');

    // 清空表单
    Object.keys(form).forEach((key) => {
      if (Array.isArray(form[key])) form[key] = [];
      else if (typeof form[key] === 'boolean') form[key] = false;
      else form[key] = '';
    });
  } catch (error) {
    console.error(error);
    alert('送信中にエラーが発生しました。もう一度お試しください。');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.section {
  padding: 20px;
}
/* 外側淺藍的背景*/
.contact-section {
  background-color: #e6f2ff; /* 淺藍色背景 */
  padding-bottom: 60px; /* 上下间距 */
}
.section-title-wrapper {
  margin-top: 100px;
  width: 100vw; /* 全屏宽度 */
  height: 120px;
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
/* お問い合わせ */
.contact-form-section {
  background-color: #fff; /* 白色背景 */
  padding: 80px 100px;
  max-width: 700px;
  margin: 40px auto;
  border: 1px solid #efeded;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-top: 100px;

  .intro-text {
    font-size: 18px;
    color: #535353;
    line-height: 1.8;
  }

  .contact-form {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 18px;

    label {
      color: #5d5c5c;
      margin-bottom: 4px;
    }

    input[type='text'],
    input[type='email'],
    textarea {
      width: 100%;
      padding: 15px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 15px;
      transition: border-color 0.3s;

      &:focus {
        border-color: #007bff;
        outline: none;
      }
    }

    .checkbox-group,
    .radio-group {
      display: flex;
      flex-direction: column; /* 改為縱向排列 */
      gap: 8px; /* 上下間距 */
      margin-top: 4px;

      label {
        display: flex;
        align-items: center;
        gap: 6px; /* 文字與框之間的間距 */
        font-weight: normal;
        color: #333;
      }
    }

    textarea {
      resize: vertical;
    }

    .agreement {
      margin-top: 10px;
      .note {
        font-size: 13px;
        color: #666;
        margin-top: 6px;
        line-height: 1.6;
      }
    }

    .required {
      color: red;
      margin-left: 4px;
    }

    .submit-btn {
      width: 100px;
      height: 50px;
      margin: 20px auto 0;
      background-color: #007bff;
      color: white;
      padding: 12px 0;
      border: none;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
}
/* 跳轉 */
.privacy-link {
  color: #007bff; /* 藍色文字 */
  text-decoration: none; /* 加底線 */
  transition: color 0.3s;

  &:hover {
    color: #0056b3; /* 滑鼠懸停變深藍 */
  }
}
</style>
