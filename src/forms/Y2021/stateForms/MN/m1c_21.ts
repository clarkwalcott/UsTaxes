import Form, {FormMethods} from 'ustaxes/core/stateForms/Form'
import F1040 from '../../irsForms/F1040'
import {Field} from 'ustaxes/core/pdfFiller'
import {Information, State} from 'ustaxes/core/data'

export class m1c21 extends Form {
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
    this.formName = 'm1c_21'
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
   * Index 1: yourlastname
   */
   yourLastName = (): string | undefined => {
    return undefined
  }

   f1 = (): string | undefined => this.yourLastName()

  /**
   * Index 2: YourSocialSecurityNumber
   */
   yourSocialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f2 = (): string | undefined => this.yourSocialSecurityNumber()

  /**
   * Index 3: m1cLine1
   */
   m1cLine1 = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.m1cLine1()

  /**
   * Index 4: m1cLine2
   */
   m1cLine2 = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.m1cLine2()

  /**
   * Index 5: m1cLine3
   */
   m1cLine3 = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.m1cLine3()

  /**
   * Index 6: m1cLine4
   */
   m1cLine4 = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.m1cLine4()

  /**
   * Index 7: m1cLine5
   */
   m1cLine5 = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.m1cLine5()

  /**
   * Index 8: m1cLine6
   */
   m1cLine6 = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.m1cLine6()

  /**
   * Index 9: m1cLine7
   */
   m1cLine7 = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.m1cLine7()

  /**
   * Index 10: m1cLine8
   */
   m1cLine8 = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.m1cLine8()

  /**
   * Index 11: m1cLine9
   */
   m1cLine9 = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.m1cLine9()

  /**
   * Index 12: m1cLine10
   */
   m1cLine10 = (): string | undefined => {
    return undefined
  }

   f12 = (): string | undefined => this.m1cLine10()

  /**
   * Index 13: listtheyears
   */
   listtheyears = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.listtheyears()

  /**
   * Index 14: m1cLine11
   */
   m1cLine11 = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.m1cLine11()

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
   * Index 18: bfyear1
   */
   bfyear1 = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.bfyear1()

  /**
   * Index 19: bfyear2
   */
   bfyear2 = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.bfyear2()

  /**
   * Index 20: bf1line10
   */
   bf1line10 = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.bf1line10()

  /**
   * Index 21: bf2line10
   */
   bf2line10 = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.bf2line10()

  /**
   * Index 22: aoyear1
   */
   aoyear1 = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.aoyear1()

  /**
   * Index 23: aoyear2
   */
   aoyear2 = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.aoyear2()

  /**
   * Index 24: ao1line11
   */
   ao1line11 = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.ao1line11()

  /**
   * Index 25: ao2line11
   */
   ao2line11 = (): string | undefined => {
    return undefined
  }

   f25 = (): string | undefined => this.ao2line11()

  /**
   * Index 26: m1cLine12
   */
   m1cLine12 = (): string | undefined => {
    return undefined
  }

   f26 = (): string | undefined => this.m1cLine12()

  /**
   * Index 27: m1cLine13
   */
   m1cLine13 = (): string | undefined => {
    return undefined
  }

   f27 = (): string | undefined => this.m1cLine13()

  /**
   * Index 28: m1cLine14
   */
   m1cLine14 = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.m1cLine14()

  /**
   * Index 29: m1cLine15
   */
   m1cLine15 = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.m1cLine15()

  /**
   * Index 30: m1cLine16
   */
   m1cLine16 = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.m1cLine16()

  /**
   * Index 31: bf
   */
   bf = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.bf()

  /**
   * Index 32: taxcnumber
   */
   taxcnumber = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.taxcnumber()

  /**
   * Index 33: m1cLine17
   */
   m1cLine17 = (): string | undefined => {
    return undefined
  }

   f33 = (): string | undefined => this.m1cLine17()

  /**
   * Index 34: m1cLine18
   */
   m1cLine18 = (): string | undefined => {
    return undefined
  }

   f34 = (): string | undefined => this.m1cLine18()


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
    this.f34()
  ])
}

const makem1c21 = (info: Information, f1040: F1040): m1c21 =>
  new m1c21(info, f1040)

export default makem1c21

