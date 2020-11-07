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
        path: '/home',
        component: React.lazy(() => import('../app/home'))
    },
    {
        path: '/regist',
        component: React.lazy(() => import('../app/login'))
    },
    {
        path: '/login',
        component: React.lazy(() => import('../app/login'))
    },

    {
        path: '/',
        component: React.lazy(() => import('../app/login'))
    },
    {
        path: '',   // 路由不匹配默认跳到首页
        component: React.lazy(() => import('../app/login'))
    },
]

export default routes 