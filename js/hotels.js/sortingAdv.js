const buttonSortCost = document.querySelector('.button-cost');
const buttonSortType = document.querySelector('.button-type');
const buttonSortRaiting = document.querySelector('.button-raiting');

let sortArr = [];

function sortingAdv(enterArray) {
    const changeArr = enterArray.sort((a, b) => {
        return b.raiting - a.raiting;
    });
    return changeArr;
}

function sortingPriceAdv(enterArray) {
    const changeArr = enterArray.sort((a, b) => {
        return b.price - a.price;
    });
    return changeArr;
}

function sortingTypeAdv(enterArray) {
    const changeArr = enterArray.sort((a, b) => {
        return b.type - a.type;
    });
    return changeArr;
}

buttonSortCost.addEventListener('click', () => {
    sortArr = sortingAdv(resultArr);
    buttonIncrease.classList.add('hidden');
    buttonReduce.classList.remove('hidden');
    clearHotelList();
    sortArr.forEach(drawHotelItem);
});

buttonSortType.addEventListener('click', () => {
    sortArr = sortingAdv(resultArr);
    buttonIncrease.classList.add('hidden');
    buttonReduce.classList.remove('hidden');
    clearHotelList();
    sortArr.forEach(drawHotelItem);
});

buttonSortRaiting.addEventListener('click', () => {
    sortArr = sortingAdv(resultArr);
    buttonIncrease.classList.add('hidden');
    buttonReduce.classList.remove('hidden');
    clearHotelList();
    sortArr.forEach(drawHotelItem);
});

buttonReduce.addEventListener('click', () => {
    buttonReduce.classList.add('hidden');
    buttonIncrease.classList.remove('hidden');
    sortArr.reverse();
    clearHotelList();
    sortArr.forEach(drawHotelItem);

});
buttonIncrease.addEventListener('click', () => {
    buttonIncrease.classList.add('hidden');
    buttonReduce.classList.remove('hidden');
    sortArr.reverse();
    clearHotelList();
    sortArr.forEach(drawHotelItem);

});