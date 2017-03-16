// JavaScript Document
window.onload = load_cookies;

var sanity = 100;

function save_cookies(story) {
	var d = new Date();
	d.setTime(d.getTime() + (120*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	
	document.cookie = "case=" + story + "; " + expires;
}

function load_cookies() {
	var x = document.cookie;
	x = x.split("; ");
	for( var i = 0; i<x.length; i++) {
		var temp =x[i].split("=");
		// temp = ["username", "John Doe"]
		if(temp[0]=="case") {
			changeDisplay(temp[1]);
		}
	}
}

function changeDisplay(choice) {
	var story = "";
	//var pic = "";
	var btn1 = document.createElement("BUTTON"); // <button></button>
	var btn2 = document.createElement("BUTTON");
	
	switch(choice) {
		case "loadingscreen":
			story = "";
			btn1.setAttribute("onClick", "changeDisplay('start')");
			 btn1.innerHTML = "Start"
			
		case "start":
			// change story text
		story = "You were on a plane trip to Hawaii to visit family and friends. Everything was going smoothly until you see a strange blue mist form around the plane. ~~~ You are now the only survivor of a plane crash which has landed you on an island you didn't even know existed. You will now face many trials such as fighting monsters and defending for yourself. Are you up for the challenge? Or will you die on this island? Alone. Stranded.";
			btn1.setAttribute("onClick", "changeDisplay('intro')");
			btn1.innerHTML = "Continue...";	
		    btn2 ="";
			break;
		
		case "intro":
			// change story text
		story = "You wake up among the ruins of a very apparent plane crash. Pieces of the plane lay around you, some still in flames. You quickly pull yourself out of your stupor and run out of the rubble. In front of you there is a forest. You decide to go inside the forest to look for supplies. You see an apple on a tree. But it isn’t any normal apple. Its color is gold, shiny and tempting. Unable to tear your eyes away from it, you take the apple and follow the sound of running water to a river. There you see an animal drinking water from a lake. The creature is like a white wolf, but it has turquoise gems come out of its fur, in the area that might be a mane for a lion. After it looked up at you, it ran away. Suddenly you hear some noise like an animal moving around. You follow the noise to see an animal like a purple tiger with two long horns at the top of its head. It’s laying on a tree branch. What will you do? Will you fight it? Or will you pet it?";
			btn1.setAttribute("onClick", "changeDisplay('pet')");
			btn1.innerHTML = "Try to pet it";	
			btn2.setAttribute("onClick", "changeDisplay('death1')");
			btn2.innerHTML = "Attack the animal";
			break;
		case "pet":
			sanity+=10;
			save_cookies("pet");
			// change story text
			story = "You decide to pet the animal. Its fur feels silky to the touch and as you continue to study her, you decide to name her Lavender, because of the unique color of her fur. Lavender moves away from your touch and you follow her, curious to where she was going. She leads you to some stones. You couldn’t help but feel impressed as you begin to grasp her idea. You use the stones to cut down some trees in the area. You continue to cut the wood into smaller pieces and afterward gather leaves. After gathering all your materials, you use the wood and leaves to build a hut. You decide to go back to the plane to see if there are any metal pieces that you can use. But among the ruins of the plane crash, you see a very strange looking creature. It had the overall shape of a rhino, but it was green overall, with a very mossy look. Where the horns of a rhino would have been were two branches of flowers. When this creature notices you, it charges. What will you do? Will you dodge? Or will you try to stop it?";
			btn1.setAttribute("onClick", "changeDisplay('dodge')");
			btn1.innerHTML = "Try to dodge it";
			btn2.setAttribute("onClick", "changeDisplay('death2')");
			btn2.innerHTML = "Try to stop it";
			break;
		case "death1":
			story = "You decide to fight it. You take a swing at it, but you miss. It bites you, before jumping on you and biting your neck, instantly killing you. You die. Alone. Stranded. THE END";
			btn1.setAttribute("onClick", "location.reload();");
			btn1.innerHTML = "Start over";
			btn2 = "";
			break;
		case "death2":
			// change story text
			story = "You try to stop the charging creature, but it is in vain. The only result of it is that the branches stab into your body and you die. Alone. Stranded.";
			btn1.setAttribute("onClick", "location.reload();");
			btn1.innerHTML = "Start over";
			btn2 = "";
			break;
		
		case "dodge":
		save_cookies("dodge");
			// change story text
			story = "You dodge as the creature stampedes at you and a wild blur of orange and black jumps and attack it. Once you are safely on the sidelines, you see that the animal that attacked the rhino creature is a tiger. The tiger bites the creature’s neck and it dies. You can use the stone that you obtained earlier to skin the rhino and take the meat out or let the tiger and Lavender eat it. What will you do? Will you skin the rhino? Or will you let the animals eat it?";
			btn1.setAttribute("onClick", "changeDisplay('Skin rhino')");
			btn1.innerHTML = "Skin the rhino";
			btn2.setAttribute("onClick", "changeDisplay('Let the animals eat it')");
			btn2.innerHTML = "Let the animals eat it";
			break;
		case "Skin rhino":
		sanity-=10;
			save_cookies("Skin rhino");
			// change story text
			story = "You skin the rhino and take the meat out. You bring the meat back to the hut and make a fire with some extra wood. You stick a piece of wood through the meat and cook it in the fire. Lavender jumped down and laid down next to you, closely followed by the tiger . . . which began morphing into a very familiar creature with white fur and turquoise gems around its neck. It is the animal that was drinking water from earlier! You decide to name him Bob. As the meat begins to blacken slightly, you look over to Bob and Lavender. You can either eat all of it yourself or give some to Bob and Lavender. What will you do? Will you eat it all yourself? Or will you give some to the animals?";
		btn1.setAttribute("onClick", "changeDisplay('death4')");
			btn1.innerHTML = "Eat it all yourself";
			btn2.setAttribute("onClick", "changeDisplay('Give some to the animals')");
			btn2.innerHTML = "Give some to the animals";
			break;
			
			case "death4":
				story = "You cook and eat all of the meat yourself. The animals look at you with anger but neither do anything. As shadows grow in the forest, you start to feel tired and so go into your hut and lay down to sleep. The next morning you wake up to loud thumps. You go to the beach with Bob and Lavender behind you. You see a monster that looks about 10 feet tall, with all of its body parts rock. It looks at you and challenges you. You run forward and get feebly squashed by the rock monster, Bob and Lavender doing nothing to stop your death. You die. Alone. Stranded.";
				btn1.setAttribute("onClick", "location.reload();");
				btn1.innerHTML = "Start over";
				btn2 = "";
				break;
			
 					case "Give some to the animals":
				story = "You give some of the meat to Bob and Lavender before eating some for yourself. As shadows grow in the forest, you start to feel tired and so go into your hut and lay down to sleep. The next morning you wake up to loud thumps. You go to the beach with Bob and Lavender hot on your trail. You see a monster that looks about 10 feet tall, with all of its body parts rock. It looks at you and challenges you. Bob runs forward and rips off the arms of the rock monster. However, the rock monster regrows those arms and begins to chuck rocks at you. What will you do? Will you dodge the rocks? Or will you call for help?";
			btn1.setAttribute("onClick", "changeDisplay('death 3')");
			btn1.innerHTML = "Dogde the rocks";
			btn2.setAttribute("onClick", "changeDisplay('Win 1')");
			btn2.innerHTML = "Call for help";
			break;
			
			case "Let the animals eat it":
				save_cookies("Let the animals eat it");
				// change story text
				story = "You let the animals eat the meat, but they still give you some anyway. You make a fire with some extra wood. You stick a piece of wood through the meat and cook it in the fire. As shadows grow in the forest, you start to feel tired and so go into your hut and lay down to sleep. The next morning you wake up to loud thumps. You go to the beach with Bob and Lavender hot on your trail. You see a monster that looks about 10 feet tall, with all of its body parts rock. It looks at you and challenges you. Bob runs forward and rips off the arms of the rock monster. However, the rock monster regrows those arms and begins to chuck rocks at you. What will you do? Will you dodge the rocks? Or will you call for help?" ;
				btn1.setAttribute("onClick", "changeDisplay('death 3')");
				btn1.innerHTML = "Dogde the rocks";
				btn2.setAttribute("onClick", "changeDisplay('Win 1')");
				btn2.innerHTML = "Call for help";
				break;
			
			
			
			case "death 3":
				// change story text
				story = "You try to dodge the rocks, but you get crushed to death. Alone. Stranded";
				btn1.setAttribute("onClick", "location.reload();");
				btn1.innerHTML = "Start over";
				btn2 = "";
				break;
			
			case "Win 1":
				// change story text
				story = "You call for help and Lavender pushes you away right as a rock comes soaring at you. She is unable to dodge the rock and gets crushed. Bob helps you lift the rock off and you find Lavender heavily wounded. You run up to the rock monster in anger and your hand magically lights up. You punch it and it explodes. As you celebrate this victory, you see a helicopter in the distance. When it finally arrives, you bring Lavender and Bob and you fly back to society. Not alone. Not stranded.";
				btn1.setAttribute("onClick", "changeDisplay('credits1')");
				btn1.innerHTML = "Rescued...";
				btn2 = "";
				break;
			
			
			
			case "credits1":
				save_cookies("start");
				story ="CREDITS:<br>Storyboard creators : Joshua Dedios, Alicia Wu, Pierce Dyal<br>Main coders : James Zhang, Parker Benson<br>Researchers/Supporting Coders : Jayden Cheung, Pierce Dyal<br> Cookie Coder : Jousha Dedios<br>Copyright 2017 By ThePeople ™ ";
				btn1.setAttribute("onClick", "location.reload();");
				btn1.innerHTML = "Start over";
				btn2 = "";
				break;
	}
	if (sanity>100) {
		sanity =100;
	}
	document.getElementById("sanity").value = sanity;

	
	
	document.getElementById("story").innerHTML = story;
	//document.getElementById("picture").setAttribute("src", pic);
	// delete buttons
	var buttonNode = document.getElementById("buttons");
	while (buttonNode.firstChild) {
    	buttonNode.removeChild(buttonNode.firstChild);
	}
	// add buttons
	document.getElementById("buttons").appendChild(btn1);
    document.getElementById("buttons").appendChild(btn2);
}
