function extractEmails(input) {
    let pattern = /(?<!\S)[A-Za-z\d]+([\.\-\_]*[A-Za-z\d]+)*@[a-zA-z]+([\.\-]*[a-zA-z]+)*\.[A-Za-z]+/g;
    let match = input.match(pattern);
    console.log(match.join('\n'));
    
}
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')