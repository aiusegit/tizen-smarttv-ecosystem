const navItems = [...document.querySelectorAll('.nav-item')];
const contentItems = [...document.querySelectorAll('.media-card')];
const actionButtons = [...document.querySelectorAll('.primary-btn, .secondary-btn')];
const controlButtons = [...document.querySelectorAll('.control-btn')];
const allFocusable = [...navItems, ...contentItems, ...actionButtons, ...controlButtons];

const channelValue = document.getElementById('channelValue');
const volumeValue = document.getElementById('volumeValue');
const playerTitle = document.getElementById('playerTitle');
const progressFill = document.getElementById('progressFill');
const timeCurrent = document.getElementById('timeCurrent');
const timeTotal = document.getElementById('timeTotal');

const channels = ['CineMax', 'SportTV', 'News24', 'MovieBox'];
const videos = ['Blue Horizon', 'Night Circuit', 'City Pulse'];

let currentIndex = 0;
let currentChannel = 0;
let currentVolume = 58;
let progressPercent = 44;
let playing = true;

function updateFocus() {
  allFocusable.forEach((item, index) => {
    item.classList.toggle('focused', index === currentIndex);
    item.tabIndex = index === currentIndex ? 0 : -1;
  });
}

function syncTimeDisplay() {
  const minutes = Math.floor(progressPercent / 100 * 100);
  const currentMinutes = Math.min(99, Math.max(0, Math.round((minutes * 100) / 100)));
  const totalMinutes = 100;
  timeCurrent.textContent = `00:${String(Math.min(currentMinutes, 59)).padStart(2, '0')}`;
  timeTotal.textContent = `01:${String(totalMinutes).padStart(2, '0')}`;
  progressFill.style.width = `${progressPercent}%`;
}

function updateVolumeAndChannel() {
  channelValue.textContent = channels[currentChannel];
  volumeValue.textContent = `${currentVolume}%`;
}

function nextFocus(direction) {
  const maxIndex = allFocusable.length - 1;
  if (direction === 'next') {
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
  } else {
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
  }
  updateFocus();
}

function selectCurrentItem() {
  const currentItem = allFocusable[currentIndex];
  if (!currentItem) return;

  const behavior = currentItem.dataset.role;

  if (behavior === 'nav') {
    const label = currentItem.textContent.trim();
    playerTitle.textContent = label;
  }

  if (behavior === 'content') {
    const title = currentItem.querySelector('strong')?.textContent || 'Destaque';
    playerTitle.textContent = title;
  }

  if (behavior === 'action') {
    const label = currentItem.textContent.trim();
    playerTitle.textContent = label === 'Assistir' ? 'Assistindo agora' : 'Detalhes do conteúdo';
  }

  if (behavior === 'control') {
    const label = currentItem.textContent.trim();
    if (label.includes('▶')) {
      playing = true;
      playerTitle.textContent = videos[currentChannel % videos.length];
    }
    if (label.includes('II')) {
      playing = false;
      playerTitle.textContent = 'Pausado';
    }
    if (label.includes('Vol')) {
      currentVolume = Math.max(0, Math.min(100, currentVolume + 8));
      updateVolumeAndChannel();
    }
    if (label.includes('◀')) {
      currentChannel = (currentChannel - 1 + channels.length) % channels.length;
      updateVolumeAndChannel();
    }
    if (label.includes('▶') && currentItem.textContent.trim() === '▶') {
      currentChannel = (currentChannel + 1) % channels.length;
      updateVolumeAndChannel();
    }
  }
}

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'ArrowDown' || key === 'ArrowRight') {
    nextFocus('next');
  }

  if (key === 'ArrowUp' || key === 'ArrowLeft') {
    nextFocus('prev');
  }

  if (key === 'Enter' || key === ' ') {
    selectCurrentItem();
  }

  if (key === 'PageDown') {
    currentVolume = Math.max(0, currentVolume - 5);
    updateVolumeAndChannel();
  }

  if (key === 'PageUp') {
    currentVolume = Math.min(100, currentVolume + 5);
    updateVolumeAndChannel();
  }

  if (key === 'Home') {
    currentIndex = 0;
    updateFocus();
  }
});

updateFocus();
updateVolumeAndChannel();
syncTimeDisplay();
