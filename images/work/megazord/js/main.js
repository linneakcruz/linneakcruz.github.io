$(document).ready(
	function () {
		
		
		
		var s = Snap("#mainSVG");
		
		Snap.load("./svg/megazord.svg", function (data) 
			{ 
				logo = data.select("#logo");
				s.append(logo);
				
				head = data.select("#head");
				s.append(head);
				
				arms = data.select("#arms");
				s.append(arms);
				
				chest = data.select("#chest");
				s.append(chest);
				
				torso = data.select("#torso");
				s.append(torso);
				
				pelvis = data.select("#pelvis");
				s.append(pelvis);
				
				back = data.select("#back");
				s.append(back);
			
				leftThigh = data.select("#leftThigh");
				s.append(leftThigh);
				
				leftLeg = data.select("#leftLeg");
				s.append(leftLeg);
				
				rightLeg = data.select("#rightLeg");
				s.append(rightLeg);
				
				rightThigh = data.select("#rightThigh");
				s.append(rightThigh);
				
				//info
				infoOne = data.select("#infoOne");
				s.append(infoOne);
				
				infoOne.animate({'opacity': 0.0}, 0);
				
				infoTwo = data.select("#infoTwo");
				s.append(infoTwo);
				
				infoTwo.animate({'opacity': 0.0}, 0);
				
				infoThree = data.select("#infoThree");
				s.append(infoThree);
				
				infoThree.animate({'opacity': 0.0}, 0);
				
				infoFour = data.select("#infoFour");
				s.append(infoFour);
				
				infoFour.animate({'opacity': 0.0}, 0);
				
				infoFive = data.select("#infoFive");
				s.append(infoFive);
				
				infoFive.animate({'opacity': 0.0}, 0);
				
				//hover
				chest.hover( hoveroverC, hoveroutC );
				rightLeg.hover( hoveroverR, hoveroutR );
				head.hover( hoveroverH, hoveroutH );
				leftLeg.hover( hoveroverL, hoveroutL );
				arms.hover( hoveroverA, hoveroutA );
				torso.hover( hoveroverH, hoveroutH );
				
				

			}
		);		
		
		var hoveroverC = function(){
			infoOne.animate({'opacity': 1.0}, 250);
			chest.animate({'opacity': 0.75}, 250);
		}

		var hoveroutC = function(){
			infoOne.animate({'opacity': 0.0}, 250);
			chest.animate({'opacity': 1.0}, 250);
		}
		
		var hoveroverR = function(){
			infoTwo.animate({'opacity': 1.0}, 250);
			rightLeg.animate({'opacity': 0.75}, 250);
		}

		var hoveroutR = function(){
			infoTwo.animate({'opacity': 0.0}, 250);
			rightLeg.animate({'opacity': 1.0}, 250);
		}
		
		var hoveroverH = function(){
			infoThree.animate({'opacity': 1.0}, 250);
			head.animate({'opacity': 0.75}, 250);
			chest.animate({'opacity': 0.75}, 250);
			torso.animate({'opacity': 0.75}, 250);
		}

		var hoveroutH = function(){
			infoThree.animate({'opacity': 0.0}, 250);
			head.animate({'opacity': 1.0}, 250);
			chest.animate({'opacity': 1.0}, 250);
			torso.animate({'opacity': 1.0}, 250);
		}
		
		var hoveroverA = function(){
			infoFour.animate({'opacity': 1.0}, 250);
			arms.animate({'opacity': 0.75}, 250);
			back.animate({'opacity': 0.75}, 250);
		}

		var hoveroutA = function(){
			infoFour.animate({'opacity': 0.0}, 250);
			arms.animate({'opacity': 1.0}, 250);
			back.animate({'opacity': 1.0}, 250);
		}
		
		var hoveroverL = function(){
			infoFive.animate({'opacity': 1.0}, 250);
			leftLeg.animate({'opacity': 0.75}, 250);
		}

		var hoveroutL = function(){
			infoFive.animate({'opacity': 0.0}, 250);
			leftLeg.animate({'opacity': 1.0}, 250);
		}
		
	}
);