/*//////////////////////////////////////////////////////////
//All Apple are grey
//////////////////////////////////////////////////////////*/
function Draw12(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*8);	

	changeTopText(newText = "One thing that stands out for Apple is that all chords are the color of grey",
		loc = 3/2, delayDisappear = 0, delayAppear = 1, finalText = false, xloc=-80, w=210);
	changeTopText(newText = "This means that Apple has always received more customers from other brands than they lost to them",
		loc = 3/2, delayDisappear = 6, delayAppear = 7, finalText = true, xloc=-80, w=210);

};/*Draw12*/