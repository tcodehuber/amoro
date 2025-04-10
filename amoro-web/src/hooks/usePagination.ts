/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { useI18n } from 'vue-i18n'

export function usePagination() {
  const _total = 0
  const _current = 1
  const _pageSizeOptions = ['25', '50', '100']
  const _pageSize = 25
  const { t } = useI18n()

  return {
    total: _total,
    current: _current,
    pageSize: _pageSize,
    pageSizeOptions: _pageSizeOptions,
    showQuickJumper: true,
    showSizeChanger: true,
    hideOnSinglePage: false,
    showTotal: (total: number) => { return t('totalCount', { total }) }
  }
}
