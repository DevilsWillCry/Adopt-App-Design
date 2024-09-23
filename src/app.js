function toggleHeart(button) {
    const heartIcon = button.querySelector('i');
    console.log(heartIcon);
    heartIcon.classList.toggle('fa-regular');
    heartIcon.classList.toggle('fa-solid')
}
