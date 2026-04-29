const copyButton = document.getElementById('copyButton');
const snsText = document.getElementById('snsText');
const copyStatus = document.getElementById('copyStatus');

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(snsText.value.trim());
    copyStatus.textContent = 'SNS投稿文面をコピーしました。';
  } catch (error) {
    copyStatus.textContent = 'コピーに失敗しました。手動でコピーしてください。';
  }
});
