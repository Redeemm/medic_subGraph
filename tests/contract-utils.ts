import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  MedicalRecordStored,
  PatientInfoStored
} from "../generated/Contract/Contract"

export function createMedicalRecordStoredEvent(
  id: BigInt,
  medicalRecords: Array<ethereum.Tuple>
): MedicalRecordStored {
  let medicalRecordStoredEvent = changetype<MedicalRecordStored>(newMockEvent())

  medicalRecordStoredEvent.parameters = new Array()

  medicalRecordStoredEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  medicalRecordStoredEvent.parameters.push(
    new ethereum.EventParam(
      "medicalRecords",
      ethereum.Value.fromTupleArray(medicalRecords)
    )
  )

  return medicalRecordStoredEvent
}

export function createPatientInfoStoredEvent(
  id: BigInt,
  patientInfo: ethereum.Tuple
): PatientInfoStored {
  let patientInfoStoredEvent = changetype<PatientInfoStored>(newMockEvent())

  patientInfoStoredEvent.parameters = new Array()

  patientInfoStoredEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  patientInfoStoredEvent.parameters.push(
    new ethereum.EventParam(
      "patientInfo",
      ethereum.Value.fromTuple(patientInfo)
    )
  )

  return patientInfoStoredEvent
}
