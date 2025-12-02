import type { UserInfo } from '@vben/types';

import { requestClient } from '#/api/request';

/**
 * 获取用户信息
 */
export async function getUserInfoApi(data: any) {
  return requestClient.get<UserInfo>('/blade-system/user/info', {
    params: {
      tenantId: data.tenantId,
      id: data.id,
    },
  });
}
