let phonesData = require("../data.js");

class Phone {
  //Create a phone class
  constructor(data) {
    this.id = data.id;
    this.company = data.company;
    this.model = data.model;
  }

  static get all() {
    //Method to retrieve the data for all phones
    const phones = phonesData.map((phone) => new Phone(phone));
    return phones;
  }

  static findById(id) {
    //Finds a phone by its ID
    try {
      const phoneData = phonesData.find((phone) => phone.id === id); //Returns the data of a phone by using its ID
      const phone = new Phone(phoneData); //Creates a new phone with the found data
      return phone; //Returns the phone object created above
    } catch (e) {
      throw new Error("This ID does not exist");
    }
  }

  static findByCompany(company) {
    //Finds a phone by its company
    try {
      const phoneData = phonesData.filter((phone) => phone.company == company);
      const phones = phoneData.map((phone) => new Phone(phone));
      return phones;
    } catch (e) {
      throw new Error("This Company does not exist");
    }
  }

  static findByModel(model) {
    //To be fixed
    try {
      const phoneData = phonesData.filter((phone) => phone.model == model);
      const phones = phoneData.map((phone) => new Phone(phone));
      return phones;
    } catch (e) {
      throw new Error("This Model does not exist");
    }
  }

  static create(phone) {
    //Creates a new instance of a phone
    const newPhoneId = phonesData.length + 1; //Creates the new phone's ID
    const newPhone = new Phone({ id: newPhoneId, ...phone }); //Uses the spread operator to create a new phone
    phonesData.push(newPhone); //Puts the new phone at the end of the object storing all of the phones
    return newPhone;
  }

  destroy() {
    //Removes a selected phone
    let phone = phonesData.find((phone) => phone.id === this.id); //Finds the phone using the ID of the phone selected for deletion
    phonesData.splice(phonesData.indexOf(phone), 1); //Removes the phone from the array
  }
  update(changes) {
    //To be fixed
    const phone = phonesData.find((phone) => phone.id === this.id);
    const phoneIndex = phonesData.indexOf((phone) => phone.id === this.id);
    phonesData[phoneIndex] = { ...changes, ...phone };
    return phonesData[phoneIndex];
  }
}

module.exports = Phone;
