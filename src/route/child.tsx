/**
 * 文档作者: wjun94
 * 创建时间：2019年09月22日
 * 修改时间：2019年10月12日
 * 描述信息：路由
 */
import React from 'react'
import { RouteProps } from "react-router-dom"

const routes: RouteProps[] = [
    {
        path: '/details',
        component: React.lazy(() => import('../app/details'))
    },
    {
        path: '/home',
        component: React.lazy(() => import('../app/home'))
    },
    {
        path: '',
        component: React.lazy(() => import('../app/home'))
    }
]

export default routes 