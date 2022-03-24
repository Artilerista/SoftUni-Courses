function oldBooks(input) {
    let searchBook = input[0];
    let index = 1;
    let books = input[index];
    let counter = 0;
    let bookIsFound = true
    while (books !== searchBook) {
        if (books === 'No More Books') {
            console.log('The book you search is not here!');
            console.log(`You checked ${counter} books.`);
            bookIsFound = false;
            break;
        }
        counter++;
        index++;
        books = input[index];
    }
    if(bookIsFound){
        console.log(`You checked ${counter} books and found it.`);
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
