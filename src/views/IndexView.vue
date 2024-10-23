<template>
  <MainContainer>
    <n-grid x-gap="100" y-gap="50" :cols="1" item-responsive responsive="screen" class="index-grid">
      <n-grid-item span="1">
        <TheIndexViewHead />
      </n-grid-item>
      <n-grid-item span="1">
        <TheFeatures />
      </n-grid-item>
    </n-grid>
  </MainContainer>
</template>

<script setup lang="ts">
import { NGrid, NGridItem } from 'naive-ui'

import TheIndexViewHead from '@/components/Misc/TheIndexViewHead.vue'
import TheFeatures from '@/components/Features/TheFeatures.vue'
import MainContainer from '@/components/MainContainer.vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

useHead({
  title: t('base.title'),
  meta: [{ name: 'description', content: t('base.description') }]
})

// const breakpoints = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, xxl: 1920 };
</script>

<style scoped>
.index-grid {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

:deep(.n-grid-item) {
  width: 100% !important;
}
</style>
