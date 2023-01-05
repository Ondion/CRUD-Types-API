import * as sinon from "sinon";
import chai from "chai";
import CarModel from "../../../models/carModel";
import { Model } from "mongoose";
import {
  carXample,
  carXampleId,
  carXampleValue,
  carIdValue,
  carsXamples,
} from "../../mocks";
const { expect } = chai;

describe("CarModel tests case", () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, "create").resolves(carXampleId);
    sinon.stub(Model, "findOne").resolves(carXampleId);
    sinon.stub(Model, "findByIdAndUpdate").resolves(carIdValue);
    sinon.stub(Model, "find").resolves(carsXamples);
    sinon.stub(Model, "findByIdAndRemove").resolves(carIdValue);
  });

  after(() => {
    sinon.restore();
  });

  describe("Test for create", () => {
    it("CarModel tests case", async () => {
      const newCar = await carModel.create(carXample);
      expect(newCar).to.be.deep.equal(carXampleId);
    });
  });

  describe("Test for readOne", () => {
    it("CarModel tests case", async () => {
      const carFound = await carModel.readOne("62cf1fc6498565d94eba52cd");
      expect(carFound).to.be.deep.equal(carXampleId);
    });

    it("CarModel tests case", async () => {
      try {
        await carModel.readOne("123ERRADO");
      } catch (error: any) {
        expect(error.message).to.be.eq("InvalidMongoId");
      }
    });
  });

  describe("Test for update", () => {
    it("CarModel tests case", async () => {
      const carsChanged = await carModel.update(
        "62cf1fc6498565d94eba52cd",
        carXampleValue
      );
      expect(carsChanged).to.be.deep.equal(carIdValue);
    });

    it("CarModel tests case", async () => {
      try {
        await carModel.update("123ERRADO", carXampleValue);
      } catch (error: any) {
        expect(error.message).to.be.eq("InvalidMongoId");
      }
    });
  });

  describe("Test for read", () => {
    it("CarModel tests case", async () => {
      const carFound = await carModel.read();
      expect(carFound).to.be.deep.equal(carsXamples);
    });
  });

  describe("Test for delete", () => {
    it("CarModel tests case", async () => {
      const carsChanged = await carModel.delete("62cf1fc6498565d94eba52cd");
      expect(carsChanged).to.be.deep.equal(carIdValue);
    });

    it("CarModel tests case", async () => {
      try {
        await carModel.delete("null");
      } catch (error: any) {
        expect(error.message).to.be.eq("InvalidMongoId");
      }
    });
  });
});
