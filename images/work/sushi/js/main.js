$(document).ready(
	function () {
		
		
		
		var s = Snap("#sushi");
		
		/*
		Snap.load("./svg/cube.svg", function (data) 
		{
			t = data.select("#top");
			s.append(t);
		}
		*/
		
		
		Snap.load("svg/sushi.svg", function (data) 
			{ 
				title = data.select("#title");
				s.append(title);
				
				shadow = data.select("#shadow");
				s.append(shadow);
				
				table = data.select("#table");
				s.append(table);
				
				//sushi
				c = data.select("#c");
				s.append(c);
				
				a = data.select("#a");
				s.append(a);
				
				sc = data.select("#sc");
				s.append(sc);
				
				cr = data.select("#cr");
				s.append(cr);
				
				sa = data.select("#sa");
				s.append(sa);
				
				instr = data.select("#instr");
				s.append(instr);
				
				g = s.group(instr,title,shadow,table,c,a,sc,cr,sa);
				
				
				//callouts
				
				//food
				s1 = data.select("#s1");
				s.append(s1);
				
				s2 = data.select("#s2");
				s.append(s2);
				
				s3 = data.select("#s3");
				s.append(s3);
				
				s4 = data.select("#s4");
				s.append(s4);
				
				s5 = data.select("#s5");
				s.append(s5);
				
				s1.animate({'opacity': 0.0}, 0);
				s2.animate({'opacity': 0.0}, 0);
				s3.animate({'opacity': 0.0}, 0);
				s4.animate({'opacity': 0.0}, 0);
				s5.animate({'opacity': 0.0}, 0);
				

				
				//hover
				c.hover( hoveroverC, hoveroutC );
				a.hover( hoveroverA, hoveroutA );
				sc.hover( hoveroverSc, hoveroutSc );
				sa.hover( hoveroverSa, hoveroutSa );
				cr.hover( hoveroverCr, hoveroutCr );
				
				s.selectAll('.st1').forEach( 
					function( el ) {
						el.attr({ fill:'#FFFFFF',stroke:'#000000' }); 
					}
				);

			}
		);		
		
		var hoveroverC = function(){
			s1.animate({'opacity': 1.0}, 250);
			c.animate({'opacity': 0.75}, 250);
			c.attr({stroke: '#000000'});
		}

		var hoveroutC = function(){
			s1.animate({'opacity': 0.0}, 250);
			c.animate({'opacity': 1.0}, 250);
			c.attr({stroke: 'none'});
		}
		
		var hoveroverA = function(){
			s2.animate({'opacity': 1.0}, 250);
			a.animate({'opacity': 0.75}, 250);
			a.attr({stroke: '#000000'});	
		}
		
		var hoveroutA = function(){
			s2.animate({'opacity': 0.0}, 250);
			a.animate({'opacity': 1.0}, 250);
			a.attr({stroke: 'none'});	
		}
		
		var hoveroverSc = function(){
			s3.animate({'opacity': 1.0}, 250);
			sc.animate({'opacity': 0.75}, 250);	
			sc.attr({stroke: '#000000'});
		}
		
		var hoveroutSc = function(){
			s3.animate({'opacity': 0.0}, 250);
			sc.animate({'opacity': 1.0}, 250);
			sc.attr({stroke: 'none'});
		}
		
		var hoveroverSa = function(){
			s4.animate({'opacity': 1.0}, 250);
			sa.animate({'opacity': 0.75}, 250);	
			sa.attr({stroke: '#000000'});
		}
		
		var hoveroutSa = function(){
			s4.animate({'opacity': 0.0}, 250);
			sa.animate({'opacity': 1.0}, 250);
			sa.attr({stroke: 'none'});
		}
		
		var hoveroverCr = function(){
			s5.animate({'opacity': 1.0}, 250);
			cr.animate({'opacity': 0.75}, 250);
			cr.attr({stroke: '#000000'});	
		}
		
		var hoveroutCr = function(){
			s5.animate({'opacity': 0.0}, 250);
			cr.animate({'opacity': 1.0}, 250);
			cr.attr({stroke: 'none'});
		}
			
				
	
		
	}
);