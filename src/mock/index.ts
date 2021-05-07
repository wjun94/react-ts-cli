import Mock from 'mockjs'

Mock.mock('/advtgList', {
  'list|1-5': [
    {
      name: '@name',
      email: '@email',
      createTime: '@date',
    },
  ],
})
