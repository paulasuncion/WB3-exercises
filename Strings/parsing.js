
function parseAndDisplayName(fullname) {
    let pos = fullname.indexOf(" ");
    let fname = fullname.slice(0, pos);
    let lname = fullname.slice(pos, fullname.length)
    console.log(fullname)
    console.log("First name: " + fname)
    console.log("Last name: " + lname)
    }
    
    parseAndDisplayName("Paul Asuncion")
    parseAndDisplayName("Brenda Kaye")
    parseAndDisplayName("Ian Auston")