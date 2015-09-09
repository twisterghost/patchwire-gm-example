// Read the message info out of the command
var from = net_cmd_read_data(argument0, 'sender');
var message = net_cmd_read_data(argument0, 'message');

// Add the message to the message list
obj_message_list.messages[array_length_1d(obj_message_list.messages)] = from + ': ' + message;
