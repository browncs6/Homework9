const MESSAGE_TYPE = {
  CONNECT: 0,
  MSG: 1,
  HISTORY: 2,
  LIST: 3,
  SENT: 4,
  ERROR: 5
};

// Helper function that retrieves the token from the URL
function getUrlToken() {
  let l = window.location.href.replace(/.*\?token=([a-zA-Z0-9]{24})$/, '$1')
  if (l.length === 24) {
    return l
  }
  return ""
}

// Helper function that initiates contact with the websocket. Messages from the
// websocket will be sent to the handle_message function as JS objects.
const setup_websocket = (token) => {
  conn = new WebSocket("ws://157.245.2.52:7000/websocket?token=" + token);
  conn.onerror = err => {
    console.log("Connection error:", err);
  };
  conn.onmessage = msg => {
    console.log("Receiving:", msg.data);
    handle_message(JSON.parse(msg.data));
  };
};

// Helper function that makes message strings. The token is autofilled for you.
const make_message = (type, payload) => {
  return JSON.stringify({ type: type, payload: payload, token: getUrlToken()});
};

// Endpoint for post requests
const post_endpoint = "http://157.245.2.52:7000/chat"

// TODO: Declare elements you would like to have reference to through JQuery

// this variable will keep track of the user you are currently talking with
let curr_conversation = "";

// This function receives messages from the websocket
const handle_message = msg => {
  /* TODO: This funcion is called with any message that comes through the
     websocket. So, it may receive .MSG, .LIST, or .ERROR messages. Use
     a switch statement to handle them all.

     For .MSG messages, if the message is from the user you are currently chatting 
     with, add the message to the visible conversation history in real-time. Otherwise, 
     print the message to the console. You can improve this behavior for the 
     improvements scetion if you like.

     For .LIST messages, the message should update your lists of online and offline
     users visually. Each list element should be clickable, where clicking them
     calls the set_current_conversation function with the user as an argument. Check
     out the html onclick property.

     For .ERROR messages, print to the console. This is another thing you can improve
     for the improvements section if you like.

     hint: style tip. Write helper functions for each message type and call those
     after parsing out the arguments from the raw input message from the backend.
  */

};

// TODO: If you like, write helper functions for receiving .MSG and .LIST messages here

const set_current_conversation = (user) => {
  /* TODO: Empty the current history that is being displayed. Then, make
     a POST request of type .HISTORY. With the response, there are two cases.
     If you get a .HISTORY message in response, update the conversation that 
     is being displayed and set the curr_conversation. You will likely want
     to use template literals here. Otherwise, if you get an .ERROR message, 
     log the message in the console.
  */
}

const send_message = () => {
  /* TODO: Send a message to the curr_conversation user through a POST request.
     Only send a POST request if the curr_conversation is non-empty.

     The "to" field should be the curr_conversation and the "msg" field should
     be the contents of the message input box. For the callback, if a .SENT
     message is received, empty the message input field. Otherwise, log the error.
  */
}

$(document).ready(() => {
  // Sets up websocket
  token = getUrlToken()
  if (token.length > 0) {
    setup_websocket(token);
  } else {
    console.error("Could not set up websocket: token not found in URL.")
  }
  // TODO: Bind elements that were declared (on line 40ish) using JQuery
  // TODO: Add click handler for send button
});