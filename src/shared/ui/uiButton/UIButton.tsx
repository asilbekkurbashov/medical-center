import { Button, ButtonProps, ConfigProvider } from 'antd'
import React from 'react'

const mode = {
  colorText: "#42B2FC",
  colorPrimaryBg: "#ffffff",
  colorBgContainer: "#ffffff",
  colorBorder:'#42B2FC'
}

const UIButton:React.FC<ButtonProps> = (props) => {
  return (
    <ConfigProvider
    theme={{
      token:mode
    }}>
      <Button {...props}/>
    </ConfigProvider>
  )
}

export default UIButton