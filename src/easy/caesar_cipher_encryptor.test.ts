import * as chai from "chai";
import { caesarCipherEncryptor } from "./caesar_cipher_encryptor";

describe("Caesar Cipher Encryptor", () => {
  it("Test Case #1", function () {
    chai.expect(caesarCipherEncryptor("xyz", 2)).to.deep.equal("zab");
  });
});
