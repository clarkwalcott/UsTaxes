import Form from '../Form'
import F1040 from '../../irsForms/F1040'
import { Field } from '../../pdfFiller'
import { displayNumber, sumFields } from '../../irsForms/util'
import { AccountType, FilingStatus, Information, State } from '../../redux/data'

export class M1c20 implements Form {
  info: Information
  f1040: F1040
  formName = 'm1c_20'
  state: State = 'MN'
  formOrder = 1

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
   * Index 1: yourlastname
   */
   yourlastname = (): string | undefined => {
    return undefined
  }

   f1 = (): string | undefined => this.yourlastname()

  /**
   * Index 2: YourSocialSecurityNumber
   */
   YourSocialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f2 = (): string | undefined => this.YourSocialSecurityNumber()

  /**
   * Index 3: m1cline1
   */
   m1cline1 = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.m1cline1()

  /**
   * Index 4: m1cline2
   */
   m1cline2 = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.m1cline2()

  /**
   * Index 5: m1cline3
   */
   m1cline3 = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.m1cline3()

  /**
   * Index 6: m1cline4
   */
   m1cline4 = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.m1cline4()

  /**
   * Index 7: m1cline5
   */
   m1cline5 = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.m1cline5()

  /**
   * Index 8: m1cline6
   */
   m1cline6 = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.m1cline6()

  /**
   * Index 9: m1cline7
   */
   m1cline7 = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.m1cline7()

  /**
   * Index 10: m1cline8
   */
   m1cline8 = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.m1cline8()

  /**
   * Index 11: m1cline9
   */
   m1cline9 = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.m1cline9()

  /**
   * Index 12: m1cline10
   */
   m1cline10 = (): string | undefined => {
    return undefined
  }

   f12 = (): string | undefined => this.m1cline10()

  /**
   * Index 13: listtheyears
   */
   listtheyears = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.listtheyears()

  /**
   * Index 14: m1cline11
   */
   m1cline11 = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.m1cline11()

  /**
   * Index 15: ao2
   */
   ao2 = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.ao2()

  /**
   * Index 16: ao3
   */
   ao3 = (): string | undefined => {
    return undefined
  }

   f16 = (): string | undefined => this.ao3()

  /**
   * Index 17: ao
   */
   ao = (): string | undefined => {
    return undefined
  }

   f17 = (): string | undefined => this.ao()

  /**
   * Index 18: bf
   */
   bf = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.bf()

  /**
   * Index 19: bfyear1
   */
   bfyear1 = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.bfyear1()

  /**
   * Index 20: bfyear2
   */
   bfyear2 = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.bfyear2()

  /**
   * Index 21: bf1line10
   */
   bf1line10 = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.bf1line10()

  /**
   * Index 22: bf2line10
   */
   bf2line10 = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.bf2line10()

  /**
   * Index 23: aoyear1
   */
   aoyear1 = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.aoyear1()

  /**
   * Index 24: aoyear2
   */
   aoyear2 = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.aoyear2()

  /**
   * Index 25: ao1line11
   */
   ao1line11 = (): string | undefined => {
    return undefined
  }

   f25 = (): string | undefined => this.ao1line11()

  /**
   * Index 26: ao2line11
   */
   ao2line11 = (): string | undefined => {
    return undefined
  }

   f26 = (): string | undefined => this.ao2line11()

  /**
   * Index 27: m1cline12
   */
   m1cline12 = (): string | undefined => {
    return undefined
  }

   f27 = (): string | undefined => this.m1cline12()

  /**
   * Index 28: m1cline13
   */
   m1cline13 = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.m1cline13()

  /**
   * Index 29: m1cline14
   */
   m1cline14 = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.m1cline14()

  /**
   * Index 30: m1cline15
   */
   m1cline15 = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.m1cline15()

  /**
   * Index 31: m1cline16
   */
   m1cline16 = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.m1cline16()

  /**
   * Index 32: m1cline17
   */
   m1cline17 = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.m1cline17()


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

 const m1c20 = (info: Information, f1040: F1040): M1c20 =>
  new M1c20(info, f1040)

export default m1c20

