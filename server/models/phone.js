let phonesData = require("../data.js");

class Phone {
  //Create a phone class
  constructor(data) {
    this.id = data.id;
    this.company = data.company;
    this.model = data.model;
  }

  static get all() {
    const phones = phonesData.map((phone) => new Phone(phone));
    return phones;
  }

  static findById(id) {
    try {
      const phoneData = phonesData.find((phone) => phone.id === id);
      const phone = new Phone(phoneData);
      return phone;
    } catch (e) {
      throw new Error("This ID does not exist");
    }
  }

  static findByCompany(company) {
    try {
      const phoneData = phonesData.filter((phone) => phone.company == company);
      const phones = phoneData.map((phone) => new Phone(phone));
      return phones;
    } catch (e) {
      throw new Error("This Company does not exist");
    }
  }

  static findByModel(model) {
    try {
      const phoneData = phonesData.filter((phone) => phone.model == model);
      const phones = phoneData.map((phone) => new Phone(phone));
      return phones;
    } catch (e) {
      throw new Error("This Model does not exist");
    }
  }

  static create(phone) {
    const newPhoneId = phonesData.length + 1;
    const newPhone = new Phone({ id: newPhoneId, ...phone });
    phonesData.push(newPhone);
    return newPhone;
  }

  destroy() {
    let phone = phonesData.find((phone) => phone.id === this.id);
    phonesData.splice(phonesData.indexOf(phone), 1);
  }
  update(changes) {
    const phone = phonesData.find((phone) => phone.id === this.id);
    const phoneIndex = phonesData.indexOf((phone) => phone.id === this.id);
    phonesData[phoneIndex] = { ...changes, ...phone };
    return phonesData[phoneIndex];
  }
}

module.exports = Phone;
