// import data
const phonesData = require("../data");
// import model
const Phone = require("../models/phone");

describe("Phone Model", () => {
  const testPhone = {
    //The phone we are testing against
    company: "Oppo",
    model: "Renno",
  };

  it("should make an instance of a phone", () => {
    const phone = new Phone({ id: 7, ...testPhone });

    expect(phone.id).toBe(7);
    expect(phone.model).toBe("Renno");
    expect(phone.company).toBe("Oppo");
  });

  it("should return all Phone", () => {
    const phones = Phone.all;

    expect(phones).toEqual(phonesData);
  });

  it("should return a phone", () => {
    const phone = Phone.findById(1);

    expect(phone).toEqual(phonesData[0]);
  });

  it("should throw an error if no phone", () => {
    function testError() {
      Phone.findById(50);
    }

    expect(testError).toThrowError("This ID does not exist");
  });

  it("should create a phone", () => {
    const newPhoneId = phonesData.length + 1;
    const newPhone = Phone.create(testPhone);

    expect(newPhone).toEqual({ id: newPhoneId, ...testPhone });
  });

  it("should delete a phone", () => {
    const phoneToRemoveId = phonesData.length;
    const phoneToRemove = phonesData[phoneToRemoveId - 1];
    phoneToRemove.destroy();

    expect(phoneToRemove).toEqual({ id: phoneToRemoveId, ...testPhone });
    expect(phonesData).not.toContain(phoneToRemove);
  });
});
