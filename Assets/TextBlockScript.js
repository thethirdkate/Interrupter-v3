#pragma strict


var textSpeed : float = 1; //speed text moves up
var yLimit : int = 10; //position where text gets destroyed

function Start () {

}

function Update () {

	transform.position.y+=textSpeed*Time.deltaTime; //move up
	if (transform.position.y > yLimit) { //destroy self when the y limit is reached
		Destroy(gameObject);
	}


}