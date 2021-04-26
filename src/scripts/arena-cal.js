// JavaScript Document
var last_rating_to_points_2v2_value = 1500;
var last_rating_to_points_3v3_value = 1500;
var last_rating_to_points_5v5_value = 1500;
var last_points_to_rating_value = 500;


function calculatePointsFromRating(aRating, percentage) {
	if (aRating <= 1500) 
	{
		aPoints = percentage * (0.22 * aRating + 14);
		if (aPoints <= 0) 
			return 0;
		else
			return Math.floor(aPoints);
	}
	else
	{
		aPoints = percentage * (1511.26 / ( 1 + 1639.28 * Math.pow(2.71828, -0.00412 * aRating)));
		return Math.floor(aPoints);
	}
}

function calculateRatingFromPoints(aPoints, percentage) {
	aRating = Math.ceil(Math.log((1511.26 / (1639.28 * aPoints / percentage)) - ( 1 / 1639.28)) / ( -0.00412 ));
	if (aRating <= 1500) {
		aRating = ((aPoints / percentage)-14)/0.22;
		return aRating;
	}else{
		return aRating;
	}
}

function calculateArenaPoints() 
{
	value = document.getElementById('rating_to_points_2v2').value;
	aRating = parseInt(value, 10);
	if ((aRating > 0) && (aRating <= 4000))
	  document.getElementById('arenapoints_2v2').value = calculatePointsFromRating(aRating, 0.76);
	else
	  document.getElementById('arenapoints_2v2').value = 'Wrong Value';

	value = document.getElementById('rating_to_points_3v3').value;
	aRating = parseInt(value, 10);
	if ((aRating > 0) && (aRating <= 4000))
	  document.getElementById('arenapoints_3v3').value = calculatePointsFromRating(aRating, 0.88);
	else
	  document.getElementById('arenapoints_3v3').value = 'Wrong Value';
	
	value = document.getElementById('rating_to_points_5v5').value;
	aRating = parseInt(value, 10);
	if ((aRating > 0) && (aRating <= 4000))
	  document.getElementById('arenapoints_5v5').value = calculatePointsFromRating(aRating, 1);
	else
	  document.getElementById('arenapoints_5v5').value = 'Wrong Value';
}

function calculateArenaRating() {
	value = document.getElementById('points_to_rating').value;
	aPoints = parseInt(value, 10);
	
	aRating = calculateRatingFromPoints(aPoints, 0.76);
	if (aRating > 0 && aRating < 4000) {
		document.getElementById('arenarating_2v2').value = aRating;
	}else{
		document.getElementById('arenarating_2v2').value = 'Not Possible';
	}

	aRating = calculateRatingFromPoints(aPoints, 0.88);
	if (aRating > 0 && aRating < 4000) {
		document.getElementById('arenarating_3v3').value = aRating;
	}else{
		document.getElementById('arenarating_3v3').value = 'Not Possible';
	}

	aRating = calculateRatingFromPoints(aPoints, 1);
	if (aRating > 0 && aRating < 4000) {
		document.getElementById('arenarating_5v5').value = aRating;
	}else{
		document.getElementById('arenarating_5v5').value = 'Not Possible';
	}
}


function calculateArenaPointsGoal(bracket) 
{
	switch(bracket)
	{
		case 1 : 
			value = document.getElementById('goal_points_2v2').value;
			aRating = parseInt(value, 10);
			if ((aRating > 0) && (aRating <= 4000))
				document.getElementById('goal_result_points_2v2').value = calculatePointsFromRating(aRating, 0.76);
			else
				document.getElementById('goal_result_points_2v2').value = '0';
		break;
		case 2:
			value = document.getElementById('goal_points_3v3').value;
			aRating = parseInt(value, 10);
			if ((aRating > 0) && (aRating <= 4000))
				document.getElementById('goal_result_points_3v3').value = calculatePointsFromRating(aRating, 0.88);
			else
				document.getElementById('goal_result_points_3v3').value = '0';
		break;
		case 3:
			value = document.getElementById('goal_points_5v5').value;
			aRating = parseInt(value, 10);
			if ((aRating > 0) && (aRating <= 4000))
				document.getElementById('goal_result_points_5v5').value = calculatePointsFromRating(aRating, 1);
			else
				document.getElementById('goal_result_points_5v5').value = '0';
		break;
	}
}

function calculateWeeks()
{
	desiredPoints = parseInt(document.getElementById('goal_desiredPoints').value, 10);
	currentPoints = parseInt(document.getElementById('goal_result_currentpoints').value, 10); 
	
	value1 = parseInt(document.getElementById('goal_result_points_2v2').value, 10);
	value2 = parseInt(document.getElementById('goal_result_points_3v3').value, 10);
	value3 = parseInt(document.getElementById('goal_result_points_5v5').value, 10);
	pointPerWeek = Math.max(Math.max(value1, value2), value3);
	result = (desiredPoints - currentPoints) / pointPerWeek; 
	weeks = Math.ceil(result);
	if (weeks > -1)
	{
		document.getElementById('goal_result_weeks').value = weeks;
		document.getElementById('goal_result_points_left').value = (weeks * pointPerWeek) + currentPoints - desiredPoints;
	}
	
	
	
}