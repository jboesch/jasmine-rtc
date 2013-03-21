// If you view this file, you're cheating!
describe("Spaceship", function() {

    var spaceShip;

    beforeEach(function() {
        spaceShip = new Spaceship();
    });

    describe('when a crew member is added', function(){

        it('should add a crew member', function(){
            spaceShip.addCrewMember('jordan boesch');
            expect(spaceShip.getCrewMembers()).toEqual(['jordan boesch']);
        });

    });

    describe('rendering crew members', function(){

        it('should render crew members to a list', function(){
            spaceShip.addCrewMember('bill nye');
            spyOn(spaceShip, 'renderCrewMemberToList');
            spaceShip.renderCrewMembers();
            expect(spaceShip.renderCrewMemberToList).toHaveBeenCalledWith('bill nye');
            expect(spaceShip.renderCrewMemberToList.callCount).toEqual(1);
        });

    });

    describe('renderCrewMemberToList', function(){

        it('should add to our list', function(){
            var ul = affix('ul');
            spyOn(spaceShip, 'getListEl').andReturn(ul);
            spaceShip.renderCrewMemberToList('bill nye');
            expect(ul.html()).toEqual('<li>bill nye</li>');
        });

    });

});