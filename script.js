console.log("Website running");

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;
    
    console.log('Booking:', { name, date, time, service });
    
    // Show success feedback
    const card = document.querySelector('.booking-card');
    card.classList.add('success');
    
    const btn = document.querySelector('.btn-submit');
    btn.innerHTML = '<span>✓ Booking Confirmed!</span>';
    btn.style.background = 'linear-gradient(135deg, #4ecca3 0%, #45b393 100%)';
    
    // Reset form after 3 seconds
    setTimeout(() => {
        this.reset();
        btn.innerHTML = '<span>Book Now</span> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        btn.style.background = '';
        card.classList.remove('success');
    }, 3000);
});
