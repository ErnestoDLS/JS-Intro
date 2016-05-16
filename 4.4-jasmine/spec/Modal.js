
function Modal(){
  var selector = "[data-js='modal']";
  var modal = this;
  modal.isOpen = false;

  modal.open = function(){
    modal.isOpen = true;
    $(modal.selector).addClass("modal--hide", !modal.isOpen);

  }

  modal.setup = function(){
    $(modal.selector).addClass("modal--hide", !modal.isOpen);
  }
}

module.exports = Modal;
