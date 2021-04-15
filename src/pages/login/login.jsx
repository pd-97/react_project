import React,{Component} from 'react'
import { Form, Icon, Input, Button} from 'antd';
import './css/login.less'
import logo from './imgs/logo.png'

class Login extends Component{

  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err){
        alert('向服务器发送登录请求')
        
      }else{
        message.error('表单输入有误，请检查！')
      }
    })
  };

  pwdValidator = (rule,value,callback)=>{
    if (!value) {
      callback('密码必须输入')
    }else if (value.length>12) {
      callback('密码必须小于等于12位')
    }else if (value.length<4) {
      callback('密码必须大于等于4位')
    }else if(!(/^\w+$/).test(value)){
      callback('密码必须是字母、数字、下划线组成')
    }else{
      callback()
    }
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <header>
          <img src={logo} alt="login"/>
          <h1>商品管理系统</h1>
        </header>
        <section>
          <h1>用户登录</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
              rules: [
                { required: true, message: '用户名不能为空' },
                {max:12,message:'用户名必须小于等于12位'},
                {min:4,message:'用户名必须大于等于4位'},
                {pattern:/^\w+$/,message:'用户名必须是字母、数字、下划线组成'}
              ],
            })(
              <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
              />
            )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
              rules: [{ validator: this.pwdValidator }],
            })(
              <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
            />
            )}

        
        </Form.Item>
        <Form.Item>
          

          <Button type="primary" htmlType="submit" className="login-form-button">
              登录
          </Button>
        </Form.Item>
      </Form>
        </section>
      </div>
    )
  }
}

export default Form.create()(Login);