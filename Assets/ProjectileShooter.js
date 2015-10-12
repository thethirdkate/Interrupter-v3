#pragma strict
import UnityEngine.UI;

//projectile variables
public var projectile : GameObject;
public var projectileVelocity : int = 1;
public var powerText : UI.Text;
public var powerMultiplier : float = 0.1;

public var maxPower : int = 100;
public var minPower : int = 1;
public var powerIncrement : int = 10;

public var powerBar : GameObject;

var curPower : int = 0;
var holdingSpace : boolean = false;
var goingUp = true;


//experimental game variables
public var expPowerGoesDown : boolean = false;


function Start () {

}

function Update () {
	
	//if space bar is held down, the power bar goes up and down
	if (Input.GetKey("space")) {
		if (!holdingSpace) { //the space bar has just been pressed
			//reset the vars
			curPower=minPower;
			goingUp = true;
			holdingSpace=true;
		}
		
		if (goingUp) { //power is increasing
			curPower+=powerIncrement;; 
			if (curPower>= maxPower) { //top limit of power is reached
				goingUp = false;
			}
		}
		else if (expPowerGoesDown) {  //power is decreasing
			curPower-= powerIncrement; 
			if (curPower <= minPower) { //bottom limit of power is reached
				goingUp = true;
			}
		}
		
		powerText.text = "Power: " + curPower;
		
	}

	if (Input.GetKeyUp("space")) {  //space key is released, shoot projectiles from your face
	
		var newProjectile : GameObject = Instantiate(projectile) as GameObject; 		
		newProjectile.transform.position=transform.position+Camera.main.transform.forward;
		var rb : Rigidbody = newProjectile.GetComponent.<Rigidbody>();
		rb.velocity = Camera.main.transform.forward * curPower * powerMultiplier;
		holdingSpace = false;
		curPower=0;
		
	}
	
	
	//update power bar based on curpower
	var red : float = curPower/100F;
	powerBar.GetComponent.<Image>().color = new Color(1, 1-red, 1-red, 1);
	var myRect = powerBar.GetComponent.<RectTransform>();
	myRect.sizeDelta = new Vector2(curPower*1.5+30, curPower*1.5+30);


}