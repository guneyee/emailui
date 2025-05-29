const ctx = document.getElementById('myChart');
const calendarView = document.getElementById('calendar-view');
const taskView = document.getElementById('task-view');
const inboxList = document.getElementById('inbox-list');
const emailDetail = document.getElementById('email-detail');

const sidebarLinks = document.querySelectorAll('.sidebar nav ul li');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Inbox', 'Sent', 'Draft', 'Spam', 'Trash'],
    datasets: [{
      label: 'Email Count',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(153, 102, 255, 0.6)'
      ],
      borderColor: 'rgba(0,0,0,0.1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

function hideAllViews() {
  inboxList.style.display = 'none';
  emailDetail.style.display = 'none';
  calendarView.style.display = 'none';
  taskView.style.display = 'none';
}

function showCalendarView() {
  hideAllViews();
  calendarView.style.display = 'block';
}

function showTaskView() {
  hideAllViews();
  taskView.style.display = 'block';
}

function showInboxView() {
  hideAllViews();
  inboxList.style.display = 'block';
  emailDetail.style.display = 'block';
}

sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebarLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');

    if (link.id === 'calendar-link') {
      showCalendarView();
    } else if (link.id === 'task-link') {
      showTaskView();
    } else if (link.id === 'inbox-link') {
      showInboxView();
    }
  });
});
