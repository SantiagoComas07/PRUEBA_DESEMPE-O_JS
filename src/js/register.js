
// Here I can render the view in HTML
export function renderRegister() {

    return `

            
            <form id="registerForm">
            <h1>Register</h1>
                <label for="username">Username:</label>
                <input type="text" id="userName" name="userName"><br><br>
                
                <label for="email">Email:</label>
                <input type="email" id="userEmail" name="userEmail"><br><br>
                
                <label for="password">Password:</label>
                <input type="password" id="userPassword" name="userPassword"><br><br>
                
                <button type="submit">Register</button>

            </form>

    `;
}