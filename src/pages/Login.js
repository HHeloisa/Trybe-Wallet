import React from 'react';

class Login extends React.Component {
  render() {
    /*
      // componenetDidUpdate ?????
      const inputEmail =
      const inputPassW =
      const buttonLogin =
      {inputEmail.contains '@' && inputPassW.lenght >= 6) ? { buttonLogin: Enable } : { buttonLogin: Disable }};
    */
    return (
      // const { typedEmail, typedPassW } = this.props
      <section>
        <div>Login</div>
        <label htmlFor="user-email">
          <input
            data-testid="email-input"
            placeholder="nome@email.com"
            id="user-email"
            type="email"
            // value={ typedEmail }
            // onChance=
          />
        </label>

        <label htmlFor="user-passw">
          <input
            data-testid="password-input"
            placeholder="nome@email.com"
            id="user-passw"
            type="text"
            // value={ typedPassW }
            // onChance=
          />
        </label>
        <button type="button"/* onCLick= */>Entrar</button>
        { /* Add LINK p /carteira ao click btn & dispatch action p salvar email */ }
      </section>
    );
  }
}

export default Login;
