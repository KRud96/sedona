const hotelsList = document.querySelector(".hotels-list");
const hotelItem = document.querySelector(".hotels-item");
const numberFind = document.getElementById("number-find");
let resultArr = [];

function drawHotelItem(item) {
    const hotel = hotelItem.cloneNode(true);
    const hotelAvatar = hotel.querySelector(".hotels-avatar");
    const hotelName = hotel.querySelector(".hotel-name");
    const hotelType = hotel.querySelector(".hotel-type");
    const hotelPrice = hotel.querySelector(".hotel-price");
    const raitingStars = hotel.querySelector(".raiting-stars");
    const raitingNumber = hotel.querySelector(".raiting-number");
    const infrastructure = hotel.querySelector(".infrastructure");

    hotelAvatar.children[0].src = item.avatar;
    hotelName.textContent = item.name;
    hotelType.textContent = item.type;
    hotelPrice.textContent = item.price;
    if (item.raiting > 0 && item.raiting < 20) {
        removeStars(4, raitingStars);
    } else if (item.raiting >= 20 && item.raiting < 40) {
        removeStars(3, raitingStars);
    } else if (item.raiting >= 40 && item.raiting < 60) {
        removeStars(2, raitingStars);
    } else if (item.raiting >= 60 && item.raiting < 80) {
        removeStars(1, raitingStars);
    }

    raitingNumber.textContent = "Рейтинг: " + item.raiting;
    item.infrastructure.forEach((element, index) => {
        infrastructure.children[index].textContent = element;
    });

    hotel.classList.remove("hidden");
    hotelsList.appendChild(hotel);
}

function removeStars(count, raitingStars) {
    for (i = 0; i < count; i++) {
        raitingStars.children[i].classList.add('hidden');
    }
}

numberFind.textContent = hotels.length;
resultArr = hotels;
hotels.forEach(drawHotelItem);
hotelsList.children[0].remove();