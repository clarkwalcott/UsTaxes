import Form from '../Form'
import F1040 from '../../irsForms/F1040'
import { Field } from '../../pdfFiller'
import { displayNumber, sumFields } from '../../irsForms/util'
import { AccountType, FilingStatus, Information, State } from '../../redux/data'

export class M1ma20 implements Form {
  info: Information
  f1040: F1040
  formName = 'm1ma_20'
  state: State = 'MN'
  formOrder = 5

  constructor(info: Information, f1040: F1040) {
    this.info = info
    this.f1040 = f1040
  }

  attachments = (): Form[] => []

  /**
   * Index 0: YourFirstNameandInitial
   */
   YourFirstNameandInitial = (): string | undefined => {
    return undefined
  }

   f0 = (): string | undefined => this.YourFirstNameandInitial()

  /**
   * Index 1: LastName
   */
   LastName = (): string | undefined => {
    return undefined
  }

   f1 = (): string | undefined => this.LastName()

  /**
   * Index 2: SocialSecurityNumber
   */
   SocialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f2 = (): string | undefined => this.SocialSecurityNumber()

  /**
   * Index 3: SpousesFirstNameandInitial
   */
   SpousesFirstNameandInitial = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.SpousesFirstNameandInitial()

  /**
   * Index 4: LastName2
   */
   LastName2 = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.LastName2()

  /**
   * Index 5: SocialSecurityNumber2
   */
   SocialSecurityNumber2 = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.SocialSecurityNumber2()

  /**
   * Index 6: M1MAline1a
   */
   M1MAline1a = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.M1MAline1a()

  /**
   * Index 7: M1MAline1b
   */
   M1MAline1b = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.M1MAline1b()

  /**
   * Index 8: M1MAline2a
   */
   M1MAline2a = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.M1MAline2a()

  /**
   * Index 9: M1MAline2b
   */
   M1MAline2b = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.M1MAline2b()

  /**
   * Index 10: M1MAline3a
   */
   M1MAline3a = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.M1MAline3a()

  /**
   * Index 11: M1MAline3b
   */
   M1MAline3b = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.M1MAline3b()

  /**
   * Index 12: M1MAline4a
   */
   M1MAline4a = (): string | undefined => {
    return undefined
  }

   f12 = (): string | undefined => this.M1MAline4a()

  /**
   * Index 13: M1MAline4b
   */
   M1MAline4b = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.M1MAline4b()

  /**
   * Index 14: M1MAline5a
   */
   M1MAline5a = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.M1MAline5a()

  /**
   * Index 15: M1MAline5b
   */
   M1MAline5b = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.M1MAline5b()

  /**
   * Index 16: M1MAline6b
   */
   M1MAline6b = (): string | undefined => {
    return undefined
  }

   f16 = (): string | undefined => this.M1MAline6b()

  /**
   * Index 17: M1MAline7
   */
   M1MAline7 = (): string | undefined => {
    return undefined
  }

   f17 = (): string | undefined => this.M1MAline7()

  /**
   * Index 18: M1MAline8
   */
   M1MAline8 = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.M1MAline8()

  /**
   * Index 19: M1MAline9
   */
   M1MAline9 = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.M1MAline9()

  /**
   * Index 20: M1MAline11
   */
   M1MAline11 = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.M1MAline11()

  /**
   * Index 21: M1MAline12
   */
   M1MAline12 = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.M1MAline12()

  /**
   * Index 22: M1MAline13
   */
   M1MAline13 = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.M1MAline13()

  /**
   * Index 23: M1MAline14
   */
   M1MAline14 = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.M1MAline14()

  /**
   * Index 24: M1MAline15
   */
   M1MAline15 = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.M1MAline15()

  /**
   * Index 25: M1MAline16
   */
   M1MAline16 = (): string | undefined => {
    return undefined
  }

   f25 = (): string | undefined => this.M1MAline16()

  /**
   * Index 26: M1MAline17
   */
   M1MAline17 = (): string | undefined => {
    return undefined
  }

   f26 = (): string | undefined => this.M1MAline17()

  /**
   * Index 27: M1MAline18
   */
   M1MAline18 = (): string | undefined => {
    return undefined
  }

   f27 = (): string | undefined => this.M1MAline18()

  /**
   * Index 28: M1MAline19
   */
   M1MAline19 = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.M1MAline19()

  /**
   * Index 29: M1MAline20
   */
   M1MAline20 = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.M1MAline20()

  /**
   * Index 30: M1MAline21
   */
   M1MAline21 = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.M1MAline21()


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

const m1ma20 = (info: Information, f1040: F1040): M1ma20 =>
  new M1ma20(info, f1040)

export default m1ma20

