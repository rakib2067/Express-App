let phonesData = require("../data.js");

class Phone {
  constructor({ id, company, model, price }) {
    this.id = id;
    this.company = company;
    this.model = model;
    this.price = price;
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
    const newPhoneId = phoneData.length + 1;
    const newPhone = new Phone({ id: newPhoneId, ...phone });
    phoneData.push(newPhone);
    return newPhone;
  }

  destroy() {
    const phone = phonesData.filter((phone) => phone.id === this.id)[0];
    phonesData.splice(catsData.indexOf(phone), 1);
  }
}

module.exports = Phone;
