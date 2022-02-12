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

export class M1W21 extends Form {
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
    this.formName = 'm1w_21_0'
    this.state = 'MN'
    this.methods = new FormMethods(this)
  }

  attachments = (): Form[] => {
      return []
  }

  /**
   * Index 0: yourFirstNameAndInitial
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
   * Index 3: IfaJointReturnSpousesFirstNameandInitial
   */
   ifaJointReturnSpousesFirstNameAndInitial = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.ifaJointReturnSpousesFirstNameAndInitial()

  /**
   * Index 4: SpousesLastName
   */
   spousesLastName = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.spousesLastName()

  /**
   * Index 5: SpousesSocialSecurityNumber
   */
   spousesSocialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.spousesSocialSecurityNumber()

  /**
   * Index 6: m1wLine1a1
   */
   m1wLine1a1 = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.m1wLine1a1()

  /**
   * Index 7: m1wLine1b1
   */
   m1wLine1b1 = (): boolean | undefined => {
    return undefined
  }

   f7 = (): boolean | undefined => this.m1wLine1b1()

  /**
   * Index 8: m1wLine1c1
   */
   m1wLine1c1 = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.m1wLine1c1()

  /**
   * Index 9: m1wLine1d1
   */
   m1wLine1d1 = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.m1wLine1d1()

  /**
   * Index 10: m1wLine1e1
   */
   m1wLine1e1 = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.m1wLine1e1()

  /**
   * Index 11: m1wLine1a2
   */
   m1wLine1a2 = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.m1wLine1a2()

  /**
   * Index 12: m1wLine1b2
   */
   m1wLine1b2 = (): boolean | undefined => {
    return undefined
  }

   f12 = (): boolean | undefined => this.m1wLine1b2()

  /**
   * Index 13: m1wLine1c2
   */
   m1wLine1c2 = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.m1wLine1c2()

  /**
   * Index 14: m1wLine1d2
   */
   m1wLine1d2 = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.m1wLine1d2()

  /**
   * Index 15: m1wLine1e2
   */
   m1wLine1e2 = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.m1wLine1e2()

  /**
   * Index 16: m1wLine1a3
   */
   m1wLine1a3 = (): string | undefined => {
    return undefined
  }

   f16 = (): string | undefined => this.m1wLine1a3()

  /**
   * Index 17: m1wLine1b3
   */
   m1wLine1b3 = (): boolean | undefined => {
    return undefined
  }

   f17 = (): boolean | undefined => this.m1wLine1b3()

  /**
   * Index 18: m1wLine1c3
   */
   m1wLine1c3 = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.m1wLine1c3()

  /**
   * Index 19: m1wLine1d3
   */
   m1wLine1d3 = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.m1wLine1d3()

  /**
   * Index 20: m1wLine1e3
   */
   m1wLine1e3 = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.m1wLine1e3()

  /**
   * Index 21: m1wLine1a4
   */
   m1wLine1a4 = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.m1wLine1a4()

  /**
   * Index 22: m1wLine1b4
   */
   m1wLine1b4 = (): boolean | undefined => {
    return undefined
  }

   f22 = (): boolean | undefined => this.m1wLine1b4()

  /**
   * Index 23: m1wLine1c4
   */
   m1wLine1c4 = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.m1wLine1c4()

  /**
   * Index 24: m1wLine1d4
   */
   m1wLine1d4 = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.m1wLine1d4()

  /**
   * Index 25: m1wLine1e4
   */
   m1wLine1e4 = (): string | undefined => {
    return undefined
  }

   f25 = (): string | undefined => this.m1wLine1e4()

  /**
   * Index 26: m1wLine1a5
   */
   m1wLine1a5 = (): string | undefined => {
    return undefined
  }

   f26 = (): string | undefined => this.m1wLine1a5()

  /**
   * Index 27: m1wLine1b5
   */
   m1wLine1b5 = (): boolean | undefined => {
    return undefined
  }

   f27 = (): boolean | undefined => this.m1wLine1b5()

  /**
   * Index 28: m1wLine1c5
   */
   m1wLine1c5 = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.m1wLine1c5()

  /**
   * Index 29: m1wLine1d5
   */
   m1wLine1d5 = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.m1wLine1d5()

  /**
   * Index 30: m1wLine1e5
   */
   m1wLine1e5 = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.m1wLine1e5()

  /**
   * Index 31: m1wLine1e6
   */
   m1wLine1e6 = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.m1wLine1e6()

  /**
   * Index 32: m1wLine1total
   */
   m1wLine1total = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.m1wLine1total()

  /**
   * Index 33: m1wLine2a1
   */
   m1wLine2a1 = (): string | undefined => {
    return undefined
  }

   f33 = (): string | undefined => this.m1wLine2a1()

  /**
   * Index 34: m1wLine2b1
   */
   m1wLine2b1 = (): string | undefined => {
    return undefined
  }

   f34 = (): string | undefined => this.m1wLine2b1()

  /**
   * Index 35: m1wLine2c1
   */
   m1wLine2c1 = (): string | undefined => {
    return undefined
  }

   f35 = (): string | undefined => this.m1wLine2c1()

  /**
   * Index 36: m1wLine2d1
   */
   m1wLine2d1 = (): string | undefined => {
    return undefined
  }

   f36 = (): string | undefined => this.m1wLine2d1()

  /**
   * Index 37: m1wLine2a2
   */
   m1wLine2a2 = (): string | undefined => {
    return undefined
  }

   f37 = (): string | undefined => this.m1wLine2a2()

  /**
   * Index 38: m1wLine2b2
   */
   m1wLine2b2 = (): string | undefined => {
    return undefined
  }

   f38 = (): string | undefined => this.m1wLine2b2()

  /**
   * Index 39: m1wLine2c2
   */
   m1wLine2c2 = (): string | undefined => {
    return undefined
  }

   f39 = (): string | undefined => this.m1wLine2c2()

  /**
   * Index 40: m1wLine2d2
   */
   m1wLine2d2 = (): string | undefined => {
    return undefined
  }

   f40 = (): string | undefined => this.m1wLine2d2()

  /**
   * Index 41: m1wLine2a3
   */
   m1wLine2a3 = (): string | undefined => {
    return undefined
  }

   f41 = (): string | undefined => this.m1wLine2a3()

  /**
   * Index 42: m1wLine2b3
   */
   m1wLine2b3 = (): string | undefined => {
    return undefined
  }

   f42 = (): string | undefined => this.m1wLine2b3()

  /**
   * Index 43: m1wLine2c3
   */
   m1wLine2c3 = (): string | undefined => {
    return undefined
  }

   f43 = (): string | undefined => this.m1wLine2c3()

  /**
   * Index 44: m1wLine2d3
   */
   m1wLine2d3 = (): string | undefined => {
    return undefined
  }

   f44 = (): string | undefined => this.m1wLine2d3()

  /**
   * Index 45: m1wLine2a4
   */
   m1wLine2a4 = (): string | undefined => {
    return undefined
  }

   f45 = (): string | undefined => this.m1wLine2a4()

  /**
   * Index 46: m1wLine2b4
   */
   m1wLine2b4 = (): string | undefined => {
    return undefined
  }

   f46 = (): string | undefined => this.m1wLine2b4()

  /**
   * Index 47: m1wLine2c4
   */
   m1wLine2c4 = (): string | undefined => {
    return undefined
  }

   f47 = (): string | undefined => this.m1wLine2c4()

  /**
   * Index 48: m1wLine2d4
   */
   m1wLine2d4 = (): string | undefined => {
    return undefined
  }

   f48 = (): string | undefined => this.m1wLine2d4()

  /**
   * Index 49: m1wLine2d5
   */
   m1wLine2d5 = (): string | undefined => {
    return undefined
  }

   f49 = (): string | undefined => this.m1wLine2d5()

  /**
   * Index 50: m1wLine2total
   */
   m1wLine2total = (): string | undefined => {
    return undefined
  }

   f50 = (): string | undefined => this.m1wLine2total()

  /**
   * Index 51: m1wLine3
   */
   m1wLine3 = (): string | undefined => {
    return undefined
  }

   f51 = (): string | undefined => this.m1wLine3()

  /**
   * Index 52: m1wLine4
   */
   m1wLine4 = (): string | undefined => {
    return undefined
  }

   f52 = (): string | undefined => this.m1wLine4()

  /**
   * Index 53: m1wLine5a1
   */
   m1wLine5a1 = (): string | undefined => {
    return undefined
  }

   f53 = (): string | undefined => this.m1wLine5a1()

  /**
   * Index 54: m1wLine5b1
   */
   m1wLine5b1 = (): boolean | undefined => {
    return undefined
  }

   f54 = (): boolean | undefined => this.m1wLine5b1()

  /**
   * Index 55: m1wLine5c1
   */
   m1wLine5c1 = (): string | undefined => {
    return undefined
  }

   f55 = (): string | undefined => this.m1wLine5c1()

  /**
   * Index 56: m1wLine5d1
   */
   m1wLine5d1 = (): string | undefined => {
    return undefined
  }

   f56 = (): string | undefined => this.m1wLine5d1()

  /**
   * Index 57: m1wLine5e1
   */
   m1wLine5e1 = (): string | undefined => {
    return undefined
  }

   f57 = (): string | undefined => this.m1wLine5e1()

  /**
   * Index 58: m1wLine5a2
   */
   m1wLine5a2 = (): string | undefined => {
    return undefined
  }

   f58 = (): string | undefined => this.m1wLine5a2()

  /**
   * Index 59: m1wLine5b2
   */
   m1wLine5b2 = (): boolean | undefined => {
    return undefined
  }

   f59 = (): boolean | undefined => this.m1wLine5b2()

  /**
   * Index 60: m1wLine5c2
   */
   m1wLine5c2 = (): string | undefined => {
    return undefined
  }

   f60 = (): string | undefined => this.m1wLine5c2()

  /**
   * Index 61: m1wLine5d2
   */
   m1wLine5d2 = (): string | undefined => {
    return undefined
  }

   f61 = (): string | undefined => this.m1wLine5d2()

  /**
   * Index 62: m1wLine5e2
   */
   m1wLine5e2 = (): string | undefined => {
    return undefined
  }

   f62 = (): string | undefined => this.m1wLine5e2()

  /**
   * Index 63: m1wLine5a3
   */
   m1wLine5a3 = (): string | undefined => {
    return undefined
  }

   f63 = (): string | undefined => this.m1wLine5a3()

  /**
   * Index 64: m1wLine5b3
   */
   m1wLine5b3 = (): boolean | undefined => {
    return undefined
  }

   f64 = (): boolean | undefined => this.m1wLine5b3()

  /**
   * Index 65: m1wLine5c3
   */
   m1wLine5c3 = (): string | undefined => {
    return undefined
  }

   f65 = (): string | undefined => this.m1wLine5c3()

  /**
   * Index 66: m1wLine5d3
   */
   m1wLine5d3 = (): string | undefined => {
    return undefined
  }

   f66 = (): string | undefined => this.m1wLine5d3()

  /**
   * Index 67: m1wLine5e3
   */
   m1wLine5e3 = (): string | undefined => {
    return undefined
  }

   f67 = (): string | undefined => this.m1wLine5e3()

  /**
   * Index 68: m1wLine5a4
   */
   m1wLine5a4 = (): string | undefined => {
    return undefined
  }

   f68 = (): string | undefined => this.m1wLine5a4()

  /**
   * Index 69: m1wLine5b4
   */
   m1wLine5b4 = (): boolean | undefined => {
    return undefined
  }

   f69 = (): boolean | undefined => this.m1wLine5b4()

  /**
   * Index 70: m1wLine5c4
   */
   m1wLine5c4 = (): string | undefined => {
    return undefined
  }

   f70 = (): string | undefined => this.m1wLine5c4()

  /**
   * Index 71: m1wLine5d4
   */
   m1wLine5d4 = (): string | undefined => {
    return undefined
  }

   f71 = (): string | undefined => this.m1wLine5d4()

  /**
   * Index 72: m1wLine5e4
   */
   m1wLine5e4 = (): string | undefined => {
    return undefined
  }

   f72 = (): string | undefined => this.m1wLine5e4()

  /**
   * Index 73: m1wLine5total
   */
   m1wLine5total = (): string | undefined => {
    return undefined
  }

   f73 = (): string | undefined => this.m1wLine5total()

  /**
   * Index 74: m1wLine6a1
   */
   m1wLine6a1 = (): string | undefined => {
    return undefined
  }

   f74 = (): string | undefined => this.m1wLine6a1()

  /**
   * Index 75: m1wLine6b1
   */
   m1wLine6b1 = (): string | undefined => {
    return undefined
  }

   f75 = (): string | undefined => this.m1wLine6b1()

  /**
   * Index 76: m1wLine6c1
   */
   m1wLine6c1 = (): string | undefined => {
    return undefined
  }

   f76 = (): string | undefined => this.m1wLine6c1()

  /**
   * Index 77: m1wLine6d1
   */
   m1wLine6d1 = (): string | undefined => {
    return undefined
  }

   f77 = (): string | undefined => this.m1wLine6d1()

  /**
   * Index 78: m1wLine6a2
   */
   m1wLine6a2 = (): string | undefined => {
    return undefined
  }

   f78 = (): string | undefined => this.m1wLine6a2()

  /**
   * Index 79: m1wLine6b2
   */
   m1wLine6b2 = (): string | undefined => {
    return undefined
  }

   f79 = (): string | undefined => this.m1wLine6b2()

  /**
   * Index 80: m1wLine6c2
   */
   m1wLine6c2 = (): string | undefined => {
    return undefined
  }

   f80 = (): string | undefined => this.m1wLine6c2()

  /**
   * Index 81: m1wLine6d2
   */
   m1wLine6d2 = (): string | undefined => {
    return undefined
  }

   f81 = (): string | undefined => this.m1wLine6d2()

  /**
   * Index 82: m1wLine6a3
   */
   m1wLine6a3 = (): string | undefined => {
    return undefined
  }

   f82 = (): string | undefined => this.m1wLine6a3()

  /**
   * Index 83: m1wLine6b3
   */
   m1wLine6b3 = (): string | undefined => {
    return undefined
  }

   f83 = (): string | undefined => this.m1wLine6b3()

  /**
   * Index 84: m1wLine6c3
   */
   m1wLine6c3 = (): string | undefined => {
    return undefined
  }

   f84 = (): string | undefined => this.m1wLine6c3()

  /**
   * Index 85: m1wLine6d3
   */
   m1wLine6d3 = (): string | undefined => {
    return undefined
  }

   f85 = (): string | undefined => this.m1wLine6d3()

  /**
   * Index 86: m1wLine6a4
   */
   m1wLine6a4 = (): string | undefined => {
    return undefined
  }

   f86 = (): string | undefined => this.m1wLine6a4()

  /**
   * Index 87: m1wLine6b4
   */
   m1wLine6b4 = (): string | undefined => {
    return undefined
  }

   f87 = (): string | undefined => this.m1wLine6b4()

  /**
   * Index 88: m1wLine6c4
   */
   m1wLine6c4 = (): string | undefined => {
    return undefined
  }

   f88 = (): string | undefined => this.m1wLine6c4()

  /**
   * Index 89: m1wLine6d4
   */
   m1wLine6d4 = (): string | undefined => {
    return undefined
  }

   f89 = (): string | undefined => this.m1wLine6d4()

  /**
   * Index 90: m1wLine6total
   */
   m1wLine6total = (): string | undefined => {
    return undefined
  }

   f90 = (): string | undefined => this.m1wLine6total()

  /**
   * Index 91: m1wLine7a1
   */
   m1wLine7a1 = (): string | undefined => {
    return undefined
  }

   f91 = (): string | undefined => this.m1wLine7a1()

  /**
   * Index 92: m1wLine7b1
   */
   m1wLine7b1 = (): string | undefined => {
    return undefined
  }

   f92 = (): string | undefined => this.m1wLine7b1()

  /**
   * Index 93: m1wLine7c1
   */
   m1wLine7c1 = (): string | undefined => {
    return undefined
  }

   f93 = (): string | undefined => this.m1wLine7c1()

  /**
   * Index 94: m1wLine7a2
   */
   m1wLine7a2 = (): string | undefined => {
    return undefined
  }

   f94 = (): string | undefined => this.m1wLine7a2()

  /**
   * Index 95: m1wLine7b2
   */
   m1wLine7b2 = (): string | undefined => {
    return undefined
  }

   f95 = (): string | undefined => this.m1wLine7b2()

  /**
   * Index 96: m1wLine7c2
   */
   m1wLine7c2 = (): string | undefined => {
    return undefined
  }

   f96 = (): string | undefined => this.m1wLine7c2()

  /**
   * Index 97: m1wLine7a3
   */
   m1wLine7a3 = (): string | undefined => {
    return undefined
  }

   f97 = (): string | undefined => this.m1wLine7a3()

  /**
   * Index 98: m1wLine7b3
   */
   m1wLine7b3 = (): string | undefined => {
    return undefined
  }

   f98 = (): string | undefined => this.m1wLine7b3()

  /**
   * Index 99: m1wLine7c3
   */
   m1wLine7c3 = (): string | undefined => {
    return undefined
  }

   f99 = (): string | undefined => this.m1wLine7c3()

  /**
   * Index 100: m1wLine7a4
   */
   m1wLine7a4 = (): string | undefined => {
    return undefined
  }

   f100 = (): string | undefined => this.m1wLine7a4()

  /**
   * Index 101: m1wLine7b4
   */
   m1wLine7b4 = (): string | undefined => {
    return undefined
  }

   f101 = (): string | undefined => this.m1wLine7b4()

  /**
   * Index 102: m1wLine7c4
   */
   m1wLine7c4 = (): string | undefined => {
    return undefined
  }

   f102 = (): string | undefined => this.m1wLine7c4()

  /**
   * Index 103: m1wLine7total
   */
   m1wLine7total = (): string | undefined => {
    return undefined
  }

   f103 = (): string | undefined => this.m1wLine7total()


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
    this.f55(),
    this.f56(),
    this.f57(),
    this.f58(),
    this.f59(),
    this.f60(),
    this.f61(),
    this.f62(),
    this.f63(),
    this.f64(),
    this.f65(),
    this.f66(),
    this.f67(),
    this.f68(),
    this.f69(),
    this.f70(),
    this.f71(),
    this.f72(),
    this.f73(),
    this.f74(),
    this.f75(),
    this.f76(),
    this.f77(),
    this.f78(),
    this.f79(),
    this.f80(),
    this.f81(),
    this.f82(),
    this.f83(),
    this.f84(),
    this.f85(),
    this.f86(),
    this.f87(),
    this.f88(),
    this.f89(),
    this.f90(),
    this.f91(),
    this.f92(),
    this.f93(),
    this.f94(),
    this.f95(),
    this.f96(),
    this.f97(),
    this.f98(),
    this.f99(),
    this.f100(),
    this.f101(),
    this.f102(),
    this.f103()
  ])
}

const makem1w210 = (info: Information, f1040: F1040): M1W21 =>
  new M1W21(info, f1040)

export default makem1w210

