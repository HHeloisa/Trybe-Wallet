import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUser, typedEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.redirect = this.redirect.bind(this);
    // this.handleChangePassW = this.handleChangePassW.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // regex model sugerido na thread do slack https://trybecourse.slack.com/archives/C01L16B9XC7/p1623175696043700
    const emailRegex = /^\w+@\w+.com$/;
    const { email, password } = this.state;
    const minlength = 5;
    if (emailRegex.test(email) && (password.length >= minlength)) {
      return (this.setState({ disabled: false }));
    } return (this.setState({
      disabled: true,
    }));
  }

  /*   handleChangePassW(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      user: prevState,
      [name]: value,
    }));
    */
  /*
   if (email.contains('@') && email.contains('.com')) {
     this.setState({
       checkedEmail: true,
      });
    } */

  render() {
    const { disabled } = this.state;
    return (
      <section>
        <div>Login</div>
        <form>
          <label htmlFor="user-email">
            E-mail:
            <input
              data-testid="email-input"
              placeholder="nome@email.com"
              id="user-email"
              type="email"
              name="email"
              // value={ typedEmail }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="user-passw">
            Senha:
            <input
              data-testid="password-input"
              placeholder="senha"
              id="user-passw"
              type="text"
              name="password"
              // value={ userTypedPassword }
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              data-testid="edit-btn"
              disabled={ disabled }
            >
              Entrar
            </button>
          </Link>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  email: (payload) => dispatch(typedEmail(payload)),
  userTypedEmail: (payload) => dispatch(typedEmail(payload)),
  // userTypedPassword: (userTypedPassword) => dispatch(typedPassword(userTypedPassword)),
  saveUser: (state) => dispatch(saveUser(state)),
});
// é uma função que retorna um objeto = () => ({}); 2, recebe por parametro o dispatch, define as actions que serao disparadas, recebendo via props
// vou passar a propriedade da action como chave, ela vai receber uma função, que tem como parametro user e ela disparada dispatch(actionCreator({ user })), e passa
// como parametro da actionCreator um parametro, o que deve ser adicionado, o payload

// recebendo dados do estado global // lembrar de add ao conect
/* const mapStateToProps = (state) => ({
  userTypedEmail: state.user.email,
  userTypedPassword: state.user.user.password,
}); */

Login.propTypes = {
  saveUser: PropTypes.func,
  /* user: PropTypes.shape({
    typedEmail: PropTypes.string,
    typedPassword: PropTypes.string,
  }), */
}.isRequired;

export default connect(mapDispatchToProps)(Login);
