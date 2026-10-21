const channelName = document.getElementById('channelName');
const volumeLevel = document.getElementById('volumeLevel');
const modeText = document.getElementById('modeText');
const items = [...document.querySelectorAll('.focusable')];

let currentIndex = 0;

function updateFocus() {
  items.forEach((item, index) => {
    item.classList.toggle('focused', index === currentIndex);
    item.tabIndex = index === currentIndex ? 0 : -1;
  });
}

function handleSelection() {
  const selected = items[currentIndex];
  if (!selected) return;

  const name = selected.querySelector('strong')?.textContent || 'Item';
  modeText.textContent = `Selecionado: ${name}`;
}

function handleVolume(delta) {
  const currentVolume = Number(volumeLevel.textContent.replace('%', '')) || 32;
  const next = Math.max(0, Math.min(100, currentVolume + delta));
  volumeLevel.textContent = `${next}%`;
}

function handleChannel(delta) {
  const channels = ['TV aberta', 'Canal 2', 'Canal 5', 'ESPN', 'Netflix'];
  const current = channels.indexOf(channelName.textContent);
  const nextIndex = (current + delta + channels.length) % channels.length;
  channelName.textContent = channels[nextIndex];
}

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'ArrowDown') {
    currentIndex = (currentIndex + 1) % items.length;
    updateFocus();
  }

  if (key === 'ArrowUp') {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateFocus();
  }

  if (key === 'Enter' || key === 'OK') {
    handleSelection();
  }

  if (key === 'ArrowRight') {
    handleVolume(5);
  }

  if (key === 'ArrowLeft') {
    handleVolume(-5);
  }

  if (key === 'PageDown') {
    handleChannel(1);
  }

  if (key === 'PageUp') {
    handleChannel(-1);
  }

  if (key === 'Escape') {
    modeText.textContent = 'Navegação';
  }
});

updateFocus();
