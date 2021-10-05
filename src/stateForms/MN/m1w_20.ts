import Form from '../Form'
import F1040 from '../../irsForms/F1040'
import { Field } from '../../pdfFiller'
import { displayNumber, sumFields } from '../../irsForms/util'
import { AccountType, FilingStatus, Information, State } from '../../redux/data'

export class M1w20 implements Form {
  info: Information
  f1040: F1040
  formName = 'm1w_20'
  state: State = 'MN'
  formOrder = 8

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
   * Index 2: YourSocialSecurityNumber
   */
   YourSocialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f2 = (): string | undefined => this.YourSocialSecurityNumber()

  /**
   * Index 3: IfaJointReturnSpousesFirstNameandInitial
   */
   IfaJointReturnSpousesFirstNameandInitial = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.IfaJointReturnSpousesFirstNameandInitial()

  /**
   * Index 4: SpousesLastName
   */
   SpousesLastName = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.SpousesLastName()

  /**
   * Index 5: SpousesSocialSecurityNumber
   */
   SpousesSocialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.SpousesSocialSecurityNumber()

  /**
   * Index 6: M1Wline1a1
   */
   M1Wline1a1 = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.M1Wline1a1()

  /**
   * Index 7: M1Wline1b1
   */
   M1Wline1b1 = (): boolean | undefined => {
    return undefined
  }

   f7 = (): boolean | undefined => this.M1Wline1b1()

  /**
   * Index 8: M1Wline1c1
   */
   M1Wline1c1 = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.M1Wline1c1()

  /**
   * Index 9: M1Wline1d1
   */
   M1Wline1d1 = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.M1Wline1d1()

  /**
   * Index 10: M1Wline1e1
   */
   M1Wline1e1 = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.M1Wline1e1()

  /**
   * Index 11: M1Wline1a2
   */
   M1Wline1a2 = (): string | undefined => {
    return undefined
  }

   f11 = (): string | undefined => this.M1Wline1a2()

  /**
   * Index 12: M1Wline1b2
   */
   M1Wline1b2 = (): boolean | undefined => {
    return undefined
  }

   f12 = (): boolean | undefined => this.M1Wline1b2()

  /**
   * Index 13: M1Wline1c2
   */
   M1Wline1c2 = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.M1Wline1c2()

  /**
   * Index 14: M1Wline1d2
   */
   M1Wline1d2 = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.M1Wline1d2()

  /**
   * Index 15: M1Wline1e2
   */
   M1Wline1e2 = (): string | undefined => {
    return undefined
  }

   f15 = (): string | undefined => this.M1Wline1e2()

  /**
   * Index 16: M1Wline1a3
   */
   M1Wline1a3 = (): string | undefined => {
    return undefined
  }

   f16 = (): string | undefined => this.M1Wline1a3()

  /**
   * Index 17: M1Wline1b3
   */
   M1Wline1b3 = (): boolean | undefined => {
    return undefined
  }

   f17 = (): boolean | undefined => this.M1Wline1b3()

  /**
   * Index 18: M1Wline1c3
   */
   M1Wline1c3 = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.M1Wline1c3()

  /**
   * Index 19: M1Wline1d3
   */
   M1Wline1d3 = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.M1Wline1d3()

  /**
   * Index 20: M1Wline1e3
   */
   M1Wline1e3 = (): string | undefined => {
    return undefined
  }

   f20 = (): string | undefined => this.M1Wline1e3()

  /**
   * Index 21: M1Wline1a4
   */
   M1Wline1a4 = (): string | undefined => {
    return undefined
  }

   f21 = (): string | undefined => this.M1Wline1a4()

  /**
   * Index 22: M1Wline1b4
   */
   M1Wline1b4 = (): boolean | undefined => {
    return undefined
  }

   f22 = (): boolean | undefined => this.M1Wline1b4()

  /**
   * Index 23: M1Wline1c4
   */
   M1Wline1c4 = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.M1Wline1c4()

  /**
   * Index 24: M1Wline1d4
   */
   M1Wline1d4 = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.M1Wline1d4()

  /**
   * Index 25: M1Wline1e4
   */
   M1Wline1e4 = (): string | undefined => {
    return undefined
  }

   f25 = (): string | undefined => this.M1Wline1e4()

  /**
   * Index 26: M1Wline1a5
   */
   M1Wline1a5 = (): string | undefined => {
    return undefined
  }

   f26 = (): string | undefined => this.M1Wline1a5()

  /**
   * Index 27: M1Wline1b5
   */
   M1Wline1b5 = (): boolean | undefined => {
    return undefined
  }

   f27 = (): boolean | undefined => this.M1Wline1b5()

  /**
   * Index 28: M1Wline1c5
   */
   M1Wline1c5 = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.M1Wline1c5()

  /**
   * Index 29: M1Wline1d5
   */
   M1Wline1d5 = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.M1Wline1d5()

  /**
   * Index 30: M1Wline1e5
   */
   M1Wline1e5 = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.M1Wline1e5()

  /**
   * Index 31: M1Wline1e6
   */
   M1Wline1e6 = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.M1Wline1e6()

  /**
   * Index 32: M1Wline1total
   */
   M1Wline1total = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.M1Wline1total()

  /**
   * Index 33: M1Wline2a1
   */
   M1Wline2a1 = (): string | undefined => {
    return undefined
  }

   f33 = (): string | undefined => this.M1Wline2a1()

  /**
   * Index 34: M1Wline2b1
   */
   M1Wline2b1 = (): string | undefined => {
    return undefined
  }

   f34 = (): string | undefined => this.M1Wline2b1()

  /**
   * Index 35: M1Wline2c1
   */
   M1Wline2c1 = (): string | undefined => {
    return undefined
  }

   f35 = (): string | undefined => this.M1Wline2c1()

  /**
   * Index 36: M1Wline2d1
   */
   M1Wline2d1 = (): string | undefined => {
    return undefined
  }

   f36 = (): string | undefined => this.M1Wline2d1()

  /**
   * Index 37: M1Wline2a2
   */
   M1Wline2a2 = (): string | undefined => {
    return undefined
  }

   f37 = (): string | undefined => this.M1Wline2a2()

  /**
   * Index 38: M1Wline2b2
   */
   M1Wline2b2 = (): string | undefined => {
    return undefined
  }

   f38 = (): string | undefined => this.M1Wline2b2()

  /**
   * Index 39: M1Wline2c2
   */
   M1Wline2c2 = (): string | undefined => {
    return undefined
  }

   f39 = (): string | undefined => this.M1Wline2c2()

  /**
   * Index 40: M1Wline2d2
   */
   M1Wline2d2 = (): string | undefined => {
    return undefined
  }

   f40 = (): string | undefined => this.M1Wline2d2()

  /**
   * Index 41: M1Wline2a3
   */
   M1Wline2a3 = (): string | undefined => {
    return undefined
  }

   f41 = (): string | undefined => this.M1Wline2a3()

  /**
   * Index 42: M1Wline2b3
   */
   M1Wline2b3 = (): string | undefined => {
    return undefined
  }

   f42 = (): string | undefined => this.M1Wline2b3()

  /**
   * Index 43: M1Wline2c3
   */
   M1Wline2c3 = (): string | undefined => {
    return undefined
  }

   f43 = (): string | undefined => this.M1Wline2c3()

  /**
   * Index 44: M1Wline2d3
   */
   M1Wline2d3 = (): string | undefined => {
    return undefined
  }

   f44 = (): string | undefined => this.M1Wline2d3()

  /**
   * Index 45: M1Wline2a4
   */
   M1Wline2a4 = (): string | undefined => {
    return undefined
  }

   f45 = (): string | undefined => this.M1Wline2a4()

  /**
   * Index 46: M1Wline2b4
   */
   M1Wline2b4 = (): string | undefined => {
    return undefined
  }

   f46 = (): string | undefined => this.M1Wline2b4()

  /**
   * Index 47: M1Wline2c4
   */
   M1Wline2c4 = (): string | undefined => {
    return undefined
  }

   f47 = (): string | undefined => this.M1Wline2c4()

  /**
   * Index 48: M1Wline2d4
   */
   M1Wline2d4 = (): string | undefined => {
    return undefined
  }

   f48 = (): string | undefined => this.M1Wline2d4()

  /**
   * Index 49: M1Wline2d5
   */
   M1Wline2d5 = (): string | undefined => {
    return undefined
  }

   f49 = (): string | undefined => this.M1Wline2d5()

  /**
   * Index 50: M1Wline2total
   */
   M1Wline2total = (): string | undefined => {
    return undefined
  }

   f50 = (): string | undefined => this.M1Wline2total()

  /**
   * Index 51: M1Wline3
   */
   M1Wline3 = (): string | undefined => {
    return undefined
  }

   f51 = (): string | undefined => this.M1Wline3()

  /**
   * Index 52: M1Wline4
   */
   M1Wline4 = (): string | undefined => {
    return undefined
  }

   f52 = (): string | undefined => this.M1Wline4()

  /**
   * Index 53: M1Wline5a1
   */
   M1Wline5a1 = (): string | undefined => {
    return undefined
  }

   f53 = (): string | undefined => this.M1Wline5a1()

  /**
   * Index 54: M1Wline5b1
   */
   M1Wline5b1 = (): boolean | undefined => {
    return undefined
  }

   f54 = (): boolean | undefined => this.M1Wline5b1()

  /**
   * Index 55: M1Wline5c1
   */
   M1Wline5c1 = (): string | undefined => {
    return undefined
  }

   f55 = (): string | undefined => this.M1Wline5c1()

  /**
   * Index 56: M1Wline5d1
   */
   M1Wline5d1 = (): string | undefined => {
    return undefined
  }

   f56 = (): string | undefined => this.M1Wline5d1()

  /**
   * Index 57: M1Wline5e1
   */
   M1Wline5e1 = (): string | undefined => {
    return undefined
  }

   f57 = (): string | undefined => this.M1Wline5e1()

  /**
   * Index 58: M1Wline5a2
   */
   M1Wline5a2 = (): string | undefined => {
    return undefined
  }

   f58 = (): string | undefined => this.M1Wline5a2()

  /**
   * Index 59: M1Wline5b2
   */
   M1Wline5b2 = (): boolean | undefined => {
    return undefined
  }

   f59 = (): boolean | undefined => this.M1Wline5b2()

  /**
   * Index 60: M1Wline5c2
   */
   M1Wline5c2 = (): string | undefined => {
    return undefined
  }

   f60 = (): string | undefined => this.M1Wline5c2()

  /**
   * Index 61: M1Wline5d2
   */
   M1Wline5d2 = (): string | undefined => {
    return undefined
  }

   f61 = (): string | undefined => this.M1Wline5d2()

  /**
   * Index 62: M1Wline5e2
   */
   M1Wline5e2 = (): string | undefined => {
    return undefined
  }

   f62 = (): string | undefined => this.M1Wline5e2()

  /**
   * Index 63: M1Wline5a3
   */
   M1Wline5a3 = (): string | undefined => {
    return undefined
  }

   f63 = (): string | undefined => this.M1Wline5a3()

  /**
   * Index 64: M1Wline5b3
   */
   M1Wline5b3 = (): boolean | undefined => {
    return undefined
  }

   f64 = (): boolean | undefined => this.M1Wline5b3()

  /**
   * Index 65: M1Wline5c3
   */
   M1Wline5c3 = (): string | undefined => {
    return undefined
  }

   f65 = (): string | undefined => this.M1Wline5c3()

  /**
   * Index 66: M1Wline5d3
   */
   M1Wline5d3 = (): string | undefined => {
    return undefined
  }

   f66 = (): string | undefined => this.M1Wline5d3()

  /**
   * Index 67: M1Wline5e3
   */
   M1Wline5e3 = (): string | undefined => {
    return undefined
  }

   f67 = (): string | undefined => this.M1Wline5e3()

  /**
   * Index 68: M1Wline5a4
   */
   M1Wline5a4 = (): string | undefined => {
    return undefined
  }

   f68 = (): string | undefined => this.M1Wline5a4()

  /**
   * Index 69: M1Wline5b4
   */
   M1Wline5b4 = (): boolean | undefined => {
    return undefined
  }

   f69 = (): boolean | undefined => this.M1Wline5b4()

  /**
   * Index 70: M1Wline5c4
   */
   M1Wline5c4 = (): string | undefined => {
    return undefined
  }

   f70 = (): string | undefined => this.M1Wline5c4()

  /**
   * Index 71: M1Wline5d4
   */
   M1Wline5d4 = (): string | undefined => {
    return undefined
  }

   f71 = (): string | undefined => this.M1Wline5d4()

  /**
   * Index 72: M1Wline5e4
   */
   M1Wline5e4 = (): string | undefined => {
    return undefined
  }

   f72 = (): string | undefined => this.M1Wline5e4()

  /**
   * Index 73: M1Wline5total
   */
   M1Wline5total = (): string | undefined => {
    return undefined
  }

   f73 = (): string | undefined => this.M1Wline5total()

  /**
   * Index 74: M1Wline6a1
   */
   M1Wline6a1 = (): string | undefined => {
    return undefined
  }

   f74 = (): string | undefined => this.M1Wline6a1()

  /**
   * Index 75: M1Wline6b1
   */
   M1Wline6b1 = (): string | undefined => {
    return undefined
  }

   f75 = (): string | undefined => this.M1Wline6b1()

  /**
   * Index 76: M1Wline6c1
   */
   M1Wline6c1 = (): string | undefined => {
    return undefined
  }

   f76 = (): string | undefined => this.M1Wline6c1()

  /**
   * Index 77: M1Wline6d1
   */
   M1Wline6d1 = (): string | undefined => {
    return undefined
  }

   f77 = (): string | undefined => this.M1Wline6d1()

  /**
   * Index 78: M1Wline6a2
   */
   M1Wline6a2 = (): string | undefined => {
    return undefined
  }

   f78 = (): string | undefined => this.M1Wline6a2()

  /**
   * Index 79: M1Wline6b2
   */
   M1Wline6b2 = (): string | undefined => {
    return undefined
  }

   f79 = (): string | undefined => this.M1Wline6b2()

  /**
   * Index 80: M1Wline6c2
   */
   M1Wline6c2 = (): string | undefined => {
    return undefined
  }

   f80 = (): string | undefined => this.M1Wline6c2()

  /**
   * Index 81: M1Wline6d2
   */
   M1Wline6d2 = (): string | undefined => {
    return undefined
  }

   f81 = (): string | undefined => this.M1Wline6d2()

  /**
   * Index 82: M1Wline6a3
   */
   M1Wline6a3 = (): string | undefined => {
    return undefined
  }

   f82 = (): string | undefined => this.M1Wline6a3()

  /**
   * Index 83: M1Wline6b3
   */
   M1Wline6b3 = (): string | undefined => {
    return undefined
  }

   f83 = (): string | undefined => this.M1Wline6b3()

  /**
   * Index 84: M1Wline6c3
   */
   M1Wline6c3 = (): string | undefined => {
    return undefined
  }

   f84 = (): string | undefined => this.M1Wline6c3()

  /**
   * Index 85: M1Wline6d3
   */
   M1Wline6d3 = (): string | undefined => {
    return undefined
  }

   f85 = (): string | undefined => this.M1Wline6d3()

  /**
   * Index 86: M1Wline6a4
   */
   M1Wline6a4 = (): string | undefined => {
    return undefined
  }

   f86 = (): string | undefined => this.M1Wline6a4()

  /**
   * Index 87: M1Wline6b4
   */
   M1Wline6b4 = (): string | undefined => {
    return undefined
  }

   f87 = (): string | undefined => this.M1Wline6b4()

  /**
   * Index 88: M1Wline6c4
   */
   M1Wline6c4 = (): string | undefined => {
    return undefined
  }

   f88 = (): string | undefined => this.M1Wline6c4()

  /**
   * Index 89: M1Wline6d4
   */
   M1Wline6d4 = (): string | undefined => {
    return undefined
  }

   f89 = (): string | undefined => this.M1Wline6d4()

  /**
   * Index 90: M1Wline6total
   */
   M1Wline6total = (): string | undefined => {
    return undefined
  }

   f90 = (): string | undefined => this.M1Wline6total()

  /**
   * Index 91: M1Wline7a1
   */
   M1Wline7a1 = (): string | undefined => {
    return undefined
  }

   f91 = (): string | undefined => this.M1Wline7a1()

  /**
   * Index 92: M1Wline7b1
   */
   M1Wline7b1 = (): string | undefined => {
    return undefined
  }

   f92 = (): string | undefined => this.M1Wline7b1()

  /**
   * Index 93: M1Wline7c1
   */
   M1Wline7c1 = (): string | undefined => {
    return undefined
  }

   f93 = (): string | undefined => this.M1Wline7c1()

  /**
   * Index 94: M1Wline7a2
   */
   M1Wline7a2 = (): string | undefined => {
    return undefined
  }

   f94 = (): string | undefined => this.M1Wline7a2()

  /**
   * Index 95: M1Wline7b2
   */
   M1Wline7b2 = (): string | undefined => {
    return undefined
  }

   f95 = (): string | undefined => this.M1Wline7b2()

  /**
   * Index 96: M1Wline7c2
   */
   M1Wline7c2 = (): string | undefined => {
    return undefined
  }

   f96 = (): string | undefined => this.M1Wline7c2()

  /**
   * Index 97: M1Wline7a3
   */
   M1Wline7a3 = (): string | undefined => {
    return undefined
  }

   f97 = (): string | undefined => this.M1Wline7a3()

  /**
   * Index 98: M1Wline7b3
   */
   M1Wline7b3 = (): string | undefined => {
    return undefined
  }

   f98 = (): string | undefined => this.M1Wline7b3()

  /**
   * Index 99: M1Wline7c3
   */
   M1Wline7c3 = (): string | undefined => {
    return undefined
  }

   f99 = (): string | undefined => this.M1Wline7c3()

  /**
   * Index 100: M1Wline7a4
   */
   M1Wline7a4 = (): string | undefined => {
    return undefined
  }

   f100 = (): string | undefined => this.M1Wline7a4()

  /**
   * Index 101: M1Wline7b4
   */
   M1Wline7b4 = (): string | undefined => {
    return undefined
  }

   f101 = (): string | undefined => this.M1Wline7b4()

  /**
   * Index 102: M1Wline7c4
   */
   M1Wline7c4 = (): string | undefined => {
    return undefined
  }

   f102 = (): string | undefined => this.M1Wline7c4()

  /**
   * Index 103: M1Wline7total
   */
   M1Wline7total = (): string | undefined => {
    return undefined
  }

   f103 = (): string | undefined => this.M1Wline7total()


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

const m1w20 = (info: Information, f1040: F1040): M1w20 =>
  new M1w20(info, f1040)

export default m1w20

