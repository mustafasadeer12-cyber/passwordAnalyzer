# Password Analyzer

A JavaScript password strength analyzer built with factory functions and object methods.

## Features

- Check if password contains numbers
- Check if password contains uppercase letters
- Check if password contains lowercase letters
- Check if password contains special characters (`!@#$%&*-+_`)
- Rate password strength (Weak/Medium/Strong)
- Get detailed password report

## Usage

```js
const passAnalyzer = createPasswordAnalyzer();

// Check individual requirements
passAnalyzer.hasNumber('password123');      // true
passAnalyzer.hasUpperCase('Welcome');       // true
passAnalyzer.hasLowerCase('UPPERCASE');     // false
passAnalyzer.hasSpecialChar('Pass@123');    // true

// Check overall strength
passAnalyzer.checkStrength("hi");           // "Weak! Too short, need 6+!"
passAnalyzer.checkStrength("Hello5!");      // "Strong!"

// Get full details
passAnalyzer.getDetails("Hello5!");
// {
//   length: 7,
//   hasNumber: true,
//   hasUpperCase: true,
//   hasLowerCase: true,
//   hasSpecialChar: true,
//   strength: "Strong!"
// }
```

## How It Works

The analyzer uses a **scoring system**:
- Password length ≥ 8 characters: +1 point
- Contains numbers: +1 point
- Contains uppercase letters: +1 point
- Contains lowercase letters: +1 point
- Contains special characters: +1 point

**Strength ratings:**
- 4-5 points = Strong
- 2-3 points = Medium
- 0-1 points = Weak
- Less than 6 characters = Always weak

## Technologies Used

- JavaScript (ES6)
- Factory functions
- Object methods

## First Project of 2026! 🎉