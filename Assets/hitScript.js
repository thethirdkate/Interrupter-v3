#pragma strict


function OnCollisionEnter (col : Collision)
{
	gameObject.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0),Random.Range(0.0,1.0));
	Debug.Log("HIT");
	Destroy(col.gameObject);
}