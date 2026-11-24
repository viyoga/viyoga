(function () {
  var KEY = 'viyoga:last:';

  function read(key) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return null;
      var rec = JSON.parse(raw);
      return rec && rec.path ? rec : null;
    } catch (e) {
      return null;
    }
  }

  var head = document.querySelector('[data-reading-novel]');
  if (head) {
    var novelPath = head.getAttribute('data-reading-novel');
    if (novelPath) {
      try {
        localStorage.setItem(KEY + novelPath, JSON.stringify({
          path: head.getAttribute('data-reading-path') || '',
          label: head.getAttribute('data-reading-label') || '',
          number: parseInt(head.getAttribute('data-reading-number'), 10) || 0,
          total: parseInt(head.getAttribute('data-reading-total'), 10) || 0
        }));
      } catch (e) {}
    }
  }

  var links = document.querySelectorAll('[data-resume-novel]');
  for (var i = 0; i < links.length; i++) {
    var el = links[i];
    var rec = read(KEY + el.getAttribute('data-resume-novel'));
    if (!rec) continue;

    var resumeLabel = rec.number ? 'Ch. ' + rec.number : rec.label;
    var card = el.closest ? el.closest('.novel-card') : null;

    if (card) {
      var note = document.createElement('div');
      note.className = 'novel-resume';
      note.textContent = 'continue ' + resumeLabel;
      var summary = card.querySelector('.novel-summary');
      if (summary) summary.insertAdjacentElement('afterend', note); else card.appendChild(note);
    } else {
      var label = el.querySelector('[data-resume-label]');
      if (label) label.textContent = 'continue ' + resumeLabel;
      el.setAttribute('href', rec.path);
      el.setAttribute('title', 'Continue ' + resumeLabel);
    }
  }
})();
