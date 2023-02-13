import React from 'react';
import {Button,Form,Input,Checkbox} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import {spin} from 'antd';
import './App.css';

function Basic()
{
    return(
    
        <div style={{
            display: 'block', width: 700, padding: 30, alignContent:'center'
        }}>
            <h4>ReactJS Basic</h4>
        <Form
        name="basicform"
        onFinishFailed={() => alert('Failed to submit')}
        onFinish={() => alert('Form Submitted')}
        initialValues={{ remember: true }}
    >
     <Form.Item
      label="Enter username"
      name="Username"
      rules={[{ required: true, message: 'Please enter username' }]}
     >
      <Input />
      </Form.Item>
    <Form.Item
      label="Enter Password"
      name="password"
      rules={[{ required: true, message: 'Please enter your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
    <Checkbox>Remember Me</Checkbox>
    </Form.Item>        

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
    <Upload.Dragger multiple  listType="picture" action={"http://localhost:3000/"} showUploadList={{ showRemoveIcon:true}} accept=".png,.jpeg,.doc,.pdf"defaultFileList={[
            {
                uid:"basic",name:"existingFile.png",status:"uploading",percent:50 ,url:"https://www.google.com/",
            },
        ]} iconRender={()=>
        {
            return <spin></spin>;
        }}
        progress={{
            strokeWidth:3,
            strokeColor:{
                "0%":"Pink",
                "100%":"Yellow"
            }
        }}>
        <Button>Upload</Button>
        

    </Upload.Dragger>
    <spin
    indicator={<LoadingOutlined style={{fontSize:6,color:'blueviolet'}}spin/>}
     />
    </Form>
    </div>
    );
}
export default Basic;