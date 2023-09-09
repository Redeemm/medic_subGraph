import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { MedicalRecordStored } from "../generated/schema"
import { MedicalRecordStored as MedicalRecordStoredEvent } from "../generated/Contract/Contract"
import { handleMedicalRecordStored } from "../src/contract"
import { createMedicalRecordStoredEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let medicalRecords = ["ethereum.Tuple Not implemented"]
    let newMedicalRecordStoredEvent = createMedicalRecordStoredEvent(
      id,
      medicalRecords
    )
    handleMedicalRecordStored(newMedicalRecordStoredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MedicalRecordStored created and stored", () => {
    assert.entityCount("MedicalRecordStored", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MedicalRecordStored",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "medicalRecords",
      "[ethereum.Tuple Not implemented]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
