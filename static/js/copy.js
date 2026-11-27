document.addEventListener('click', function (event) {
  var btn = event.target.closest && event.target.closest('.copy-btn');
  if (!btn) return;

  var code = btn.parentElement && btn.parentElement.querySelector('code');
  if (!code) return;

  navigator.clipboard.writeText(code.textContent).then(function () {
    btn.textContent = 'copied';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.textContent = 'copy';
      btn.classList.remove('copied');
    }, 1500);
  });
});
