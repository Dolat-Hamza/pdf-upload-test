import {Select, Tooltip} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";

const SelectField = ({title, content, disabled, type, options}) => {
    console.log(options)
    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"flex flex-row justify-between items-center "}>
                <p className={"text-black"}>
                    {title}
                </p>
                <Tooltip className={"text-black"} title={content}>
                    <QuestionCircleOutlined/>
                </Tooltip>
            </div>
            <Select mode={type} disabled={disabled}>

                {options && options.map((items) => {
                    return <Select.Option key={items.code} value={items.name}>{items.name}</Select.Option>
                })
                }


            </Select>

        </div>
    )
}
export default SelectField;