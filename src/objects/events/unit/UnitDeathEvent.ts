import { ObjectStorage } from "../../../services/ObjectStorage";
import { Unit } from "../../Unit";
import { UnitEvent, UnitEventDetail } from "./UnitEvent";

export interface UnitDeathEventDetail extends UnitEventDetail {
  killingUnit: Unit;
}

export interface UnitDeathEvent {
  detail: UnitDeathEventDetail;
}

const objectStorage = ObjectStorage.getInstance();

const snapshotUnitEvent = (): UnitDeathEventDetail => {
  return {
    triggerUnit: objectStorage.getOrWrap(GetTriggerUnit()),
    killingUnit: objectStorage.getOrWrap(GetKillingUnit()),
  };
};

export class UnitDeathEvent extends UnitEvent {
  constructor(type: string, detail: UnitDeathEventDetail | null) {
    super(type, detail || snapshotUnitEvent());
  }
}