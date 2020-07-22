import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { logIn } from '../../actions'


const LoginPage = ({logIn, loggedIn}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    // const [popup, setPopup] = useState(false);
    // useEffect(() => window.alert(loggedIn), [loggedIn])
    const onUsernameChange = event => setUsername(event.target.value);
    const onPasswordChange = event => setPassword(event.target.value);
    
    const submitLogin = (e) => {
        e.preventDefault()

        const user = {
            username,
            password
        }

        axios
            .post('/api/auth/', user)
            .then( (res) => {
                if (res.data) {
                     logIn()

                    } else {
                        alert("Login failed")
                    }})
            .catch(e => console.log(e))
        setUsername('')
        setPassword('')
    }

    if(!loggedIn) {
        return (
            <div className="login-page">
                <div className="container">
                    <form onSubmit={submitLogin}>
                        <h2>Авторизируйтесь</h2>
                        <div className="form-group">
                            <label htmlFor="username">Имя пользователя</label>
                            <input type="text" className="form-control form-control-md" id="username" name="username" placeholder="Имя пользователя" value={username} onChange={onUsernameChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <input type="password" className="form-control form-control-md" id="password" name="password" placeholder="Пароль" value={password} onChange={onPasswordChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Авторизироваться</button>
                    </form>
                </div>
            </div>
        )
    }

    return <Redirect to="/admin"/>

}

const mapStateToProps = ({ login: { loggedIn } }) => {
    return { loggedIn }
}

const mapDispatchToProps = {
    logIn: logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);