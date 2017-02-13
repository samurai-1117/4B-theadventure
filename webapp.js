// JavaScript Document

function changeDisplay(choice) {
	var story = "";
	//var pic = "";
	var btns = "";
	var btn1 = "";
	var btn2 = "";
	var btn3 = "";
	
	switch(choice) {
		case "intro":
			// change story text
			document.getElementById("story").innerHTML = "You wake up among the ruins of a very apparent plane crash. Pieces of the plane lay around you, some still in flames. You quickly pull yourself out of your stupor and run out of the rubble. In front of you there is a forest. You decide to go inside the forest to look for supplies. You see an apple on a tree. But it isn’t any normal apple. Its color is gold, shiny and tempting. Unable to tear your eyes away from it, you take the apple and follow the sound of running water to a river. There you see an animal drinking water from a lake. The creature is like a white wolf, but it has turquoise gems come out of its fur, in the area that might be a mane for a lion. After it looked up at you, it ran away. Suddenly you hear some noise like an animal moving around. You follow the noise to see an animal like a purple tiger with two long horns at the top of its head. It’s laying on a tree branch. What will you do? Will you fight it? Or will you pet it?";
			// change picture
			//pic = "newimage.jpg";
			// change buttons
			// this can be done many different ways
			// idea #1:
			// btns = "<input type='button' THIS IS NOT COMPLETE><ADD MORE BUTTONS HERE>";
			// idea #2:
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "changeDisplay('pet')");
			btn1.innerHTML = "try to pet it";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "changeDisplay('death1')");
			btn2.innerHTML = "attack the animal";
			// you could add as many buttons as you needed here
			btns = btn1 + btn2;
			break;
		case "pet":
			// change story text
			document.getElementById("story").innerHTML = "You decide to pet the animal. Its fur feels silky to the touch and as you continue to study her, you decide to name her Lavender, because of the unique color of her fur. Lavender moves away from your touch and you follow her, curious to where she was going. She leads you to some stones. You couldn’t help but feel impressed as you begin to grasp her idea. You use the stones to cut down some trees in the area. You continue to cut the wood into smaller pieces and afterward gather leaves. After gathering all your materials, you use the wood and leaves to build a hut. You decide to go back to the plane to see if there are any metal pieces that you can use. But among the ruins of the plane crash, you see a very strange looking creature. It had the overall shape of a rhino, but it was green overall, with a very mossy look. Where the horns of a rhino would have been were two branches of flowers. When this creature notices you, it charges. What will you do? Will you dodge? Or will you try to stop it?";
			// change picture
			//pic = "newimage.jpg";
			// change buttons
			// this can be done many different ways
			// idea #1:
			// btns = "<input type='button' THIS IS NOT COMPLETE><ADD MORE BUTTONS HERE>";
			// idea #2:
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "changeDisplay('pet')");
			btn1.innerHTML = "try to pet it";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "changeDisplay('death1')");
			btn2.innerHTML = "attack the animal";
			// you could add as many buttons as you needed here
			btns = btn1 + btn2;
			break;
		case "death1":
		document.getElementById("story").innerHTML = "You decide to fight it. You take a swing at it, but you miss. It bites you, before jumping on you and biting your neck, instantly killing you. You die. Alone. Stranded.";
				btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "changeDisplay('pet')");
			btn1.innerHTML = "try to pet it";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "changeDisplay('death1')");
			btn2.innerHTML = "attack the animal";
				break;
		case "west":
			// copy code from above and adjust
	}
	
	document.getElementByID("story").innerHTML = story;
	//document.getElementByID("picture").setAttribute("src", pic);
	document.getElementByID("buttons").innerHTML = btns;
}