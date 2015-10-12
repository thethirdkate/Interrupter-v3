#pragma strict


var textSpeed : float; //speed text moves up
var yLimit : int = 100; //position where text gets destroyed

function Start () {

}

function Update () {

	transform.position.y+=textSpeed*Time.deltaTime; //move up
	if (transform.position.y > yLimit) { //destroy self when the y limit is reached
		Destroy(gameObject);
	}


}