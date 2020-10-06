const hamToggle = document.querySelector('.hamburger');
const navMenu = document.getElementById('mainMenu');
const navMask = document.querySelector('.mobileMask');
const hamburger =
	'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D"fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g>';
const closeX =
	'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>';
hamToggle.addEventListener('click', function(e) {
	if (navMenu.classList.contains('activeNav')) {
		hamToggle.innerHTML = hamburger;
		navMask.classList.remove('maskActive');
		navMask.style.display = 'none';
		navMenu.classList.remove('activeNav');
	} else {
		hamToggle.innerHTML = closeX;
		navMask.style.display = 'block';
		navMask.classList.add('maskActive');
		navMenu.classList.add('activeNav');
	}
});
