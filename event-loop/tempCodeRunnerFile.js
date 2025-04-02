 crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password encrypted: ", Date.now() - start);
  });