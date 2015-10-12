#pragma strict

public var textBlock : GameObject;
public var textGap : int = 20;
public var chanceOfGap : int = 5;
public var maxGap : int = 1;
public var maxBlock : int = 5;

var spawnCounter : int = 0;

var gapCount : int = 0;
var blockCount : int = 0;

var phrases : String[];

function Start () {
	//spawn a text block
	spawnText();
}

function Update () {
	spawnCounter++;
	
	if (spawnCounter>=textGap) { //spawn text at regular intervals
	
		var dontRandomSpawn : boolean = false;
	
		//do we DEFINITELY need to spawn text?
		if (gapCount == maxGap) {
			spawnText();
			dontRandomSpawn=true;
		}
		
		//do we definitely need to NOT spawn text (i.e. create a gap?)
		if (blockCount == maxBlock) {
			gapCount++;
			blockCount=0;
			dontRandomSpawn = true;
		}
		
		if (!dontRandomSpawn) { //if we're allowed to do a randomised spawn...
	
			//randomise the gap
			var randNum = Random.Range(0,100);
			if (randNum > chanceOfGap) {
				spawnText(); 
			}
			else {
				gapCount++;
				blockCount=0;
			}
		
		}
		
		
		spawnCounter=0;
		
	}
	spawnCounter++;
}

function spawnText() {
	var myText = Instantiate(textBlock, transform.position, Quaternion.identity); //create a new text block
	//myText.GetComponent.<TextMesh>().text = "Yeah so my latest idea...";
	var getTextNum = Random.Range(0,phrases.Length-1);
	myText.GetComponent.<TextMesh>().text = phrases[getTextNum];
	blockCount++;
	gapCount=0;
}


