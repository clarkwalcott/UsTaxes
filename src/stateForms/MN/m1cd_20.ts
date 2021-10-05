import Form from '../Form'
import F1040 from '../../irsForms/F1040'
import { Field } from '../../pdfFiller'
import { displayNumber, sumFields } from '../../irsForms/util'
import { AccountType, FilingStatus, Information, State } from '../../redux/data'

export class M1cd20 implements Form {
  info: Information
  f1040: F1040
  formName = 'm1cd_20'
  state: State = 'MN'
  formOrder = 2

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
   * Index 2: Name1
   */
   Name1 = (): string | undefined => {
    return undefined
  }

   f2 = (): string | undefined => this.Name1()

  /**
   * Index 3: birthdate1
   */
   birthdate1 = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.birthdate1()

  /**
   * Index 4: SSN1
   */
   SSN1 = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.SSN1()

  /**
   * Index 5: Name2
   */
   Name2 = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.Name2()

  /**
   * Index 6: birthdate2
   */
   birthdate2 = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.birthdate2()

  /**
   * Index 7: SSN2
   */
   SSN2 = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.SSN2()

  /**
   * Index 8: Name3
   */
   Name3 = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.Name3()

  /**
   * Index 9: birthdate3
   */
   birthdate3 = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.birthdate3()

  /**
   * Index 10: ssn3
   */
   ssn3 = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.ssn3()

  /**
   * Index 11: Name1_2
   */
   Name12 = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.Name12()

  /**
   * Index 12: amountpaid1
   */
   amountpaid1 = (): string | undefined => {
    return undefined
  }

   f12 = (): string | undefined => this.amountpaid1()

  /**
   * Index 13: SSNorFEIN1
   */
   SSNorFEIN1 = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.SSNorFEIN1()

  /**
   * Index 14: checkiflicensedfamilydaycare
   */
   checkiflicensedfamilydaycare = (): boolean | undefined => {
    return undefined
  }

   f14 = (): boolean | undefined => this.checkiflicensedfamilydaycare()

  /**
   * Index 15: Enteryourdaycarelicensenumber
   */
   Enteryourdaycarelicensenumber = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.Enteryourdaycarelicensenumber()

  /**
   * Index 16: checkifyouaremarriedjoint
   */
   checkifyouaremarriedjoint = (): boolean | undefined => {
    return undefined
  }

   f16 = (): boolean | undefined => this.checkifyouaremarriedjoint()

  /**
   * Index 17: m1cdline1
   */
   m1cdline1 = (): string | undefined => {
    return undefined
  }

   f17 = (): string | undefined => this.m1cdline1()

  /**
   * Index 18: m1cdline2
   */
   m1cdline2 = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.m1cdline2()

  /**
   * Index 19: m1cdline3
   */
   m1cdline3 = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.m1cdline3()

  /**
   * Index 20: m1cdline4
   */
   m1cdline4 = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.m1cdline4()

  /**
   * Index 21: m1cdline5
   */
   m1cdline5 = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.m1cdline5()

  /**
   * Index 22: m1cdline6
   */
   m1cdline6 = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.m1cdline6()

  /**
   * Index 23: m1cdline7beforedecimal
   */
   m1cdline7beforedecimal = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.m1cdline7beforedecimal()

  /**
   * Index 24: m1cdline7afterdecimal
   */
   m1cdline7afterdecimal = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.m1cdline7afterdecimal()

  /**
   * Index 25: m1cdline8
   */
   m1cdline8 = (): string | undefined => {
    return undefined
  }

   f25 = (): string | undefined => this.m1cdline8()

  /**
   * Index 26: SocialSecurityNumber
   */
   SocialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f26 = (): string | undefined => this.SocialSecurityNumber()

  /**
   * Index 27: Name 2_2
   */
   Name22 = (): string | undefined => {
    return undefined
  }

   f27 = (): string | undefined => this.Name22()

  /**
   * Index 28: amountpaid2
   */
   amountpaid2 = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.amountpaid2()

  /**
   * Index 29: SSNorFEIN2
   */
   SSNorFEIN2 = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.SSNorFEIN2()

  /**
   * Index 30: Name 3_2
   */
   Name32 = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.Name32()

  /**
   * Index 31: amountpaid3
   */
   amountpaid3 = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.amountpaid3()

  /**
   * Index 32: SSNorFEIN3
   */
   SSNorFEIN3 = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.SSNorFEIN3()


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

const m1cd20 = (info: Information, f1040: F1040): M1cd20 =>
  new M1cd20(info, f1040)

export default m1cd20

