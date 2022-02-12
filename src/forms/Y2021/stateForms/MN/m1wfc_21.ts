import Form, { FormMethods } from 'ustaxes/core/stateForms/Form'
import F1040 from '../../irsForms/F1040'
import { Field } from 'ustaxes/core/pdfFiller'
import { sumFields } from 'ustaxes/core/irsForms/util'
import {
  AccountType,
  FilingStatus,
  Information,
  State
} from 'ustaxes/core/data'

export class M1WFC21 extends Form {
  info: Information
  f1040: F1040
  formName: string
  formOrder = 0
  state: State
  methods: FormMethods

  constructor(info: Information, f1040: F1040) {
    super()
    this.info = info
    this.f1040 = f1040
    this.formName = 'm1wfc_21'
    this.state = 'MN'
    this.methods = new FormMethods(this)
  }

  attachments = (): Form[] => {
      return []
  }

  /**
   * Index 0: YourFirstNameAndInitial
   */
   yourFirstNameAndInitial = (): string | undefined => {
    return undefined
  }

   f0 = (): string | undefined => this.yourFirstNameAndInitial()

  /**
   * Index 1: LastName
   */
   lastName = (): string | undefined => {
    return undefined
  }

   f1 = (): string | undefined => this.lastName()

  /**
   * Index 2: YourSocialSecurityNumber
   */
   yourSocialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f2 = (): string | undefined => this.yourSocialSecurityNumber()

  /**
   * Index 3: no qualifying children
   */
   hasNoQualifyingChildren = (): boolean | undefined => {
    return undefined
  }

   f3 = (): boolean | undefined => this.hasNoQualifyingChildren()

  /**
   * Index 4: onequalifyingchild
   */
   hasOneQualifyingChild = (): boolean | undefined => {
    return undefined
  }

   f4 = (): boolean | undefined => this.hasOneQualifyingChild()

  /**
   * Index 5: twoqualifyingchildren
   */
   hasTwoQualifyingChildren = (): boolean | undefined => {
    return undefined
  }

   f5 = (): boolean | undefined => this.hasTwoQualifyingChildren()

  /**
   * Index 6: threeormorequalifyingchildren
   */
   hasThreeOrMoreQualifyingChildren = (): boolean | undefined => {
    return undefined
  }

   f6 = (): boolean | undefined => this.hasThreeOrMoreQualifyingChildren()

  /**
   * Index 7: child1firstname
   */
   child1FirstName = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.child1FirstName()

  /**
   * Index 8: child2firstname
   */
  child2FirstName = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.child2FirstName()

  /**
   * Index 9: child3firstname
   */
  child3FirstName = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.child3FirstName()

  /**
   * Index 10: child1lastname
   */
   child1LastName = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.child1LastName()

  /**
   * Index 11: child2lastname
   */
   child2LastName = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.child2LastName()

  /**
   * Index 12: child3lastname
   */
   child3LastName = (): string | undefined => {
    return undefined
  }

   f12 = (): string | undefined => this.child3LastName()

  /**
   * Index 13: child1SSN
   */
   child1SSN = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.child1SSN()

  /**
   * Index 14: child2SSN
   */
   child2SSN = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.child2SSN()

  /**
   * Index 15: child3SSN
   */
   child3SSN = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.child3SSN()

  /**
   * Index 16: child1dateofbirth
   */
   child1DateOfBirth = (): string | undefined => {
    return undefined
  }

   f16 = (): string | undefined => this.child1DateOfBirth()

  /**
   * Index 17: child2dateofbirth
   */
   child2DateOfBirth = (): string | undefined => {
    return undefined
  }

   f17 = (): string | undefined => this.child2DateOfBirth()

  /**
   * Index 18: child3dateofbirth
   */
   child3DateOfBirth = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.child3DateOfBirth()

  /**
   * Index 19: child1relationshiptoyou
   */
   child1RelationshipToYou = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.child1RelationshipToYou()

  /**
   * Index 20: child2relationshiptoyou
   */
  child2RelationshipToYou = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.child2RelationshipToYou()

  /**
   * Index 21: child3relationshiptoyou
   */
  child3RelationshipToYou = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.child3RelationshipToYou()

  /**
   * Index 22: child1numberofmonthslivedwithyou
   */
   child1NumberOfMonthsLivedWithYou = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.child1NumberOfMonthsLivedWithYou()

  /**
   * Index 23: child2numberofmonthslivedwithyou
   */
  child2NumberOfMonthsLivedWithYou = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.child2NumberOfMonthsLivedWithYou()

  /**
   * Index 24: child3numberofmonthslivedwithyou
   */
  child3NumberOfMonthsLivedWithYou = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.child3NumberOfMonthsLivedWithYou()

  /**
   * Index 25: child1age24
   */
   child1Age24 = (): boolean | undefined => {
    return undefined
  }

   f25 = (): boolean | undefined => this.child1Age24()

  /**
   * Index 26: child2age24
   */
   child2Age24 = (): boolean | undefined => {
    return undefined
  }

   f26 = (): boolean | undefined => this.child2Age24()

  /**
   * Index 27: child3age24
   */
   child3Age24 = (): boolean | undefined => {
    return undefined
  }

   f27 = (): boolean | undefined => this.child3Age24()

  /**
   * Index 28: child1disabled
   */
   child1HasDisability = (): boolean | undefined => {
    return undefined
  }

   f28 = (): boolean | undefined => this.child1HasDisability()

  /**
   * Index 29: child2disabled
   */
   child2HasDisability = (): boolean | undefined => {
    return undefined
  }

   f29 = (): boolean | undefined => this.child2HasDisability()

  /**
   * Index 30: child3disabled
   */
   child3HasDisability = (): boolean | undefined => {
    return undefined
  }

   f30 = (): boolean | undefined => this.child3HasDisability()

  /**
   * Index 31: m1wfcLine1
   */
   m1wfcLine1 = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.m1wfcLine1()

  /**
   * Index 32: m1wfcLine2
   */
   m1wfcLine2 = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.m1wfcLine2()

  /**
   * Index 33: m1wfcLine3
   */
   m1wfcLine3 = (): string | undefined => {
    return undefined
  }

   f33 = (): string | undefined => this.m1wfcLine3()

  /**
   * Index 34: m1wfcLine4
   */
   m1wfcLine4 = (): string | undefined => {
    return undefined
  }

   f34 = (): string | undefined => this.m1wfcLine4()

  /**
   * Index 35: m1wfcLine5
   */
   m1wfcLine5 = (): string | undefined => {
    return undefined
  }

   f35 = (): string | undefined => this.m1wfcLine5()

  /**
   * Index 36: m1wfcLine6
   */
   m1wfcLine6 = (): string | undefined => {
    return undefined
  }

   f36 = (): string | undefined => this.m1wfcLine6()

  /**
   * Index 37: Step5oftheWorksheet
   */
   Step5oftheWorksheet = (): string | undefined => {
    return undefined
  }

   f37 = (): string | undefined => this.Step5oftheWorksheet()


   fields = (): Field[] => ([
    this.f0(),
    this.f1(),
    this.f2(),
    this.f3(),
    this.f4(),
    this.f5(),
    this.f6(),
    this.f7(),
    this.f8(),
    this.f9(),
    this.f10(),
    this.f11(),
    this.f12(),
    this.f13(),
    this.f14(),
    this.f15(),
    this.f16(),
    this.f17(),
    this.f18(),
    this.f19(),
    this.f20(),
    this.f21(),
    this.f22(),
    this.f23(),
    this.f24(),
    this.f25(),
    this.f26(),
    this.f27(),
    this.f28(),
    this.f29(),
    this.f30(),
    this.f31(),
    this.f32(),
    this.f33(),
    this.f34(),
    this.f35(),
    this.f36(),
    this.f37()
  ])
}

const makeM1WFC21 = (info: Information, f1040: F1040): M1WFC21 =>
  new M1WFC21(info, f1040)

export default makeM1WFC21

