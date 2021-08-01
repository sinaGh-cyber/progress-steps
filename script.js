const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progressBar = document.getElementById('progress');
let curentCircle = 1;

const nextBtnHandler = () => {
  curentCircle++;

  if (curentCircle > circles.length) {
    curentCircle = circles.length;
  }
  updateUi();
};

const prevBtnHandler = () => {
  curentCircle--;

  if (curentCircle < 1) {
    curentCircle = 1;
  }
  updateUi();
};

const updateUi = () => {
  circles.forEach((circle, idx) => {
    if (idx < curentCircle) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  progressBar.style.width = `${(curentCircle - 1) * 33.3}%`;

  if (curentCircle === circles.length) {
    nextBtn.disabled = true;
  } else if (curentCircle === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
};

prevBtn.addEventListener('click', prevBtnHandler);
nextBtn.addEventListener('click', nextBtnHandler);
