<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <n-message-provider>
      <main class="view"><RouterView :key="route.fullPath" /></main>
      <ServieWorkerReloadPrompt />
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { useOsTheme, darkTheme, NConfigProvider, NGlobalStyle, NMessageProvider } from 'naive-ui'
import { RouterView } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ServieWorkerReloadPrompt from '@/components/Misc/ServiceWorkerReloadPrompt.vue'

const route = useRoute()

const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))

// 添加 Umami 分析脚本
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://cloud.umami.is/script.js'
  script.setAttribute('data-website-id', '3812db1e-7f08-4908-8b5c-26ffba71f2dc')
  script.defer = true
  document.head.appendChild(script)
})
</script>
