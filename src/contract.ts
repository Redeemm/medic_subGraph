import {
  MedicalRecordStored as MedicalRecordStoredEvent,
  PatientInfoStored as PatientInfoStoredEvent
} from "../generated/Contract/Contract"
import { MedicalRecordStored, PatientInfoStored } from "../generated/schema"

export function handleMedicalRecordStored(
  event: MedicalRecordStoredEvent
): void {
  let entity = new MedicalRecordStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Contract_id = event.params.id
  entity.medicalRecords = event.params.medicalRecords

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePatientInfoStored(event: PatientInfoStoredEvent): void {
  let entity = new PatientInfoStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Contract_id = event.params.id
  entity.patientInfo_Name = event.params.patientInfo.Name
  entity.patientInfo_DateOfBirth = event.params.patientInfo.DateOfBirth
  entity.patientInfo_BloodType = event.params.patientInfo.BloodType
  entity.patientInfo_Allergies = event.params.patientInfo.Allergies
  entity.patientInfo_ChronicConditions =
    event.params.patientInfo.ChronicConditions

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
