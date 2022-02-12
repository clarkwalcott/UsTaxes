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

export class M1SA21 extends Form {
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
    this.formName = 'm1sa_21'
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
   * Index 3: m1saLine1
   */
   m1saLine1 = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.m1saLine1()

  /**
   * Index 4: m1saLine2
   */
   m1saLine2 = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.m1saLine2()

  /**
   * Index 5: m1saLine3
   */
   m1saLine3 = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.m1saLine3()

  /**
   * Index 6: m1saLine4
   */
   m1saLine4 = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.m1saLine4()

  /**
   * Index 7: m1saLine5
   */
   m1saLine5 = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.m1saLine5()

  /**
   * Index 8: m1saLine6
   */
   m1saLine6 = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.m1saLine6()

  /**
   * Index 9: m1saLine7
   */
   m1saLine7 = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.m1saLine7()

  /**
   * Index 10: m1saLine8
   */
   m1saLine8 = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.m1saLine8()

  /**
   * Index 11: m1saLine9
   */
   m1saLine9 = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.m1saLine9()

  /**
   * Index 12: seeinstructions
   */
   seeinstructions = (): string | undefined => {
    return undefined
  }

   f12 = (): string | undefined => this.seeinstructions()

  /**
   * Index 13: m1saLine10
   */
   m1saLine10 = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.m1saLine10()

  /**
   * Index 14: m1saLine11
   */
   m1saLine11 = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.m1saLine11()

  /**
   * Index 15: listhomemortgage
   */
   listhomemortgage = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.listhomemortgage()

  /**
   * Index 16: m1saLine12
   */
   m1saLine12 = (): string | undefined => {
    return undefined
  }

   f16 = (): string | undefined => this.m1saLine12()

  /**
   * Index 17: m1saLine13
   */
   m1saLine13 = (): string | undefined => {
    return undefined
  }

   f17 = (): string | undefined => this.m1saLine13()

  /**
   * Index 18: m1saLine14
   */
   m1saLine14 = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.m1saLine14()

  /**
   * Index 19: m1saLine15
   */
   m1saLine15 = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.m1saLine15()

  /**
   * Index 20: m1saLine16
   */
   m1saLine16 = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.m1saLine16()

  /**
   * Index 21: m1saLine17
   */
   m1saLine17 = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.m1saLine17()

  /**
   * Index 22: m1saLine18
   */
   m1saLine18 = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.m1saLine18()

  /**
   * Index 23: m1saLine19
   */
   m1saLine19 = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.m1saLine19()

  /**
   * Index 24: m1saLine20
   */
   m1saLine20 = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.m1saLine20()

  /**
   * Index 25: m1saLine21
   */
   m1saLine21 = (): string | undefined => {
    return undefined
  }

   f25 = (): string | undefined => this.m1saLine21()

  /**
   * Index 26: m1saLine22
   */
   m1saLine22 = (): string | undefined => {
    return undefined
  }

   f26 = (): string | undefined => this.m1saLine22()

  /**
   * Index 27: m1saLine23
   */
   m1saLine23 = (): string | undefined => {
    return undefined
  }

   f27 = (): string | undefined => this.m1saLine23()

  /**
   * Index 28: m1saLine24
   */
   m1saLine24 = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.m1saLine24()

  /**
   * Index 29: listtypeandamount
   */
   listtypeandamount = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.listtypeandamount()

  /**
   * Index 30: m1saLine25
   */
   m1saLine25 = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.m1saLine25()

  /**
   * Index 31: m1saLine26
   */
   m1saLine26 = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.m1saLine26()

  /**
   * Index 32: m1saLine27
   */
   m1saLine27 = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.m1saLine27()


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
    this.f32()
  ])
}

const makeM1SA21 = (info: Information, f1040: F1040): M1SA21 =>
  new M1SA21(info, f1040)

export default makeM1SA21

