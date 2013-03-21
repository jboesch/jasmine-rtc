function Spaceship(){
    this.crewMembers = [];
}

Spaceship.prototype = {
    addCrewMember: function(crewMember){
        this.crewMembers.push(crewMember);
    },
    getCrewMembers: function(){
        return this.crewMembers;
    },
    renderCrewMembers: function(){
        this.crewMembers.forEach(function(member){
            this.renderCrewMemberToList(member);
        }, this);
    },
    renderCrewMemberToList: function(member){
        this.getListEl().append('<li>' + member + '</li>');
    },
    getListEl: function(){
        return $('#my-list');
    }
};