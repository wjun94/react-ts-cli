import React from 'react'
import { RouteProps } from 'react-router-dom'
import Loadable from 'react-loadable'
import { DotChartOutlined } from '@ant-design/icons'

const ResultDetails = Loadable({
  loader: () => import('@/app/result/details'),
  loading: () => <div>Loading...</div>,
})

const RecruitMine = Loadable({
  loader: () => import('@/app/list/mine'),
  loading: () => <div>Loading...</div>,
})

const TableHome = Loadable({
  loader: () => import('@/app/table/home'),
  loading: () => <div>Loading...</div>,
})

ResultDetails.preload() // 预加载
RecruitMine.preload()
TableHome.preload()

export const routes = [
  {
    path: '/company',
    title: '单位管理',
    icon: <DotChartOutlined />,
    children: [
      {
        path: '/info',
        title: '单位信息',
        component: ResultDetails,
      },
    ],
  },
  {
    path: '/table',
    title: '表单页',
    icon: <DotChartOutlined />,
    children: [
      {
        path: '/edit',
        title: '修改信息',
        component: RecruitMine,
      },
    ],
  },
  {
    path: '/list',
    title: '列表页',
    icon: <DotChartOutlined />,
    children: [
      {
        path: '/edit',
        title: '修改信息',
        component: TableHome,
      },
    ],
  },
  {
    path: '/403', // 路由不匹配跳到404
    component: React.lazy(() => import('@/app/403')),
  },
  {
    path: '/',
    redirect: '/company/info', // 重定向
  },
  {
    path: '',
    component: React.lazy(() => import('@/app/404')),
  },
]

const result: RouteProps[] = []

routes.forEach((v) => {
  if (v.children) {
    ;(v.children as any).forEach((child) => {
      result.push({
        path: `${v.path}${child.path}`,
        component: child.component,
      })
    })
  } else {
    result.push(v)
  }
})

export default result
