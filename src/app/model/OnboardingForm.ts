import { FormArray } from "@angular/forms";

export class OnboardingForm {
    firstName: string;
    lastName: string;
    middleName: string;
    preferredName: string;
    avatar: string;
    address: string;
    cellPhone: string;
    workPhone: string;
    email: string;
    SSN: string;
    birthday: Date;
    gender: string;
    isCitizenOrPerm: string;
    greenCardOrCitizen: string;
    workAuth: string;
    workAuthOther: string;
    workAuthOtherStart: Date;
    workAuthOtherEnd: Date;
    workAuthFile: string;
    hasDriverLicense: string;
    driverLicenseNumber: string;
    driverLicenseExpirationDate: Date;
    driverLicenseCopy: string;
    referred: string;
    referFirstName: string;
    referLastName: string;
    referMiddleName: string;
    referPhone: number;
    referAddress: string;
    referEmail: string;
    referRelationship: string;
    emergencyContacts: FormArray;


    constructor() {
    }
}