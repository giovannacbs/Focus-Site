function formatDateLocal(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// last friday according to today's date
function getLastFriday() {
  const today = new Date();
  const day = today.getDay(); 
  const offset = (day >= 5) ? day - 5 + 7 : day + 2;
  const lastFriday = new Date(today);
  lastFriday.setDate(today.getDate() - offset);
  return lastFriday;
}

window.addEventListener("DOMContentLoaded", () => {
  const minDate = new Date('2022-01-01');
  const maxDate = getLastFriday();

  flatpickr("#date", {
    dateFormat: "Y-m-d",
    minDate: minDate,
    maxDate: maxDate,
    locale: 'pt',
    disable: [
      function(date) {
        return date.getDay() !== 5; // only fridays
      }
    ],
  });
});

// download 
document.getElementById('focus-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const dateInput = document.getElementById('date').value;
  const status = document.getElementById('status');

  if (!dateInput) {
    status.textContent = 'Por favor, selecione uma sexta-feira.';
    return;
  }

  const formattedDate = dateInput.replace(/-/g, '');
  const url = `https://focus-project-ix6q.onrender.com/get-excel?date=${formattedDate}`;

  status.textContent = 'Downloading...';

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Download was not possible.");

    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `focus_${formattedDate}.xlsx`;
    link.click();

    status.textContent = 'Your download started!';
  } catch (err) {
    status.textContent = 'That was a mistake during the download.';
    console.error(err);
  }
});
