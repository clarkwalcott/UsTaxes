import Form from '../Form'
import F1040 from '../../irsForms/F1040'
import { Field } from '../../pdfFiller'
import { displayNumber, sumFields } from '../../irsForms/util'
import { AccountType, FilingStatus, Information, State } from '../../redux/data'

export class M1ref20 implements Form {
  info: Information
  f1040: F1040
  formName = 'm1ref_20'
  state: State = 'MN'
  formOrder = 6

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
   * Index 1: Lastname
   */
   Lastname = (): string | undefined => {
    return undefined
  }

   f1 = (): string | undefined => this.Lastname()

  /**
   * Index 2: SSN
   */
   SSN = (): string | undefined => {
    return undefined
  }

   f2 = (): string | undefined => this.SSN()

  /**
   * Index 3: M1REFline1
   */
   M1REFline1 = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.M1REFline1()

  /**
   * Index 4: M1REFline1a
   */
   M1REFline1a = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.M1REFline1a()

  /**
   * Index 5: M1REFline2
   */
   M1REFline2 = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.M1REFline2()

  /**
   * Index 6: M1REFline2a
   */
   M1REFline2a = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.M1REFline2a()

  /**
   * Index 7: M1REFline3
   */
   M1REFline3 = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.M1REFline3()

  /**
   * Index 8: M1REFline3a
   */
   M1REFline3a = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.M1REFline3a()

  /**
   * Index 9: M1REFline4
   */
   M1REFline4 = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.M1REFline4()

  /**
   * Index 10: M1REFline5
   */
   M1REFline5 = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.M1REFline5()

  /**
   * Index 11: M1REFline6
   */
   M1REFline6 = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.M1REFline6()

  /**
   * Index 12: M1REFline6a
   */
   M1REFline6a = (): string | undefined => {
    return undefined
  }

   f12 = (): string | undefined => this.M1REFline6a()

  /**
   * Index 13: M1REFline7
   */
   M1REFline7 = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.M1REFline7()

  /**
   * Index 14: M1REFline8
   */
   M1REFline8 = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.M1REFline8()

  /**
   * Index 15: M1REFline9
   */
   M1REFline9 = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.M1REFline9()


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
    this.f15()
  ])
}

const m1ref20 = (info: Information, f1040: F1040): M1ref20 =>
  new M1ref20(info, f1040)

export default m1ref20

