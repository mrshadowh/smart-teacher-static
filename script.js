let currentStage = 'primary';

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentStage = chip.dataset.stage;
  });
});

document.getElementById('imageUpload').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById('preview').innerHTML = `<img src="${reader.result}" />`;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('solveBtn').addEventListener('click', () => {
  const grade = document.getElementById('grade').value;
  const file = document.getElementById('imageUpload').files[0];
  
  let answer = `تم حل السؤال في ${currentStage} - السنة ${grade}`;
  if (file) {
    answer += ` (صورة: ${file.name})`;
  }
  
  document.getElementById('answer').textContent = answer;
});
