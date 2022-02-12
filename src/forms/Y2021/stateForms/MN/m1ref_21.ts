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

export class M1REF210 extends Form {
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
    this.formName = 'm1ref_21_0'
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
   * Index 1: Lastname
   */
   lastname = (): string | undefined => {
    return undefined
  }

   f1 = (): string | undefined => this.lastname()

  /**
   * Index 2: SSN
   */
   ssn = (): string | undefined => {
    return undefined
  }

   f2 = (): string | undefined => this.ssn()

  /**
   * Index 3: m1refLine1
   */
   m1refLine1 = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.m1refLine1()

  /**
   * Index 4: m1refLine1a
   */
   m1refLine1a = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.m1refLine1a()

  /**
   * Index 5: m1refLine2
   */
   m1refLine2 = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.m1refLine2()

  /**
   * Index 6: m1refLine2a
   */
   m1refLine2a = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.m1refLine2a()

  /**
   * Index 7: m1refLine3
   */
   m1refLine3 = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.m1refLine3()

  /**
   * Index 8: m1refLine3a
   */
   m1refLine3a = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.m1refLine3a()

  /**
   * Index 9: m1refLine4
   */
   m1refLine4 = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.m1refLine4()

  /**
   * Index 10: m1refLine5
   */
   m1refLine5 = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.m1refLine5()

  /**
   * Index 11: m1refLine6
   */
   m1refLine6 = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.m1refLine6()

  /**
   * Index 12: m1refLine6a
   */
   m1refLine6a = (): string | undefined => {
    return undefined
  }

   f12 = (): string | undefined => this.m1refLine6a()

  /**
   * Index 13: m1refLine7
   */
   m1refLine7 = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.m1refLine7()

  /**
   * Index 14: m1refLine8
   */
   m1refLine8 = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.m1refLine8()

  /**
   * Index 15: m1refLine9
   */
   m1refLine9 = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.m1refLine9()

  /**
   * Index 16: m1refLine10
   */
   m1refLine10 = (): string | undefined => {
    return undefined
  }

   f16 = (): string | undefined => this.m1refLine10()

  /**
   * Index 17: m1refLine11
   */
   m1refLine11 = (): string | undefined => {
    return undefined
  }

   f17 = (): string | undefined => this.m1refLine11()


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
    this.f17()
  ])
}

const makeM1REF210 = (info: Information, f1040: F1040): M1REF210 =>
  new M1REF210(info, f1040)

export default makeM1REF210

