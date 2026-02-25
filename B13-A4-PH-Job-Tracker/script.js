const tabs = document.querySelectorAll(".tab");
const emptyState = document.getElementById("emptyState");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");

let currentTab = "all";

function updateCounts() {
  const cards = document.querySelectorAll(".job-card");
  const interview = document.querySelectorAll('[data-status="interview"]').length;
  const rejected = document.querySelectorAll('[data-status="rejected"]').length;

  totalCount.textContent = cards.length;
  interviewCount.textContent = interview;
  rejectedCount.textContent = rejected;


  updateTabCount();
}

function updateTabCount() {
  const visibleCards = document.querySelectorAll(".job-card:not(.hidden)").length;
  tabCount.textContent = `${visibleCards} jobs`;
}


function filterTab(tab) {
  currentTab = tab;


  const cards = document.querySelectorAll(".job-card");


  cards.forEach(card => {
    if (tab === "all") {
      card.classList.remove("hidden");
    } else {
      card.classList.toggle("hidden", card.dataset.status !== tab);
    }
  });

   const visibleCards = document.querySelectorAll(".job-card:not(.hidden)").length;
  emptyState.classList.toggle("hidden", visibleCards !== 0);


  updateTabCount();
}



function updateBadge(card, status) {
  const badge = card.querySelector(".status-badge");


  if (status === "interview") {
    badge.textContent = "INTERVIEW";
    badge.className =
      "status-badge inline-block mt-2 px-3 py-1 text-xs font-semibold rounded bg-green-100 text-green-700";
  } else if (status === "rejected") {
    badge.textContent = "REJECTED";
    badge.className =
      "status-badge inline-block mt-2 px-3 py-1 text-xs font-semibold rounded bg-red-100 text-red-700";
  } else {
    badge.textContent = "NOT APPLIED";
    badge.className =
      "status-badge inline-block mt-2 px-3 py-1 text-xs font-semibold rounded bg-gray-200 text-gray-700";
  }
}


document.addEventListener("click", function (e) {
  const card = e.target.closest(".job-card");
  if (!card) return;


  if (e.target.classList.contains("interview-btn")) {
    card.dataset.status =
      card.dataset.status === "interview" ? "all" : "interview";


    updateBadge(card, card.dataset.status);
    filterTab(currentTab);
    updateCounts();
  }


  if (e.target.classList.contains("rejected-btn")) {
    card.dataset.status =
      card.dataset.status === "rejected" ? "all" : "rejected";


    updateBadge(card, card.dataset.status);
    filterTab(currentTab);
    updateCounts();
  }


  if (e.target.classList.contains("delete-btn")) {
    card.remove();
    updateCounts();
    filterTab(currentTab);
  }
});

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("tab-active"));
    tab.classList.add("tab-active");
    filterTab(tab.dataset.tab);
  });
});
updateCounts();

