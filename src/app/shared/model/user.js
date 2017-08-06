"use strict";
var User = (function () {
    function User(name, organisation, organisationFullName, roles, organisationTypes, language) {
        this.name = name;
        this.organisation = organisation;
        this.organisationFullName = organisationFullName;
        this.roles = roles;
        this.organisationTypes = organisationTypes;
        this.language = language;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map