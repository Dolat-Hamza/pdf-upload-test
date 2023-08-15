import {Select, Tooltip} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";

const SelectField = ({title,content,disabled,type}) => {
    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"flex flex-row justify-between items-center "}>
                <p className={"text-black"}>
                    {title}
                </p>
                <Tooltip  className={"text-black"} title={content}>
                    <QuestionCircleOutlined/>
                </Tooltip>
            </div>
            <Select mode={type} disabled={disabled}>
                <Select.Option value="demo">Demo</Select.Option>

            </Select>

        </div>
    )
}
export default SelectField;