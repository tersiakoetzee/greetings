describe("The greet function", function () {

    it("should greet the name entered", function () {
        let greetings = greetFactory();

        greetings.getName("Marco");
        assert.equal("Marco", greetings.getName());


        greetings.setName("polo");
        assert.equal("polo", greetings.getName());




    });


   

});