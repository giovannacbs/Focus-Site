document.getElementById('focus-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const dateInput = document.getElementById('date').value;
  const status = document.getElementById('status');

  if (!dateInput) {
    status.textContent = 'Por favor, selecione uma data.';
    return;
  }

  const formattedDate = dateInput.replace(/-/g, '');
  const url = `https://focus-project-ix6q.onrender.com/get-excel?date=${formattedDate}`;

  status.textContent = 'Baixando...';

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro ao baixar o arquivo.");

    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${formattedDate}.xlsx`;
    link.click();

    status.textContent = 'Download iniciado com sucesso!';
  } catch (err) {
    status.textContent = 'Erro ao tentar baixar o arquivo.';
    console.error(err);
  }
});
