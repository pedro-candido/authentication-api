export class Format {
  static removeSpecialCharactersFromPhone(phone: string) {
    return phone.replace(/[^0-9]/g, "");
  }
}
