<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
/ -->

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, reactive, shallowReactive, toRefs, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import List from './components/List.vue'
import type { IGroupItem, IGroupItemInfo, ILableAndValue, IMap } from '@/types/common.type'
import { usePlaceholder } from '@/hooks/usePlaceholder'
import { usePagination } from '@/hooks/usePagination'
import { getOptimizerGroups, getQueueResourceInfo } from '@/services/optimize.service'
import { mbToSize } from '@/utils'

export default defineComponent({
  name: 'Optimize',
  components: {
    List,
  },
  setup() {
    const { t } = useI18n()
    const router = useRouter()
    const route = useRoute()
    const tabConfig: ILableAndValue[] = shallowReactive([
      { label: t('optimizers'), value: 'optimizers' },
      { label: t('tables'), value: 'tables' },
    ])
    const placeholder = reactive(usePlaceholder())
    const pagination = reactive(usePagination())
    const state = reactive({
      curGroupName: 'all' as string,
      groupList: [
        {
          label: t('allGroups'),
          value: 'all',
        },
      ] as IMap<string | number>[],
      groupInfo: {
        occupationCore: 0,
        occupationMemory: 0,
        unit: '',
      } as IGroupItemInfo,
      activeTab: 'tables' as string,
      showScaleOutModal: false as boolean,
      showTab: false as boolean,
    })

    const isTableTab = computed(() => {
      return (state.activeTab === 'tables')
    })

    watch(() => route.query, (value) => {
      state.activeTab = (value.tab as string) || 'tables'
    }, {
      immediate: true,
    })

    function onChangeGroup() {
      getCurGroupInfo()
    }

    function refreshCurGroupInfo() {
      getCurGroupInfo()
    }

    async function getCompactQueues() {
      const result = await getOptimizerGroups();
      (result || []).forEach((item: IGroupItem) => {
        state.groupList.push({
          label: item.optimizerGroupName,
          value: item.optimizerGroupName,
        })
      })
    }

    async function getCurGroupInfo() {
      const result = await getQueueResourceInfo(state.curGroupName || '')
      const memory = mbToSize(result.occupationMemory || 0)
      const memoryArr = memory.split(' ')
      state.groupInfo = {
        occupationCore: result.occupationCore,
        occupationMemory: memoryArr[0],
        unit: memoryArr[1] || '',
      }
    }

    function expansionJob() {
      state.showScaleOutModal = true
    }

    function refreshOptimizersTab() {
      onChangeTab('optimizers')
      state.showTab = false
      nextTick(() => {
        state.showTab = true
      })
      getCurGroupInfo()
    }

    function onChangeTab(key: string) {
      const query = { ...route.query }
      query.tab = key
      router.replace({ query: { ...query } })
    }

    onMounted(() => {
      state.showTab = true
      getCompactQueues()
      getCurGroupInfo()
    })

    return {
      isTableTab,
      placeholder,
      pagination,
      ...toRefs(state),
      tabConfig,
      onChangeGroup,
      refreshCurGroupInfo,
      expansionJob,
      refreshOptimizersTab,
      onChangeTab,
    }
  },
})
</script>

<template>
  <div class="border-wrap">
    <div class="optimize-wrap">
      <List cur-group-name="all" type="tables" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.border-wrap {
  padding: 16px 24px;
  height: 100%;
}
.optimize-wrap {
  height: 100%;
  overflow-y: auto;
  .optimize-group {
    justify-content: space-between;
    padding: 0 24px;
    .f-shink-0 {
      flex-shrink: 0;
    }
    .text-color {
      color: #0ad787;
    }
  }
  .status-icon {
    width: 8px;
    height: 8px;
    border-radius: 8px;
  }
  .tabs {
    height: 32px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    padding: 0 12px;
    border: 1px solid #e5e5e5;
  }
  :deep(.ant-tabs-content-holder) {
    padding: 0 24px;
  }
  :deep(.ant-tabs-nav) {
    padding: 0 12px;
  }
  .table-name {
    color: @primary-color;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
