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
                    return true;
                }
            }
            return false;
        },

        hasLowerCase(password) {
            for(let i = 0; i < password.length; i++) {
                let char = password[i];
                if(char === char.toLowerCase() && char !== char.toUpperCase()) {
                    return true;
                }
            }
            return false;
        },

        hasSpecialChar(password) {
            const specialChar = "!@#$%&*-+_";
            for(let i = 0; i < password.length; i++) {
                let char = password[i];
                if(specialChar.includes(char)) {
                    return true;
                }
            }
            return false;
        },

        checkStrength(password) {
            if (password.length < 6) {
                return "Weak! Too short, need 6+!";
            }
            let score = 0;

            if (password.length >= 8) score++;
            if (this.hasNumber(password)) score++;
            if (this.hasLowerCase(password)) score++;
            if (this.hasUpperCase(password)) score++;
            if (this.hasSpecialChar(password)) score++;

            if (score >= 4) {
                return "Strong!";
            } else if (score >= 2) {
                return "Medium";
            } else {
                return "WEAK!";
            }
        },

        getDetails(password) {
            return {
                length: password.length,
                hasNumber: this.hasNumber(password),
                hasUpperCase: this.hasUpperCase(password),
                hasLowerCase: this.hasLowerCase(password),
                hasSpecialChar: this.hasSpecialChar(password),
                strength: this.checkStrength(password)
            };
        }
    }
}

const passAnalyzer = createPasswordAnalyzer();

console.log(passAnalyzer.hasNumber('password123'));
console.log(passAnalyzer.hasNumber('onlyletters'));
console.log(passAnalyzer.hasUpperCase('Welcome'));
console.log(passAnalyzer.hasUpperCase('lowercase'));
console.log(passAnalyzer.hasLowerCase('UPPERCASE'));
console.log(passAnalyzer.hasLowerCase('HasBoth'));
console.log(passAnalyzer.hasSpecialChar('Pass@123'));
console.log(passAnalyzer.hasSpecialChar('NoSpecial'));

console.log("\n--- Password Strength Tests ---");
console.log(passAnalyzer.checkStrength("hi"));
console.log(passAnalyzer.checkStrength("hello"));
console.log(passAnalyzer.checkStrength("Hello5"));
console.log(passAnalyzer.checkStrength("Hello5!"));
console.log(passAnalyzer.checkStrength("MyPass123!"));

console.log("\n--- Full Details ---");
console.log(passAnalyzer.getDetails("Hello5!"));