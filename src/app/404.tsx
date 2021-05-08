import { Button, Result } from 'antd'
import React from 'react'

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="抱歉，您访问的页面不存在。"
    extra={<Button type="primary">Back Home</Button>}
  />
)

export default NoFoundPage
