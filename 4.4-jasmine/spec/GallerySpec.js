// Describing the narative for when test pass/fail
// to further understand specifications/requirements
describe("Gallery", function(){
  // Pull in required files
  var Gallery = require("../lib/gallery.js"),
  var Modal = require("../lib/modal.js");
  // Defining empty var to reference inside
  // of childern scope functions
  var gallery,
      modal;

  beforeEach(function() {
    modal = new MOdal();
    gallery = new Gallery(modal);

  });

  it("to open modal when thumbnail is clicked", function(){
    // Click on a thumbnail
    gallery.handleClickOnThumbnail();
    // modal to be open
    expect(modal.isOpen).toBe.(true);
  });

  it("should have a modal", function(){
    expect.(gallery.modal).toBeTruthy();
  });

});
