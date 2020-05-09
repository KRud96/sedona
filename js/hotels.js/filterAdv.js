const checkboxTypeHouseList = document.querySelectorAll(".checkbox-type");
const buttonShow = document.querySelector(".button-show");
const checkboxInfrastructureList = document.querySelectorAll(".checkbox-infrastructure");
//const numberFind = document.getElementById("number-find");
const buttonReduce = document.querySelector('.button-reduce');
const buttonIncrease = document.querySelector('.button-increase');

let chooseCheckboxArr = [];

checkboxInfrastructureList.forEach(e => {
    const name = e.name;
    e.addEventListener('change', () => {
        e.checked ? chooseCheckboxArr.push(e.name) : chooseCheckboxArr = chooseCheckboxArr.filter(item => {
            if (item !== name) {
                return item;
            }
        });
    })

})

function viewFilterArray(array) {
    numberElem = 0;
    const resultArrInfr = array.filter(element => {
        element.infrastructure.forEach(item => {
            if (chooseCheckboxArr.includes(item)) {
                numberElem++;
            }
        });
        if (chooseCheckboxArr.length === numberElem) {
            numberElem = 0;
            return element;
        }
        numberElem = 0;
    });
    return resultArrInfr;
}

function filterAdv() {
    buttonReduce.classList.add('hidden');
    buttonIncrease.classList.add('hidden');

    let resultArrType = [];
    let resultArrInfr = [];
    let notChooseType = 0;
    // фильтруем отели из массива отелей в зависимости от проставленных галочек типа жилья
    checkboxTypeHouseList.forEach((element) => {
        if (element.checked) {
            filterArrType = hotels.filter((e) => {
                return e.type == element.name;
            });
            resultArrType = [].concat(resultArrType, filterArrType);

        } else {
            notChooseType++;
        }
    });
    // если не проставлена ни одна галочка типа жилья, тогда из массива отелей отбираем подходящие отели
    // если проставлена хоть одна галочка, тогда из массива с типом жилья выбираем подходящие
    if (notChooseType === 3) {
        resultArrInfr = viewFilterArray(hotels);
    } else {
        resultArrInfr = viewFilterArray(resultArrType);
    }
    clearHotelList(); //удаляем все элементы li из списка отелей (ul)
    if (notChooseType === 3 && chooseCheckboxArr.length === 0) {
        numberFind.textContent = hotels.length;
        resultArr = hotels;
        hotels.forEach(drawHotelItem);
        console.log(resultArr);
    } else if (notChooseType !== 3 && chooseCheckboxArr.length === 0) {
        numberFind.textContent = resultArrType.length;
        resultArrType.forEach(drawHotelItem);
        resultArr = resultArrType;
        console.log(resultArr);
    } else {
        numberFind.textContent = resultArrInfr.length;
        resultArrInfr.forEach(drawHotelItem);
        resultArr = resultArrInfr;
        console.log(resultArr);
    }
}

buttonShow.addEventListener('click', filterAdv);

console.log(resultArr);