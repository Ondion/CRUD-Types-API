import { expect } from "chai";
import * as sinon from "sinon";
import { ZodError } from "zod";
import { ErrorTypes } from "../../../routes/getError";
import CarModel from "../../../models/carModel";
import CarService from "../../../services/carService";
import { carXample, carXampleId, carsXamples } from "../../mocks";

describe("CarService tests case", () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, "create").resolves(carXampleId);
    sinon.stub(carModel, "update").resolves(carXampleId);
    sinon
      .stub(carModel, "readOne")
      .onCall(0)
      .resolves(carXampleId)
      .onCall(1)
      .resolves(null)
      .onCall(2)
      .resolves(carXampleId)
      .onCall(3)
      .resolves(carXampleId);
    sinon.stub(carModel, "read").resolves(carsXamples);
    sinon.stub(carModel, "delete").resolves(carXampleId);
  });

  after(() => {
    sinon.restore();
  });

  describe("Test for create", () => {
    it("CarService tests case", async () => {
      const carCreated = await carService.create(carXample);

      expect(carCreated).to.be.deep.equal(carXampleId);
    });

    it("CarService tests case", async () => {
      try {
        await carService.create({} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe("Test for readOne", () => {
    it("CarService tests case", async () => {
      const carCreated = await carService.readOne(carXampleId._id);

      expect(carCreated).to.be.deep.equal(carXampleId);
    });

    it("CarService tests case", async () => {
      try {
        await carService.readOne(carXampleId._id);
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

  describe("Test for update", () => {
    it("CarService tests case", async () => {
      const cars = await carService.update(
        "62cf1fc6498565d94eba52cd",
        carXample
      );
      expect(cars).to.be.deep.equal(carXampleId);
    });

    it("CarService tests case", async () => {
      let response;
      try {
        response = await carService.update(
          "62cf1fc6498565d94eba52cd",
          {} as never
        );
      } catch (error: any) {
        response = error.message;
      }
      expect(response).to.have.length.above(0);
    });
  });

  describe("Test for read", () => {
    it("CarService tests case", async () => {
      const cars = await carService.read();

      expect(cars).to.be.deep.equal(carsXamples);
    });
  });

  describe("Test for delete", () => {
    it("CarService tests case", async () => {
      const carDeleted = await carService.delete("62cf1fc6498565d94eba52cd");
      expect(carDeleted).to.be.deep.equal(carXampleId);
    });
  });
});
