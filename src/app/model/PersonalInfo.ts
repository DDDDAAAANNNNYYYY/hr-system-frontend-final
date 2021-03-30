import { FormControl } from "@angular/forms";
import { int } from "aws-sdk/clients/datapipeline";

export type PersonalInfo={
    name: string;
    preferredName: string;
    avatar: String;
    dob: Date;
    age: string;
    gender: string;
    ssn: string;

    primaryAddress: string;
    secondaryAddress: string;

    personalEmail: string;
    email: string;
    cellPhone;
    workPhone;
   
    isCitizenOrPerm: string;
    greenCardOrCitizen: string;
    workAuth: string;
    workAuthOtherStart: Date;
    workAuthOtherEnd: Date;
    workAuthFile: File;
    employmentStart: Date;
    employmentEnd: Date;
    employmentTitle: string;
    contacts:[];

    // hasDriverLicense: string;
    // driverLicenseNumber: string;
    // driverLicenseExpirationDate: Date;
    // driverLicenseCopy: File;
    // referred: string;
    // referFirstName: string;
    // referLastName: string;
    // referMiddleName: string;
    // referPhone: number;
    // referAddress: string;
    // referEmail: string;
    // referRelationship: string;
    // constructor(){
    //     this.name = "stan";
    //     this.primaryAddress = "123beijing road";
    //     this.personalEmail = "ddd@gmail.com";
    // }


}