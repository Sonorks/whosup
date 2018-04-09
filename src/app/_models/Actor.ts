import { Organization } from "./Organization";
import { Company } from "./Company";
import { RDGroup } from "./RDGroup";
import { Startup } from "./Startup";
import { Investor } from "./Investor";

export class Actor {
    organization:Organization;
    company:Company;
    startup:Startup;
    investor:Investor;
    rdgroup:RDGroup;
    type:number;
}