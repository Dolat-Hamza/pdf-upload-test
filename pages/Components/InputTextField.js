import {Input, Select, Tooltip} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";

const InputField = ({title,content,disabled}) => {
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
           <Input disabled={disabled}>

           </Input>

        </div>
    )
}
export default InputField;