const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const contacts = [];

function addContact() {
    //prompt the client to add name
  rl.question('Enter name: ', (name) => {
    //prompt the client to add phone number
    rl.question('Enter phone number: ', (phoneNumber) => {
      const contact = { name, phoneNumber };
      contacts.push(contact);
      console.log('Contact added successfully!');
      mainMenu();
    });
  });
}

function viewContacts() {
  console.log('Contacts:');
  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. Name: ${contact.name}, Phone: ${contact.phoneNumber}`);
  });
  mainMenu();
}

function searchContact() {
  rl.question('Enter name to search: ', (searchName) => {
    const foundContact = contacts.find(contact => contact.name === searchName);
    if (foundContact) {
      console.log(`Name: ${foundContact.name}, Phone: ${foundContact.phoneNumber}`);
    } else {
      console.log('Contact not found.');
    }
    mainMenu();
  });
}

function exitApp() {
  console.log('Goodbye!');
  rl.close();
}

function mainMenu() {
  console.log('\nMain Menu:');
  console.log('1. Add a contact');
  console.log('2. View all contacts');
  console.log('3. Search for a contact');
  console.log('4. Exit');
  rl.question('Select an option: ', (option) => {
    switch (option) {
      case '1':
        addContact();
        break;
      case '2':
        viewContacts();
        break;
      case '3':
        searchContact();
        break;
      case '4':
        exitApp();
        break;
      default:
        console.log('Invalid option. Please select a valid option.');
        mainMenu();
        break;
    }
  });
}

console.log('Welcome to the Contact Manager App!');
mainMenu();
