document.addEventListener('DOMContentLoaded', restoreBudget);

var defaultBudget = {
  "html"  : 66000,
  "image" : 1463000,
  "css"   : 78000,
  "js"    : 360000,
  "font"  : 124000,
  "video" : 200000,
  "other" : 4000,
  "total" : 2295000
};

function restoreBudget() {
  var form = document.querySelector('form');
  var reset = document.querySelector('#reset');

  form.addEventListener('submit', saveBudget);
  reset.addEventListener('click', resetBudget);

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

function saveBudget(e) {
  e.preventDefault();

  var budget = {
    html  : parseInt(e.target.html.value, 10),
    image : parseInt(e.target.image.value, 10),
    css   : parseInt(e.target.css.value, 10),
    js    : parseInt(e.target.js.value, 10),
    font  : parseInt(e.target.font.value, 10),
    video : parseInt(e.target.video.value, 10),
    other : parseInt(e.target.other.value, 10)
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

function resetBudget() {
  var form = document.querySelector('form');

  form.html.value  = defaultBudget.html;
  form.image.value = defaultBudget.image;
  form.css.value   = defaultBudget.css;
  form.js.value    = defaultBudget.js;
  form.font.value  = defaultBudget.font;
  form.video.value = defaultBudget.video;
  form.other.value = defaultBudget.other;
}
