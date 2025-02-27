document.addEventListener('DOMContentLoaded', function() {
    var progress = 0;

    // Example function to update progress
    function updateProgress(newProgress) {
        progress = newProgress;
        document.getElementById('progressPercentage').innerText = progress + '%';
        document.getElementById('progressBar').style.width = progress + '%';
    }

    // Simulate progress update
    setTimeout(function() {
        updateProgress(50); // Update to 50% progress after 2 seconds
    }, 2000);
});
