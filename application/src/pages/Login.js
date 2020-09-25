import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hasError: false
        }

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
                localStorage.setItem('token', response);
                window.location.href = '/';
            }).catch(error => {
                this.state.hasError = true;
            })
        event.preventDefault();
    }

    render() {
        console.log('aa')
        return (
            <div>

                <h1>Login</h1>
                {this.state.error && <h3>Error! Invalid username and password.</h3>}
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
                    <button variant='primary' type='submit'>
                        Submit
                    </button>
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