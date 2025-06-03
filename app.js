// Email data
const emails = [
  {
    sender: "Jeffrey Gibson",
    email: "jeffrey.gibson@email.com",
    snippet: "Retro occupy organic, stumptown shabby chic...",
    title: "Welcome to the Team!",
    body: "Hi there! Welcome to our team. We're excited to have you on board. Let us know if you need anything.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Angela Robertson",
    email: "angela.robertson@email.com",
    snippet: "It was a humorously perilous business for both of us, for before we proceed.",
    title: "Business Proposal",
    body: "I have a new business proposal for both of us. Let's schedule a call to discuss the details.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Aaron Ruiz",
    email: "aaron.ruiz@email.com",
    snippet: "Retro occupy organic, stumptown shabby chic...",
    title: "Alternative Chart Design Exploration",
    body: "So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuality was no...",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Amanda Jensen",
    email: "amanda.jensen@email.com",
    snippet: "Retro occupy organic, stumptown shabby chic...",
    title: "Meeting Notes",
    body: "Here are the notes from our last meeting. Please review them and provide your feedback.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Jean Douglas",
    email: "jean.douglas@email.com",
    snippet: "Retro occupy organic, stumptown shabby chic...",
    title: "Project Update",
    body: "Quick update on the project progress. We are on track to meet the deadline.",
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Andrew Black",
    email: "andrew.black@email.com",
    snippet: "Retro occupy organic, stumptown shabby chic...",
    title: "Regarding Your Recent Inquiry",
    body: "Thank you for reaching out. We have received your inquiry and will respond shortly.",
    avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Evelyn Warren",
    email: "evelyn.warren@email.com",
    snippet: "Retro occupy organic, stumptown shabby chic...",
    title: "Follow Up on Our Conversation",
    body: "Following up on our discussion from yesterday. Let me know if you have any questions.",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Amanda Evans",
    email: "amanda.evans@email.com",
    snippet: "Retro occupy organic, stumptown shabby chic...",
    title: "Information Request",
    body: "We require some additional information to process your request. Please see the attached form.",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Michael Brown",
    email: "michael.brown@email.com",
    snippet: "Checking in on the status of your order...",
    title: "Your Order Confirmation",
    body: "Thank you for your order! Your order #12345 has been confirmed and will be shipped soon.",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Sarah White",
    email: "sarah.white@email.com",
    snippet: "Just a friendly reminder about...",
    title: "Reminder: Upcoming Webinar",
    body: "Don't forget about our upcoming webinar on [Date]. Register now to secure your spot!",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "David Lee",
    email: "david.lee@email.com",
    snippet: "Checking in on the project timeline...",
    title: "Project Timeline Update",
    body: "Hi team, just wanted to give a quick update on the project timeline. We are on track for the next milestone.",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Jessica Miller",
    email: "jessica.miller@email.com",
    snippet: "Important information regarding your account...",
    title: "Account Security Alert",
    body: "Please review the recent activity on your account. If this was not you, please contact us immediately.",
    avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Robert Davis",
    email: "robert.davis@email.com",
    snippet: "Follow up on the business proposal discussion...",
    title: "Following Up: Business Proposal",
    body: "Hope you had a chance to review the proposal. Let me know if you have any questions.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    isPinned: true,
    isSpam: false,
    isTrash: false
  },
  {
    sender: "Emily Clark",
    email: "emily.clark@email.com",
    snippet: "Your weekly newsletter is here!",
    title: "Weekly Digest",
    body: "Check out the latest news and updates in our weekly digest.",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg",
    isPinned: false,
    isSpam: false,
    isTrash: false
  }
];

// Add sent emails array at the top with other data
const sentEmails = [];

// DOM Elements
const inboxList = document.getElementById('inbox-list');
const emailDetail = document.getElementById('email-detail');
const chartModal = document.getElementById('chart-modal');
const calendarView = document.getElementById('calendar-view');
const taskView = document.getElementById('task-view');
const smartView = document.getElementById('smart-view');
const otherView = document.getElementById('other-view');
const otherTitle = document.getElementById('other-title');
const otherContent = document.getElementById('other-content');
const sidebarLinks = document.querySelectorAll('.sidebar nav ul li');
const calendar = document.getElementById('calendar');
const selectedDisplay = document.querySelector('.selected-display');
const taskModal = document.getElementById('task-modal');
const taskForm = document.getElementById('task-form');
const closeTaskModal = taskModal ? taskModal.querySelector('.close-modal') : null;
const addTaskBtn = document.querySelector('.add-task-btn');
const addTaskBtnTaskView = document.getElementById('addTaskBtnTaskView');
const allTasksContainer = document.getElementById('all-tasks-container');

// Calendar variables
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let selectedDateForTask = null;

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('calendarTasks')) || {};

// Add isDraft property to emails if it doesn't exist (for older data)
emails.forEach(email => {
    if (email.isDraft === undefined) {
        email.isDraft = false;
    }
});

// View management functions
function hideAllViews() {
  // Hide all major content containers by setting their display to 'none'
  const containers = document.querySelectorAll('.inbox-container, #task-view, #calendar-view, #other-view');
  containers.forEach(container => {
    if (container) {
      container.style.display = 'none';
    }
  });
  console.log('All major content containers hidden.');

   // Explicitly hide the individual sections within the inbox container
   // This is necessary because showView now explicitly sets their display to block
    const inboxList = document.getElementById('inbox-list');
    if (inboxList) inboxList.style.display = 'none';
    const emailDetail = document.getElementById('email-detail');
    if (emailDetail) emailDetail.style.display = 'none';
    console.log('Inbox list and email detail hidden.');
}

function showView(linkId) { // linkId: the ID of the clicked sidebar link
    console.log(`Attempting to show view for linkId: ${linkId}`);
    hideAllViews(); // First, hide all potential content areas

    // Show the correct content container based on the sidebar link ID
    switch (linkId) {
        case 'allinbox-link':
        case 'smartinbox-link':
            // For Inbox and Smart Inbox, show the inbox-container and its children
            const inboxContainer = document.querySelector('.inbox-container');
            if (inboxContainer) {
                inboxContainer.style.display = 'flex'; // inbox-container should be flex
                 // Explicitly ensure the list and detail sections within are also block
                 const inboxList = document.getElementById('inbox-list');
                 if (inboxList) inboxList.style.display = 'block';
                 const emailDetail = document.getElementById('email-detail');
                 if (emailDetail) emailDetail.style.display = 'block';
                 console.log(`Showing inbox-container and its children for ${linkId}.`);
            }
            break;
        case 'task-link':
            const taskView = document.getElementById('task-view');
            if (taskView) {
              taskView.style.display = 'block';
              console.log('Showing task-view.');
            }
            break;
        case 'calendar-link':
            const calendarView = document.getElementById('calendar-view');
             if (calendarView) {
              calendarView.style.display = 'block';
              console.log('Showing calendar-view.');
             }
            break;
        case 'pins-link':
        case 'spam-link':
        case 'trash-link':
        case 'compose-link':
             // These views use the other-view container
             const otherView = document.getElementById('other-view');
             if (otherView) {
              otherView.style.display = 'block';
              console.log(`Showing other-view for ${linkId}.`);
             }
            break;
        default:
            // Fallback: if linkId is unknown, default to showing the inbox
             console.warn(`Unknown linkId: ${linkId}. Defaulting to Inbox view.`);
             const defaultInboxContainer = document.querySelector('.inbox-container');
             if (defaultInboxContainer) {
                 defaultInboxContainer.style.display = 'flex';
                  const inboxList = document.getElementById('inbox-list');
                  if (inboxList) inboxList.style.display = 'block';
                  const emailDetail = document.getElementById('email-detail');
                  if (emailDetail) emailDetail.style.display = 'block';
                 console.log('Showing default inbox-container (fallback).');
             } else {
                  console.error('Default view (inbox-container) not found!');
             }
            break;
    }
    // The reRenderActiveView function will populate the content after the correct container is shown.
}

// Helper function to re-render content within the currently active view
function reRenderActiveView() {
    const activeLink = document.querySelector('.sidebar nav ul li.active');
    if (activeLink) {
        const linkId = activeLink.id;
        console.log(`Re-rendering content for active linkId: ${linkId}`);
        // Call the corresponding render function based on the active sidebar link's ID
        switch (linkId) {
            case 'allinbox-link':
                renderInbox();
                 // After rendering inbox, select the first eligible email
                 const firstNonSpamEmailIndex = emails.findIndex(email => !email.isSpam && !email.isTrash);
                 if (firstNonSpamEmailIndex !== -1) {
                     selectEmail(firstNonSpamEmailIndex);
                 } else {
                      emailDetail.innerHTML = '<h3>Email Detail</h3><p>Select an email to view details.</p>';
                 }
                break;
            case 'smartinbox-link':
                renderSmartInbox();
                 // After rendering smart inbox, select the first eligible email
                 const firstSmartEmailIndex = emails.findIndex(email =>
                   !email.isSpam && !email.isTrash && (email.title.toLowerCase().includes('proposal') ||
                   email.title.toLowerCase().includes('chart'))
                 );
                 if (firstSmartEmailIndex !== -1) {
                     selectEmail(firstSmartEmailIndex);
                 } else {
                      emailDetail.innerHTML = '<h3>Email Detail</h3><p>Select an email to view details.</p>';
                 }
                break;
            case 'task-link':
                renderAllTasks();
                break;
            case 'calendar-link':
                renderCalendar();
                 // If calendar view is active, re-display tasks for the selected date
                 if (selectedDateForTask) {
                     displayTasksForDate(selectedDateForTask);
                 } else {
                      // If no date was selected, display tasks for today
                     const todayString = new Date().toDateString();
                     displayTasksForDate(todayString);
                 }
                break;
            case 'pins-link':
                renderPinnedItems();
                break;
            case 'spam-link':
                renderSpamItems();
                break;
            case 'trash-link':
                renderTrashItems();
                break;
            case 'compose-link':
                renderComposeView();
                break;
            default:
                 // For other views, just update the title and potentially placeholder content
                 console.log(`reRenderActiveView: Default case triggered for linkId: ${linkId}`); // Log default case trigger
                 const otherLinkText = activeLink.textContent.trim();
                 otherTitle.textContent = otherLinkText;
                 // Ensure placeholder is there only if content is expected to be generic
                 if (linkId !== 'allinbox-link' && linkId !== 'smartinbox-link' && linkId !== 'task-link' && linkId !== 'calendar-link') {
                     otherContent.innerHTML = '<p>Content for this section will go here...</p>';
                 } else {
                      // For views that should have specific content rendered by a function, clear placeholder
                      otherContent.innerHTML = '';
                 }
                 break;
        }
    } else {
        console.log('No active link found for re-render.');
         // If no active link, default to rendering Inbox content if the container is visible
         const inboxContainer = document.querySelector('.inbox-container');
         if (inboxContainer && inboxContainer.style.display !== 'none') {
              // Render Inbox content but don't re-select email to avoid issues
              renderInbox();
             // No email selection here, rely on the initial load or sidebar click to select
         } else {
              console.log('No active link and inbox container not visible, skipping re-render.');
         }
    }
}

// Email functions
function renderInbox() {
  inboxList.innerHTML = '';
  const nonSpamEmails = emails.filter(email => !email.isSpam && !email.isTrash);

  if (nonSpamEmails.length === 0) {
      inboxList.innerHTML = '<p class="no-emails">No emails in inbox.</p>';
      emailDetail.innerHTML = '<h3>Email Detail</h3><p>Select an email to view details.</p>';
      return;
  }

  // Add search and filter controls
  const controls = document.createElement('div');
  controls.className = 'inbox-controls';
  controls.innerHTML = `
    <div class="search-box">
      <input type="text" id="email-search" placeholder="Search emails...">
    </div>
    <div class="filter-options">
      <select id="email-filter">
        <option value="all">All</option>
        <option value="unread">Unread</option>
        <option value="pinned">Pinned</option>
        <option value="draft">Drafts</option>
      </select>
    </div>
  `;
  inboxList.appendChild(controls);

  // Add email count
  const emailCount = document.createElement('div');
  emailCount.className = 'email-count';
  emailCount.textContent = `${nonSpamEmails.length} emails`;
  inboxList.appendChild(emailCount);

  nonSpamEmails.forEach((email, idx) => {
    const item = document.createElement('div');
    item.className = 'inbox-item';
    if (email.isPinned) item.classList.add('pinned');
    if (email.isDraft) item.classList.add('draft');
    
    item.innerHTML = `
      <div class="email-preview">
        <div class="sender-info">
          <img src="${email.avatar}" alt="${email.sender}" class="sender-avatar">
          <div class="sender">${email.sender}</div>
        </div>
        <div class="email-content">
          <div class="title">${email.title}</div>
          <div class="snippet">${email.snippet}</div>
        </div>
        <div class="email-meta">
          <span class="time">${new Date().toLocaleTimeString()}</span>
          ${email.isPinned ? '<span class="pin-badge">📍</span>' : ''}
          ${email.isDraft ? '<span class="draft-badge">Draft</span>' : ''}
        </div>
      </div>
      <div class="email-actions">
        <button class="pin-email-btn" data-index="${emails.indexOf(email)}" title="${email.isPinned ? 'Unpin' : 'Pin'}">
          ${email.isPinned ? '📍' : '📌'}
        </button>
        <button class="spam-email-btn" data-index="${emails.indexOf(email)}" title="Mark as Spam">
          🚫
        </button>
        <button class="trash-email-btn" data-index="${emails.indexOf(email)}" title="Move to Trash">
          🗑️
        </button>
      </div>
    `;
    
    const emailIndex = emails.indexOf(email);
    
    // Email item click handler
    item.addEventListener('click', () => {
      document.querySelectorAll('.inbox-item').forEach(el => el.classList.remove('selected'));
      item.classList.add('selected');
      selectEmail(emailIndex);
    });

    // Action buttons click handlers
    item.querySelector('.pin-email-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleEmailPin(emailIndex);
      reRenderActiveView();
    });

    item.querySelector('.spam-email-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSpam(emailIndex);
      reRenderActiveView();
    });

    item.querySelector('.trash-email-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTrash(emailIndex);
      reRenderActiveView();
    });

    inboxList.appendChild(item);
  });

  // Add search functionality
  const searchInput = document.getElementById('email-search');
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.inbox-item').forEach(item => {
      const sender = item.querySelector('.sender').textContent.toLowerCase();
      const title = item.querySelector('.title').textContent.toLowerCase();
      const snippet = item.querySelector('.snippet').textContent.toLowerCase();
      
      if (sender.includes(searchTerm) || title.includes(searchTerm) || snippet.includes(searchTerm)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });

  // Add filter functionality
  const filterSelect = document.getElementById('email-filter');
  filterSelect.addEventListener('change', (e) => {
    const filterValue = e.target.value;
    document.querySelectorAll('.inbox-item').forEach(item => {
      switch(filterValue) {
        case 'unread':
          item.style.display = item.classList.contains('unread') ? '' : 'none';
          break;
        case 'pinned':
          item.style.display = item.classList.contains('pinned') ? '' : 'none';
          break;
        case 'draft':
          item.style.display = item.classList.contains('draft') ? '' : 'none';
          break;
        default:
          item.style.display = '';
      }
    });
  });

  // Select first email by default
  if (nonSpamEmails.length > 0) {
      const firstEmailIndex = emails.indexOf(nonSpamEmails[0]);
      selectEmail(firstEmailIndex);
  }
}

function selectEmail(idx) {
    // Remove selected class from all email items
    document.querySelectorAll('.inbox-item').forEach(el => el.classList.remove('selected'));
    
    // Add selected class to clicked email
    const selectedEmail = emails[idx];
    document.querySelectorAll('.inbox-item').forEach(el => {
        const emailSender = el.querySelector('.sender').textContent;
        const emailTitle = el.querySelector('.title').textContent;
        if (emailSender === selectedEmail.sender && emailTitle === selectedEmail.title) {
            el.classList.add('selected');
        }
    });

    // Update email detail panel
    const email = emails[idx];
    emailDetail.innerHTML = `
        <div class="email-header">
            <img src="${email.avatar}" alt="${email.sender}" class="sender-avatar">
            <div class="info">
                <span class="name">${email.sender}</span>
                <span class="email">${email.email}</span>
            </div>
        </div>
        <div class="email-title">${email.title}</div>
        <div class="email-body">${email.body}</div>
        <div class="email-detail-actions">
            <button class="pin-email-btn-detail" data-index="${idx}">${email.isPinned ? '📍 Unpin' : '📌 Pin'}</button>
            <button class="spam-email-btn-detail" data-index="${idx}">${email.isSpam ? '✅ Not Spam' : 'Mark as Spam'}</button>
            <button class="trash-email-btn-detail" data-index="${idx}">🗑️ Move to Trash</button>
            ${email.title.includes('Chart') ? '<button class="show-chart-btn" id="showChartBtn">Show Chart</button>' : ''}
        </div>
    `;

    // Add event listeners to action buttons
    emailDetail.querySelector('.pin-email-btn-detail').addEventListener('click', () => {
        toggleEmailPin(idx);
        selectEmail(idx);
        reRenderActiveView();
    });

    emailDetail.querySelector('.spam-email-btn-detail').addEventListener('click', () => {
        toggleSpam(idx);
        selectEmail(idx);
        reRenderActiveView();
    });

    emailDetail.querySelector('.trash-email-btn-detail').addEventListener('click', () => {
        toggleTrash(idx);
        selectEmail(idx);
        reRenderActiveView();
    });

    const showChartBtn = document.getElementById('showChartBtn');
    if (showChartBtn) {
        showChartBtn.onclick = showChart;
    }

    // Ensure email detail panel is visible
    emailDetail.style.display = 'block';
}

function toggleEmailPin(idx) {
    emails[idx].isPinned = !emails[idx].isPinned;
    console.log(`Email "${emails[idx].title}" pinned status: ${emails[idx].isPinned}`);
    reRenderActiveView();
}

function toggleSpam(idx) {
    emails[idx].isSpam = !emails[idx].isSpam;
     console.log(`Email "${emails[idx].title}" spam status: ${emails[idx].isSpam}`);
    reRenderActiveView();
}

function toggleTrash(idx) {
    emails[idx].isTrash = !emails[idx].isTrash;
    console.log(`Email "${emails[idx].title}" trash status: ${emails[idx].isTrash}`);
    reRenderActiveView();
}

// Chart functions
function showChart() {
  chartModal.classList.add('active');
  renderChart();
}

function renderChart() {
  const ctx = document.getElementById('chart').getContext('2d');
  if (window.myChart) window.myChart.destroy();
  window.myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['ITEM 1', 'ITEM 2', 'ITEM 3', 'ITEM 4', 'ITEM 5', 'ITEM 6', 'ITEM 7'],
      datasets: [{
        label: 'Exploration',
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: 'rgba(79,195,247,0.2)',
        borderColor: '#3a5fc8',
        pointBackgroundColor: '#3a5fc8'
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });
}

// Smart inbox functions
function renderSmartInbox() {
  // Clear the current inbox list and email detail
  inboxList.innerHTML = '';
  emailDetail.innerHTML = '<h3>Email Detail</h3><p>Select an email to view details.</p>'; // Clear previous detail

  // Filter for smart emails based on current criteria (pinned and title contains 'proposal' or 'chart')
  const smartEmails = emails.filter(email =>
    !email.isSpam && !email.isTrash && email.isPinned && (email.title.toLowerCase().includes('proposal') ||
    email.title.toLowerCase().includes('chart'))
  );

  if (smartEmails.length === 0) {
    inboxList.innerHTML = '<p class="no-emails">No smart emails found.</p>';
    return;
  }

  // Render the smart emails in the inbox list, similar to renderInbox
  smartEmails.forEach((email, idx) => {
    const item = document.createElement('div');
    item.className = 'inbox-item';
    if (email.isPinned) item.classList.add('pinned');
    if (email.isDraft) item.classList.add('draft'); // Should not appear in smart inbox normally

    item.innerHTML = `
      <div class="email-preview">
        <div class="sender-info">
          <img src="${email.avatar}" alt="${email.sender}" class="sender-avatar">
          <div class="sender">${email.sender}</div>
        </div>
        <div class="email-content">
          <div class="email-meta">
             <span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
             ${email.isPinned ? '<span class="pin-badge">📍</span>' : ''}
          </div>
          <div class="title">${email.title}</div>
          <div class="snippet">${email.snippet}</div>
        </div>
      </div>
      <div class="email-actions">
        <button class="pin-email-btn" data-index="${emails.indexOf(email)}" title="${email.isPinned ? 'Unpin' : 'Pin'}">
          ${email.isPinned ? '📍' : '📌'}
        </button>
        <button class="spam-email-btn" data-index="${emails.indexOf(email)}" title="Mark as Spam">
          🚫
        </button>
        <button class="trash-email-btn" data-index="${emails.indexOf(email)}" title="Move to Trash">
          🗑️
        </button>
      </div>
    `;

    // Find the original index of the email in the main emails array
    const emailIndex = emails.indexOf(email);

    // Add click handler to select the email and display details
    item.addEventListener('click', () => {
      // Remove selected class from all email items in the current view
      document.querySelectorAll('#inbox-list .inbox-item').forEach(el => el.classList.remove('selected'));
      // Add selected class to the clicked item
      item.classList.add('selected');
      // Call selectEmail with the original index
      selectEmail(emailIndex);
    });

    // Add event listeners for action buttons (pin, spam, trash)
    item.querySelector('.pin-email-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleEmailPin(emailIndex);
      reRenderActiveView(); // Re-render the current smart inbox view
    });

    item.querySelector('.spam-email-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSpam(emailIndex);
      reRenderActiveView(); // Re-render the current smart inbox view
    });

    item.querySelector('.trash-email-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTrash(emailIndex);
      reRenderActiveView(); // Re-render the current smart inbox view
    });

    // Append the created item to the inbox list
    inboxList.appendChild(item);
  });

   // Select the first smart email by default if there are any
   if (smartEmails.length > 0) {
       const firstSmartEmailIndex = emails.indexOf(smartEmails[0]);
       selectEmail(firstSmartEmailIndex);
       // Add selected class to the first item in the rendered list
        const firstRenderedItem = inboxList.querySelector('.inbox-item');
        if(firstRenderedItem) {
            firstRenderedItem.classList.add('selected');
        }
   }
}

// Calendar functions
function renderCalendar() {
  calendar.innerHTML = '';
  calendar.className = 'calendar-grid';

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];

  const header = document.createElement('div');
  header.className = 'calendar-header';
  header.innerHTML = `
    <button class="calendar-nav prev-month">&lt;</button>
    <h2>${months[month]} ${year}</h2>
    <button class="calendar-nav next-month">&gt;</button>
  `;
  calendar.appendChild(header);

  header.querySelector('.prev-month').addEventListener('click', () => {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    renderCalendar();
    if (selectedDateForTask) {
        const selectedDateObj = new Date(selectedDateForTask);
        if (selectedDateObj.getMonth() === month && selectedDateObj.getFullYear() === year) {
            const dayElement = calendar.querySelector(`.calendar-day:not(.other-month):contains('${selectedDateObj.getDate()}')`);
            if (dayElement) {
                 setTimeout(() => {
                     if (calendar.contains(dayElement)) {
                         dayElement.click();
                     }
                 }, 50);
            }
        } else {
            selectedDisplay.innerHTML = '';
            selectedDateForTask = null;
        }
    } else {
        const today = new Date();
        if (today.getMonth() === month && today.getFullYear() === year) {
             displayTasksForDate(today.toDateString());
             const todayElement = calendar.querySelector(`.calendar-day.current-date`);
             if(todayElement) {
                 todayElement.classList.add('selected');
             }
        }
    }
  });

  header.querySelector('.next-month').addEventListener('click', () => {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    renderCalendar();
    if (selectedDateForTask) {
        const selectedDateObj = new Date(selectedDateForTask);
        if (selectedDateObj.getMonth() === month && selectedDateObj.getFullYear() === year) {
            const dayElement = calendar.querySelector(`.calendar-day:not(.other-month):contains('${selectedDateObj.getDate()}')`);
             if (dayElement) {
                 setTimeout(() => {
                     if (calendar.contains(dayElement)) {
                         dayElement.click();
                     }
                 }, 50);
             }
        } else {
            selectedDisplay.innerHTML = '';
            selectedDateForTask = null;
        }
     } else {
        const today = new Date();
        if (today.getMonth() === month && today.getFullYear() === year) {
            displayTasksForDate(today.toDateString());
            const todayElement = calendar.querySelector(`.calendar-day.current-date`);
             if(todayElement) {
                 todayElement.classList.add('selected');
             }
        }
     }
  });

  const weekHeader = document.createElement('div');
  weekHeader.className = 'calendar-week-header';
  days.forEach(day => {
    const dayHeader = document.createElement('div');
    dayHeader.className = 'calendar-day-header';
    dayHeader.textContent = day;
    weekHeader.appendChild(dayHeader);
  });
  calendar.appendChild(weekHeader);

  const grid = document.createElement('div');
  grid.className = 'calendar-days';

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  for (let i = firstDay - 1; i >= 0; i--) {
    const day = document.createElement('div');
    day.className = 'calendar-day other-month';
    day.textContent = prevMonthDays - i;
    grid.appendChild(day);
  }

  for (let day = 1; day <= totalDays; day++) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    dayElement.textContent = day;

    const dateString = new Date(year, month, day).toDateString();
    if (tasks[dateString] && tasks[dateString].length > 0) {
      dayElement.classList.add('has-tasks');
      const taskCount = document.createElement('span');
      taskCount.className = 'task-count';
      taskCount.textContent = tasks[dateString].length;
      dayElement.appendChild(taskCount);
    }

    const today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayElement.classList.add('current-date');
    }

    dayElement.addEventListener('click', () => {
      document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
      dayElement.classList.add('selected');
      displayTasksForDate(dateString);
    });

    grid.appendChild(dayElement);
  }

  const remainingDays = 42 - (firstDay + totalDays);
  for (let i = 1; i <= remainingDays; i++) {
    const day = document.createElement('div');
    day.className = 'calendar-day other-month';
    day.textContent = i;
    grid.appendChild(day);
  }

  calendar.appendChild(grid);
}

function displayTasksForDate(date) {
  const tasksForDate = tasks[date] || [];
  const taskList = document.createElement('div');
  taskList.className = 'task-list-container';

  const dateHeader = document.createElement('div');
  dateHeader.className = 'task-date-header';
  dateHeader.innerHTML = `
    <h3>${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
    <button class="add-task-btn">+ Add Task</button>
  `;
  taskList.appendChild(dateHeader);

  const tasksContainer = document.createElement('div');
  tasksContainer.className = 'tasks-container';

  if (tasksForDate.length > 0) {
    tasksForDate.forEach((task, index) => {
      const taskItem = createTaskElement(task, date, index);
      tasksContainer.appendChild(taskItem);
    });
  } else {
    tasksContainer.innerHTML = '<p class="no-tasks">No tasks for this date</p>';
  }

  taskList.appendChild(tasksContainer);
  
  selectedDisplay.innerHTML = '';
  selectedDisplay.appendChild(taskList);

  taskList.querySelector('.add-task-btn').addEventListener('click', () => {
    selectedDateForTask = date;
    taskModal.classList.add('active');
    taskForm.reset();
    document.getElementById('task-date').value = new Date(date).toISOString().split('T')[0];
  });
}

function createTaskElement(task, dateKey, index) {
    const taskElement = document.createElement('div');
    const isPinned = task.isPinned !== undefined ? task.isPinned : false;

    taskElement.className = `task-item priority-${task.priority}`;
    taskElement.innerHTML = `
        <div class="task-content">
          <h4>${task.title}</h4>
          <p>${task.description || 'No description'}</p>
          <span class="task-time">${task.time}</span>
        </div>
        <div class="task-actions">
          <button class="pin-task-btn" data-date="${dateKey}" data-index="${index}">${isPinned ? '📍' : '📌'}</button>
          <button class="edit-task" data-date="${dateKey}" data-index="${index}">✎</button>
          <button class="delete-task" data-date="${dateKey}" data-index="${index}">×</button>
        </div>
      `;

    taskElement.querySelector('.pin-task-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleTaskPin(dateKey, index);
        reRenderActiveView();
    });
    taskElement.querySelector('.edit-task').addEventListener('click', (e) => {
        e.stopPropagation();
        editTask(dateKey, index);
    });
    taskElement.querySelector('.delete-task').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteTask(dateKey, index);
    });

    return taskElement;
}

function toggleTaskPin(dateKey, index) {
    if (tasks[dateKey] && tasks[dateKey][index]) {
        if (tasks[dateKey][index].isPinned === undefined) {
            tasks[dateKey][index].isPinned = false;
        }
        tasks[dateKey][index].isPinned = !tasks[dateKey][index].isPinned;
        localStorage.setItem('calendarTasks', JSON.stringify(tasks));
        console.log(`Task "${tasks[dateKey][index].title}" pinned status: ${tasks[dateKey][index].isPinned}`);
        reRenderActiveView();
    }
}

function editTask(dateKey, index) {
  const task = tasks[dateKey][index];
  selectedDateForTask = dateKey;
  
  document.getElementById('task-title').value = task.title;
  document.getElementById('task-time').value = task.time;
  document.getElementById('task-description').value = task.description;
  document.getElementById('task-priority').value = task.priority;
  document.getElementById('task-date').value = new Date(dateKey).toISOString().split('T')[0];

  taskModal.classList.add('active');

  tasks[dateKey].splice(index, 1);
  localStorage.setItem('calendarTasks', JSON.stringify(tasks));
  renderCalendar();
  renderAllTasks();
  renderPinnedItems();
}

function deleteTask(dateKey, index) {
  if (confirm('Are you sure you want to delete this task?')) {
    tasks[dateKey].splice(index, 1);
    if (tasks[dateKey].length === 0) {
      delete tasks[dateKey];
    }
    localStorage.setItem('calendarTasks', JSON.stringify(tasks));
    renderCalendar();
    renderAllTasks();
    renderPinnedItems();
    renderSpamItems();
    if (document.getElementById('calendar-view').style.display === 'block' && selectedDateForTask === dateKey) {
        displayTasksForDate(dateKey);
    }
  }
}

function renderAllTasks() {
  allTasksContainer.innerHTML = '';

  const sortedDates = Object.keys(tasks).sort((a, b) => new Date(a) - new Date(b));

  if (sortedDates.length === 0) {
    allTasksContainer.innerHTML = '<p class="no-tasks">No tasks available.</p>';
    return;
  }

  sortedDates.forEach(dateKey => {
    const tasksForDate = tasks[dateKey];
    if (tasksForDate.length > 0) {
      const taskListForDate = document.createElement('div');
      taskListForDate.className = 'task-list-container';

      const dateHeader = document.createElement('div');
      dateHeader.className = 'task-date-header';
      dateHeader.innerHTML = `
        <h3>${new Date(dateKey).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
      `;
      taskListForDate.appendChild(dateHeader);

      const tasksContainer = document.createElement('div');
      tasksContainer.className = 'tasks-container';

      tasksForDate.forEach((task, index) => {
        const taskItem = createTaskElement(task, dateKey, index);
        tasksContainer.appendChild(taskItem);
      });

      taskListForDate.appendChild(tasksContainer);
      allTasksContainer.appendChild(taskListForDate);
    }
  });
}

function renderPinnedItems() {
    otherContent.innerHTML = '';
    otherTitle.textContent = 'Pins';

    const pinnedEmails = emails.filter(email => email.isPinned && !email.isSpam);
    const pinnedTasks = Object.values(tasks).flat().filter(task => task.isPinned);

    if (pinnedEmails.length === 0 && pinnedTasks.length === 0) {
        otherContent.innerHTML = '<p class="no-items">No pinned items.</p>';
        return;
    }

    if (pinnedEmails.length > 0) {
        const emailList = document.createElement('div');
        emailList.className = 'view-section';
        emailList.innerHTML = '<h3>Pinned Emails</h3>';
        
        pinnedEmails.forEach(email => {
             const item = document.createElement('div');
             item.className = 'inbox-item';
             item.innerHTML = `
               <div class="sender">${email.sender}</div>
               <div class="snippet">${email.title} - ${email.snippet}</div>
               <span class="email-actions">
                 <button class="pin-email-btn" data-index="${emails.indexOf(email)}">📍</button>
                 <button class="spam-email-btn" data-index="${emails.indexOf(email)}">Mark as Spam</button>
               </span>
             `;
             const emailIndex = emails.indexOf(email);
             item.querySelector('.pin-email-btn').addEventListener('click', (e) => {
                 e.stopPropagation();
                 toggleEmailPin(emailIndex);
                 reRenderActiveView();
             });
              item.querySelector('.spam-email-btn').addEventListener('click', (e) => {
                 e.stopPropagation();
                 toggleSpam(emailIndex);
                 reRenderActiveView();
              });
             emailList.appendChild(item);
        });
        otherContent.appendChild(emailList);
    }

    if (pinnedTasks.length > 0) {
        const taskList = document.createElement('div');
        taskList.className = 'task-list-container';
        taskList.innerHTML = '<h3>Pinned Tasks</h3>';

        pinnedTasks.forEach(task => {
            let taskDateKey = null;
            let taskIndex = -1;
            for (const dateKey in tasks) {
                const index = tasks[dateKey].findIndex(t => t === task);
                if (index !== -1) {
                    taskDateKey = dateKey;
                    taskIndex = index;
                    break;
                }
            }

            if (taskDateKey && taskIndex !== -1) {
                 const taskItem = createTaskElement(task, taskDateKey, taskIndex);
                 taskList.appendChild(taskItem);
            }
        });
         otherContent.appendChild(taskList);
    }
}

function renderSpamItems() {
    otherContent.innerHTML = '';
    otherTitle.textContent = 'Spam';

    const spamEmails = emails.filter(email => email.isSpam);

    if (spamEmails.length === 0) {
        otherContent.innerHTML = '<p class="no-emails">No spam emails.</p>';
        return;
    }

    const emailList = document.createElement('div');
    emailList.className = 'view-section';
    emailList.innerHTML = '<h3>Spam Emails</h3>';
    
    spamEmails.forEach(email => {
         const item = document.createElement('div');
         item.className = 'inbox-item';
         item.innerHTML = `
           <div class="sender">${email.sender}</div>
           <div class="snippet">${email.title} - ${email.snippet}</div>
            <span class="email-actions">
              <button class="pin-email-btn" data-index="${emails.indexOf(email)}">${emails[emails.indexOf(email)].isPinned ? '📍' : '📌'}</button>
              <button class="spam-email-btn" data-index="${emails.indexOf(email)}">Not Spam</button>
            </span>
         `;
          const emailIndex = emails.indexOf(email);
          item.querySelector('.pin-email-btn').addEventListener('click', (e) => {
              e.stopPropagation();
              toggleEmailPin(emailIndex);
              reRenderActiveView();
          });
         item.querySelector('.spam-email-btn').addEventListener('click', (e) => {
             e.stopPropagation();
             toggleSpam(emailIndex);
             reRenderActiveView();
         });
         emailList.appendChild(item);
    });
    otherContent.appendChild(emailList);
}

function renderTrashItems() {
    otherContent.innerHTML = '';
    otherTitle.textContent = 'Trash';

    const trashEmails = emails.filter(email => email.isTrash);

    if (trashEmails.length === 0) {
        otherContent.innerHTML = '<p class="no-emails">No emails in trash.</p>';
        return;
    }

    const emailList = document.createElement('div');
    emailList.className = 'view-section';
    emailList.innerHTML = '<h3>Trashed Emails</h3>';
    
    trashEmails.forEach(email => {
         const item = document.createElement('div');
         item.className = 'inbox-item';
         item.innerHTML = `
           <div class="sender">${email.sender}</div>
           <div class="snippet">${email.title} - ${email.snippet}</div>
            <span class="email-actions">
              <button class="restore-email-btn" data-index="${emails.indexOf(email)}">Restore</button>
              <button class="delete-permanently-btn" data-index="${emails.indexOf(email)}">Delete Permanently</button>
            </span>
         `;
          const emailIndex = emails.indexOf(email);
          item.querySelector('.restore-email-btn').addEventListener('click', (e) => {
              e.stopPropagation();
              toggleTrash(emailIndex);
              reRenderActiveView();
          });
         item.querySelector('.delete-permanently-btn').addEventListener('click', (e) => {
             e.stopPropagation();
             if (confirm('Are you sure you want to permanently delete this email?')) {
                 emails.splice(emailIndex, 1);
                 reRenderActiveView();
             }
         });
         emailList.appendChild(item);
    });
    otherContent.appendChild(emailList);
}

function renderComposeView() {
    otherContent.innerHTML = '';
    otherTitle.textContent = 'Compose Email';

    // Add tabs for compose and sent emails
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'compose-tabs';
    tabsContainer.innerHTML = `
        <button class="tab-btn active" data-tab="compose">Compose</button>
        <button class="tab-btn" data-tab="sent">Sent Emails</button>
    `;
    otherContent.appendChild(tabsContainer);

    // Create containers for compose and sent emails
    const composeContainer = document.createElement('div');
    composeContainer.className = 'tab-content active';
    composeContainer.id = 'compose-container';

    const sentContainer = document.createElement('div');
    sentContainer.className = 'tab-content';
    sentContainer.id = 'sent-container';

    // Add compose form to compose container
    const composeForm = document.createElement('div');
    composeForm.className = 'compose-form';
    composeForm.innerHTML = `
        <form id="compose-email-form">
            <div class="form-group">
                <label for="to">To:</label>
                <input type="email" id="to" required placeholder="recipient@email.com">
            </div>
            <div class="form-group">
                <label for="subject">Subject:</label>
                <input type="text" id="subject" required placeholder="Enter subject">
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" required placeholder="Write your message here..."></textarea>
            </div>
            <div class="compose-actions">
                <button type="submit" class="send-btn">Send</button>
                <button type="button" class="draft-btn">Save as Draft</button>
                <button type="button" class="cancel-btn">Cancel</button>
            </div>
        </form>
    `;
    composeContainer.appendChild(composeForm);

    // Add sent emails list to sent container
    const sentEmailsList = document.createElement('div');
    sentEmailsList.className = 'sent-emails-list';
    if (sentEmails.length === 0) {
        sentEmailsList.innerHTML = '<p class="no-emails">No sent emails yet.</p>';
    } else {
        sentEmails.forEach(email => {
            const emailItem = document.createElement('div');
            emailItem.className = 'sent-email-item';
            emailItem.innerHTML = `
                <div class="sent-email-header">
                    <span class="recipient">To: ${email.to}</span>
                    <span class="date">${new Date(email.date).toLocaleString()}</span>
                </div>
                <div class="sent-email-subject">${email.subject}</div>
                <div class="sent-email-message">${email.message}</div>
            `;
            sentEmailsList.appendChild(emailItem);
        });
    }
    sentContainer.appendChild(sentEmailsList);

    // Add containers to main content
    otherContent.appendChild(composeContainer);
    otherContent.appendChild(sentContainer);

    // Add tab switching functionality
    const tabButtons = tabsContainer.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            const tabId = button.dataset.tab;
            document.getElementById(`${tabId}-container`).classList.add('active');
        });
    });

    // Form submit handler
    const form = document.getElementById('compose-email-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const sentEmail = {
            to: document.getElementById('to').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            date: new Date().toISOString()
        };

        // Add to sent emails array
        sentEmails.unshift(sentEmail);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Email sent successfully!';
        composeForm.appendChild(successMessage);

        // Clear form
        form.reset();

        // Update sent emails list
        renderSentEmailsList();

        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });

    // Save as draft handler
    const draftBtn = composeForm.querySelector('.draft-btn');
    draftBtn.addEventListener('click', () => {
        const draftEmail = {
            sender: "Me",
            email: "me@email.com",
            title: document.getElementById('subject').value || "(No Subject)",
            body: document.getElementById('message').value || "(No Message)",
            snippet: document.getElementById('message').value ? document.getElementById('message').value.substring(0, 50) + "..." : "(No Message)",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            isPinned: false,
            isSpam: false,
            isTrash: false,
            isDraft: true
        };

        emails.unshift(draftEmail);
        
        const draftMessage = document.createElement('div');
        draftMessage.className = 'draft-message';
        draftMessage.textContent = 'Draft saved!';
        composeForm.appendChild(draftMessage);

        form.reset();

        setTimeout(() => {
            draftMessage.remove();
        }, 3000);
    });

    // Cancel handler
    const cancelBtn = composeForm.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', () => {
        if (form.querySelector('input').value || form.querySelector('textarea').value) {
            if (confirm('Are you sure you want to discard this email?')) {
                form.reset();
            }
        } else {
            form.reset();
        }
    });
}

function renderSentEmailsList() {
    const sentContainer = document.getElementById('sent-container');
    if (!sentContainer) return;

    const sentEmailsList = sentContainer.querySelector('.sent-emails-list');
    if (!sentEmailsList) return;

    sentEmailsList.innerHTML = '';
    if (sentEmails.length === 0) {
        sentEmailsList.innerHTML = '<p class="no-emails">No sent emails yet.</p>';
    } else {
        sentEmails.forEach(email => {
            const emailItem = document.createElement('div');
            emailItem.className = 'sent-email-item';
            emailItem.innerHTML = `
                <div class="sent-email-header">
                    <span class="recipient">To: ${email.to}</span>
                    <span class="date">${new Date(email.date).toLocaleString()}</span>
                </div>
                <div class="sent-email-subject">${email.subject}</div>
                <div class="sent-email-message">${email.message}</div>
            `;
            sentEmailsList.appendChild(emailItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
  // Event listener for logo click
  const logoButton = document.getElementById('logo-button');
  if (logoButton) {
    logoButton.addEventListener('click', () => {
      console.log('Logo clicked, attempting to show inbox.');
      // Simulate click on the All Inbox link
      const allInboxLink = document.getElementById('allinbox-link');
      if (allInboxLink) {
        allInboxLink.click(); // Trigger the sidebar link click
      } else {
          console.error('All Inbox link not found when logo was clicked!');
      }
    });
  } else {
    console.error('Logo button element not found!');
  }

  // Dynamically assign IDs to sidebar links and add click listeners
  const sidebarLinks = document.querySelectorAll('.sidebar nav ul li');
  sidebarLinks.forEach(link => {
      const linkText = link.textContent.trim();
      // Dynamically assign link IDs based on text content (lowercase, remove non-alphanumeric, add -link suffix)
      const linkId = `${linkText.toLowerCase().replace(/[^a-z0-9]+/g, '')}-link`;
      link.id = linkId; // Assign the element ID
      console.log(`Assigned ID "${linkId}" to sidebar link "${linkText}".`); // Log assigned IDs

      link.addEventListener('click', () => {
        // Remove active class from all sidebar links and add to the clicked one
        sidebarLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');

        console.log(`Sidebar link clicked: ${linkId}`); // Log click event

        // Call showView with the linkId to show the correct container
        showView(linkId);
        reRenderActiveView(); // Render the content within the shown container
      });
    });

  // Trigger All Inbox view on page load
  // Simulate sidebar link click for initial load
  const allInboxLink = document.getElementById('allinbox-link');
  if (allInboxLink) {
    allInboxLink.click(); // Trigger the sidebar link click
    console.log('Triggering All Inbox view on DOMContentLoaded.'); // Log initial trigger
  } else {
      console.error('All Inbox link element not found for initial load!');
      // Fallback: if allinbox-link not found, manually show inbox container and render
      const inboxContainer = document.querySelector('.inbox-container');
      if (inboxContainer) {
           inboxContainer.style.display = 'flex';
            const inboxList = document.getElementById('inbox-list');
            if (inboxList) inboxList.style.display = 'block';
            const emailDetail = document.getElementById('email-detail');
             if (emailDetail) emailDetail.style.display = 'block';

           renderInbox();
             const firstNonSpamEmailIndex = emails.findIndex(email => !email.isSpam);
             if (firstNonSpamEmailIndex !== -1) {
               selectEmail(firstNonSpamEmailIndex);
             } else {
               emailDetail.innerHTML = '<h3>Email Detail</h3><p>Select an email to view details.</p>';
             }
           console.log('Fallback: Manually showing and rendering Inbox.'); // Log fallback
      } else {
          console.error('Inbox container not found, cannot display default view.');
      }
  }

  // renderCalendar(); // Calendar is now rendered within reRenderActiveView when calendar-link is clicked

  // Initialize other elements or event listeners that are not tied to view switching

  chartModal.addEventListener('click', function(e) {
    if (e.target === chartModal || e.target.classList.contains('close-modal')) {
      chartModal.classList.remove('active');
    }
  });

  // Task modal close and submit handlers
  // Removed redundant re-renders in close handlers
  closeTaskModal.addEventListener('click', () => {
    taskModal.classList.remove('active');
    taskForm.reset();
    selectedDateForTask = null;
    // Re-render active view after modal close in case task was edited/added
    reRenderActiveView();
  });

  taskModal.addEventListener('click', (e) => {
    if (e.target === taskModal) {
      taskModal.classList.remove('active');
      taskForm.reset();
      selectedDateForTask = null;
        // Re-render active view after modal close
        reRenderActiveView();
    }
  });

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

     const task = {
       title: document.getElementById('task-title').value,
       time: document.getElementById('task-time').value,
       description: document.getElementById('task-description').value,
       priority: document.getElementById('task-priority').value,
       isPinned: false
     };

     const dateInput = document.getElementById('task-date').value;
     const taskDateKey = dateInput ? new Date(dateInput).toDateString() : new Date().toDateString();

     if (!tasks[taskDateKey]) {
       tasks[taskDateKey] = [];
     }
     tasks[taskDateKey].push(task);
     
     // Save to localStorage
     localStorage.setItem('calendarTasks', JSON.stringify(tasks));
     console.log('Task saved:', task);
     console.log('All tasks:', tasks);

     // Close modal and reset form
     taskModal.classList.remove('active');
     taskForm.reset();
     selectedDateForTask = null;

     // Update UI
     renderCalendar();
     renderAllTasks();
     renderPinnedItems();
     
     // If we're in calendar view, update the selected date's tasks
     if (document.getElementById('calendar-view').style.display === 'block') {
       displayTasksForDate(taskDateKey);
     }
   });


  addTaskBtnTaskView.addEventListener('click', () => {
    selectedDateForTask = null;
    taskModal.classList.add('active');
    taskForm.reset();
    document.getElementById('task-date').value = '';
  });
});
  
  
