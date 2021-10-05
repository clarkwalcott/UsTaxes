import Form from '../Form'
import F1040 from '../../irsForms/F1040'
import { Field } from '../../pdfFiller'
import { displayNumber, sumFields } from '../../irsForms/util'
import { AccountType, FilingStatus, Information, State } from '../../redux/data'

export class M1ed20 implements Form {
  info: Information
  f1040: F1040
  formName = 'm1ed_20'
  state: State = 'MN'
  formOrder = 4

  constructor(info: Information, f1040: F1040) {
    this.info = info
    this.f1040 = f1040
  }

  attachments = (): Form[] => []

  /**
   * Index 0: firstnameandinitial
   */
   firstnameandinitial = (): string | undefined => {
    return undefined
  }

   f0 = (): string | undefined => this.firstnameandinitial()

  /**
   * Index 1: lastname
   */
   lastname = (): string | undefined => {
    return undefined
  }

   f1 = (): string | undefined => this.lastname()

  /**
   * Index 2: SocialSecuritynumber
   */
   SocialSecuritynumber = (): string | undefined => {
    return undefined
  }

   f2 = (): string | undefined => this.SocialSecuritynumber()

  /**
   * Index 3: numberofqualifyingchildren
   */
   numberofqualifyingchildren = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.numberofqualifyingchildren()

  /**
   * Index 4: m1edline1
   */
   m1edline1 = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.m1edline1()

  /**
   * Index 5: m1edline2
   */
   m1edline2 = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.m1edline2()

  /**
   * Index 6: m1edline3
   */
   m1edline3 = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.m1edline3()

  /**
   * Index 7: m1edline4
   */
   m1edline4 = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.m1edline4()

  /**
   * Index 8: m1edline5
   */
   m1edline5 = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.m1edline5()

  /**
   * Index 9: otherincome
   */
   otherincome = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.otherincome()

  /**
   * Index 10: m1edline6
   */
   m1edline6 = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.m1edline6()

  /**
   * Index 11: 1stchild'sname
   */
   l1stchildsname = (): number | undefined => {
    return undefined
  }

  /**
   * Index 12: 2ndchildname
   */
   l2ndchildname = (): number | undefined => {
    return undefined
  }

  /**
   * Index 13: 3rdchildname
   */
   l3rdchildname = (): number | undefined => {
    return undefined
  }

  /**
   * Index 14: 1stchildSocialSecuritynumber
   */
   firstchildSocialSecuritynumber = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.firstchildSocialSecuritynumber()

  /**
   * Index 15: 2ndchildSocialSecuritynumber
   */
   secondchildSocialSecuritynumber = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.secondchildSocialSecuritynumber()

  /**
   * Index 16: 3rdchildSocialSecuritynumber
   */
   thirdchildSocialSecuritynumber = (): string | undefined => {
    return undefined
  }

   f16 = (): string | undefined => this.thirdchildSocialSecuritynumber()

  /**
   * Index 17: 1stchildgrade
   */
   l1stchildgrade = (): number | undefined => {
    return undefined
  }

  /**
   * Index 18: 2ndchildgrade
   */
   l2ndchildgrade = (): number | undefined => {
    return undefined
  }

  /**
   * Index 19: 3rdchildgrade
   */
   l3rdchildgrade = (): number | undefined => {
    return undefined
  }

  /**
   * Index 20: 1stchildDOB
   */
   firstchildDOB = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.firstchildDOB()

  /**
   * Index 21: 2ndchildDOB
   */
   secondchildDOB = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.secondchildDOB()

  /**
   * Index 22: 3rdchildDOB
   */
   thirdchildDOB = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.thirdchildDOB()

  /**
   * Index 23: 1stchildtypeofschool
   */
   l1stchildtypeofschool = (): number | undefined => {
    return undefined
  }

  /**
   * Index 24: 2ndchildtypeofschool
   */
   l2ndchildtypeofschool = (): number | undefined => {
    return undefined
  }

  /**
   * Index 25: 3rdchildtypeofschool
   */
   l3rdchildtypeofschool = (): number | undefined => {
    return undefined
  }

  /**
   * Index 26: line8organization
   */
   line8organization = (): string | undefined => {
    return undefined
  }

   f26 = (): string | undefined => this.line8organization()

  /**
   * Index 27: m1edline71stchild
   */
   m1edline71stchild = (): string | undefined => {
    return undefined
  }

   f27 = (): string | undefined => this.m1edline71stchild()

  /**
   * Index 28: m1edline72ndchild
   */
   m1edline72ndchild = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.m1edline72ndchild()

  /**
   * Index 29: m1edline73rdchild
   */
   m1edline73rdchild = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.m1edline73rdchild()

  /**
   * Index 30: m1edline81stchild
   */
   m1edline81stchild = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.m1edline81stchild()

  /**
   * Index 31: m1edline82ndchild
   */
   m1edline82ndchild = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.m1edline82ndchild()

  /**
   * Index 32: m1edline 83rdchild
   */
   m1edline83rdchild = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.m1edline83rdchild()

  /**
   * Index 33: line9instructornamesandtypeofclass
   */
   line9instructornamesandtypeofclass = (): string | undefined => {
    return undefined
  }

   f33 = (): string | undefined => this.line9instructornamesandtypeofclass()

  /**
   * Index 34: m1edline 91stchild
   */
   m1edline91stchild = (): string | undefined => {
    return undefined
  }

   f34 = (): string | undefined => this.m1edline91stchild()

  /**
   * Index 35: m1edline92ndchild
   */
   m1edline92ndchild = (): string | undefined => {
    return undefined
  }

   f35 = (): string | undefined => this.m1edline92ndchild()

  /**
   * Index 36: m1edline 93rdchild
   */
   m1edline93rdchild = (): string | undefined => {
    return undefined
  }

   f36 = (): string | undefined => this.m1edline93rdchild()

  /**
   * Index 37: line11typeandcostofinstrument
   */
   line11typeandcostofinstrument = (): string | undefined => {
    return undefined
  }

   f37 = (): string | undefined => this.line11typeandcostofinstrument()

  /**
   * Index 38: m1edline 101stchild
   */
   m1edline101stchild = (): string | undefined => {
    return undefined
  }

   f38 = (): string | undefined => this.m1edline101stchild()

  /**
   * Index 39: m1edline102ndchild
   */
   m1edline102ndchild = (): string | undefined => {
    return undefined
  }

   f39 = (): string | undefined => this.m1edline102ndchild()

  /**
   * Index 40: m1edline103rdchild
   */
   m1edline103rdchild = (): string | undefined => {
    return undefined
  }

   f40 = (): string | undefined => this.m1edline103rdchild()

  /**
   * Index 41: line12transportationprovider
   */
   line12transportationprovider = (): string | undefined => {
    return undefined
  }

   f41 = (): string | undefined => this.line12transportationprovider()

  /**
   * Index 42: m1edline 111stchild
   */
   m1edline111stchild = (): string | undefined => {
    return undefined
  }

   f42 = (): string | undefined => this.m1edline111stchild()

  /**
   * Index 43: m1edline112ndchild
   */
   m1edline112ndchild = (): string | undefined => {
    return undefined
  }

   f43 = (): string | undefined => this.m1edline112ndchild()

  /**
   * Index 44: m1edline113rdchild
   */
   m1edline113rdchild = (): string | undefined => {
    return undefined
  }

   f44 = (): string | undefined => this.m1edline113rdchild()

  /**
   * Index 45: m1edline121stchild
   */
   m1edline121stchild = (): string | undefined => {
    return undefined
  }

   f45 = (): string | undefined => this.m1edline121stchild()

  /**
   * Index 46: m1edline122ndchild
   */
   m1edline122ndchild = (): string | undefined => {
    return undefined
  }

   f46 = (): string | undefined => this.m1edline122ndchild()

  /**
   * Index 47: m1edline123rdchild
   */
   m1edline123rdchild = (): string | undefined => {
    return undefined
  }

   f47 = (): string | undefined => this.m1edline123rdchild()

  /**
   * Index 48: m1edline13
   */
   m1edline13 = (): string | undefined => {
    return undefined
  }

   f48 = (): string | undefined => this.m1edline13()

  /**
   * Index 49: m1edline14
   */
   m1edline14 = (): string | undefined => {
    return undefined
  }

   f49 = (): string | undefined => this.m1edline14()

  /**
   * Index 50: m1edline15
   */
   m1edline15 = (): string | undefined => {
    return undefined
  }

   f50 = (): string | undefined => this.m1edline15()

  /**
   * Index 51: m1edline16
   */
   m1edline16 = (): string | undefined => {
    return undefined
  }

   f51 = (): string | undefined => this.m1edline16()

  /**
   * Index 52: m1edline 17
   */
   m1edline17 = (): string | undefined => {
    return undefined
  }

   f52 = (): string | undefined => this.m1edline17()

  /**
   * Index 53: m1edline 18
   */
   m1edline18 = (): string | undefined => {
    return undefined
  }

   f53 = (): string | undefined => this.m1edline18()

  /**
   * Index 54: step5ofworksheet
   */
   step5ofworksheet = (): string | undefined => {
    return undefined
  }

   f54 = (): string | undefined => this.step5ofworksheet()

  /**
   * Index 55: m1edline 19
   */
   m1edline19 = (): string | undefined => {
    return undefined
  }

   f55 = (): string | undefined => this.m1edline19()


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
    displayNumber(this.l1stchildsname()),
    displayNumber(this.l2ndchildname()),
    displayNumber(this.l3rdchildname()),
    this.f14(),
    this.f15(),
    this.f16(),
    displayNumber(this.l1stchildgrade()),
    displayNumber(this.l2ndchildgrade()),
    displayNumber(this.l3rdchildgrade()),
    this.f20(),
    this.f21(),
    this.f22(),
    displayNumber(this.l1stchildtypeofschool()),
    displayNumber(this.l2ndchildtypeofschool()),
    displayNumber(this.l3rdchildtypeofschool()),
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
    this.f37(),
    this.f38(),
    this.f39(),
    this.f40(),
    this.f41(),
    this.f42(),
    this.f43(),
    this.f44(),
    this.f45(),
    this.f46(),
    this.f47(),
    this.f48(),
    this.f49(),
    this.f50(),
    this.f51(),
    this.f52(),
    this.f53(),
    this.f54(),
    this.f55()
  ])
}

const m1ed20 = (info: Information, f1040: F1040): M1ed20 =>
  new M1ed20(info, f1040)

export default m1ed20

