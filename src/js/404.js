

// Here I can render the view in HTML, This case is when the page cannot be found.
export function notFound() {
    return `
        <div class="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a href="/">Go back to Home</a>
        </div>
    `;
}