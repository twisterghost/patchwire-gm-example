// Display a message for debugging
show_debug_message('connected to server');

// Get the user's name and send it to the server
var name = get_string('Enter a name', 'Unknown');

net_cmd_init('setName');
net_cmd_add_data('name', name);
net_cmd_send();
