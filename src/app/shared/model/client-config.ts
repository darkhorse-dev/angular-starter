export class ClientConfig {
  changePasswordUrl:string;
  homePageUrl:string;

  constructor(changePasswordUrl:string, homePageUrl:string) {
    this.changePasswordUrl = changePasswordUrl;
    this.homePageUrl = homePageUrl;
  }

}
