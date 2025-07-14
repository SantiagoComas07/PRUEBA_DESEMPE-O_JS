

export function renderRegister() {

    return `

            <h1>Register</h1>
            <form id="registerForm">
                <label for="username">Username:</label>
                <input type="text" id="userName" name="userName">
                
                <label for="email">Email:</label>
                <input type="email" id="userEmail" name="userEmail">
                
                <label for="password">Password:</label>
                <input type="password" id="userPassword" name="userPassword">
                
                <button type="submit">Register</button>
            </form>
            <div>
                <a href="/login" data-link >Login</a>
            </div>
    `;
}