<template>
  <n-space vertical align="center" justify="center" class="index-head">
    <div class="title-container">
      <ScannerSvg class="scanner-svg" />
      <n-h1 class="main-title">
        {{ t('base.title') }}
      </n-h1>
    </div>
    
    <n-p class="description">
      {{ t('base.description') }}
    </n-p>

    <n-space>
      <NavigateToScan />
      <!-- <NavigateToGitHub /> -->
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import { NH1, NP, NSpace } from 'naive-ui'
import NavigateToScan from '@/components/buttons/NavigateToScan.vue'


import { useI18n } from 'vue-i18n'

import ScannerSvg from './ScannerSvg.vue'

const { t } = useI18n()
</script>

<style scoped>
.index-head {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.scanner-svg {
  width: 3rem; /* 调整SVG大小以匹配标题 */
  height: 3rem;
  margin-right: 1rem; /* 在SVG和标题之间添加一些间距 */
}

.main-title {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
}

.description {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
}

:deep(.n-space) {
  justify-content: center;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .main-title {
    font-size: 2rem; /* 减小标题字号 */
  }

  .scanner-svg {
    width: 2rem; /* 减小SVG大小 */
    height: 2rem;
    margin-right: 0.5rem; /* 减小间距 */
  }

  .description {
    font-size: 1rem; /* 减小描述文字大小 */
  }
}

/* 更小屏幕的适配 */
@media (max-width: 480px) {
  .main-title {
    font-size: 1.5rem; /* 进一步减小标题字号 */
  }

  .scanner-svg {
    width: 1.5rem; /* 进一步减小SVG大小 */
    height: 1.5rem;
  }
}
</style>
