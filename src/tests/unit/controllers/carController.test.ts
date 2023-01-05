import * as sinon from "sinon";
import { expect } from "chai";
import { Request, Response } from "express";

import { carXample, carXampleId, carsXamples } from "../../mocks";

import CarModel from "../../../models/carModel";
import CarService from "../../../services/carService";
import CarController from "../../../controllers/carController";

describe("CarController tests case", () => {
  const carService = new CarService(new CarModel());
  const carController = new CarController(carService);
  const request = {} as Request;
  const response = {} as Response;

  before(() => {
    sinon.stub(carService, "create").resolves(carXampleId);
    sinon.stub(carService, "update").resolves(carXampleId);
    sinon.stub(carService, "readOne").resolves(carXampleId);
    sinon.stub(carService, "read").resolves(carsXamples);
    sinon.stub(carService, "delete").resolves();

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
  });

  after(() => {
    sinon.restore();
  });

  describe("Test for create", () => {
    it("CarController tests case", async () => {
      request.body = carXample;
      await carController.create(request, response);
      expect((response.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((response.json as sinon.SinonStub).calledWith(carXampleId)).to.be
        .true;
    });
  });

  describe("Test for readOne", () => {
    it("CarController tests case", async () => {
      request.params = { id: carXampleId._id };
      await carController.readOne(request, response);
      expect((response.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((response.json as sinon.SinonStub).calledWith(carXampleId)).to.be
        .true;
    });
  });

  describe("Test for update", () => {
    it("CarController tests case", async () => {
      request.params = { id: carXampleId._id };
      request.body = carXample;
      const _result = await carController.update(request, response);
      expect((response.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((response.json as sinon.SinonStub).calledWith(carXampleId)).to.be
        .true;
    });
  });

  describe("Test for read", () => {
    it("CarController tests case", async () => {
      const _result = await carController.read(request, response);
      expect((response.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((response.json as sinon.SinonStub).calledWith(carsXamples)).to.be
        .true;
    });
  });

  describe("Test for delete", () => {
    it("CarController tests case", async () => {
      request.params = { id: carXampleId._id };
      const _result = await carController.delete(request, response);
      expect((response.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((response.json as sinon.SinonStub).calledWith(carXampleId)).to.be
        .true;
    });
  });
});
