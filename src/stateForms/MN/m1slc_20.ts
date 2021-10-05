import Form from '../Form'
import F1040 from '../../irsForms/F1040'
import { Field } from '../../pdfFiller'
import { displayNumber, sumFields } from '../../irsForms/util'
import { AccountType, FilingStatus, Information, State } from '../../redux/data'

export class M1slc20 implements Form {
  info: Information
  f1040: F1040
  formName = 'm1slc_20'
  state: State = 'MN'
  formOrder = 7

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
   * Index 4: LastName_2
   */
   LastName2 = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.LastName2()

  /**
   * Index 5: SocialSecurityNumber_2
   */
   SocialSecurityNumber2 = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.SocialSecurityNumber2()

  /**
   * Index 6: M1SLCline1a
   */
   M1SLCline1a = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.M1SLCline1a()

  /**
   * Index 7: M1SLCline1b
   */
   M1SLCline1b = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.M1SLCline1b()

  /**
   * Index 8: M1SLCline2a
   */
   M1SLCline2a = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.M1SLCline2a()

  /**
   * Index 9: M1SLCline2b
   */
   M1SLCline2b = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.M1SLCline2b()

  /**
   * Index 10: M1SLCline3a
   */
   M1SLCline3a = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.M1SLCline3a()

  /**
   * Index 11: M1SLCline3b
   */
   M1SLCline3b = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.M1SLCline3b()

  /**
   * Index 12: M1SLCline4a
   */
   M1SLCline4a = (): string | undefined => {
    return undefined
  }

   f12 = (): string | undefined => this.M1SLCline4a()

  /**
   * Index 13: M1SLCline4b
   */
   M1SLCline4b = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.M1SLCline4b()

  /**
   * Index 14: M1SLCline5a
   */
   M1SLCline5a = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.M1SLCline5a()

  /**
   * Index 15: M1SLCline5b
   */
   M1SLCline5b = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.M1SLCline5b()

  /**
   * Index 16: M1SLCline6a
   */
   M1SLCline6a = (): string | undefined => {
    return undefined
  }

   f16 = (): string | undefined => this.M1SLCline6a()

  /**
   * Index 17: M1SLCline6b
   */
   M1SLCline6b = (): string | undefined => {
    return undefined
  }

   f17 = (): string | undefined => this.M1SLCline6b()

  /**
   * Index 18: M1SLCline7a
   */
   M1SLCline7a = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.M1SLCline7a()

  /**
   * Index 19: M1SLCline7n
   */
   M1SLCline7n = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.M1SLCline7n()

  /**
   * Index 20: M1SLCline8a
   */
   M1SLCline8a = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.M1SLCline8a()

  /**
   * Index 21: M1SLCline8b
   */
   M1SLCline8b = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.M1SLCline8b()

  /**
   * Index 22: M1SLCline9a
   */
   M1SLCline9a = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.M1SLCline9a()

  /**
   * Index 23: M1SLCline9b
   */
   M1SLCline9b = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.M1SLCline9b()

  /**
   * Index 24: M1SLCline10a
   */
   M1SLCline10a = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.M1SLCline10a()

  /**
   * Index 25: M1SLCline10b
   */
   M1SLCline10b = (): string | undefined => {
    return undefined
  }

   f25 = (): string | undefined => this.M1SLCline10b()

  /**
   * Index 26: M1SLCline11a
   */
   M1SLCline11a = (): string | undefined => {
    return undefined
  }

   f26 = (): string | undefined => this.M1SLCline11a()

  /**
   * Index 27: M1SLCline11b
   */
   M1SLCline11b = (): string | undefined => {
    return undefined
  }

   f27 = (): string | undefined => this.M1SLCline11b()

  /**
   * Index 28: M1SLCline13a
   */
   M1SLCline13a = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.M1SLCline13a()

  /**
   * Index 29: M1SLCline13b
   */
   M1SLCline13b = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.M1SLCline13b()

  /**
   * Index 30: M1SLCline14a
   */
   M1SLCline14a = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.M1SLCline14a()

  /**
   * Index 31: M1SLCline14b
   */
   M1SLCline14b = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.M1SLCline14b()

  /**
   * Index 32: M1SLCline15b
   */
   M1SLCline15b = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.M1SLCline15b()


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

const m1slc20 = (info: Information, f1040: F1040): M1slc20 =>
  new M1slc20(info, f1040)

export default m1slc20

