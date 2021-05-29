import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Menu, Spin } from 'antd'
import React from 'react'
import HeaderDropdown from '../header-dropdown'
import './index.less'

export type GlobalHeaderRightProps = {
  currentUser?: any
  menu?: boolean
} & Partial<any>

export default class AvatarDropdown extends React.Component<GlobalHeaderRightProps> {
  onMenuClick = (event: {
    key: React.Key
    keyPath: React.Key[]
    item: React.ReactInstance
    domEvent: React.MouseEvent<HTMLElement>
  }) => {
    const { key } = event

    if (key === 'logout') {
      console.log('logout')
      /* const { dispatch } = this.props

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        })
      }

      return */
    }
  }

  render(): React.ReactNode {
    const {
      currentUser = {
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        name: 'Serati Ma',
      },
      menu,
    } = this.props
    const menuHeaderDropdown = (
      <Menu className={'menu'} selectedKeys={[]} onClick={this.onMenuClick}>
        {menu && (
          <Menu.Item key="center">
            <UserOutlined />
            个人中心
          </Menu.Item>
        )}
        {menu && (
          <Menu.Item key="settings">
            <SettingOutlined />
            个人设置
          </Menu.Item>
        )}
        {menu && <Menu.Divider />}

        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    )
    return currentUser && currentUser.name ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${'action'} ${'account'}`}>
          <Avatar size="small" className={'avatar'} src={currentUser.avatar} alt="avatar" />
          <span className={`${'name'} anticon`}>{currentUser.name}</span>
        </span>
      </HeaderDropdown>
    ) : (
      <span className={`${'action'} ${'account'}`}>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </span>
    )
  }
}
