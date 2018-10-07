// must have scene, camera, renderer
var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;

//field of view, aspect ratio, near & far clipping plane
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );

//This can be swapped out later for VR
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial();


var cylinderGeometry = new THREE.CylinderBufferGeometry( 2, 2, 8, 10 );
var cylinderMaterial = new THREE.MeshNormalMaterial();
var cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );


var lineMaterial = new THREE.LineBasicMaterial ({ color: 0xffffff});
var lineGeometry = new THREE.Geometry();
lineGeometry.vertices.push(new THREE.Vector3(-20,0,0));
lineGeometry.vertices.push(new THREE.Vector3(-8,0,0));
lineGeometry.vertices.push(new THREE.Vector3(0,3,0));
lineGeometry.vertices.push(new THREE.Vector3(3,0,0));
lineGeometry.vertices.push(new THREE.Vector3(10,0,0));

var line1Material = new THREE.LineBasicMaterial({color: 0xffffff});
var line1Geometry = new THREE.Geometry();
line1Geometry.vertices.push(new THREE.Vector3(-10,0,10));
line1Geometry.vertices.push(new THREE.Vector3(-10,10,10));
line1Geometry.vertices.push(new THREE.Vector3(10,0,0));

var torusgeometry = new THREE.TorusKnotGeometry( 2,5,5,2 );
var torusmaterial = new THREE.MeshNormalMaterial();
var torusKnot = new THREE.Mesh( torusgeometry, torusmaterial );
scene.add( torusKnot );

var torus1geometry = new THREE.TorusKnotGeometry( 5,2,8,5 );
var torus1material = new THREE.MeshNormalMaterial();
var torus1Knot = new THREE.Mesh( torus1geometry, torus1material );
scene.add( torus1Knot );

//mesh takes geometry & applies a meterial to it
var mesh = new THREE.Mesh ( geometry, material);
var cube = new THREE.Mesh( geometry, material );
var line = new THREE.Line( lineGeometry, lineMaterial );
var line1 = new THREE.Line( line1Geometry, line1Material );

scene.add( cylinder );
scene.add( cube );
scene.add( mesh );
scene.add( line );
scene.add( line1 );


//camera is automatically put at 0,0,0 so this brings it out from where the cube is
camera.position.z = 20;

var animate = function () {
  requestAnimationFrame( animate );
  mesh.position.x = 5
  mesh.rotation.x += 0.05;
  cube.position.x = -5;
  cube.position.y += meter.volume*0.5;
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  //camera.position.z = 500*meter.volume;
  torusKnot.position.x = 10;
  torus1Knot.position.x = -18 + (meter.volume*20) ;
  torusKnot.rotation.x += 0.5*meter.volume;
  torus1Knot.rotation.x += 0.01;
  cylinder.rotation.x += 0.5*meter.volume;
  line.rotation.x += 0.05;
  renderer.render( scene, camera );
};

animate();