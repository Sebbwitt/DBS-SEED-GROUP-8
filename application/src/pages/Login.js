import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''}

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);       
    }

    handleUsername(event)  {
        this.setState({username: event.target.value});
    }

    handlePassword(event)  {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        axios.post('http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/login', this.state)
            .then(response => {
                console.log(response);
                alert(response);
            }).catch(error => {
                alert('Invalid Username or Password');
            })
        event.preventDefault();
    }

    render() {
        console.log('aa')
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type='text' name='username' value={this.state.username} onChange={this.handleUsername} />
                    </label>
                    <br/>
                    <label>
                        Password: 
                        <input type='password' name='password' value={this.state.password} onChange={this.handlePassword} />
                    </label>
                    <br/>
                    <input type='submit' value='Login'></input>
                </form>
            </div>
        )
    }

    // state = {}



    // handleChange = (e, { username, value }) => this.setState({ [username]: value })
    // handleChange = (e, { password, value }) => this.setState({ [password]: value })

    // handleSubmit = () => {
    //     this.setState({ username: '', password: '' })
    //     this.alert(username);
    // }

    // render() {
    //     const { name, email } = this.state

    //     return (
    //         <Form onSubmit={this.handleSubmit}>
    //             <Form.Group>
    //                 <Form.Input
    //                     placeholder='Username'
    //                     name='username'
    //                     value={username}
    //                     onChange={this.handleChange}
    //                 />
    //                 <Form.Input
    //                     placeholder='Password'
    //                     name='password'
    //                     value={password}
    //                     onChange={this.handleChange}
    //                 />
    //                 <Form.Button content='Submit' />
    //             </Form.Group>
    //         </Form>
    //     )
    // }
}

export default Login