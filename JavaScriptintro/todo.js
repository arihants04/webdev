let userInput = prompt('What would you like to do?');
const list = [];
while (userInput !== 'quit') {
    while (userInput === 'new') {
        userInput = prompt('What would you like to add');
        console.log(userInput + ' added to list');
        list.push(userInput);
        userInput = prompt('What would you like to do?');
        if (userInput === 'quit') break;
    }
    while (userInput === 'list') {
        console.log('**********')
        for (i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`)
        }
        console.log('**********');
        userInput = prompt('What would you like to do?');
        if (userInput === 'quit') break;
    }
    while (userInput === 'delete') {
        userInput = prompt('What would you like to delete?')
        let listIndex = list.indexOf(userInput)
        let spliced = list.splice(listIndex, 1);
        console.log(spliced + ' removed from list')
        userInput = prompt('What would you like to do?');
        if (userInput === 'quit') break;
    }
    userInput = prompt('What would you like to do?');
}
