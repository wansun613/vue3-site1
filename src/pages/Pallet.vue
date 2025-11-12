<template>
  <section>
    <div class="section-title-wrapper">
      <div class="section-title">
        <span class="left-bg"></span>
        <span class="right-bg"></span>
        <span class="slash"></span>
        <h1 class="animated-title">パレット積載計算</h1>
      </div>
    </div>

    <div class="tms-page-center">
      <div class="form-container">
        <a-form
          class="tms-form"
          :model="form"
          layout="vertical"
          @submit="handleSubmit"
        >
          <!-- モード -->
          <div class="form-section">
            <h3 class="section-header">基本設定</h3>
            <a-form-item label="モード" required class="mode-item">
              <template #label>
                <div class="mode-label">
                  <span class="label-text">モード</span>
                  <span v-if="form.mode === 'max'" class="mode-hint">
                    容器に対し、入れる箱のサイズは1つのみ
                  </span>
                  <span v-else-if="form.mode === 'limited'" class="mode-hint">
                    容器に対し、入れる箱のサイズが複数ある
                  </span>
                </div>
              </template>
              <a-select v-model="form.mode" @change="resetBoxes" size="large">
                <a-option value="max">単一サイズ</a-option>
                <a-option value="limited">複数サイズ</a-option>
              </a-select>
            </a-form-item>

            <!-- パレット -->
            <a-form-item label="パレット" required class="mode-item">
              <template #label>
                <div class="mode-label">
                  <span class="label-text">パレット</span>
                  <span v-if="form.palletMode === 'single'" class="mode-hint">
                    ありの場合は、パレットで積載すること　パレットサイズ　縦1100mm、横1100mm、厚み144mm
                  </span>
                  <span
                    v-else-if="form.palletMode === 'multi'"
                    class="mode-hint"
                  >
                    なしの場合は、バラ積みで積載すること
                  </span>
                </div>
              </template>
              <a-select
                v-model="form.palletMode"
                @change="onChangePalletMode"
                size="large"
              >
                <a-option value="single">あり</a-option>
                <a-option value="multi">なし</a-option>
              </a-select>
            </a-form-item>
          </div>

          <!-- 単位設定 -->
          <div class="form-section">
            <h3 class="section-header">単位設定</h3>
            <div class="unit-grid">
              <a-form-item label="サイズ単位" required>
                <a-radio-group v-model="form.lengthUnit" size="large">
                  <a-radio value="cm">cm</a-radio>
                  <a-radio value="mm">mm</a-radio>
                </a-radio-group>
              </a-form-item>

              <a-form-item label="重量単位" required>
                <a-radio-group v-model="form.weightUnit" size="large">
                  <a-radio value="kg">kg</a-radio>
                  <a-radio value="g">g</a-radio>
                </a-radio-group>
              </a-form-item>
            </div>
          </div>

          <!-- 容器内容 -->
          <div class="form-section">
            <h3 class="section-header">容器設定</h3>
            <a-form-item label="容器内容" required class="container-item">
              <template #label>
                <div class="container-label">
                  <span class="label-text">容器内容</span>
                  <span v-if="selectedContainer" class="container-hint">
                    {{ selectedContainer.name }}・・・・サイズ　縦{{
                      selectedContainer.size.l
                    }}mm、横{{ selectedContainer.size.w }}mm、高さ{{
                      selectedContainer.size.h
                    }}mm　最大積載量{{ selectedContainer.maxLoad }}kg
                  </span>
                </div>
              </template>
              <a-select
                v-model="form.selectedContainerId"
                placeholder="容器を選択してください"
                @change="onContainerChange"
                size="large"
              >
                <a-option v-for="c in containers" :key="c.id" :value="c.id">
                  {{ c.name }}
                </a-option>
              </a-select>
            </a-form-item>

            <div class="dimension-grid">
              <a-form-item :label="`長さ (${form.lengthUnit})`" required>
                <a-input-number
                  v-model="form.container.l"
                  :min="0.01"
                  size="large"
                  style="width: 100%"
                  :precision="2"
                />
              </a-form-item>
              <a-form-item :label="`幅 (${form.lengthUnit})`" required>
                <a-input-number
                  v-model="form.container.w"
                  :min="0.01"
                  size="large"
                  style="width: 100%"
                  :precision="2"
                />
              </a-form-item>
              <a-form-item :label="`高さ (${form.lengthUnit})`" required>
                <a-input-number
                  v-model="form.container.h"
                  :min="0.01"
                  size="large"
                  style="width: 100%"
                  :precision="2"
                />
              </a-form-item>
              <a-form-item :label="`最大載重 (${form.weightUnit})`">
                <a-input-number
                  v-model="form.container.maxLoad"
                  :min="0"
                  :disabled="true"
                  size="large"
                  style="width: 100%"
                  :precision="2"
                />
              </a-form-item>
            </div>
          </div>

          <!-- 計算設定 -->
          <div class="form-section">
            <h3 class="section-header">計算設定</h3>

            <a-form-item label="積載計算" required>
              <a-radio-group
                v-model="form.stackingCalc"
                @change="onChangeStackingCalc"
                class="stacking-radio-group"
              >
                <!-- 単一サイズ模式 -->
                <template v-if="form.mode === 'max'">
                  <div class="stacking-row">
                    <a-radio value="custom">
                      <strong>自由入力</strong>
                    </a-radio>
                    <a-radio value="maxStack">
                      <strong>最大積載数</strong>
                    </a-radio>
                  </div>
                </template>

                <!-- 複数サイズ模式 -->
                <template v-else-if="form.mode === 'limited'">
                  <div class="stacking-row">
                    <a-radio value="custom">
                      <strong>自由入力</strong>
                    </a-radio>
                    <a-radio value="ratio">
                      <strong>比例定数</strong>
                    </a-radio>
                  </div>
                </template>
              </a-radio-group>
            </a-form-item>
          </div>

          <!-- 箱設定 -->
          <div class="form-section">
            <h3 class="section-header">箱設定</h3>

            <!-- 循环显示所有箱子 -->
            <div
              v-for="(box, index) in form.boxes"
              :key="index"
              class="box-item"
            >
              <div class="box-header">
                <!-- ✅ 這裡改成顯示箱名或默認「箱 1」 -->
                <h4 class="box-title">
                  {{ box.name ? box.name : `箱 ${index + 1}` }}
                </h4>

                <!-- 複数サイズ模式: 显示删除按钮 -->
                <a-button
                  v-if="form.mode === 'limited' && form.boxes.length > 1"
                  type="text"
                  status="danger"
                  size="small"
                  @click="removeBox(index)"
                >
                  削除
                </a-button>
              </div>

              <!-- 箱类型选择 (仅第一个箱子显示) -->
              <a-form-item label="箱" required>
                <a-select
                  v-model="box.boxMode"
                  size="large"
                  @change="() => fillSizesForBox(index)"
                >
                  <a-option value="custom">自由入力(縦、横、高さ)</a-option>
                  <a-option value="60">60サイズ</a-option>
                  <a-option value="80">80サイズ</a-option>
                  <a-option value="100">100サイズ</a-option>
                  <a-option value="120">120サイズ</a-option>
                  <a-option value="140">140サイズ</a-option>
                  <a-option value="160">160サイズ</a-option>
                </a-select>
              </a-form-item>

              <!-- 箱子尺寸 -->
              <div class="dimension-grid">
                <a-form-item :label="`長さ (${form.lengthUnit})`" required>
                  <a-input-number
                    v-model="box.size.l"
                    :min="0.01"
                    size="large"
                    style="width: 100%"
                    :precision="2"
                    @blur="() => validateBoxSize(index)"
                  />
                </a-form-item>
                <a-form-item :label="`幅 (${form.lengthUnit})`" required>
                  <a-input-number
                    v-model="box.size.w"
                    :min="0.01"
                    size="large"
                    style="width: 100%"
                    :precision="2"
                    @blur="() => validateBoxSize(index)"
                  />
                </a-form-item>
                <a-form-item :label="`高さ (${form.lengthUnit})`" required>
                  <a-input-number
                    v-model="box.size.h"
                    :min="0.01"
                    size="large"
                    style="width: 100%"
                    :precision="2"
                    @blur="() => validateBoxSize(index)"
                  />
                </a-form-item>

                <!-- 箱子重量 -->
                <a-form-item :label="`重量 (${form.weightUnit})`" required>
                  <a-input-number
                    v-model="box.weight"
                    :min="0.01"
                    size="large"
                    style="width: 100%"
                    :precision="2"
                    placeholder="箱の重量を入力"
                  />
                </a-form-item>
                <!-- ✅ 数量 (単一サイズ + 自由入力時顯示) -->
                <a-form-item
                  v-if="form.mode === 'max' && form.stackingCalc === 'custom'"
                  label="数量"
                  required
                >
                  <a-input-number
                    v-model="box.quantity"
                    :min="1"
                    size="large"
                    style="width: 100%"
                    :precision="0"
                    placeholder="箱の数量を入力"
                  />
                </a-form-item>
                <!-- 複数サイズ + 自由入力時 -->
                <a-form-item
                  v-if="
                    form.mode === 'limited' && form.stackingCalc === 'custom'
                  "
                  label="数量"
                  required
                >
                  <a-input-number
                    v-model="box.quantity"
                    :min="1"
                    size="large"
                    style="width: 100%"
                    :precision="0"
                    placeholder="箱の数量を入力"
                  />
                </a-form-item>

                <!-- 複数サイズ + 比例定数時 -->
                <a-form-item
                  v-if="
                    form.mode === 'limited' && form.stackingCalc === 'ratio'
                  "
                  label="比例"
                  required
                >
                  <a-input-number
                    v-model="box.ratio"
                    :min="0.01"
                    :max="100"
                    size="large"
                    style="width: 100%"
                    :precision="2"
                    placeholder="比例を入力"
                  />
                </a-form-item>
              </div>
            </div>

            <!-- 複数サイズ模式: 显示添加按钮 -->
            <a-button
              v-if="form.mode === 'limited'"
              type="dashed"
              long
              size="large"
              @click="addBox"
              style="margin-top: 16px"
            >
              + 箱を追加
            </a-button>
          </div>

          <!-- 提交按钮 -->
          <div class="form-actions">
            <a-button
              type="primary"
              size="large"
              @click="handleSubmit"
              :style="{ width: '200px', height: '48px' }"
            >
              計算を開始
            </a-button>
          </div>
        </a-form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, watch, computed } from 'vue';
import { Message } from '@arco-design/web-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

//
const defaultBox = (index) => ({
  type: `box${index || 1}`,
  name: '', // ✅ 添加 name 属性
  boxMode: 'custom', // 每个箱子有自己的模式
  size: { l: 0, w: 0, h: 0 },
  weight: 0, // 默认重量
  quantity: 10,
  ratio: 50,
});

const form = reactive({
  mode: 'max',
  selectedContainerId: null,
  container: { l: 0, w: 0, h: 0, maxLoad: 0 },
  boxes: [defaultBox(1)], // 初始化一个箱子
  allocationMode: 'quantity',
  palletMode: 'single',
  lengthUnit: 'cm',
  weightUnit: 'kg',
  stackingCalc: 'maxStack',
  calculationInfo: 'basic',
});

// 记录上一次的单位,用于转换计算
let previousLengthUnit = 'cm';
let previousWeightUnit = 'kg';

function resetBoxes() {
  // 切换模式时重置箱子
  form.boxes = [defaultBox(1)];
  // 根据模式设置默认的积载计算
  form.stackingCalc = form.mode === 'max' ? 'maxStack' : 'ratio';
}

// 添加箱子 (仅複数サイズ模式)
function addBox() {
  if (form.mode === 'limited') {
    form.boxes.push(defaultBox(form.boxes.length + 1));
  }
}

// 删除箱子 (仅複数サイズ模式)
function removeBox(index) {
  if (form.mode === 'limited' && form.boxes.length > 1) {
    form.boxes.splice(index, 1);
    // 重新编号
    form.boxes.forEach((box, idx) => {
      box.type = `box${idx + 1}`;
    });
  }
}

function onChangePalletMode(value) {
  console.log('パレット選択:', value);
}

function onChangeStackingCalc(value) {
  console.log('積載計算選択:', value);
}

// 箱子尺寸限制(基准单位: cm)
const sizeLimits = {
  60: 60,
  80: 80,
  100: 100,
  120: 120,
  140: 140,
  160: 160,
};

// // 监听第一个箱子的尺寸变化
// watch(
//   () => form.boxes[0]?.size,
//   () => {
//     if (form.boxes[0]?.boxMode !== 'custom') {
//       fillSizesForBox(0);
//     }
//   },
//   { deep: true }
// );

// 切换箱子模式时清空尺寸
// function fillSizesForBox(index) {
//   const box = form.boxes[index];
//   if (box.boxMode !== 'custom') {
//     // 切换到预设サイズ时清空输入
//     box.size.l = 0;
//     box.size.w = 0;
//     box.size.h = 0;
//   }
// }
// ✅ 切换箱子模式时清空尺寸并设置名称
function fillSizesForBox(index) {
  const box = form.boxes[index];

  // 根据选择的模式设置箱子名称
  if (box.boxMode === 'custom') {
    box.name = '自由入力';
  } else if (box.boxMode === '60') {
    box.name = '60サイズ';
  } else if (box.boxMode === '80') {
    box.name = '80サイズ';
  } else if (box.boxMode === '100') {
    box.name = '100サイズ';
  } else if (box.boxMode === '120') {
    box.name = '120サイズ';
  } else if (box.boxMode === '140') {
    box.name = '140サイズ';
  } else if (box.boxMode === '160') {
    box.name = '160サイズ';
  }

  // 切换到预设サイズ时清空输入
  if (box.boxMode !== 'custom') {
    box.size.l = 0;
    box.size.w = 0;
    box.size.h = 0;
  }
}
// 验证箱子尺寸总和是否超过限制
function validateBoxSize(index) {
  const box = form.boxes[index];
  const selectedSize = box.boxMode;

  // 自由入力模式不需要验证
  if (selectedSize === 'custom') return true;

  const baseTotalLimit = sizeLimits[selectedSize];
  if (!baseTotalLimit) return true;

  // 根据单位换算限制值
  const totalLimit =
    form.lengthUnit === 'mm' ? baseTotalLimit * 10 : baseTotalLimit;

  // 计算用户输入的总和
  const sum = (box.size.l || 0) + (box.size.w || 0) + (box.size.h || 0);

  if (sum > totalLimit) {
    Message.warning(
      `箱 ${index + 1}: 長さ + 幅 + 高さの合計が${totalLimit}${
        form.lengthUnit
      }を超えています（現在: ${sum.toFixed(2)}${form.lengthUnit}）`
    );
    return false;
  }

  return true;
}

// 监听长度单位变化,自动转换数值
watch(
  () => form.lengthUnit,
  (newUnit, oldUnit) => {
    if (!oldUnit) {
      previousLengthUnit = newUnit;
      return;
    }

    // 计算转换比例
    let ratio = 1;
    if (previousLengthUnit === 'cm' && newUnit === 'mm') {
      ratio = 10; // cm -> mm: 乘以10
    } else if (previousLengthUnit === 'mm' && newUnit === 'cm') {
      ratio = 0.1; // mm -> cm: 除以10
    }

    if (ratio !== 1) {
      // 转换容器尺寸
      if (form.container.l > 0) {
        form.container.l = Math.round(form.container.l * ratio * 100) / 100;
      }
      if (form.container.w > 0) {
        form.container.w = Math.round(form.container.w * ratio * 100) / 100;
      }
      if (form.container.h > 0) {
        form.container.h = Math.round(form.container.h * ratio * 100) / 100;
      }

      // ✅ 转换所有箱子尺寸 (无论是自定义还是预设模式)
      form.boxes.forEach((box) => {
        if (box.size.l > 0) {
          box.size.l = Math.round(box.size.l * ratio * 100) / 100;
        }
        if (box.size.w > 0) {
          box.size.w = Math.round(box.size.w * ratio * 100) / 100;
        }
        if (box.size.h > 0) {
          box.size.h = Math.round(box.size.h * ratio * 100) / 100;
        }
      });

      Message.success(`尺寸已自動転換: ${previousLengthUnit} → ${newUnit}`);
    }

    previousLengthUnit = newUnit;
  }
);

// 监听重量单位变化,自动转换数值
watch(
  () => form.weightUnit,
  (newUnit, oldUnit) => {
    if (!oldUnit) {
      previousWeightUnit = newUnit;
      return;
    }

    // 计算转换比例
    let ratio = 1;
    if (previousWeightUnit === 'kg' && newUnit === 'g') {
      ratio = 1000; // kg -> g: 乘以1000
    } else if (previousWeightUnit === 'g' && newUnit === 'kg') {
      ratio = 0.001; // g -> kg: 除以1000
    }

    if (ratio !== 1) {
      // 转换容器最大载重
      if (form.container.maxLoad > 0) {
        form.container.maxLoad =
          Math.round(form.container.maxLoad * ratio * 100) / 100;
      }

      // ✅ 转换所有箱子的重量(用户手动输入的值)
      form.boxes.forEach((box) => {
        if (box.weight && box.weight > 0) {
          box.weight = Math.round(box.weight * ratio * 100) / 100;
        }
      });

      Message.success(`重量已自動転換: ${previousWeightUnit} → ${newUnit}`);
    }

    previousWeightUnit = newUnit;
  }
);
// 容器内容
const containers = [
  {
    id: 1,
    name: '2トン車 平ボディ',
    size: { l: 1695, w: 3120, h: 380 },
    maxLoad: 2000,
  },
  {
    id: 2,
    name: '2トン車 箱式 ショート',
    size: { l: 3085, w: 1780, h: 2055 },
    maxLoad: 2000,
  },
  {
    id: 3,
    name: '2トン車 箱式 標準',
    size: { l: 3150, w: 1790, h: 1880 },
    maxLoad: 2000,
  },
  {
    id: 4,
    name: '2トン車 箱式 ロング',
    size: { l: 4440, w: 2100, h: 2090 },
    maxLoad: 2000,
  },
  {
    id: 5,
    name: '軽トラック',
    size: { l: 1940, w: 1410, h: 290 },
    maxLoad: 350,
  },
  {
    id: 6,
    name: '4トン車 平ボディ',
    size: { l: 6200, w: 2120, h: 400 },
    maxLoad: 4450,
  },
  {
    id: 7,
    name: '4トン車 箱式',
    size: { l: 6230, w: 2390, h: 2310 },
    maxLoad: 2800,
  },
  {
    id: 8,
    name: '10トン車',
    size: { l: 9500, w: 2390, h: 2590 },
    maxLoad: 12900,
  },
  {
    id: 9,
    name: '20フィードコンテナ',
    size: { l: 5898, w: 2350, h: 2390 },
    maxLoad: 28280,
  },
  {
    id: 10,
    name: '40フィードコンテナ ハイキューブ',
    size: { l: 12032, w: 2350, h: 2695 },
    maxLoad: 26740,
  },
  {
    id: 11,
    name: '40フィードコンテナ',
    size: { l: 12032, w: 2350, h: 2390 },
    maxLoad: 26740,
  },
  { id: 12, name: '籠車', size: { l: 1040, w: 1040, h: 1700 }, maxLoad: 500 },
  { id: 13, name: '自由入力', size: { l: 0, w: 0, h: 0 }, maxLoad: 0 },
];
// 获取当前选中的容器
const selectedContainer = computed(() => {
  if (!form.selectedContainerId) return null;
  return containers.find((c) => c.id === form.selectedContainerId);
});

function onContainerChange(selectedId) {
  const selectedContainer = containers.find((c) => c.id === selectedId);
  if (selectedContainer) {
    // 容器数据是mm,转换为cm (除以10)
    const ratio = form.lengthUnit === 'mm' ? 1 : 0.1;
    form.container.l = Math.round(selectedContainer.size.l * ratio * 100) / 100;
    form.container.w = Math.round(selectedContainer.size.w * ratio * 100) / 100;
    form.container.h = Math.round(selectedContainer.size.h * ratio * 100) / 100;

    // 最大载重转换
    const weightRatio = form.weightUnit === 'g' ? 1000 : 1;
    form.container.maxLoad =
      Math.round(selectedContainer.maxLoad * weightRatio * 100) / 100;
  } else {
    form.container.l = 0;
    form.container.w = 0;
    form.container.h = 0;
    form.container.maxLoad = 0;
  }
}

function handleSubmit() {
  // 数据验证
  if (!form.container.l || !form.container.w || !form.container.h) {
    Message.error('容器のサイズを入力してください');
    return;
  }

  // 验证所有箱子
  for (let i = 0; i < form.boxes.length; i++) {
    const box = form.boxes[i];
    if (!box.size.l || !box.size.w || !box.size.h) {
      Message.error(`箱 ${i + 1} のサイズを入力してください`);
      return;
    }
    if (!box.weight || box.weight <= 0) {
      Message.error(`箱 ${i + 1} の重量を入力してください`);
      return;
    }

    // 验证箱子尺寸是否超过限制
    if (!validateBoxSize(i)) {
      return;
    }

    // ✅ 验证数量和比例
    if (form.mode === 'max' && form.stackingCalc === 'custom') {
      if (!box.quantity || box.quantity <= 0) {
        Message.error(`箱 ${i + 1} の数量を入力してください`);
        return;
      }
    }

    if (form.mode === 'limited') {
      if (
        form.stackingCalc === 'custom' &&
        (!box.quantity || box.quantity <= 0)
      ) {
        Message.error(`箱 ${i + 1} の数量を入力してください`);
        return;
      }
      if (form.stackingCalc === 'ratio' && (!box.ratio || box.ratio <= 0)) {
        Message.error(`箱 ${i + 1} の比例を入力してください`);
        return;
      }
    }
  }

  // 准备传递的数据
  const formData = {
    mode: form.mode,
    palletMode: form.palletMode,
    container: { ...form.container },
    boxes: form.boxes.map((box) => ({
      type: box.type,
      name: box.name || '',
      size: { ...box.size },
      weight: box.weight,
      quantity: box.quantity || 0,
      ratio: box.ratio || 0,
    })),
    lengthUnit: form.lengthUnit,
    weightUnit: form.weightUnit,
    stackingCalc: form.stackingCalc,
    calculationInfo: form.calculationInfo,
    selectedContainerId: form.selectedContainerId,
  };

  console.log('提交的数据:', formData);

  // 使用 state 传递数据
  router.push({
    name: 'TmsResult',
    state: formData,
  });
}
</script>

<style scoped>
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
.form-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
}

.tms-form {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.form-section {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.form-section:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.section-header {
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: #1d39c4;
  display: flex;
  align-items: center;
}

.section-header::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 18px;
  background: #1d39c4;
  margin-right: 12px;
  border-radius: 2px;
}

.mode-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label-text {
  font-weight: 500;
  color: #333;
}

.mode-hint {
  font-size: 13px;
  color: #1890ff;
  font-weight: normal;
  line-height: 1.5;
}

.dimension-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.unit-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #f0f0f0;
}

/* Arco Design 样式覆盖 */
:deep(.arco-form-item-label-col > label) {
  font-weight: 500;
  color: #333;
}

:deep(.arco-select-view-single),
:deep(.arco-input-number) {
  border-radius: 6px;
}

:deep(.arco-select-view-single:hover),
:deep(.arco-input-number:hover) {
  border-color: #1890ff;
}

:deep(.arco-btn-primary) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border: none;
  border-radius: 8px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
  transition: all 0.3s ease;
}

:deep(.arco-btn-primary:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(24, 144, 255, 0.4);
}

@media (max-width: 768px) {
  .form-container {
    padding: 16px;
  }

  .tms-form {
    padding: 20px;
  }

  .dimension-grid,
  .unit-grid {
    grid-template-columns: 1fr;
  }

  .form-actions button {
    width: 100% !important;
  }
}

/* 箱子样式 */
.box-item {
  margin-bottom: 24px;
  padding: 20px;
  background: #fafafa;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
}

.box-item:last-child {
  margin-bottom: 0;
}

.box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.box-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1d39c4;
}
/* 提示語 */
.container-label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.container-hint {
  font-size: 13px;
  color: #1890ff;
  font-weight: normal;
  line-height: 1.5;
}
</style>
