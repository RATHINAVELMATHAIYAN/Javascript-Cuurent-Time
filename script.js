
        function updateTime() {
            const now = new Date();
            const date = now.toDateString();
            const time = now.toLocaleTimeString();
            document.getElementById("time").textContent = `${date}  ${time}`;
        }
        setInterval(updateTime, 1000); // Update time every second
        updateTime(); // Initial call to show the time immediately
    