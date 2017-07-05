// Selecting all Buttons with data-toggle="modal", i.e. the modal triggers on the page
var modalTriggers = document.querySelectorAll('[data-toggle="modal"]');

// Getting the target modal of every button and applying listeners
for (var i = modalTriggers.length - 1; i >= 0; i--) {
  var t = modalTriggers[i].getAttribute('data-target');
  var id = '#' + modalTriggers[i].getAttribute('id');

  modalProcess(t, id);
}
// if(document.querySelector(modalTriggers[0].getAttribute('data-target')).hasAttribute("open")){
//   console.log("hey");
// }

/**
 * It applies the listeners to modal and modal triggers
 * @param  {string} selector [The Dialog ID] -> navIntro
 * @param  {string} button   [The Dialog triggering Button ID]
 */
function modalProcess(selector, button) {
  var dialog = document.querySelector(selector);
  var showDialogButton = document.querySelector(button);

  if (dialog) {
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
  }
}

$(document).ready(()=>{
  if(window.innerWidth >660 && window.innerHeight >560){
    $('#show-dialog').trigger('click');
  }
});

function closeModal(){
  if(document.querySelector(modalTriggers[0].getAttribute('data-target')).hasAttribute("open")){
    document.querySelector(modalTriggers[0].getAttribute('data-target')).close();
    return true;
  }
  return false;
}
