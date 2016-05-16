describe("Modal",function(){
  var Modal = require("../lib/modal.js")

  var modal;

  beforeEach(function(){
    modal = new MOdal();
  });

  it("should be hidden by default", function(){
    expect(modal.isOpen).toBeFalsy();
  });

  it("should set isOpen to true when called",function(){
    beforeEach(function(){
      modal.open();

    });
    expect(modal.isOpen).toBe(modal);
  });

  it("should set isOpen to false when closed", function(){
    modal.close();
    expect(modal.isOpen).toBe(false);
  })
});
