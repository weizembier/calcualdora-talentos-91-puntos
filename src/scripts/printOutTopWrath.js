
//print out all the different types of talent trees
var i = 0;

var arrowYellowStyle = "hidden";
var arrowGreenStyle = "hidden";
var massiveReplaceString = "";

var talentDescriptionArray = new Array;

var imgDir = "";

//output the class selection bar
massiveReplaceString += '';

//output the class information Warrior (0/0/0) etc.
massiveReplaceString += '<div id="classInformation"><span id="resetAll"><a href="" onclick="resetTreeAll();return false;"><img src="../images/resetall.gif" border="0"></a></span><span id="classNameOverall"><span id="className"></span><span id="spec">(<span id="spec0" class="mySmallWhite">0</span>/<span id="spec1" class="mySmallWhite">0</span>/<span id="spec2" class="mySmallWhite">0</span>)</span></span><span id="PointsAvailOverall"><span id="PointsLeftText">Puntos Restantes:</span><span id="tabPointsAvailable" class="mySmallWhite">51</span></span><span id="requiredLevelOverall"><span id="requiredLevelText">Nivel Requerido: </span><span id="levelRequired" class="mySmallWhite">9</span></span></div>';

massiveReplaceString += '<div class="talentwrap1"><div class="talentwrap2"><table border = "0" cellpadding = "0" cellspacing = "0"><tr>';

if (variableIsSite) {
	massiveReplaceString += '<div style = "position: relative; top: -12px; left: 13px;"><div style = "position: absolute;"></div></div>';
	iconSize = ' width = "43px" height = "45px"';
	resetDisplay = 'style = "display: block;"';
} else {
	imgDir = "armory/";
	iconSize = ' width = "32px" height = "34px"';
	resetDisplay = 'style = "display: none;"';
}

massiveReplaceString += '<tr>';

//finally we get to arrange and print out all the info
for (var printTreeID = 0; printTreeID < numberOfTrees; printTreeID++) {
	var tier = 0;
	var treeID;		

	treeID = tree[printTreeID];	

	var treeName = nltree[printTreeID];
	treeName = treeName.toLowerCase();
	treeName = treeName.replace(" ", "");	
	
	//box top
	massiveReplaceString += '<td class="treeBlock"><table border = "0" cellpadding = "0" cellspacing = "0">';

	massiveReplaceString += '<tr><td class = "tabletopleft"></td>';
	massiveReplaceString += '<td class = "tabletop"></td>';
	massiveReplaceString += '<td class = "tabletopright"></td></tr>';
	
	massiveReplaceString += '<tr><td class = "tableleft"></td>';
	massiveReplaceString += '<td  style = "background: url(\'images/'+ imgDir + treeName +'/background.jpg\') #000000 no-repeat; background-size: 100% 100%;">';	
	
	massiveReplaceString += '<div id = "'+ treeID +'Tree">';

	var vertical = tierNum;
	var verticalCounter;
	var horizontal = 4;			
	var horizontalCounter;	
	
	//begin while loop
	while (talent[i] && talent[i][0] == printTreeID &&  i != (talent.length - 1)){
	
			massiveReplaceString += '<table border = "0" cellspacing = "0" cellpadding = "0"><tr><td class = "treePadding">';
			massiveReplaceString += '<table border = "0" cellpadding = "10" cellspacing = "0">';
			
			for (verticalCounter = 1; verticalCounter <= vertical; verticalCounter++)
			{
				massiveReplaceString += "<tr>";
				for (horizontalCounter = 1; horizontalCounter <= horizontal; horizontalCounter++)
				{
					massiveReplaceString += '<td class = "tdPaddingTen">';
					if (talent[i] && talent[i][3] == horizontalCounter && talent[i][4] == verticalCounter)
					{

					
						var imageName;
						talentName = talent[i][1];
						imageName = nltalent[i][0];
						imageName = imageName.toLowerCase();
						imageName = imageName.replace(":", "");
						imageName = imageName.replace(" ", "");
						imageName = imageName.replace(" ", "");
						imageName = imageName.replace(" ", "");
						imageName = imageName.replace(" ", "");

						massiveReplaceString += '<div id = "wrapper99"><div id = "rankTopStyle"><table><tr><td nowrap class = "tdPaddingThree">';					
						//rank
						if (rankTop[i][0] == talent[i][2]) {

							massiveReplaceString += '<span id = "modifyRankTopColor'+ i +'" class = "mySmall2">';
							massiveReplaceString += '<span id = "modifyRankTop'+ i +'" class = "mySmall22">';
						} else if(rankTop[i][0] > 0 ) {
							massiveReplaceString += '<span id = "modifyRankTopColor'+ i +'" class = "mySmallGreen">';
							massiveReplaceString += '<span id = "modifyRankTop'+ i +'" class = "mySmallGreen2">';
						} else {
							massiveReplaceString += '<span id = "modifyRankTopColor'+ i +'" class = "mySmallOff">';
							massiveReplaceString += '<span id = "modifyRankTop'+ i +'" class = "mySmallOff2">';
						}

						massiveReplaceString += rankTop[i][0] +'</span>/'+ talent[i][2] +'</span></td></tr></table></div></div>';

						//description
						massiveReplaceString += '<div id = "talentMouseOver'+ i +'" style = "visibility: hidden;"><div id = "wrapper">';

						tierTalent = talent[i][4];
						
						if (printTreeID != 2 && tierTalent != vertical) {
							massiveReplaceString += '<div id = "descriptionTopStyle">';
						} else if (printTreeID == 2 && tierTalent != vertical)  {
							massiveReplaceString += '<div id = "descriptionTopStyleThird">';
						} else if (printTreeID != 2 && tierTalent == vertical) {
							massiveReplaceString += '<div id = "descriptionTopStyleBottom">';
						} else {
							massiveReplaceString += '<div id = "descriptionTopStyleThirdBottom">';
						}
							
						massiveReplaceString += '<table class="TalentTooltip" border = "0" cellpadding = "0" cellspacing = "0" style="width:300px;">';
						massiveReplaceString += '<tr><td><table width = "300px" border = "0" cellspacing = "0" cellpadding = "5" style="padding:5px;"><tr><td class = "tdPaddingFive">';
						massiveReplaceString += '<div id = "armoryOver'+ i +'"><span style = "color: white; font-weight: bold;" class="talentNameStyle">'+ talent[i][1] +'</span>';
						massiveReplaceString += '<br><span class = "rankTooltip">'+ textRankColon +' <span id = "modifyRankTopDescription'+ i +'" class = "rankTooltip">'+ rankTop[i][0] + '</span>/'+ talent[i][2] +'</span>';

						if (talent[i][5])	//if the talent requires other talents
						{
							requirement = talent[i][5][0];
							requirementPoints = talent[i][5][1];
							requirementName = talent[requirement][1];
						
							if (variableIsSite)
								massiveReplaceString += '<span id="requiresTalent'+ i +'" style = "color: red" class = "mySmall"><br>' + requiresRequires + ' '+ requirementPoints +' '+ requiresPointsIn + ' ' + requirementName +'</span>';			
						}
			
						if (talent[i][4] != 1 && variableIsSite)	//if the talent requires other talents
						{ 
							massiveReplaceString += '<span id = "requiresPoints'+ i +'" style = "color: red" class = "mySmall"><br>' + requiresRequires + ' '+ ((talent[i][4]*5)-5) +' '+ requiresPointsIn + ' ' + tree[talent[i][0]] +' '+ requiresTalents +'</span>';
						}

						massiveReplaceString += '<br /><span id = "modifyDescriptionTop'+ i +'" style = "display: block; color: #FFFFFF" class="talentDescriptionStyle q">'+ rankTop[i][1] +'</span>';							

						if (variableIsSite)	{
							//description next
							massiveReplaceString += '<table border = "0" cellpadding = "0" cellspacing = "0" width = "100%" height = "0"><tr><td width = ""><span id="textLeftClick' + i + '" style = "color: #1ae91b; font-size: 12px;">'+ textLeftClick +'</span></td><td width = "50%" align = "right"><span id="textRightClick' + i + '" style = "color: #fb1410; font-size: 12px;"></span></td></tr></table>';	
						}
						
						massiveReplaceString += '</div></td></tr></table></td><td bgcolor = "#a5a5a5" width = "1"><div style = "width: 1px;"></div></td></tr><tr><td></td><td bgcolor = "#4f4f4f" height = "2"></td><td></td></tr></table></div></div></div>';
						
						massiveReplaceString += '<div style = "z-index: 99999; position: relative;"><div style = "top: -2px; left: -2px; position: absolute;"><img src = "/images/pixel.gif" width = "50px" height = "50px" border = "0" onClick = "rankTopOnClick('+ i +');" onMouseOver = "unhideTalent('+ i +');" onMouseOut = "hideTalent('+ i +');" onContextMenu = "rankTopOnRightClick('+ i +'); return false;" /></div></div>';
						
						massiveReplaceString += '<div style = "z-index: 50; position: relative;"><div style = "top: -2px; left: -2px; position: absolute;"><img src = "/images/talents/icon-over-grey.gif" border = "0" /></div></div>';






						//This has to do with "if the talent has points
						if (rankTop[i][0] >= 1)
							massiveReplaceString += '<div id = "iconOverGreen'+ i +'" style = "position: relative; z-index:50;"><div id = "iconOver"><img src = "/images/talents/icon-over-green.gif" border = "0" /></div></div>';
						else
							massiveReplaceString += '<div id = "iconOverGreen'+ i +'" style = "visibility:hidden; position: relative; z-index:50;"><div id = "iconOver"><img src = "/images/talents/icon-over-green.gif" border = "0"></div></div>';

						//This is if the talent has max points
						if (rankTop[i][0] == talent[i][2])
							massiveReplaceString += '<div id = "iconOverYellow'+ i +'" style = "position: relative; z-index:50;"><div id = "iconOver"><img src = "/images/talents/icon-over-yellow.gif" border = "0"></div></div>';
						else 
							massiveReplaceString += '<div id = "iconOverYellow'+ i +'" style = "visibility:hidden; position: relative; z-index:50;"><div id = "iconOver"><img src = "/images/talents/icon-over-yellow.gif" border = "0"></div></div>';

						//This is if the talent can't have points..?
						if (rankTop[i][0] == 0)							
							massiveReplaceString += '<div id = "talentThumb'+ i +'" style = "visibility: hidden; position: relative;"><div id = "wrapper49"><img src = "images/' + treeName +'/'+ imageName +'.jpg" border = "0" '+ iconSize+'></div></div>';
						else
							massiveReplaceString += '<div id = "talentThumb'+ i +'" style = "position: relative"><div id = "wrapper49"><img src = "images/' + treeName +'/'+ imageName +'.jpg" border = "0" '+ iconSize+'></div></div>';
							
							
							
							
							
							
							
							
							
							
							
							
							
						if (talent[i][5]) {
									
							thisTalentX = talent[i][3];		
							thisTalentY = talent[i][4];

							requiredTalentX = talent[requirement][3];
							requiredTalentY = talent[requirement][4];

							if (query) {
								if (saveTemplate[i] == talent[i][2]) {
									arrowYellowStyle = "visible";
									arrowGreenStyle = "hidden";
								} else if (saveTemplate[i] > 0) {
									arrowYellowStyle = "hidden";
									arrowGreenStyle = "visible";
								} else {
									arrowYellowStyle = "hidden";
									arrowGreenStyle = "hidden";
								}
							} else {
									arrowYellowStyle = "hidden";
									arrowGreenStyle = "hidden";
							}

							if (thisTalentX == requiredTalentX) {  //up and down
							
								if ((thisTalentY - 1) == requiredTalentY) {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown1"><img src = "../src/images/talents/arrows/down-1-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown1"><span id="arrowGreen'+ i +'" style = "visibility:'+ arrowGreenStyle +';"><img src = "../src/images/talents/arrows/down-1-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown1"><span id="arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "../src/images/talents/arrows/down-1-yellow.gif"></span></div></div>';
								} else if ((thisTalentY - 2) == requiredTalentY) {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2"><img src = "../src/images/talents/arrows/down-2-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2"><span id = "arrowGreen'+ i +'" style = "visibility:'+ arrowGreenStyle +';"><img src = "../src/images/talents/arrows/down-2-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2"><span id = "arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "../src/images/talents/arrows/down-2-yellow.gif"></span></div></div>';
								} else if ((thisTalentY - 3) == requiredTalentY) {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown3"><img src = "../src/images/talents/arrows/down-3-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown3"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "../src/images/talents/arrows/down-3-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown3"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "../src/images/talents/arrows/down-3-yellow.gif"></span></div></div>';
								} else if ((thisTalentY - 4) == requiredTalentY) {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown4"><img src = "../src/images/talents/arrows/down-4-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown4"><span id = "arrowGreen'+ i +'" style = "visibility:'+ arrowGreenStyle +';"><img src = "../src/images/talents/arrows/down-4-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown4"><span id="arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "../src/images/talents/arrows/down-4-yellow.gif"></span></div></div>';
								}
							} else if (thisTalentY == requiredTalentY) {  //across
								if (requiredTalentX == (thisTalentX - 1)) {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowacrossright"><img src = "../src/images/talents/arrows/across-right-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowacrossright"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "../src/images/talents/arrows//across-right-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowacrossright"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "../src/images/talents/arrows/across-right-yellow.gif"></span></div></div>';
								} else if (requiredTalentX == (thisTalentX + 1)) {
									massiveReplaceString += '<div id = "wrapper51"><div class = "arrowacrossleft"><img src = "../src/images/talents/arrows/across-left-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper51"><div class = "arrowacrossleft"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "../src/images/talents/arrows/across-left-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper51"><div class = "arrowacrossleft"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "../src/images/talents/arrows/across-left-yellow.gif"></span></div></div>';
								}
							} else if (thisTalentX == (requiredTalentX-1)){
								if ((thisTalentY - 1) == requiredTalentY) {												
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownleft"><img src = "../src/images/talents/arrows/down-left-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownleft"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "../src/images/talents/arrows/down-left-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownleft"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "../src/images/talents/arrows/down-left-yellow.gif"></span></div></div>';
								} else {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2left"><img src = "../src/images/talents/arrows/down-2-left-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2left"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "../src/images/talents/arrows/down-2-left-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2left"><span id = "arrowYellow'+ i +'" style = "visibility: '+ arrowYellowStyle +';"><img src = "../src/images/talents/arrows/down-2-left-yellow.gif"></span></div></div>';
								}
							} else if ((thisTalentX-1) == requiredTalentX) {								
								if ((thisTalentY - 1) == requiredTalentY) {				
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownright"><img src = "../src/images/talents/arrows/down-right-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownright"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "../src/images/talents/arrows/down-right-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdownright"><span id = "arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "../src/images/talents/arrows/down-right-yellow.gif"></span></div></div>';
								} else {
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2right"><img src = "../src/images/talents/arrows/down-2-right-grey.gif"></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2right"><span id = "arrowGreen'+ i +'" style = "visibility: '+ arrowGreenStyle +';"><img src = "../src/images/talents/arrows/down-2-right-green.gif"></span></div></div>';
									massiveReplaceString += '<div id = "wrapper50"><div class = "arrowdown2right"><span id = "arrowYellow'+ i +'" style = "visibility:'+ arrowYellowStyle +';"><img src = "../src/images/talents/arrows/down-2-right-yellow.gif"></span></div></div>';									
								}
							}
							
						}
							massiveReplaceString += '<img src = "images/' + treeName +'/'+ imageName +'-off.jpg"border = "0" '+ iconSize +'>';
						i++;
					}
					else
						massiveReplaceString += "&nbsp;";
					massiveReplaceString += "</td>";						
				}
				massiveReplaceString += "</tr>";
			}

			massiveReplaceString += "</table></td></tr></table>";
			massiveReplaceString += "</div>";		
			
	}		

	
	//box bottom
	massiveReplaceString += '</td><td class = "tableright"><div style = "width: 1px;"></div></td></tr>';
	massiveReplaceString += '<tr><td class = "tablebotleft"></td>';
	
	massiveReplaceString += '<td class="tablebot">';
	massiveReplaceString += '<table border="0" cellpadding="0" cellspacing="0">';
	massiveReplaceString += '\
	<tr>\
		<td width="100%" nowrap class="tablebotbot">\
			<div class="talenttreename">\
				<img src="'+ imgPath +'/images/talents/trees/'+ nlclass + printTreeID +'.png" class="p talenttreeicon" align="left"><span class = "treeName">&nbsp;'+ tree[printTreeID] +'</span><span class = "treeColon">'+ textColon +' <span class = "treePoint" id="'+tree[printTreeID]+'tabPoints">'+ pointsTree[printTreeID] + '</span> <span class = "treePoints" id="'+tree[printTreeID]+'tabPointsText">'+ textPoints +'</span></span><a id = "hideReset'+ printTreeID +'" href = "" onclick = "resetTree('+ printTreeID +');return false;"><img src = "'+ imgPath +'/includes/images'+ lg +'/reset.gif" border = "0"></a></nobr>\
			</div>\
		</td>\
	</tr>\
	</table>';
	
	massiveReplaceString += '</td><td class = "tablebotright"></td></tr>';
	
	massiveReplaceString += "</table></td>";	
	
}
//end for loop



massiveReplaceString += "</tr></table></div></div>";

massiveReplaceString += '<div id = "hideBoxBot"';

if (!variableIsSite)
	massiveReplaceString += ' style = "display: none;"';

massiveReplaceString += '>';

massiveReplaceString += '<p>'+ textToSave +'</p>';

massiveReplaceString += '<p id = "copyURL"></p></div>';

document.getElementById('replaceMeWithTalents').innerHTML = massiveReplaceString;
document.getElementById('className').innerHTML = nlclass.charAt(0).toUpperCase() + nlclass.slice(1);
document.getElementById('className').classList.add(nlclass);

//fill information based on provided string
fillInformation();

if (variableIsSite) {

canTurnGreen(0, 0, 1);
canTurnGreen(0, 1, 1);
canTurnGreen(0, 2, 1);

}

changeCopyURL();

jsLoaded=true;//needed for ajax script loading


function fillInformation() {
	for (i = 0; i < 3; i++)
		{
			//fill in the SPEC x/x/x
			document.getElementById('spec' + i).innerHTML = pointsTree[i];	
		}
	//required level
	document.getElementById('levelRequired').innerHTML = rankPointsMax - rankPoints + levelMin - 1;
	//pointsLeft
	document.getElementById('tabPointsAvailable').innerHTML = rankPoints;
}