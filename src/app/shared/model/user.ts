export class User {
  name:string;
  organisation:string;
  organisationFullName:string;
  roles: string[];
  organisationTypes: string[];
  language: string;

  constructor(name:string, organisation:string, organisationFullName: string,
              roles :string[], organisationTypes :string[], language:string) {
    this.name = name;
    this.organisation = organisation;
    this.organisationFullName = organisationFullName;
    this.roles = roles;
    this.organisationTypes = organisationTypes;
    this.language = language;
  }
}
