export const ERROR_MESSAGE = {
  server: '서버 에러입니다.',
  noResult: '해당하는 데이터가 없습니다.',
} as const

export const API_RESULT_CODE = {
  ERROR: {
    type: 'ERROR',
    status: ['300', '290', '336', '333', '310', '337', '500', '600', '601'],
  },
  INFO: { type: 'INFO', status: ['000', '300', '200'] },
} as const
