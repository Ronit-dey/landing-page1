
function showAlert() {
  alert("Thank you for clicking the button!");
}

document.addEventListener("DOMContentLoaded", function(){
  const ratingForm = document.getElementById('reviewForm');
  const reviewsContainer = document.getElementById('reviewsContainer');

  ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('name').value;
    const selectedRating = Array.prototype.filter.call(document.getElementsByName('rating'), (radio) => radio.checked)[0].value;
    const userComment = document.getElementById('comment').value;

    const reviewHTML = `
      <div class="review">
        <h4>${userName}</h4>
        <p>Rating: ${selectedRating} out of 5</p>
        <p>${userComment}</p>
      </div>
    `;
    reviewsContainer.innerHTML = reviewHTML + reviewsContainer.innerHTML;

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    document.getElementsByName('rating').forEach((radio) => radio.checked = false);
  });
});