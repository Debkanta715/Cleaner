document.addEventListener('DOMContentLoaded', () => {
    const calendarDates = document.getElementById('calendar-dates');
    const currentMonthElement = document.getElementById('current-month');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const timeSlots = document.getElementById('time-slots');
    const selectedDateElement = document.getElementById('selected-date').querySelector('span');
    const selectedTimeElement = document.getElementById('selected-time').querySelector('span');
    const confirmBookingBtn = document.getElementById('confirm-booking');

    let currentDate = new Date();
    let selectedDate = null;
    let selectedTime = null;

    // Generate time slots
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 8; hour <= 17; hour++) {
            slots.push(`${hour}:00`);
            slots.push(`${hour}:30`);
        }
        return slots;
    };

    // Render time slots
    const renderTimeSlots = () => {
        timeSlots.innerHTML = '';
        const slots = generateTimeSlots();
        
        slots.forEach(slot => {
            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot';
            timeSlot.textContent = slot;
            
            // Randomly disable some time slots for demo
            if (Math.random() < 0.3) {
                timeSlot.classList.add('disabled');
            } else {
                timeSlot.addEventListener('click', () => selectTimeSlot(timeSlot, slot));
            }
            
            timeSlots.appendChild(timeSlot);
        });
    };

    // Select time slot
    const selectTimeSlot = (element, time) => {
        document.querySelectorAll('.time-slot').forEach(slot => {
            slot.classList.remove('selected');
        });
        element.classList.add('selected');
        selectedTime = time;
        selectedTimeElement.textContent = time;
        updateConfirmButton();
    };

    // Generate calendar
    const generateCalendar = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        currentMonthElement.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;
        
        calendarDates.innerHTML = '';
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay.getDay(); i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-date disabled';
            calendarDates.appendChild(emptyCell);
        }
        
        // Add days of the month
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const dateCell = document.createElement('div');
            dateCell.className = 'calendar-date';
            dateCell.textContent = day;
            
            const currentDate = new Date();
            const cellDate = new Date(year, month, day);
            
            // Disable past dates
            if (cellDate < currentDate) {
                dateCell.classList.add('disabled');
            } else {
                dateCell.addEventListener('click', () => selectDate(dateCell, cellDate));
            }
            
            calendarDates.appendChild(dateCell);
        }
    };

    // Select date
    const selectDate = (element, date) => {
        document.querySelectorAll('.calendar-date').forEach(cell => {
            cell.classList.remove('selected');
        });
        element.classList.add('selected');
        selectedDate = date;
        selectedDateElement.textContent = date.toLocaleDateString();
        renderTimeSlots();
        updateConfirmButton();
    };

    // Update confirm button state
    const updateConfirmButton = () => {
        confirmBookingBtn.disabled = !(selectedDate && selectedTime);
    };

    // Navigation
    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    // Confirm booking
    confirmBookingBtn.addEventListener('click', () => {
        const modal = document.getElementById('booking-confirmation-modal');
        const message = document.getElementById('confirmation-message');
        
        message.textContent = `Your pickup has been scheduled for ${selectedDate.toLocaleDateString()} at ${selectedTime}. We will send you a confirmation email shortly.`;
        
        modal.style.display = 'block';
        
        // Reset selection
        selectedDate = null;
        selectedTime = null;
        selectedDateElement.textContent = 'Not selected';
        selectedTimeElement.textContent = 'Not selected';
        updateConfirmButton();
        
        // Remove selected classes
        document.querySelectorAll('.calendar-date, .time-slot').forEach(element => {
            element.classList.remove('selected');
        });
    });

    // Close modal
    const modal = document.getElementById('booking-confirmation-modal');
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initialize calendar
    generateCalendar(currentDate);
}); 



const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
            }
        });
    }