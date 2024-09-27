const stripe = Stripe(
  'pk_test_51PyBa32N7aSVWMclnz2UOAh90YOGJMh4FUS4OK6BUU4tHQ2gIthcKEtSffJuP4FGKAmKdG96ykKstNis1tksdZRt00yBXgAQG7',
);

const bookTour = async (tourId) => {
  try {
    // 1) Get the Checkout session from the API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout/${tourId}`,
    );

    // Log the session object to check if it's working
    console.log('Checkout session:', session);

    // 2) Comment out the redirect for now
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.error(err);
    showAlert('error', err);
  }
};

// Select the 'Book tour' button and add a click event listener
const bookBtn = document.getElementById('book-tour');
if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default form submission (if any)
    e.target.textContent = 'Processing...';

    // Get the tour ID from the button's data attribute
    const { tourId } = e.target.dataset;

    // Call the bookTour function with the tour ID
    bookTour(tourId);
  });
}
