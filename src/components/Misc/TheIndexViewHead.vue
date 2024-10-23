<template>
  <n-space vertical align="center" justify="center" class="index-head">
    <n-h1 class="main-title">
      {{ t('base.title') }}
    </n-h1>
    
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
import NavigateToInBrowserApp from '@/components/buttons/NavigateToInBrowserApp.vue'

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

.main-title {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
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
</style>
