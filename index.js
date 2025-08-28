// Utility selectors
const el = (sel, root = document) => root.querySelector(sel);
const cardsContainer = el('.cards');
const coinEl = el('#coin-count');
const heartEl = el('#heart-count');
const copyEl = el('#copy-count');
const historyList = el('#history-list');
const COST_PER_CALL = 20;

// Event delegation for all cards
cardsContainer.addEventListener('click', async (e) => {
  const card = e.target.closest('.service-card');
  if (!card) return;

  // Heart
  if (e.target.closest('.heart-btn')) {
    const current = parseInt(heartEl.innerText) || 0;
    heartEl.innerText = current + 1;
    return;
  }

  // Copy
  if (e.target.closest('.copy-btn')) {
    const num = card.dataset.number || '';
    const current = parseInt(copyEl.innerText) || 0;
    copyEl.innerText = current + 1;

    try {
      if (navigator.clipboard && num) {
        await navigator.clipboard.writeText(num);
        alert(`ওকে কিক্ল করলে: ${num} নম্বরটি কপি হয়ে যাবে!`);
      }
    } catch (_) {
      alert("Copy failed");
    }
    return;
  }

  // Call
  if (e.target.closest('.call-btn')) {
    e.preventDefault();
    const available = parseInt(coinEl.innerText) || 0;
    if (available < COST_PER_CALL) {
      alert('আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০টি কয়েন লাগবে।');
      return;
    }
    coinEl.innerText = available - COST_PER_CALL;

    // alert box with title + number
    alert(`${card.dataset.title}${card.dataset.number}...`);

    addToHistory(card.dataset.title, card.dataset.number);
  }
});


// Add item to history section
function addToHistory(title = 'Unknown', number = '') {
  const item = document.createElement('div');
  item.className = 'flex items-center justify-between bg-[#FAFAFA] p-5 my-4 rounded-lg';

  const timeStr = new Date().toLocaleString('bn-BD', { hour12: false });

  item.innerHTML = `
    <div>
      <p class="text-xl font-semibold">${sanitize(title)}</p>
      <p>${sanitize(number)}</p>
    </div>
    <div class="text-right">
      <p>${timeStr}</p>
    </div>
  `;
  historyList.prepend(item);
}

// Clear history
el('#clear-history').addEventListener('click', (e) => {
  e.preventDefault();
  historyList.innerHTML = '';
});

// Simple sanitizer
function sanitize(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}
