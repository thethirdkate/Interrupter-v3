#pragma strict


/// MouseLook rotates the transform based on the mouse delta.
/// Minimum and Maximum values can be used to constrain the possible rotation

/// To make an FPS style character:
/// - Create a capsule.
/// - Add the MouseLook script to the capsule.
///   -> Set the mouse look to use LookX. (You want to only turn character but not tilt it)
/// - Add FPSInputController script to the capsule
///   -> A CharacterMotor and a CharacterController component will be automatically added.

/// - Create a camera. Make the camera a child of the capsule. Reset it's transform.
/// - Add a MouseLook script to the camera.
///   -> Set the mouse look to use LookY. (You want the camera to tilt up and down like a head. The character already turns.)

//public var RotationAxes : enum;
public var sensitivityX : float = 15F;
public var sensitivityY : float = 15F;
//public var minimumX : float = -360F;
//public var maximumX : float = 360F;
public var minimumX : float = -360F;
public var maximumX : float = 360F;
public var minimumY : float = -60F;
public var maximumY : float = 60F;
public var rotationY : float = 0F;


/*
public enum RotationAxes { MouseXAndY = 0, MouseX = 1, MouseY = 2 }
public RotationAxes axes = RotationAxes.MouseXAndY;
*/

	
	
function Update ()
{
	var rotationX : float = transform.localEulerAngles.y + Input.GetAxis("Mouse X") * sensitivityX;
	
	rotationY += Input.GetAxis("Mouse Y") * sensitivityY;
	rotationY = Mathf.Clamp(rotationY, minimumY, maximumY);
	
	transform.localEulerAngles = new Vector3(-rotationY, rotationX, 0);
}

function Start ()
{
}