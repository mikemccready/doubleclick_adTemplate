// Start Enable initialization ///////////////////////////////////////////////////////////
if (!Enabler.isInitialized()) {
	Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitialized);
} else {
   enablerInitialized();
}
function enablerInitialized() {
	// Enabler initialized. In App ads are rendered offscreen so animation should wait for
	// the visible event. These are simulated with delays in the local environment.
	if (!Enabler.isVisible()) {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisible);
	} else {
		adVisible();
	}
}// End Enabler Initialization ///////////////////////////////////////////////////////////


// Start Ad
function adVisible() {
  console.log('here');
}
// End Ad Init

// Enabler Exits ////////////////////////////////////////////////////////////////////////
document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);

function bgExitHandler(e) {
  Enabler.exit('Background Exit');
}

// Exits; overriding exit.
// Enabler.exitOverride("Click on BG", "http://www.google.com");
// Counters.
// Enabler.counter("Clicked on tab 1");
// Timers
// Enabler.startTimer("Spinning car");
// Enabler.stopTimer("Spinning car");
