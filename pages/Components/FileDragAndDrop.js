import React, { useCallback } from 'react';
import { message, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: false, // Set this to false to allow only a single file upload
    action: '', // put action URL here
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const App = ({ disabled, onDataUpload }) => {
    const handleDataUpload = useCallback((file) => {
        // Call the callback with the uploaded file data
        onDataUpload(file);
    }, [onDataUpload]);

    return (
        <Dragger disabled={disabled} {...props} onChange={handleDataUpload}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
                Support for a single file upload. Strictly prohibited from uploading company data or other banned files.
            </p>
        </Dragger>
    );
};

export default App;
