

export function renderProductsa(){

    return `
    <section class="eventBoxComplete">
        <article class="eventFormBox">
            <h1>Events</h1>
            <div>
              <h1>To create a new event</h1>
              <form id="eventForm" class="eventoForm">
                  <label for="eventName">Username:</label>
                  <input type="text" id="eventName" name="eventName">
                  
                  <label for="placeName">Place</label>
                  <input type="text" id="placeName" name="placeName">
                  
                  <label for="passwordName">description</label>
                  <textarea name="passwordName" id="passwordName"></textarea>
                  
                  <button type="submit">Update</button>
              </form>
              <div>
                  <a href="/" data-link >devuelta</a>
              </div>
            </article>
            <article class="window">
                <div>
                    <h1>Events</h1>
                </div>
                <div class="eventList">
                    <ul id="eventList">

                    </ul>
                </div>
            </article>
        </div>
    </section>
    `;
}