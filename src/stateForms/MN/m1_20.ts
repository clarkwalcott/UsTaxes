import Form from '../Form'
import F1040 from '../../irsForms/F1040'
import { Field } from '../../pdfFiller'
import { displayNumber, sumFields } from '../../irsForms/util'
import { AccountType, FilingStatus, Information, State } from '../../redux/data'

export class M120 implements Form {
  info: Information
  f1040: F1040
  formName = 'm1_20'
  state: State = 'MN'
  formOrder = 0

  constructor(info: Information, f1040: F1040) {
    this.info = info
    this.f1040 = f1040
  }

  attachments = (): Form[] => []

  /**
   * Index 0: state
   */
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
   wagessalariestips = (): string | undefined => {
    return undefined
  }

   f3 = (): string | undefined => this.wagessalariestips()

  /**
   * Index 4: Federal Adjusted Gross Income
   */
   federalAdjustedGrossIncome = (): string | undefined => {
    return this.f1040.l11()?.toString()
  }

   f4 = (): string | undefined => this.federalAdjustedGrossIncome()

  /**
   * Index 5: yourfirstnameandinitial
   */
   yourFirstNameAndInitial = (): string | undefined => {
    return this.info.taxPayer?.primaryPerson?.firstName.toUpperCase().concat(" ", this.info.taxPayer?.primaryPerson?.middleInitial.toUpperCase())
  }

   f5 = (): string | undefined => this.yourFirstNameAndInitial()

  /**
   * Index 6: lastName
   */
   lastName = (): string | undefined => {
    return this.info.taxPayer?.primaryPerson?.lastName.toUpperCase()
  }

   f6 = (): string | undefined => this.lastName()

  /**
   * Index 7: yourSocialSecurityNumber
   */
   yourSocialSecurityNumber = (): string | undefined => {
    return this.info.taxPayer?.primaryPerson?.ssid
  }

   f7 = (): string | undefined => this.yourSocialSecurityNumber()

  /**
   * Index 8: yourDateofBirth
   */
   yourDateofBirth = (): string | undefined => {
    return undefined
  }

   f8 = (): string | undefined => this.yourDateofBirth()

  /**
   * Index 9: spousesSocialSecurityNumber
   */
   spousesSocialSecurityNumber = (): string | undefined => {
    return this.info.taxPayer?.spouse?.ssid
  }

   f9 = (): string | undefined => this.spousesSocialSecurityNumber()

  /**
   * Index 10: CurrentHomeAddress
   */
   currentHomeAddress = (): string | undefined => {
    return this.info.taxPayer?.primaryPerson?.address.address
  }

   f10 = (): string | undefined => this.currentHomeAddress()

  /**
   * Index 11: checkhereifanewaddress
   */
   checkHereIfaNewAddress = (): boolean | undefined => {
    return undefined
  }

   f11 = (): boolean | undefined => this.checkHereIfaNewAddress()

  /**
   * Index 12: checkhereifaforeignaddress
   */
   checkHereIfaForeignAddress = (): boolean | undefined => {
    return undefined
  }

   f12 = (): boolean | undefined => this.checkHereIfaForeignAddress()

  /**
   * Index 13: zipcode
   */
   zipCode = (): string | undefined => {
    return this.info.taxPayer?.primaryPerson?.address.zip
  }

   f13 = (): string | undefined => this.zipCode()

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
   spouseCode = (): string | undefined => {
    return undefined
  }

   f19 = (): string | undefined => this.spouseCode()

  /**
   * Index 20: checkifheadofhousehold
   */
   checkifheadofhousehold = (): boolean | undefined => {
    return undefined
  }

   f20 = (): boolean | undefined => this.checkifheadofhousehold()

  /**
   * Index 21: checkifqualifyingwidower
   */
   checkifqualifyingwidower = (): boolean | undefined => {
    return undefined
  }

   f21 = (): boolean | undefined => this.checkifqualifyingwidower()

  /**
   * Index 22: SpousesFirstNameandInitial
   */
   SpousesFirstNameandInitial = (): string | undefined => {
    return undefined
  }

   f22 = (): string | undefined => this.SpousesFirstNameandInitial()

  /**
   * Index 23: Spouseslastname
   */
   Spouseslastname = (): string | undefined => {
    return undefined
  }

   f23 = (): string | undefined => this.Spouseslastname()

  /**
   * Index 24: irapensionsannuities
   */
   irapensionsannuities = (): string | undefined => {
    return undefined
  }

   f24 = (): string | undefined => this.irapensionsannuities()

  /**
   * Index 25: checkifchecking
   */
   checkifchecking = (): boolean | undefined => {
    return undefined
  }

   f25 = (): boolean | undefined => this.checkifchecking()

  /**
   * Index 26: checkifsavings
   */
   checkifsavings = (): boolean | undefined => {
    return undefined
  }

   f26 = (): boolean | undefined => this.checkifsavings()

  /**
   * Index 27: Routingnumber
   */
   Routingnumber = (): string | undefined => {
    return undefined
  }

   f27 = (): string | undefined => this.Routingnumber()

  /**
   * Index 28: AccountNumber
   */
   AccountNumber = (): string | undefined => {
    return undefined
  }

   f28 = (): string | undefined => this.AccountNumber()

  /**
   * Index 29: signaturedate
   */
   signaturedate = (): string | undefined => {
    return undefined
  }

   f29 = (): string | undefined => this.signaturedate()

  /**
   * Index 30: preparersignaturedate
   */
   preparersignaturedate = (): string | undefined => {
    return undefined
  }

   f30 = (): string | undefined => this.preparersignaturedate()

  /**
   * Index 31: Taxpayersdaytimephone
   */
   Taxpayersdaytimephone = (): string | undefined => {
    return undefined
  }

   f31 = (): string | undefined => this.Taxpayersdaytimephone()

  /**
   * Index 32: Preparersdaytimephone
   */
   Preparersdaytimephone = (): string | undefined => {
    return undefined
  }

   f32 = (): string | undefined => this.Preparersdaytimephone()

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
   Youremailaddress = (): string | undefined => {
    return undefined
  }

   f34 = (): string | undefined => this.Youremailaddress()

  /**
   * Index 35: Preparersemailaddress
   */
   Preparersemailaddress = (): string | undefined => {
    return undefined
  }

   f35 = (): string | undefined => this.Preparersemailaddress()

  /**
   * Index 36: checktoauthorizeyourpaidpreparer
   */
   checktoauthorizeyourpaidpreparer = (): boolean | undefined => {
    return undefined
  }

   f36 = (): boolean | undefined => this.checktoauthorizeyourpaidpreparer()

  /**
   * Index 37: checkifyoudontwantyourpreparertofileelectronically
   */
   checkifyoudontwantyourpreparertofileelectronically = (): boolean | undefined => {
    return undefined
  }

   f37 = (): boolean | undefined => this.checkifyoudontwantyourpreparertofileelectronically()

  /**
   * Index 38: m1line1
   */
   m1line1 = (): string | undefined => {
    return undefined
  }

   f38 = (): string | undefined => this.m1line1()

  /**
   * Index 39: m1line2
   */
   m1line2 = (): string | undefined => {
    return undefined
  }

   f39 = (): string | undefined => this.m1line2()

  /**
   * Index 40: m1line3
   */
   m1line3 = (): string | undefined => {
    return undefined
  }

   f40 = (): string | undefined => this.m1line3()

  /**
   * Index 41: m1line4
   */
   m1line4 = (): string | undefined => {
    return undefined
  }

   f41 = (): string | undefined => this.m1line4()

  /**
   * Index 42: m1line5
   */
   m1line5 = (): string | undefined => {
    return undefined
  }

   f42 = (): string | undefined => this.m1line5()

  /**
   * Index 43: m1line6
   */
   m1line6 = (): string | undefined => {
    return undefined
  }

   f43 = (): string | undefined => this.m1line6()

  /**
   * Index 44: m1line7
   */
   m1line7 = (): string | undefined => {
    return undefined
  }

   f44 = (): string | undefined => this.m1line7()

  /**
   * Index 45: m1line8
   */
   m1line8 = (): string | undefined => {
    return undefined
  }

   f45 = (): string | undefined => this.m1line8()

  /**
   * Index 46: m1line9
   */
   m1line9 = (): string | undefined => {
    return undefined
  }

   f46 = (): string | undefined => this.m1line9()

  /**
   * Index 47: m1line10
   */
   m1line10 = (): string | undefined => {
    return undefined
  }

   f47 = (): string | undefined => this.m1line10()

  /**
   * Index 48: m1line11
   */
   m1line11 = (): string | undefined => {
    return undefined
  }

   f48 = (): string | undefined => this.m1line11()

  /**
   * Index 49: m1line15
   */
   m1line15 = (): string | undefined => {
    return undefined
  }

   f49 = (): string | undefined => this.m1line15()

  /**
   * Index 50: m1line16
   */
   m1line16 = (): string | undefined => {
    return undefined
  }

   f50 = (): string | undefined => this.m1line16()

  /**
   * Index 51: m1line17
   */
   m1line17 = (): string | undefined => {
    return undefined
  }

   f51 = (): string | undefined => this.m1line17()

  /**
   * Index 52: m1line18
   */
   m1line18 = (): string | undefined => {
    return undefined
  }

   f52 = (): string | undefined => this.m1line18()

  /**
   * Index 53: m1line19
   */
   m1line19 = (): string | undefined => {
    return undefined
  }

   f53 = (): string | undefined => this.m1line19()

  /**
   * Index 54: m1line20
   */
   m1line20 = (): string | undefined => {
    return undefined
  }

   f54 = (): string | undefined => this.m1line20()

  /**
   * Index 55: m1line21
   */
   m1line21 = (): string | undefined => {
    return undefined
  }

   f55 = (): string | undefined => this.m1line21()

  /**
   * Index 56: m1line22
   */
   m1line22 = (): string | undefined => {
    return undefined
  }

   f56 = (): string | undefined => this.m1line22()

  /**
   * Index 57: m1line23
   */
   m1line23 = (): string | undefined => {
    return undefined
  }

   f57 = (): string | undefined => this.m1line23()

  /**
   * Index 58: m1line24
   */
   m1line24 = (): string | undefined => {
    return undefined
  }

   f58 = (): string | undefined => this.m1line24()

  /**
   * Index 59: m1line26
   */
   m1line26 = (): string | undefined => {
    return undefined
  }

   f59 = (): string | undefined => this.m1line26()

  /**
   * Index 60: m1line27
   */
   m1line27 = (): string | undefined => {
    return undefined
  }

   f60 = (): string | undefined => this.m1line27()

  /**
   * Index 61: m1line28
   */
   m1line28 = (): string | undefined => {
    return undefined
  }

   f61 = (): string | undefined => this.m1line28()

  /**
   * Index 62: Enterspousename
   */
   Enterspousename = (): string | undefined => {
    return undefined
  }

   f62 = (): string | undefined => this.Enterspousename()

  /**
   * Index 63: EnterspouseSocialSecuritynumber
   */
   EnterspouseSocialSecuritynumber = (): string | undefined => {
    return undefined
  }

   f63 = (): string | undefined => this.EnterspouseSocialSecuritynumber()

  /**
   * Index 64: dependent1last
   */
   dependent1last = (): string | undefined => {
    return undefined
  }

   f64 = (): string | undefined => this.dependent1last()

  /**
   * Index 65: dependent2last
   */
   dependent2last = (): string | undefined => {
    return undefined
  }

   f65 = (): string | undefined => this.dependent2last()

  /**
   * Index 66: dependent3last
   */
   dependent3last = (): string | undefined => {
    return undefined
  }

   f66 = (): string | undefined => this.dependent3last()

  /**
   * Index 67: dependent1ssn
   */
   dependent1ssn = (): string | undefined => {
    return undefined
  }

   f67 = (): string | undefined => this.dependent1ssn()

  /**
   * Index 68: dependent2ssn
   */
   dependent2ssn = (): string | undefined => {
    return undefined
  }

   f68 = (): string | undefined => this.dependent2ssn()

  /**
   * Index 69: dependent3ssn
   */
   dependent3ssn = (): string | undefined => {
    return undefined
  }

   f69 = (): string | undefined => this.dependent3ssn()

  /**
   * Index 70: dependent1first
   */
   dependent1first = (): string | undefined => {
    return undefined
  }

   f70 = (): string | undefined => this.dependent1first()

  /**
   * Index 71: dependent2first
   */
   dependent2first = (): string | undefined => {
    return undefined
  }

   f71 = (): string | undefined => this.dependent2first()

  /**
   * Index 72: dependent3first
   */
   dependent3first = (): string | undefined => {
    return undefined
  }

   f72 = (): string | undefined => this.dependent3first()

  /**
   * Index 73: dependent1relationship
   */
   dependent1relationship = (): string | undefined => {
    return undefined
  }

   f73 = (): string | undefined => this.dependent1relationship()

  /**
   * Index 74: dependent2relationship
   */
   dependent2relationship = (): string | undefined => {
    return undefined
  }

   f74 = (): string | undefined => this.dependent2relationship()

  /**
   * Index 75: dependent3relationship
   */
   dependent3relationship = (): string | undefined => {
    return undefined
  }

   f75 = (): string | undefined => this.dependent3relationship()

  /**
   * Index 76: m1line13
   */
   m1line13 = (): string | undefined => {
    return undefined
  }

   f76 = (): string | undefined => this.m1line13()

  /**
   * Index 77: m1line13a
   */
   m1line13a = (): string | undefined => {
    return undefined
  }

   f77 = (): string | undefined => this.m1line13a()

  /**
   * Index 78: m1line13b
   */
   m1line13b = (): string | undefined => {
    return undefined
  }

   f78 = (): string | undefined => this.m1line13b()

  /**
   * Index 79: checkforschedulem1home
   */
   checkforschedulem1home = (): boolean | undefined => {
    return undefined
  }

   f79 = (): boolean | undefined => this.checkforschedulem1home()

  /**
   * Index 80: checkforschedulem1529
   */
   checkforschedulem1529 = (): boolean | undefined => {
    return undefined
  }

   f80 = (): boolean | undefined => this.checkforschedulem1529()

  /**
   * Index 81: checkforschedulels
   */
   checkforschedulels = (): boolean | undefined => {
    return undefined
  }

   f81 = (): boolean | undefined => this.checkforschedulels()

  /**
   * Index 82: m1line14
   */
   m1line14 = (): string | undefined => {
    return undefined
  }

   f82 = (): string | undefined => this.m1line14()

  /**
   * Index 83: m1line12
   */
   m1line12 = (): string | undefined => {
    return undefined
  }

   f83 = (): string | undefined => this.m1line12()

  /**
   * Index 84: m1line29
   */
   m1line29 = (): string | undefined => {
    return undefined
  }

   f84 = (): string | undefined => this.m1line29()


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

const m120 = (info: Information, f1040: F1040): M120 =>
  new M120(info, f1040)

export default m120

