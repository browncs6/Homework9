const MESSAGE_TYPE = {
  CONNECT: 0,
  MSG: 1,
  HISTORY: 2,
  LIST: 3,
  SENT: 4,
  ERROR: 5
};

const make_message = (type, payload) => {
    return JSON.stringify({ type: type, payload: payload });
};

// Endpoint for post requests
const post_endpoint = "http://157.245.2.52:7000/chat"

// TODO: Declare elements you would like to have reference to through JQuery

const login_attempt = () => {
	/* TODO: Make a POST request to the backend. Use the make_message helper
	   function fo create the value that will be sent back. The helper function
	   takes in the type and payload and converts them to JSON strings. Here is an 
	   example:
	   make_message(MESSAGE_TYPE.ERROR, {
	       msg: "this is an example",
	       severity: 12
	   }) => '{"type": 5, "payload": {"msg": "this is an example", "severity": 12}}'

	   The output from make_message can be used as the data field of a POST request.
	   hint: the JQuery .val() function might be helpful here.

	   The callback will be a function that takes one argument (the response) and 
	   is called when the backend's response arrives. Check the API for what to 
	   expect.

	   For the callback, use a switch statement on the response's type. If you get a
	   connect message back, you can extract out your token and proceed to the next
	   page (hint: try setting the window.location variable. This will allow you to 
	   transition to another .html file and store the token in the URL. Use the 
	   <url>?token=<token> syntax.). If you get an error message back, print something 
	   to the console. */

}

$(document).ready(() => {
    // TODO: Bind elements that were declared (on line 14ish) using JQuery
    // TODO: Add click handler for login button
});

