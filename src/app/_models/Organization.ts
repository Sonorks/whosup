import { User } from "./User";
import { Company } from "./Company";
import { Investor } from "./Investor";
import { Startup } from "./Startup";
import { RDGroup } from "./RDGroup";

export class Organization{
    id:Number;
    type:String;
    organizationName:String;
    contactName:String;
    contactLastname:String;
    contactPhone:String;
    contactMail:String;
    contactSkype:String;
    contactLinkedin:String;
    contactPosition:String;
    goals:String;
    devStage:String;
    ipProtection:String;
    adminId:User;
    companyId:Company;
    investorId:Investor;
    startupId:Startup;
    rdgroupId:RDGroup;
}