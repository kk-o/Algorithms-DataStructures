function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
   let failedAttempts = 0;

   // iterate through number of attempts 
   for (let attempt of attempts) {

      // reset number of attempts once the user enters the password correctly
      // otherwise, increment number of failed attempts by one 
      failedAttempts = attempt === passcode ? 0 : failedAttempts++;
    
      // check if the password was incorrect ten times 
      if(failedAttempts === 10) {
          return true; // lock user out of account
      }
   }
   // do not log user out of his account
   return false;
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));