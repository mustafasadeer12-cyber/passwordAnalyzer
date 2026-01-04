// const person = {
//     name: 'Mustafa',
//     age: 31,
//     city: 'arizona'
// }

// console.log(`Hello, I'm ${person.name}`);
// console.log(`I am from ${person.city}`);


function createPerson() {
    const person = {
    name: 'Mustafa',
    age: 31,
    city: 'arizona'
}
return person;

}

const mustapha = createPerson();

console.log(`Hello, I'm ${mustapha.name}`);
console.log(`I am from ${mustapha.city}`);

// what is the difference between parameters and arguments in function? cuz i think I'm confused between both.

function aiFactory(name){
    return {
        talk() {
            return `Hi! I am ${name}, How can I assist you today ?`
        }
    }
}

const claude = aiFactory("Claude")
const gpt = aiFactory('ChatGPT')
const perplexity = aiFactory("Perplexity")

console.log(gpt.talk());
console.log(claude.talk());
console.log(perplexity.talk());




function personFactory(name, age, city, job) {
    return {
        talk() {
            return `Hi I am ${name}`
        },
        greet(username) {
            return `Hello ${username}, I am ${name}!`
        },
        bye() {
            return `Take care now! bye.`
        },
        getAge() {
            return`I am ${age} years old`
        },
        getLocation() {
            return `I am from ${city}`
        },
        job() {
            return `I am a ${job} (in training, talking to you through parameters and objects :d)`
        }
    }
}

const mustafa = personFactory('Mustafa', 31, 'phoenix', 'Web developer')  
// OBJECT METHOD
console.log(mustafa.talk())
console.log(mustafa.greet('Claude VSC'))

// yes I remember! this is how we summon objects! variable.object. correct?
console.log(mustafa.getAge())
console.log(mustafa.getLocation())
console.log(mustafa.job())
console.log(mustafa.bye())


// function createPasswordAnalyzer(minLength) {
//     return {
//         checkLength(password) {
//             return password.length >= minLength
//         },
        
//         getMessage(password) {
//             if (password.length >= minLength) {
//                 return "Strong password!"
//             } else {
//                 return `Too short! Need ${minLength} characters`
//             }
//         }
//     }
// }

// const normalCheck = createPasswordAnalyzer(6)
// const secureCheck = createPasswordAnalyzer(10)

// console.log(normalCheck.checkLength("hi"))          // false
// console.log(normalCheck.checkLength("hello!"))      // true
// console.log(normalCheck.getMessage("hi"))           // Too short! Need 6 characters
// console.log(secureCheck.getMessage("hello!"))       // Too short! Need 10 characters
// console.log(secureCheck.getMessage("12wsd4fgy7"))
//i get it! understand every line here, the problem is, when I think abour password propabillites my brain gets kinda cloudy and can't think of any thing in relate! i only got to link passwords=length. lol
//especially in 'if' cases, there is more than 2-3 ways to do things, my brain gets overwhelmed by them and can't think of anything else, loses track.


function createPasswordAnalyzer() {
    return {
        hasNumber(password) {
            for (let i = 0; i < password.length; i++) {
                let char = password[i];
                if (char >= '0' && char <= '9') {
                    return true;
                }
            }
            return false;
        },
        
        hasUppercase(password) {
            for(let i = 0; i < password.length; i++) {
                let char = password[i];
                if(char === char.toUpperCase() && char !== password.toLowerCase()) {
                    return true;
                }
            }
            return false;
        }
    }
}

const analyzer = createPasswordAnalyzer()
console.log(analyzer.hasNumber('323323sa'))    // should be false
console.log(analyzer.hasUppercase("Hello"))    // should be true


//char is word from ? charts?

function createPasswordAnalyzer() {
    return {
        hasNumber(password) {
            for (let i = 0; i < password.length; i++) {
                let char = password[i];
                if (char >= '0' && char <= '9') {
                    return true;
                }
            }
            return false;
        },
        
        hasUppercase(password) {
            for(let i = 0; i < password.length; i++) {
                let char = password[i];
                if(char === char.toUpperCase() && char !== char.toLowerCase()) {
                    return true;
                }
            }
            return false;
        },
        
        checkStrength(password) {
            // Check length
            if (password.length < 6) {
                return "Weak - too short";
            }
            
            // Check if has number AND uppercase
            if (this.hasNumber(password) && this.hasUppercase(password)) {
                return "Strong";
            }
            // so this is a combo of the first 2 functions?
            
            return "Medium";
        },
        hasSpecialChar(password) {
    const specialChars = "!@#$%&*";
    
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        
        // Check if char is in specialChars string
        if (specialChars.includes(char)) {
            return true;
        }
    }
    
    return false;
}
    }
}

const analyzer2 = createPasswordAnalyzer()

console.log(analyzer2.checkStrength("hi"))           // Weak - too short
console.log(analyzer2.checkStrength("hello"))        // Medium (no number, no uppercase)
console.log(analyzer2.checkStrength("Hello5"))       // Strong (has both!)
console.log(analyzer2.checkStrength("HELLO"))        // Medium (no number)
console.log(analyzer2.checkStrength("hello5"))       // Medium (no uppercase)
console.log(analyzer2.hasSpecialChar('hyd76@'))

//tbh, specialchar and checkstrength was copy and paste, but function before that,i wrote them all.
//but that does not mean I don't understand it, it is the opposite, i copied and paste cuz i understand it and i wanted to see the final product and what more functions can we add to such passwordchecker! after that, we can decompose the whole thing to parts and build again, to master both syntax & logic. give me honest thoughts, no overwhelming roadmaps, just slow, steady working/study plan. or anything you wanna add, be my guest.

// FINAL THOUGHT: IF YOU AGREE WITH ME ON ABOVE:
// complete the analyzer (final version) so we can collapse-rebuild again. (split-screen, write, make muscle memory, write from memory, and so on, no challenges.)



///
// FINAL VERSION - INDEX.

function createPasswordAnalyzer() {
    return {
        hasNumber(password) {
            for(let i = 0; i < password.length; i++) {
                let char = password[i];
                if(char >= '0' && char <= '9') {
                    return true;
                }
            }
            return false;
        },
        hasUpperCase(password) {
            for (let i = 0; i < password.length; i++) {
                let char = password[i];
                if(char === char.toUpperCase() && char !== char.toLowerCase()) {
                    return true
                }
            }
            return false;
        },
        hasLowerCase(password) {
            for(let i = 0; i < password.length; i++) {
                let char = password[i]
                if(char === char.toLowerCase() && char !== char.toUpperCase()) {
                    return true;
                }
            }
            return false;
        },

        hasSpecialChar(password) {
            const specialChar = "!@#$%&*-+_"

            for(let i = 0; i < password.length; i++) {
                let char = password[i]
                if(specialChar.includes(char)) {
                    return true;
                }
            }
            return false;
        },
        checkStrength(password) {
            if (password.length < 6) {
                return "Weak! Too short, need 6+!"
            }
            let score = 0;

            if (password.length >= 8) score++;
            if (this.hasNumber(password)) score++;
            if (this.hasLowerCase(password)) score++;
            if (this.hasUpperCase(password)) score++;
            if (this.hasSpecialChar(password)) score++;

            if (score >= 4) {
                return "Strong!"
            } else if (score >= 2) {
                return "Medium"
            } else {
                return "WEAK!"
            }

        },
        getDetails(password) {
            return {
                length: password.length,
                hasNumber: this.hasNumber(password),
                hasUpperCase: this.hasUpperCase(password),
                hasLowerCase: this.hasLowerCase(password),
                hasSpecialChar: this.hasSpecialChar(password),
            }
        }


        //so far this morning, I wrote checkStrength 2 times from memory.
        // this porves to me how Important to name things right.
        // if this has lower case char in password , score 1+ ! score++ means add 1, just like i++ loopes.
        //getDetails() is next.
            
        

       
    }
}

const passAnalyzer = createPasswordAnalyzer()

console.log(passAnalyzer.hasNumber('abcdef65453'))
console.log(passAnalyzer.hasNumber('abcdefghijk'))
console.log(passAnalyzer.hasUpperCase('AbCdEf65F453'))
console.log(passAnalyzer.hasUpperCase('abcdef65453'))
console.log(passAnalyzer.hasLowerCase('HGFDJFDJFJHD'))
console.log(passAnalyzer.hasLowerCase('abssasDSf65453'))
console.log(passAnalyzer.hasSpecialChar('a!@#bcdef65453'))
console.log(passAnalyzer.hasSpecialChar('abcdef65453'))

//good morning. I wrote these function as soon as I woke up.all from memory.
//one bug I had tho - 'hasNumber' method, i wrote if char === '0' instead of >=
//i test it, saw the bug, debugged it.

console.log(passAnalyzer.checkStrength("hi"));                  // Weak - too short
console.log(passAnalyzer.checkStrength("hello"));               // Weak
console.log(passAnalyzer.checkStrength("Hello5"));              // Medium
console.log(passAnalyzer.checkStrength("Hello5!"));             // Strong
console.log(passAnalyzer.checkStrength("MyPass123!"));          // Strong

console.log("\n--- Full Details ---");
console.log(passAnalyzer.getDetails("Hello5!"));



