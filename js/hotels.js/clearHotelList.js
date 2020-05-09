function clearHotelList() {
    const hotelsListForDelete = document.querySelector(".hotels-list");
    for(let i = 0; i < hotelsListForDelete.children.length; i++){
        hotelsListForDelete.children[i].remove();
        i--;
    }
        
    
}