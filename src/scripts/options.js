var defaultBudget = require('../data/budget');

document.addEventListener('DOMContentLoaded', restore);

function restore() {
  var form = document.querySelector('form');
  form.addEventListener('submit', save);

  chrome.storage.sync.get(defaultBudget, function(data) {
    form.html.value  = data.html;
    form.image.value = data.image;
    form.css.value   = data.css;
    form.js.value    = data.js;
    form.font.value  = data.font;
    form.video.value = data.video;
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
    font : parseInt(e.target.font.value, 10),
    video: parseInt(e.target.video.value, 10),
    other: parseInt(e.target.other.value, 10)
  };

  budget.total = budget.html + budget.image + budget.css +
    budget.js + budget.font + budget.video + budget.other;

  chrome.storage.sync.set(budget, function() {
    var status = document.querySelector('.status');
    status.style.display = 'inline-block';

    setTimeout(function() {
      status.style.display = 'none';
    }, 750);
  });
}
