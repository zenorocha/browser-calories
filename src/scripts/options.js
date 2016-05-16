var defaultBudget = require('../data/budget');

// Firefox has no sync yet. Cue: https://bugzilla.mozilla.org/show_bug.cgi?id=1220494
var chromeStorage = chrome.storage.sync || chrome.storage.local; 

document.addEventListener('DOMContentLoaded', restore);

function restore() {
  var form = document.querySelector('form');
  form.addEventListener('submit', save);

  chromeStorage.get(defaultBudget, function(data) {
    form.html.value  = data.html;
    form.image.value = data.image;
    form.css.value   = data.css;
    form.js.value    = data.js;
    form.other.value = data.other;
  });
}

function save(e) {
  e.preventDefault();

  var budget = {
    html : parseInt(e.target.html.value, 10),
    image: parseInt(e.target.image.value, 10),
    css  : parseInt(e.target.css.value, 10),
    js   : parseInt(e.target.js.value, 10),
    other: parseInt(e.target.other.value, 10)
  };

  budget.total = budget.html + budget.image + budget.css + budget.js + budget.other;

  chromeStorage.set(budget, function() {
    var status = document.querySelector('.status');
    status.style.display = 'inline-block';

    setTimeout(function() {
      status.style.display = 'none';
    }, 750);
  });
}
