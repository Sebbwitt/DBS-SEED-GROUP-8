import React from 'react';
import { Alert, Form, Button } from 'react-bootstrap';
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

    handleUsername(event) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        axios.post('http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/login', this.state)
            .then(response => {
                localStorage.setItem('token', response);
                window.location.href = '/home';
            }).catch(error => {
                this.setState({
                    hasError: true
                })
            })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <h1 class="text-center">Login</h1>
                <Alert variant="danger" show={this.state.hasError}>
                    <Alert.Heading>Error!</Alert.Heading>
                    Invalid username and password.
                </Alert>

                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Username:</Form.Label>
                                <Form.Control type='text' name='username' value={this.state.username} onChange={this.handleUsername} required />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type='password' name='password' value={this.state.password} onChange={this.handlePassword} required />
                            </Form.Group>
                            <Button variant='primary' type='submit'>
                                Submit
                    </Button>
                        </Form>
                    </div>
                </div>
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