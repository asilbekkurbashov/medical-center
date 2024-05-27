import { ConfigProvider, Select, SelectProps } from "antd"

const UiSelect = (props:SelectProps) => {
  return (
    <ConfigProvider>
        <Select {...props}/>
    </ConfigProvider>
  )
}

export default UiSelect