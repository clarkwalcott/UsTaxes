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

export class m1ma21 extends Form {
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
    this.formName = 'm1ma_21'
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
   * Index 2: SocialSecurityNumber
   */
   socialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f2 = (): string | undefined => this.socialSecurityNumber()

  /**
   * Index 3: SpousesFirstNameandInitial
   */
   spousesFirstNameAndInitial = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.spousesFirstNameAndInitial()

  /**
   * Index 4: LastName2
   */
   lastName2 = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.lastName2()

  /**
   * Index 5: SocialSecurityNumber2
   */
   socialSecurityNumber2 = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.socialSecurityNumber2()

  /**
   * Index 6: m1maLine1a
   */
   m1maLine1a = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.m1maLine1a()

  /**
   * Index 7: m1maLine1b
   */
   m1maLine1b = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.m1maLine1b()

  /**
   * Index 8: m1maLine2a
   */
   m1maLine2a = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.m1maLine2a()

  /**
   * Index 9: m1maLine2b
   */
   m1maLine2b = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.m1maLine2b()

  /**
   * Index 10: m1maLine3a
   */
   m1maLine3a = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.m1maLine3a()

  /**
   * Index 11: m1maLine3b
   */
   m1maLine3b = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.m1maLine3b()

  /**
   * Index 12: m1maLine4a
   */
   m1maLine4a = (): string | undefined => {
    return undefined
  }

   f12 = (): string | undefined => this.m1maLine4a()

  /**
   * Index 13: m1maLine4b
   */
   m1maLine4b = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.m1maLine4b()

  /**
   * Index 14: m1maLine5a
   */
   m1maLine5a = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.m1maLine5a()

  /**
   * Index 15: m1maLine5b
   */
   m1maLine5b = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.m1maLine5b()

  /**
   * Index 16: m1maLine6b
   */
   m1maLine6b = (): string | undefined => {
    return undefined
  }

   f16 = (): string | undefined => this.m1maLine6b()

  /**
   * Index 17: m1maLine7
   */
   m1maLine7 = (): string | undefined => {
    return undefined
  }

   f17 = (): string | undefined => this.m1maLine7()

  /**
   * Index 18: m1maLine8
   */
   m1maLine8 = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.m1maLine8()

  /**
   * Index 19: m1maLine9
   */
   m1maLine9 = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.m1maLine9()

  /**
   * Index 20: m1maLine11
   */
   m1maLine11 = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.m1maLine11()

  /**
   * Index 21: m1maLine12
   */
   m1maLine12 = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.m1maLine12()

  /**
   * Index 22: m1maLine13
   */
   m1maLine13 = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.m1maLine13()

  /**
   * Index 23: m1maLine14
   */
   m1maLine14 = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.m1maLine14()

  /**
   * Index 24: m1maLine15
   */
   m1maLine15 = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.m1maLine15()

  /**
   * Index 25: m1maLine16
   */
   m1maLine16 = (): string | undefined => {
    return undefined
  }

   f25 = (): string | undefined => this.m1maLine16()

  /**
   * Index 26: m1maLine17
   */
   m1maLine17 = (): string | undefined => {
    return undefined
  }

   f26 = (): string | undefined => this.m1maLine17()

  /**
   * Index 27: m1maLine18
   */
   m1maLine18 = (): string | undefined => {
    return undefined
  }

   f27 = (): string | undefined => this.m1maLine18()

  /**
   * Index 28: m1maLine19
   */
   m1maLine19 = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.m1maLine19()

  /**
   * Index 29: m1maLine20
   */
   m1maLine20 = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.m1maLine20()

  /**
   * Index 30: m1maLine21
   */
   m1maLine21 = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.m1maLine21()


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
    this.f30()
  ])
}

const makem1ma21 = (info: Information, f1040: F1040): m1ma21 =>
  new m1ma21(info, f1040)

export default makem1ma21

