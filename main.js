
// const fs = require('fs');

var prompt = require("prompt-sync")();
var data = {
    ricky:"hello"
}

main()

function main() {

    var fs = require('fs');
    var path = process.cwd();
    var buffer = fs.readFileSync(path + "\\data.txt");
    const lines = buffer.toString().split("\n")

    lines.forEach(i => {
        let split = i.split(";")
        data[split[0]] = split[1]
    })
    console.log(data);

    // fs.appendFile('data.txt',`helloWorld`, (err) => { if (err) throw err; })
  
    const cmds = ["1-Login", "2-Sign Up", "3-Exit"]
    cmds.forEach(i => console.log(i))
    // signUp()
    let running = true
    while (running) {
        
        let input = prompt("\nEnter command:")

        switch (input) {

            case "1": login(); break;
            case "2": signUp(); break;
            case "3": running = false; break;
            default: continue
        
        }
        
    }

    fs = require('fs')
    fs.writeFileSync('data.txt', '', function(){console.log('done')})

    for (const [key, value] of Object.entries(data)) {
        fs.appendFile("data.txt", `${key.toString()};${value.toString()}\n`, (err) => { if (err) throw err; })
    }

    
    
}

function login() {
    
    console.log("Welcome! Enter your credentials: ")

    while(true)  {

        let username = prompt("Username: ")
        let password = prompt("Password: ")
       
        if (data[username] === password) {
            console.log("Sucessful Logged in.") 
            break
        }
        else {
            console.log("Incorrect username or password.\n")
        } 
    }
}

function signUp() {


    while (true) {
        let username = prompt("Enter your username: ")
        let password = prompt("Enter your password: ")
        let confirmPassword = prompt("Confirm your password: ")
    
        if (data[username] !== undefined) {
            console.log("Username already exists.")
            continue
        }
        if (password !== confirmPassword) {
            console.log("Passwords don't match.")
            continue
        }
     
        data[username] = password

        console.log(data)
        return
    }


   
    
}
