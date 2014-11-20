function onSuccess(contacts) {
    alert('Found ' + navigator.contacts.length + ' navigator.contacts.');
};
 
function onError(contactError) {
    alert('onError!');
};
 
// find all contacts with 'Bob' in any name field
var options      = new ContactFindOptions();
options.filter   = "Bob";
options.multiple = true;
var fields       = ["displayName", "name"];
navigator.contacts.find(fields, onSuccess, onError, options);