


export function renderLogin(){

    return `    
      <form action="">
        <label for="">Name</label>
        <input type="text" id="userName" name="userName" placeholder="name"><br><br>
        <label for="">Password</label>
        <input type="password" id="userPassword" name="userPassword" placeholder="password"><br><br>
        <input type="submit" id="submit-btn" value="Sign in">
      </form>
      <div>
        <a href="/register" data-link>Register</a>
      </div>
    
    `

}