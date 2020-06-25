import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { logIn } from '../../actions'


const LoginPage = ({logIn, loggedIn}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    // const [popup, setPopup] = useState(false);

    const onUsernameChange = event => setUsername(event.target.value);
    const onPasswordChange = event => setPassword(event.target.value);

    // const onClosePopup = () => setPopup(false)
    
    const submitLogin = () => {

        const user = {
            username,
            password
        }
        // const onFailLogin = () => {
        //     setPopup(true);
        //     setTimeout(console.log('5 secs are gone'),5000)
        // }

        axios
            .post('/api/auth/', user)
            .then((res) => {
                if (res.data) {
                    logIn()
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
                {/* <div className="login-page popup" hidden={!popup}>
                    <div className="popup__body">
                        <div className="popup__content">
                            <div className="popup__text">
                                Неверные данные
                            </div>
                            <div className="popup__button">
                                <button className="btn btn-danger" onClick={onClosePopup}>OK</button>
                            </div>
                        </div>
                    </div>
                </div> */}
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