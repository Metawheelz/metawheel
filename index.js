import './style.css';

Rebilly.initialize({
  // Use your own publishable key:
  publishableKey: 'pk_sandbox_Lvl5rm8lLrtAV6iSL3CIdYLAburumF4Ld8b1KDs',
});

const form = document.querySelector('form');

Rebilly.on('ready', function () {
  const card = Rebilly.card.mount('#mounting-point');
  //Here you can inspect your first mounted Framepay element
  console.log('💳 Payment card element: ', card);
});

form.onsubmit = async function (e) {
  e.preventDefault();
  e.stopPropagation();
  // create a token from the fields within a form
  try {
    const paymentToken = await Rebilly.createToken(form);
    // Use this paymentToken in your subsequent Rebilly API calls to complete your checkout process
    console.log(paymentToken);
  } catch (error) {
    // Inspect this error to understand why the token creation failed
    console.log('❌ Create token error:', error);
  }
};
