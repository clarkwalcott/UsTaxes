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

export class m1m21 extends Form {
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
    this.formName = 'm1m_21'
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
   * Index 3: m1mLine1
   */
   m1mLine1 = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.m1mLine1()

  /**
   * Index 4: m1mLine2
   */
   m1mLine2 = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.m1mLine2()

  /**
   * Index 5: m1mLine3
   */
   m1mLine3 = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.m1mLine3()

  /**
   * Index 6: m1mLine4
   */
   m1mLine4 = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.m1mLine4()

  /**
   * Index 7: m1mLine5
   */
   m1mLine5 = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.m1mLine5()

  /**
   * Index 8: m1mLine6
   */
   m1mLine6 = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.m1mLine6()

  /**
   * Index 9: m1mLine7
   */
   m1mLine7 = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.m1mLine7()

  /**
   * Index 10: m1mLine8
   */
   m1mLine8 = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.m1mLine8()

  /**
   * Index 11: m1mLine9
   */
   m1mLine9 = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.m1mLine9()

  /**
   * Index 12: m1mLine10
   */
   m1mLine10 = (): string | undefined => {
    return undefined
  }

   f12 = (): string | undefined => this.m1mLine10()

  /**
   * Index 13: m1mLine11
   */
   m1mLine11 = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.m1mLine11()

  /**
   * Index 14: m1mLine12
   */
   m1mLine12 = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.m1mLine12()

  /**
   * Index 15: m1mLine13
   */
   m1mLine13 = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.m1mLine13()

  /**
   * Index 16: m1mLine14
   */
   m1mLine14 = (): string | undefined => {
    return undefined
  }

   f16 = (): string | undefined => this.m1mLine14()

  /**
   * Index 17: m1mLine15
   */
   m1mLine15 = (): string | undefined => {
    return undefined
  }

   f17 = (): string | undefined => this.m1mLine15()

  /**
   * Index 18: m1mLine16
   */
   m1mLine16 = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.m1mLine16()

  /**
   * Index 19: m1mLine17
   */
   m1mLine17 = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.m1mLine17()

  /**
   * Index 20: nameandgradeofeachchild
   */
   nameandgradeofeachchild = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.nameandgradeofeachchild()

  /**
   * Index 21: m1mLine18
   */
   m1mLine18 = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.m1mLine18()

  /**
   * Index 22: m1mLine19
   */
   m1mLine19 = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.m1mLine19()

  /**
   * Index 23: m1mLine20
   */
   m1mLine20 = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.m1mLine20()

  /**
   * Index 24: m1mLine21
   */
   m1mLine21 = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.m1mLine21()

  /**
   * Index 25: m1mLine23
   */
   m1mLine23 = (): string | undefined => {
    return undefined
  }

   f25 = (): string | undefined => this.m1mLine23()

  /**
   * Index 26: m1mLine24
   */
   m1mLine24 = (): string | undefined => {
    return undefined
  }

   f26 = (): string | undefined => this.m1mLine24()

  /**
   * Index 27: m1mLine25
   */
   m1mLine25 = (): string | undefined => {
    return undefined
  }

   f27 = (): string | undefined => this.m1mLine25()

  /**
   * Index 28: m1mLine26
   */
   m1mLine26 = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.m1mLine26()

  /**
   * Index 29: m1mLine27
   */
   m1mLine27 = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.m1mLine27()

  /**
   * Index 30: m1mLine28
   */
   m1mLine28 = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.m1mLine28()

  /**
   * Index 31: m1mLine29
   */
   m1mLine29 = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.m1mLine29()

  /**
   * Index 32: m1mLine30
   */
   m1mLine30 = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.m1mLine30()

  /**
   * Index 33: m1mLine31
   */
   m1mLine31 = (): string | undefined => {
    return undefined
  }

   f33 = (): string | undefined => this.m1mLine31()

  /**
   * Index 34: m1mLine32
   */
   m1mLine32 = (): string | undefined => {
    return undefined
  }

   f34 = (): string | undefined => this.m1mLine32()

  /**
   * Index 35: placeanXforMichigan
   */
   placeanXforMichigan = (): boolean | undefined => {
    return undefined
  }

   f35 = (): boolean | undefined => this.placeanXforMichigan()

  /**
   * Index 36: placeanXforNorthDakota
   */
   placeanXforNorthDakota = (): boolean | undefined => {
    return undefined
  }

   f36 = (): boolean | undefined => this.placeanXforNorthDakota()

  /**
   * Index 37: m1mLine22
   */
   m1mLine22 = (): string | undefined => {
    return undefined
  }

   f37 = (): string | undefined => this.m1mLine22()


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

const makem1m21 = (info: Information, f1040: F1040): m1m21 =>
  new m1m21(info, f1040)

export default makem1m21

