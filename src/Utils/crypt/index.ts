import bcrypt from "bcrypt";

export class Crypt {
  async cryptPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);

    const passwordCrypted = await bcrypt.hash(password, salt);
    console.log("passwordCrypted", passwordCrypted);
    return passwordCrypted;
  }
}
