<template>
  <section>
    <div class="section-title-wrapper">
      <div class="section-title">
        <span class="left-bg"></span>
        <span class="right-bg"></span>
        <span class="slash"></span>
        <h1 class="animated-title">計算結果</h1>
      </div>
    </div>

    <div class="tms-page-center">
      <!-- 如果没有数据 -->
      <div v-if="!formData" class="no-data">
        <a-empty description="没有数据，请先填写表单" />
        <a-button type="primary" @click="goBack">返回表単</a-button>
      </div>

      <!-- 显示结果 -->
      <div v-else class="result-wrapper">
        <div class="info-section-wrapper">
          <!-- 基本信息 -->
          <div class="info-section">
            <h4>基本情報</h4>
            <div class="info-grid">
              <div class="info-item">
                <span class="label">モード:</span>
                <span class="value">{{ modeText }}</span>
              </div>
              <div class="info-item">
                <span class="label">パレット:</span>
                <span class="value">{{
                  formData.palletMode === 'single' ? 'あり' : 'なし'
                }}</span>
              </div>
              <div class="info-item">
                <span class="label">総箱数:</span>
                <span class="value highlight"
                  >{{ calculatedResult.total }} 個</span
                >
              </div>
              <div class="info-item">
                <span class="label">空間利用率:</span>
                <span class="value highlight"
                  >{{ calculatedResult.utilization }}%</span
                >
              </div>
            </div>
          </div>

          <!-- 容器信息 -->
          <div class="info-section">
            <h4>容器規格</h4>
            <div class="container-info">
              <div class="dimension-item">
                <span class="dimension-label">長さ:</span>
                <span class="dimension-value"
                  >{{ formData.container.l }} {{ formData.lengthUnit }}</span
                >
              </div>
              <div class="dimension-item">
                <span class="dimension-label">幅:</span>
                <span class="dimension-value"
                  >{{ formData.container.w }} {{ formData.lengthUnit }}</span
                >
              </div>
              <div class="dimension-item">
                <span class="dimension-label">高さ:</span>
                <span class="dimension-value"
                  >{{ formData.container.h }} {{ formData.lengthUnit }}</span
                >
              </div>
              <div class="dimension-item total">
                <span class="dimension-label">総体積:</span>
                <span class="dimension-value"
                  >{{ containerVolume }} {{ formData.lengthUnit }}³</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- 超载警告区域 -->
        <div
          v-if="overloadCheck.isOverWeight || overloadCheck.isOverSize"
          class="info-section-wrapper"
        >
          <!-- 重量超载警告 -->
          <div
            v-if="overloadCheck.isOverWeight"
            class="info-section warning-section"
          >
            <h4>⚠️ 重量オーバー警告</h4>
            <div class="warning-content">
              <div class="warning-item">
                <span class="label">総重量:</span>
                <span class="value danger">
                  {{ overloadCheck.totalWeight }} {{ formData.weightUnit }}
                </span>
              </div>
              <div class="warning-item">
                <span class="label">最大載重:</span>
                <span class="value">
                  {{ overloadCheck.maxLoad }} {{ formData.weightUnit }}
                </span>
              </div>
              <div class="warning-item">
                <span class="label">超過重量:</span>
                <span class="value danger">
                  {{ overloadCheck.excessWeight }} {{ formData.weightUnit }}
                </span>
              </div>
              <div class="suggestion">
                <h5>💡 推奨対応:</h5>
                <p>
                  合計
                  <strong>{{ vehicleRequirement.needed }}</strong>
                  台の車両が必要です （追加
                  <strong>{{ vehicleRequirement.additional }}</strong> 台）
                </p>
                <p>
                  各車両の積載重量: 約 {{ vehicleRequirement.weightPerVehicle }}
                  {{ formData.weightUnit }}
                </p>
              </div>
            </div>
          </div>

          <!-- 尺寸超出警告 -->
          <div
            v-if="overloadCheck.isOverSize"
            class="info-section warning-section"
          >
            <h4>⚠️ サイズオーバー警告</h4>
            <div class="warning-content">
              <p>
                入力された箱数が容器の体積を超えています。数量を減らすか、より大きい容器を選択してください。
              </p>
            </div>
          </div>
        </div>

        <!-- 托盘信息(仅在パレットあり时显示) -->
        <div
          v-if="formData.palletMode === 'single' && palletInfo"
          class="info-section-wrapper"
        >
          <div class="info-section pallet-section">
            <h4>パレット情報</h4>
            <div class="pallet-info">
              <div class="pallet-item">
                <span class="label">パレットサイズ:</span>
                <span class="value">1100mm × 1100mm × 144mm</span>
              </div>
              <div class="pallet-item">
                <span class="label">配置可能パレット数:</span>
                <span class="value highlight"
                  >{{ palletInfo.totalPallets }} 個</span
                >
              </div>
              <div class="pallet-item">
                <span class="label">横方向:</span>
                <span class="value">{{ palletInfo.palletCountL }} 個</span>
              </div>
              <div class="pallet-item">
                <span class="label">縦方向:</span>
                <span class="value">{{ palletInfo.palletCountW }} 個</span>
              </div>
              <div class="pallet-item">
                <span class="label">パレット上可用高さ:</span>
                <span class="value"
                  >{{ palletInfo.availableHeight }}
                  {{ formData.lengthUnit }}</span
                >
              </div>
              <div class="pallet-item">
                <span class="label">1パレット当たり箱数:</span>
                <span class="value highlight"
                  >{{ palletInfo.boxesPerPallet }} 個</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="info-section-wrapper">
          <!-- 盒子统计 -->
          <div class="info-section">
            <h4>箱統計</h4>
            <div class="box-stats">
              <div
                v-for="(stat, index) in boxStats"
                :key="index"
                class="stat-item"
              >
                <div
                  class="stat-color"
                  :style="{ backgroundColor: stat.color }"
                ></div>
                <div class="stat-info">
                  <span class="stat-type">{{ stat.type }}</span>
                  <span class="stat-count">{{ stat.count }} 個</span>
                  <span class="stat-volume"
                    >{{ stat.totalVolume }} {{ formData.lengthUnit }}³</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 体积分析 -->
          <div class="info-section">
            <h4>体積分析</h4>
            <div class="volume-analysis">
              <div class="volume-item">
                <span class="label">容器総体積:</span>
                <span class="value"
                  >{{ containerVolume }} {{ formData.lengthUnit }}³</span
                >
              </div>
              <div class="volume-item">
                <span class="label">使用体積:</span>
                <span class="value"
                  >{{ usedVolume }} {{ formData.lengthUnit }}³</span
                >
              </div>
              <div class="volume-item">
                <span class="label">残余体積:</span>
                <span class="value"
                  >{{ remainingVolume }} {{ formData.lengthUnit }}³</span
                >
              </div>
              <div class="volume-item highlight">
                <span class="label">空間利用率:</span>
                <span class="value">{{ calculatedResult.utilization }}%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="actions">
          <a-space>
            <a-button @click="goBack">返回</a-button>
            <a-button type="primary" @click="printResult">打印結果</a-button>
          </a-space>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';

const router = useRouter();
const formData = ref(null);

onMounted(() => {
  const state = history.state;

  if (state && state.mode) {
    formData.value = state;
    console.log('接収到的数据:', formData.value);
  } else {
    Message.warning('未找到表単数据');
  }
});

// 计算模式文本
const modeText = computed(() => {
  if (!formData.value) return '';
  return formData.value.mode === 'max' ? '単一サイズ' : '複数サイズ';
});

// 计算容器体积
const containerVolume = computed(() => {
  if (!formData.value) return 0;
  const c = formData.value.container;
  return (c.l * c.w * c.h).toFixed(2);
});

// 计算单个箱子体积
function calculateBoxVolume(box) {
  return box.size.l * box.size.w * box.size.h;
}

// 统一单位转换为mm (方便计算)
function toMM(value, unit) {
  return unit === 'cm' ? value * 10 : value;
}

// 托盘信息计算
const palletInfo = computed(() => {
  if (!formData.value || formData.value.palletMode !== 'single') return null;

  const container = formData.value.container;
  const box = formData.value.boxes[0];

  // 转换为mm统一计算
  const containerL_mm = toMM(container.l, formData.value.lengthUnit);
  const containerW_mm = toMM(container.w, formData.value.lengthUnit);
  const containerH_mm = toMM(container.h, formData.value.lengthUnit);
  const boxL_mm = toMM(box.size.l, formData.value.lengthUnit);
  const boxW_mm = toMM(box.size.w, formData.value.lengthUnit);
  const boxH_mm = toMM(box.size.h, formData.value.lengthUnit);

  // 托盘尺寸 (mm)
  const palletSize = 1100; // 1100mm × 1100mm
  const palletThickness = 144; // 144mm

  // 计算容器底部能放多少托盘
  const palletCountL = Math.floor(containerL_mm / palletSize);
  const palletCountW = Math.floor(containerW_mm / palletSize);
  const totalPallets = palletCountL * palletCountW;

  // 托盘上可用高度
  const availableHeight_mm = containerH_mm - palletThickness;

  // 每个托盘上能放多少箱子
  const boxesPerPalletL = Math.floor(palletSize / boxL_mm);
  const boxesPerPalletW = Math.floor(palletSize / boxW_mm);
  const boxesPerPalletH = Math.floor(availableHeight_mm / boxH_mm);
  const boxesPerPallet = boxesPerPalletL * boxesPerPalletW * boxesPerPalletH;

  // 转换回用户单位显示
  const availableHeightDisplay =
    formData.value.lengthUnit === 'cm'
      ? (availableHeight_mm / 10).toFixed(2)
      : availableHeight_mm.toFixed(2);

  return {
    palletCountL,
    palletCountW,
    totalPallets,
    availableHeight: availableHeightDisplay,
    boxesPerPalletL,
    boxesPerPalletW,
    boxesPerPalletH,
    boxesPerPallet,
  };
});

// 核心计算逻辑
const calculatedResult = computed(() => {
  if (!formData.value) {
    return { total: 0, utilization: 0, boxCounts: [] };
  }

  const container = formData.value.container;
  const boxes = formData.value.boxes;
  const containerVol = container.l * container.w * container.h;

  let total = 0;
  let boxCounts = [];
  let usedVol = 0;

  // ===== 单一サイズ模式 =====
  if (formData.value.mode === 'max') {
    const box = boxes[0];

    if (formData.value.stackingCalc === 'custom') {
      // ✅ 自由入力：使用用户输入的数量
      total = box.quantity || 0;
      boxCounts = [total];
      usedVol = total * calculateBoxVolume(box);
    } else {
      // ✅ 最大積載数：自动计算
      if (formData.value.palletMode === 'single') {
        if (palletInfo.value) {
          total =
            palletInfo.value.totalPallets * palletInfo.value.boxesPerPallet;
        }
      } else {
        const countL = Math.floor(container.l / box.size.l);
        const countW = Math.floor(container.w / box.size.w);
        const countH = Math.floor(container.h / box.size.h);
        total = countL * countW * countH;
      }
      boxCounts = [total];
      usedVol = total * calculateBoxVolume(box);
    }
  }
  // ===== 複数サイズ模式 =====
  else if (formData.value.mode === 'limited') {
    if (formData.value.stackingCalc === 'custom') {
      // ✅ 自由入力：使用用户输入的数量
      boxCounts = boxes.map((box) => box.quantity || 0);
      total = boxCounts.reduce((sum, count) => sum + count, 0);

      boxes.forEach((box, index) => {
        const boxVol = calculateBoxVolume(box);
        usedVol += boxCounts[index] * boxVol;
      });
    } else if (formData.value.stackingCalc === 'ratio') {
      // ✅ 比例定数：根据比例分配
      boxes.forEach((box) => {
        const boxVol = calculateBoxVolume(box);
        const ratio = (box.ratio || 0) / 100;
        const allocatedVolume = containerVol * ratio;
        const count = Math.floor(allocatedVolume / boxVol);
        boxCounts.push(count);
        total += count;
        usedVol += count * boxVol;
      });
    }
  }

  // ✅ 计算利用率（限制最大100%）
  const utilization =
    containerVol > 0
      ? Math.min((usedVol / containerVol) * 100, 100).toFixed(2)
      : 0;

  return {
    total,
    utilization,
    boxCounts,
  };
});

// 已使用体积
const usedVolume = computed(() => {
  if (!formData.value) return 0;

  let totalUsedVol = 0;

  formData.value.boxes.forEach((box, index) => {
    const boxVol = calculateBoxVolume(box);
    const count = calculatedResult.value.boxCounts[index] || 0;
    totalUsedVol += count * boxVol;
  });

  return totalUsedVol.toFixed(2);
});

// 剩余体积
const remainingVolume = computed(() => {
  return (containerVolume.value - usedVolume.value).toFixed(2);
});

// ✅ 检测是否超载
const overloadCheck = computed(() => {
  if (!formData.value)
    return {
      isOverSize: false,
      isOverWeight: false,
      totalWeight: 0,
      maxLoad: 0,
      excessWeight: 0,
    };

  const container = formData.value.container;
  const boxes = formData.value.boxes;

  // 计算总重量
  let totalWeight = 0;
  calculatedResult.value.boxCounts.forEach((count, index) => {
    totalWeight += count * (boxes[index].weight || 0);
  });

  // 检查是否超重
  const isOverWeight = totalWeight > container.maxLoad;

  // 检查是否超尺寸
  const usedVol = parseFloat(usedVolume.value);
  const containerVol = parseFloat(containerVolume.value);
  const isOverSize = usedVol > containerVol;

  return {
    isOverSize,
    isOverWeight,
    totalWeight: totalWeight.toFixed(2),
    maxLoad: container.maxLoad,
    excessWeight: isOverWeight
      ? (totalWeight - container.maxLoad).toFixed(2)
      : 0,
  };
});

// ✅ 计算需要的车辆数
const vehicleRequirement = computed(() => {
  if (!formData.value || !overloadCheck.value.isOverWeight) {
    return { needed: 1, additional: 0, weightPerVehicle: 0 };
  }

  const totalWeight = parseFloat(overloadCheck.value.totalWeight);
  const maxLoad = formData.value.container.maxLoad;

  // 计算需要的车辆数（向上取整）
  const needed = Math.ceil(totalWeight / maxLoad);
  const additional = needed - 1;

  return {
    needed,
    additional,
    weightPerVehicle: (totalWeight / needed).toFixed(2),
  };
});

// 箱子统计
const boxStats = computed(() => {
  if (!formData.value || !calculatedResult.value) return [];

  const colors = ['#1890ff', '#52c41a', '#faad14', '#f5222d', '#722ed1'];

  return formData.value.boxes.map((box, index) => {
    const boxVol = calculateBoxVolume(box);

    // 优先从 calculatedResult.boxCounts 取数量，如果不存在则显示 0
    const count =
      (calculatedResult.value.boxCounts &&
        calculatedResult.value.boxCounts[index]) ||
      0;

    // 如果有箱子名称就显示名称，否则显示 "箱 N"
    const boxName = box.name || `箱 ${index + 1}`;

    return {
      type: `${boxName} (${box.size.l}×${box.size.w}×${box.size.h} ${formData.value.lengthUnit})`,
      count: count,
      totalVolume: (count * boxVol).toFixed(2),
      color: colors[index % colors.length],
    };
  });
});

// 返回
function goBack() {
  router.back();
}

// 打印
function printResult() {
  window.print();
}
</script>

<style scoped>
.section-title-wrapper {
  margin-top: 110px;
  width: 100vw;
  height: 130px;
  background: linear-gradient(to right, #f4f2f2 50%, #587db8 50%);
  position: relative;
  padding: 20px 0;
}

.section-title {
  position: relative;
  top: -8px;
  margin-left: 80px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: black;
}

.animated-title {
  margin-top: 26px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: slide-in 1s forwards;
}

@keyframes slide-in {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 10ch;
    opacity: 1;
  }
}

.result-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.info-section-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.info-section {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-section h4 {
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: #1d39c4;
  border-bottom: 2px solid #1d39c4;
  padding-bottom: 10px;
}

/* 托盘信息特殊样式 */
.pallet-section {
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  border: 2px solid #1890ff;
}

/* ✅ 警告区域样式 */
.warning-section {
  background: linear-gradient(135deg, #fff7e6 0%, #ffe7ba 100%);
  border: 2px solid #faad14;
}

.warning-section h4 {
  color: #d46b08;
  border-bottom-color: #faad14;
}

.warning-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.warning-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.value.danger {
  color: #f5222d;
  font-weight: 700;
  font-size: 18px;
}

.suggestion {
  background: white;
  padding: 16px;
  border-radius: 4px;
  border-left: 4px solid #1890ff;
}

.suggestion h5 {
  margin: 0 0 8px 0;
  color: #1890ff;
  font-size: 16px;
}

.suggestion p {
  margin: 4px 0;
  line-height: 1.6;
  font-size: 14px;
}

.suggestion strong {
  color: #f5222d;
  font-size: 18px;
}

.pallet-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.pallet-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-item .label,
.pallet-item .label,
.warning-item .label {
  font-size: 14px;
  color: #666;
}

.info-item .value,
.pallet-item .value,
.warning-item .value {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.info-item .value.highlight,
.pallet-item .value.highlight {
  font-size: 20px;
  color: #1890ff;
  font-weight: 600;
}

.container-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.dimension-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 4px;
}

.dimension-item.total {
  grid-column: 1 / -1;
  background: #e6f7ff;
  border: 1px solid #91d5ff;
}

.dimension-label {
  font-weight: 500;
  color: #666;
}

.dimension-value {
  font-weight: 600;
  color: #1890ff;
}

.box-stats {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #fafafa;
  border-radius: 4px;
}

.stat-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  flex-shrink: 0;
}

.stat-info {
  display: flex;
  gap: 16px;
  flex: 1;
  align-items: center;
}

.stat-type {
  font-weight: 500;
  flex: 1;
}

.stat-count {
  color: #1890ff;
  font-weight: 600;
}

.stat-volume {
  color: #666;
  font-size: 14px;
}

.volume-analysis {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.volume-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #fafafa;
  border-radius: 4px;
}

.volume-item.highlight {
  background: #e6f7ff;
  border: 1px solid #91d5ff;
}

.volume-item .label {
  font-weight: 500;
  color: #666;
}

.volume-item .value {
  font-weight: 600;
  color: #1890ff;
}

.actions {
  text-align: center;
  margin-top: 32px;
}

.no-data {
  text-align: center;
  padding: 60px 20px;
}

@media print {
  .actions {
    display: none;
  }

  .section-title-wrapper {
    margin-top: 0;
  }
}

@media (max-width: 768px) {
  .info-section-wrapper {
    grid-template-columns: 1fr;
  }

  .info-grid,
  .container-info,
  .pallet-info {
    grid-template-columns: 1fr;
  }

  .stat-info {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
}
</style>
