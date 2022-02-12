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

export class m1210 extends Form {
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
    this.formName = 'm1_21_0'
    this.state = 'MN'
    this.methods = new FormMethods(this)
  }

  attachments = (): Form[] => {
    const result: Form[] = []
    // if (this.methods.stateWithholding() > 0) {
    //   const ilwit = new ILWIT(this.info, this.f1040)
    //   result.push(ilwit)
    //   ilwit.attachments().forEach((f) => result.push(f))
    // }

    return result
  }

   f0 = (): string | undefined => this.state

  /**
   * Index 1: city
   */
   city = (): string | undefined => {
    return undefined
  }

   f1 = (): string | undefined => this.city()

  /**
   * Index 2: unemployment
   */
   unemployment = (): string | undefined => {
    return undefined
  }

   f2 = (): string | undefined => this.unemployment()

  /**
   * Index 3: wages, salaries, tips
   */
   wagesSalariesTips = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.wagesSalariesTips()

  /**
   * Index 4: Federally Adjusted Gross Income
   */
   FedAdjGrossIncome = (): string | undefined => {
    return undefined
  }

   f4 = (): string | undefined => this.FedAdjGrossIncome()

  /**
   * Index 5: yourfirstnameandinitial
   */
   yourFirstNameAndInitial = (): string | undefined => {
    return undefined
  }

   f5 = (): string | undefined => this.yourFirstNameAndInitial()

  /**
   * Index 6: LastName
   */
   lastName = (): string | undefined => {
    return undefined
  }

   f6 = (): string | undefined => this.lastName()

  /**
   * Index 7: YourSocialSecurityNumber
   */
   yourSocialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f7 = (): string | undefined => this.yourSocialSecurityNumber()

  /**
   * Index 8: YourDateofBirth
   */
   yourDateOfBirth = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.yourDateOfBirth()

  /**
   * Index 9: SpousesSocialSecurityNumber
   */
   spousesSocialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f9 = (): string | undefined => this.spousesSocialSecurityNumber()

  /**
   * Index 10: CurrentHomeAddress
   */
   currentHomeAddress = (): string | undefined => {
    return undefined
  }

   f10 = (): string | undefined => this.currentHomeAddress()

  /**
   * Index 11: checkhereifanewaddress
   */
   checkHereIfYouHaveANewAddress = (): boolean | undefined => {
    return undefined
  }

   f11 = (): boolean | undefined => this.checkHereIfYouHaveANewAddress()

  /**
   * Index 12: checkhereifaforeignaddress
   */
   checkHereIfYouHaveAForeignAddress = (): boolean | undefined => {
    return undefined
  }

   f12 = (): boolean | undefined => this.checkHereIfYouHaveAForeignAddress()

  /**
   * Index 13: zipcode
   */
   zipcode = (): string | undefined => {
    return undefined
  }

   f13 = (): string | undefined => this.zipcode()

  /**
   * Index 14: spousesdateofbirth
   */
   spousesDateOfBirth = (): string | undefined => {
    return undefined
  }

   f14 = (): string | undefined => this.spousesDateOfBirth()

  /**
   * Index 15: checkifsingle
   */
   checkIfSingle = (): boolean | undefined => {
    return undefined
  }

   f15 = (): boolean | undefined => this.checkIfSingle()

  /**
   * Index 16: checkifmarriedfilingjoint
   */
   checkIfMarriedFilingJoint = (): boolean | undefined => {
    return undefined
  }

   f16 = (): boolean | undefined => this.checkIfMarriedFilingJoint()

  /**
   * Index 17: checkifmarriedfilingseparately
   */
   checkIfMarriedFilingSeparately = (): boolean | undefined => {
    return undefined
  }

   f17 = (): boolean | undefined => this.checkIfMarriedFilingSeparately()

  /**
   * Index 18: Yourcode
   */
   yourCode = (): string | undefined => {
    return undefined
  }

   f18 = (): string | undefined => this.yourCode()

  /**
   * Index 19: Spousecode
   */
   spousesCode = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.spousesCode()

  /**
   * Index 20: checkifheadofhousehold
   */
   checkIfHeadOfHousehold = (): boolean | undefined => {
    return undefined
  }

   f20 = (): boolean | undefined => this.checkIfHeadOfHousehold()

  /**
   * Index 21: checkifqualifyingwidower
   */
   checkIfQualifyingWidower = (): boolean | undefined => {
    return undefined
  }

   f21 = (): boolean | undefined => this.checkIfQualifyingWidower()

  /**
   * Index 22: SpousesFirstNameandInitial
   */
   spousesFirstNameAndInitial = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.spousesFirstNameAndInitial()

  /**
   * Index 23: Spouseslastname
   */
   spousesLastName = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.spousesLastName()

  /**
   * Index 24: irapensionsannuities
   */
   iraPensionsAndAnnuities = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.iraPensionsAndAnnuities()

  /**
   * Index 25: checkifchecking
   */
   checkIfCheckingAccount = (): boolean | undefined => {
    return undefined
  }

   f25 = (): boolean | undefined => this.checkIfCheckingAccount()

  /**
   * Index 26: checkifsavings
   */
   checkIfSavingsAccount = (): boolean | undefined => {
    return undefined
  }

   f26 = (): boolean | undefined => this.checkIfSavingsAccount()

  /**
   * Index 27: Routingnumber
   */
   routingNumber = (): string | undefined => {
    return undefined
  }

   f27 = (): string | undefined => this.routingNumber()

  /**
   * Index 28: AccountNumber
   */
   accountNumber = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.accountNumber()

  /**
   * Index 29: signaturedate
   */
   signatureDate = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.signatureDate()

  /**
   * Index 30: preparersignaturedate
   */
   preparerSignatureDate = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.preparerSignatureDate()

  /**
   * Index 31: Taxpayersdaytimephone
   */
   taxpayersDaytimePhone = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.taxpayersDaytimePhone()

  /**
   * Index 32: Preparersdaytimephone
   */
   preparersDaytimePhone = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.preparersDaytimePhone()

  /**
   * Index 33: PTINorVITATCErequired
   */
   PTINorVITATCErequired = (): string | undefined => {
    return undefined
  }

   f33 = (): string | undefined => this.PTINorVITATCErequired()

  /**
   * Index 34: Youremailaddress
   */
   yourEmailAddress = (): string | undefined => {
    return undefined
  }

   f34 = (): string | undefined => this.yourEmailAddress()

  /**
   * Index 35: Preparersemailaddress
   */
   preparersEmailAddress = (): string | undefined => {
    return undefined
  }

   f35 = (): string | undefined => this.preparersEmailAddress()

  /**
   * Index 36: checktoauthorizeyourpaidpreparer
   */
   checkToAuthorizeYourPaidPreparer = (): boolean | undefined => {
    return undefined
  }

   f36 = (): boolean | undefined => this.checkToAuthorizeYourPaidPreparer()

  /**
   * Index 37: checkifyoudontwantyourpreparertofileelectronically
   */
   checkIfYouDontWantYourPreparerToFileElectronically = (): boolean | undefined => {
    return undefined
  }

   f37 = (): boolean | undefined => this.checkIfYouDontWantYourPreparerToFileElectronically()

  /**
   * Index 38: m1Line1
   */
   m1Line1 = (): string | undefined => {
    return undefined
  }

   f38 = (): string | undefined => this.m1Line1()

  /**
   * Index 39: m1Line2
   */
   m1Line2 = (): string | undefined => {
    return undefined
  }

   f39 = (): string | undefined => this.m1Line2()

  /**
   * Index 40: m1Line3
   */
   m1Line3 = (): string | undefined => {
    return undefined
  }

   f40 = (): string | undefined => this.m1Line3()

  /**
   * Index 41: m1Line4
   */
   m1Line4 = (): string | undefined => {
    return undefined
  }

   f41 = (): string | undefined => this.m1Line4()

  /**
   * Index 42: m1Line5
   */
   m1Line5 = (): string | undefined => {
    return undefined
  }

   f42 = (): string | undefined => this.m1Line5()

  /**
   * Index 43: m1Line6
   */
   m1Line6 = (): string | undefined => {
    return undefined
  }

   f43 = (): string | undefined => this.m1Line6()

  /**
   * Index 44: m1Line7
   */
   m1Line7 = (): string | undefined => {
    return undefined
  }

   f44 = (): string | undefined => this.m1Line7()

  /**
   * Index 45: m1Line8
   */
   m1Line8 = (): string | undefined => {
    return undefined
  }

   f45 = (): string | undefined => this.m1Line8()

  /**
   * Index 46: m1Line9
   */
   m1Line9 = (): string | undefined => {
    return undefined
  }

   f46 = (): string | undefined => this.m1Line9()

  /**
   * Index 47: m1Line10
   */
   m1Line10 = (): string | undefined => {
    return undefined
  }

   f47 = (): string | undefined => this.m1Line10()

  /**
   * Index 48: m1Line15
   */
   m1Line15 = (): string | undefined => {
    return undefined
  }

   f48 = (): string | undefined => this.m1Line15()

  /**
   * Index 49: m1Line16
   */
   m1Line16 = (): string | undefined => {
    return undefined
  }

   f49 = (): string | undefined => this.m1Line16()

  /**
   * Index 50: m1Line17
   */
   m1Line17 = (): string | undefined => {
    return undefined
  }

   f50 = (): string | undefined => this.m1Line17()

  /**
   * Index 51: m1Line18
   */
   m1Line18 = (): string | undefined => {
    return undefined
  }

   f51 = (): string | undefined => this.m1Line18()

  /**
   * Index 52: m1Line19
   */
   m1Line19 = (): string | undefined => {
    return undefined
  }

   f52 = (): string | undefined => this.m1Line19()

  /**
   * Index 53: m1Line20
   */
   m1Line20 = (): string | undefined => {
    return undefined
  }

   f53 = (): string | undefined => this.m1Line20()

  /**
   * Index 54: m1Line21
   */
   m1Line21 = (): string | undefined => {
    return undefined
  }

   f54 = (): string | undefined => this.m1Line21()

  /**
   * Index 55: m1Line22
   */
   m1Line22 = (): string | undefined => {
    return undefined
  }

   f55 = (): string | undefined => this.m1Line22()

  /**
   * Index 56: m1Line23
   */
   m1Line23 = (): string | undefined => {
    return undefined
  }

   f56 = (): string | undefined => this.m1Line23()

  /**
   * Index 57: m1Line24
   */
   m1Line24 = (): string | undefined => {
    return undefined
  }

   f57 = (): string | undefined => this.m1Line24()

  /**
   * Index 58: m1Line26
   */
   m1Line26 = (): string | undefined => {
    return undefined
  }

   f58 = (): string | undefined => this.m1Line26()

  /**
   * Index 59: m1Line27
   */
   m1Line27 = (): string | undefined => {
    return undefined
  }

   f59 = (): string | undefined => this.m1Line27()

  /**
   * Index 60: m1Line28
   */
   m1Line28 = (): string | undefined => {
    return undefined
  }

   f60 = (): string | undefined => this.m1Line28()

  /**
   * Index 61: Enterspousename
   */
   spousesName = (): string | undefined => {
    return undefined
  }

   f61 = (): string | undefined => this.spousesName()

  /**
   * Index 62: spouseSocialSecurityNumber
   */
   spouseSocialSecurityNumber = (): string | undefined => {
    return undefined
  }

   f62 = (): string | undefined => this.spouseSocialSecurityNumber()

  /**
   * Index 63: dependent1last
   */
   dependent1Last = (): string | undefined => {
    return undefined
  }

   f63 = (): string | undefined => this.dependent1Last()

  /**
   * Index 64: dependent2last
   */
   dependent2Last = (): string | undefined => {
    return undefined
  }

   f64 = (): string | undefined => this.dependent2Last()

  /**
   * Index 65: dependent3last
   */
   dependent3Last = (): string | undefined => {
    return undefined
  }

   f65 = (): string | undefined => this.dependent3Last()

  /**
   * Index 66: dependent1ssn
   */
   dependent1SSN = (): string | undefined => {
    return undefined
  }

   f66 = (): string | undefined => this.dependent1SSN()

  /**
   * Index 67: dependent2ssn
   */
   dependent2SSN = (): string | undefined => {
    return undefined
  }

   f67 = (): string | undefined => this.dependent2SSN()

  /**
   * Index 68: dependent3ssn
   */
   dependent3SSN = (): string | undefined => {
    return undefined
  }

   f68 = (): string | undefined => this.dependent3SSN()

  /**
   * Index 69: dependent1first
   */
   dependent1First = (): string | undefined => {
    return undefined
  }

   f69 = (): string | undefined => this.dependent1First()

  /**
   * Index 70: dependent2first
   */
   dependent2First = (): string | undefined => {
    return undefined
  }

   f70 = (): string | undefined => this.dependent2First()

  /**
   * Index 71: dependent3first
   */
   dependent3First = (): string | undefined => {
    return undefined
  }

   f71 = (): string | undefined => this.dependent3First()

  /**
   * Index 72: dependent1relationship
   */
   dependent1Relationship = (): string | undefined => {
    return undefined
  }

   f72 = (): string | undefined => this.dependent1Relationship()

  /**
   * Index 73: dependent2relationship
   */
   dependent2Relationship = (): string | undefined => {
    return undefined
  }

   f73 = (): string | undefined => this.dependent2Relationship()

  /**
   * Index 74: dependent3relationship
   */
   dependent3Relationship = (): string | undefined => {
    return undefined
  }

   f74 = (): string | undefined => this.dependent3Relationship()

  /**
   * Index 75: m1Line13
   */
   m1Line13 = (): string | undefined => {
    return undefined
  }

   f75 = (): string | undefined => this.m1Line13()

  /**
   * Index 76: m1Line13a
   */
   m1Line13a = (): string | undefined => {
    return undefined
  }

   f76 = (): string | undefined => this.m1Line13a()

  /**
   * Index 77: m1Line13b
   */
   m1Line13b = (): string | undefined => {
    return undefined
  }

   f77 = (): string | undefined => this.m1Line13b()

  /**
   * Index 78: checkforschedulem1home
   */
   checkForSchedulem1home = (): boolean | undefined => {
    return undefined
  }

   f78 = (): boolean | undefined => this.checkForSchedulem1home()

  /**
   * Index 79: checkforschedulem1529
   */
   checkForSchedulem1529 = (): boolean | undefined => {
    return undefined
  }

   f79 = (): boolean | undefined => this.checkForSchedulem1529()

  /**
   * Index 80: checkforschedulels
   */
   checkforSchedulels = (): boolean | undefined => {
    return undefined
  }

   f80 = (): boolean | undefined => this.checkforSchedulels()

  /**
   * Index 81: m1Line14
   */
   m1Line14 = (): string | undefined => {
    return undefined
  }

   f81 = (): string | undefined => this.m1Line14()

  /**
   * Index 82: m1Line12
   */
   m1Line12 = (): string | undefined => {
    return undefined
  }

   f82 = (): string | undefined => this.m1Line12()

  /**
   * Index 83: m1Line29
   */
   m1Line29 = (): string | undefined => {
    return undefined
  }

   f83 = (): string | undefined => this.m1Line29()

  /**
   * Index 84: m1Line11
   */
   m1Line11 = (): string | undefined => {
    return undefined
  }

   f84 = (): string | undefined => this.m1Line11()


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
    this.f84()
  ])
}

const makem1210 = (info: Information, f1040: F1040): m1210 =>
  new m1210(info, f1040)

export default makem1210

