const imageBlock = document.querySelector('.image-block');
const imageAfterWrap = document.querySelector('.image-after');
const imageAfter = document.querySelector('.image-after img');
const rangeBtn = document.querySelector('#rangeBtn');

let wrapperWidth = imageBlock.clientWidth;

imageAfter.style.width = wrapperWidth + 'px';
console.log(wrapperWidth);

let updateWidth = () => {
    let rangeValue = rangeBtn.value;
    console.log(rangeValue);
    imageAfterWrap.style.width = `${rangeValue}%`;
}

rangeBtn.addEventListener('input', updateWidth);
updateWidth();