export interface GranteeModel {
  //information of applicant
  area: string;
  surname: string;
  firstName: string;
  middleName: string;
  relationshipToAfpMember: string;
  currentAddress: string;
  provincialAddress: string;
  phoneNo: string;
  cellPhoneNo: string;
  emailAddress: string;
  birthDate: string;
  birthPlace: string;
  sex: string;
  civilStatus: string;
  religion: string;
  schoolIntendedToEnrollIn: string;
  schoolAddress: string;
  educationLevel: string;
  yearLevel: string;
  course: string;

  //information of AFP/CAA member
  afp_surname: string;
  afp_firstName: string;
  afp_middleInitial: string;
  afp_rank: string;
  afp_SN: string;
  afp_branchOfService: string;
  afp_militaryStatus: string;
  afp_unitAssignment: string;
  afp_currentAddress: string;
  afp_phoneNo: string;
  afp_cellPhoneNo: string;
  afp_emailAddress: string;
  afp_birthDate: string;
  afp_birthPlace: string;
  afp_sex: string;
  afp_civilStatus: string;
  afp_nrOfDependents: string;
  afp_nameOfLegalDependents: string;
  afp_dependentsBirthdate: string;
  afp_dependentsYearLevel: string;
  afp_educationalProgramAvailed: string;

  //information of Applicant's guardian
  guardian_surname: string;
  guardian_firstName: string;
  guardian_MiddleName: string;
  guardian_relationshipToApplicant: string;
  guardian_currentAddress: string;
  guardian_provincialAddress: string;
  guardian_emailAddress: string;
  guardian_cellPhoneNo: string;
  guardian_phoneNo: string;

  signatureOfApplicant: string;
  signatureOfAfporGuardian: string;

  nameOfAfpPersonnel:string;
  dateReceived: string;
}
