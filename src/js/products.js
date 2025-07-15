

// Here I can render the view in HTML

export function renderProducts(){

return  `<form id="eventForm" class="eventoForm">

                  <label for="eventName">Username:</label>
                  <input type="text" id="eventName" name="eventName">
                  
                  <label for="placeName">Place</label>
                  <input type="text" id="placeName" name="placeName">
                  
                  <label for="passwordName">description</label>
                  <textarea name="passwordName" id="passwordName"></textarea>
                  
                  <input type="submit" id="send" value="send">
              </form>`

}





