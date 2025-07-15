

// Here I can render the view in HTML
export function renderLogin(){

    return `   
  <div class="container">
    <!-- This is the login page for existing users. -->
    <h2>Login</h2>
    <form id="login-form">
      <input id="email" type="email" placeholder="Email" required>
      <input id="password" type="password" placeholder="Password" required>
      <button type="submit">Entrar</button>
    </form>
    <p>¿No tienes cuenta? <a href="register.html">Register</a></p>
    <a href="../../index.html" class="volver">← return</a>
  </div>
    
    `

}
