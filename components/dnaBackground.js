import Script from 'next/script'

export default function dnaBackground() {
    return (
        <>
        <Script 
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/86/three.min.js"
        />
        <Script 
            dangerouslySetInnerHTML={{
                __html: `
                /*
function addNote(color) {
var gmoyerImg = document.createElement('img');
  gmoyerImg.setAttribute("id","gmoyerImg");
//var css = '.gmoyerImg:hover{width: 110px; height: 110px }';
//document.cssText = css
gmoyerImg.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
gmoyerImg.style.width = 100;
gmoyerImg.style.height = 100;
gmoyerImg.setAttribute('src', "https://s3-us-west-2.amazonaws.com/s.cdpn.io/783666/profile/profile-80_8.jpg")
gmoyerImg.style.borderRadius = 50 + "%";
gmoyerImg.style.bottom = 10 + 'px';
gmoyerImg.style.right = 10 + 'px';
  function gmoyerPage() {
    //document.location.href = "https://codepen.io/gmoyer";
    window.open("https://codepen.io/gmoyer")
  }
gmoyerImg.addEventListener("click", gmoyerPage)

document.body.appendChild(gmoyerImg);
  //addName(color)
}
*/
function addNote(shade) {
    var style = "#gm-signature{font-family:Helvetica,Arial,sans-serif;display:block;position:fixed;z-index:99999;bottom:2rem;right:1rem;line-height:50px;border-radius:2px;color:#444;text-transform:uppercase;font-weight:700;font-size:10px;-webkit-animation:gm-signature-in 500ms cubic-bezier(0,1.2,1,1);animation:gm-signature-in 500ms cubic-bezier(0,1.2,1,1);opacity:.6}#gm-signature strong{position:absolute;right:50%;width:200px;text-align:right;padding-right:8px;opacity:0;-webkit-transition:right 200ms,opacity 200ms;transition:right 200ms,opacity 200ms;z-index:-1;pointer-events:none}#gm-signature:hover{opacity:1}#gm-signature:hover strong{opacity:1;right:100%}#gm-signature .fill-1{fill:#fff}#gm-signature .fill-2,#gm-signature.gm-signature-light .fill-1{fill:#000}#gm-signature.gm-signature-light strong{color:#fff;text-shadow:1px 1px 0 rgba(0,0,0,.1)}#gm-signature.gm-signature-light .fill-2{fill:#fff}#gm-signature a{text-decoration:none;color:#444!important;height:20px;display:block;padding:4px}#gm-signature img{border-radius:50%}#gm-signature img,#gm-signature svg{vertical-align:middle}#gm-signature .codepen-logo,#gm-signature img{width:50px;height:50px}#gm-signature @-webkit-keyframes gm-signature-in{from{-webkit-transform:translateX(2rem);transform:translateX(2rem);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:.6}}@keyframes gm-signature-in{from{-webkit-transform:translateX(2rem);transform:translateX(2rem);opacity:0}to{-webkit-transform:translateX(0);transform:translateX(0);opacity:.6}}";
  
  var signature = "<a href=http:\/\/codepen.io\/gmoyer target=blank title=\"gmoyer on CodePen\"><strong>Griffin Moyer<\/strong> <img src=https://s3-us-west-2.amazonaws.com/s.cdpn.io/783666/profile/profile-512.jpg height=100 width=\"100\">"
  var _container, _signature, _style;
    if (!shade) {
      shade = "light"
    }
    if (shade == "dark") {
      shade = ""
    } else {
      shade = "light"
    }
    _style = document.createElement("style");
    _style.innerHTML = style;
    _signature = document.createElement("div");
    _signature.setAttribute("id", "gm-signature");
    _signature.className = "gm-signature-" + shade;
    _signature.innerHTML = signature;
    _container = document.createElement("div");
    _container.appendChild(_signature);
    document.body.appendChild(_style);
    document.body.appendChild(_container);
    return true
  }
  //addNote("dark")
  /*
  function addName(color) {
  var gmoyer = document.createElement('div');
  gmoyer.setAttribute("id","gmoyerName");
  gmoyer.style.position = 'absolute';
  //text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
  gmoyer.style.width = 100;
  gmoyer.style.height = 100;
  gmoyer.style.color = color;
  gmoyer.innerHTML = "gmoyer";
  gmoyer.style.bottom = 10 + 'px';
  gmoyer.style.right = 10 + 'px';
  document.body.appendChild(gmoyer);
  }
  */
  
                var scene = new THREE.Scene();
scene.fog = new THREE.Fog('#000033', 200, 300);
scene.background = new THREE.Color( '#000033' );
			const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
addNote()
/*
var renderPass = new THREE.RenderPass(scene, camera);
   var horizontalShaderPass = new THREE.ShaderPass(THREE.HorizontalBlurShader);
   //horizontalShaderPass.uniforms.h.value = 2.5 / 512;
   horizontalShaderPass.renderToScreen = true;
var verticalShaderPass = new THREE.ShaderPass(THREE.VerticalBlurShader);
   //verticalShaderPass.uniforms.v.value = 2.5 / 512;
   verticalShaderPass.renderToScreen = true;
   
   composer = new THREE.EffectComposer(renderer);
   composer.addPass(renderPass);
   composer.addPass(horizontalShaderPass);
   composer.addPass(verticalShaderPass);
*/
//const controls = new THREE.OrbitControls(camera, renderer.domElement);
//controls.target = new THREE.Vector3(0,0,0);
//controls.enableZoom = true;
function rotateAround(point, center, angle) {
  angle = (angle) * (Math.PI/180); // Convert to radians
var rotatedX = Math.cos(angle) * (point.x - center.x) - Math.sin(angle) * (point.y-center.y) + center.x;
var rotatedY = Math.sin(angle) * (point.x - center.x) + Math.cos(angle) * (point.y - center.y) + center.y;
  return {x: rotatedX, y: rotatedY}
}
function randint(min, max) {
  return Math.floor(Math.random() * max) + min
}
function RGB(r, g, b) {
  function colorcheck(c) {
  if (c > 255) {
    c = 255
  }
  if (c < 0) {
    c = 0
  }
    return c
  }
  r = colorcheck(r)
  g = colorcheck(g)
  b = colorcheck(b)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "0x" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}
function rgb2color(r, g, b) {
  return rgb2hex(RGB(r, g, b))
}


var color = {}
    color.r = 0
    color.g = 0
    color.b = 255
    color.rs = 0
    color.gs = 0
    color.bs = 0
    color.rt = 0
    color.gt = 0
    color.bt = 255
function randoffset(off) {
  return randint(-off, off*2)
}
function createCanvasMaterial(color, size) {
  var matCanvas = document.createElement('canvas');
  matCanvas.width = matCanvas.height = size;
  var matContext = matCanvas.getContext('2d');
  // create exture object from canvas.
  var texture = new THREE.Texture(matCanvas);
  // Draw a circle
  var center = size / 2;
  matContext.beginPath();
  matContext.arc(center, center, size/2, 0, 2 * Math.PI, false);
  matContext.closePath();
  matContext.fillStyle = color;
  matContext.fill();
  // need to set needsUpdate
  texture.needsUpdate = true;
  // return a texture made from the canvas
  return texture;
}
      //Create elements here:

var rotation_matrix = new THREE.Matrix4().makeRotationX(0.01);

var DNAs = []
function newDNA(position, rotation, length) {
  var DNA = []
  DNA.doublehelix = {}
  DNA.ladder = {}
//DNA.doublehelix.count = 10 * length

DNA.doublehelix.particles = new THREE.Geometry();
     DNA.ladder.particles = new THREE.Geometry();
DNA.doublehelix.colors = [];
     DNA.ladder.colors = [];
var addp = 0
var height = 0
var density = 20
var curve = -7
// now create the individual particles
for (var p = 0; p < length*density; p++) {
  // create a particle with random
  height += 1 / density
  var pX = 5,
      pY = height + (randoffset(10)/10),
      pZ = 0
  point = {x: pX, y: 0}
  center = {x: 0, y: 0}
  addp += 180 + (curve / density)
  r = rotateAround(point, center, addp)
  addp %= 360
  pX = r.x
  pZ = r.y
  var particle = new THREE.Vector3(pX, pY, pZ)

  // add it to the geometry
  DNA.doublehelix.particles.vertices.push(particle);
}
  
  

  var addp = 0
var height = 0
var ladderspace = 4
  for (var p = 0; p <= length / ladderspace; p++) {
  // create a particle with random
    for (var i = 0; i < density*2; i++) {
      var pX = randoffset(50)/10,
      pY = height + (randoffset(4)/10),
      pZ = 0
      point = {x: pX, y: 0}
      center = {x: 0, y: 0}
      addp += 180
      r = rotateAround(point, center, addp)
      addp %= 360
      pX = r.x
      pZ = r.y
      var particle = new THREE.Vector3(pX, pY, pZ)

      // add it to the geometry
      DNA.ladder.particles.vertices.push(particle);
    }
  addp += curve * ladderspace
  addp %= 360
  height += ladderspace
  
}
    // material
    DNA.doublehelix.material = new THREE.PointsMaterial({
      size: 1,
      color: '#0000ff',
      transparent: true,
      depthWrite: false,
      opacity: 0.5
    });
  DNA.ladder.material = new THREE.PointsMaterial({
      size: 1,
      color: '#0000ff',
      transparent: true,
      depthWrite: false,
      opacity: 0.5
    });
// create the particle system
DNA.doublehelix.system = new THREE.Points(
    DNA.doublehelix.particles,
    DNA.doublehelix.material);
DNA.ladder.system = new THREE.Points(
    DNA.ladder.particles,
    DNA.ladder.material);
// add it to the scene
DNA.doublehelix.system.add(DNA.ladder.system);
  //DNA.doublehelix.system.add(new THREE.Axes())
scene.add(DNA.doublehelix.system);

  DNA.doublehelix.system.position.x = position[0]
  DNA.doublehelix.system.position.y = position[1]
  DNA.doublehelix.system.position.z = position[2]
  
  DNA.doublehelix.system.rotation.x = rotation[0]
  DNA.doublehelix.system.rotation.y = rotation[1]
  DNA.doublehelix.system.rotation.z = rotation[2]
  return DNA;
}
for (var i = 0; i < 50; i++) {
  var position = [randoffset(100),randoffset(100),randint(0,1000)]
  var rotation = [randint(0,360),randint(0,360),randint(0,360)]
  DNAs.push(newDNA(position, rotation, 300))
}






 // The number of particles in a particle system is not easily changed.
    var particleCount = 500;
     
    // Particles are just individual vertices in a geometry
    // Create the geometry that will hold all of the vertices
    var particles = new THREE.Geometry();
 
    // Create the vertices and add them to the particles geometry
    for (var p = 0; p < particleCount; p++) {
     
        // This will create all the vertices in a range of -200 to 200 in all directions
        var x = randoffset(100);
        var y = randoffset(100);
        var z = randint(0,1000);
               
        // Create the vertex
        var particle = new THREE.Vector3(x, y, z);
         
        // Add the vertex to the geometry
        particles.vertices.push(particle);
    }
 
    // Create the material that will be used to render each vertex of the geometry
    var particleMaterial = new THREE.PointsMaterial(
            {color: 0xffffff, 
             size: 10,
             map: createCanvasMaterial('#ffffff', 256),
             blending: THREE.AdditiveBlending,
             transparent: true,
             depthWrite: false,
             opacity: 0.1,
            });
      
    // Create the particle system
    particleSystem = new THREE.Points(particles, particleMaterial);
scene.add(particleSystem);



function animateParticles() {
    
     
}








      //end of elements
			camera.position.z = -300;
particleSystem.position.z = -300;
      camera.position.y = 0
      camera.lookAt(new THREE.Vector3(0,0,0))
			var render = function () {
				requestAnimationFrame( render );
        mainloop()
        renderer.render(scene, camera);
				//composer.render();
			};
var nextDNA = 0
var speed = 0.7;
var time = 0
function mainloop() {
  time += 1;
  camera.position.z += speed
  camera.rotation.z += 0.002;
  camera.position.y = Math.sin(time/100)*20
  camera.rotation.y = Math.sin(time/100)/10
  camera.position.x = Math.sin(time/100)*20
  //camera.rotation.x = Math.sin(time/100)/10
  particleSystem.position.z += speed;
  particleSystem.rotation.z -= 0.001;
  nextDNA -= 1
  if (nextDNA < 0) {
    var position = [randoffset(200),randoffset(200),camera.position.z + 1000]
    var rotation = [randint(0,360),randint(0,360),randint(0,360)]
    DNAs.push(newDNA(position, rotation, 300))
    nextDNA = 10
  }
  
  
  
  
  
  
  if (Math.abs(color.r - color.rt) >= 5) {
      color.r += color.rs
    }
    if (Math.abs(color.g - color.gt) >= 5) {
      color.g += color.gs
    }
    if (Math.abs(color.b - color.bt) >= 5) {
      color.b += color.bs
    }
    if (Math.abs(color.r - color.rt) < 5 &&
      Math.abs(color.g - color.gt) < 5 &&
      Math.abs(color.b - color.bt) < 5) {
      color.rt = randint(0, 255)
      color.gt = randint(0, 255)
      color.bt = randint(0, 255)
      var divisor = 50
      if (color.rt > color.r) {
        color.rs = randint(5, 45) / divisor
      } else {
        color.rs = -randint(5, 45) / divisor
      }
      if (color.gt > color.g) {
        color.gs = randint(5, 45) / divisor
      } else {
        color.gs = -randint(5, 45) / divisor
      }
      if (color.bt > color.b) {
        color.bs = randint(5, 45) / divisor
      } else {
        color.bs = -randint(5, 45) / divisor
      }
    }
  
  var r = Math.round(color.r)
  var g = Math.round(color.g)
  var b = Math.round(color.b)
  
  
  
  
  
  
  
  var darker = 3
  
  //camera.rotation.z -= 0.01
  scene.fog = new THREE.Fog(RGB(Math.round(r/darker), Math.round(g/darker), Math.round(b/darker)), 200, 300);
  scene.background = new THREE.Color( RGB(Math.round(r/darker), Math.round(g/darker), Math.round(b/darker)) );
  for (var i = 0; i < DNAs.length; i++) {
    DNA = DNAs[i]
    //var translation = new THREE.Matrix4().makeTranslation(DNA.doublehelix.system.position.x,
    //                                                      DNA.doublehelix.system.position.y,
    //                                                      DNA.doublehelix.system.position.z);
    //var transformation = rotation_matrix.multiply(translation);
    //DNA.doublehelix.system.applyMatrix(transformation);
    DNA.doublehelix.system.translateY(0.1);
    DNA.doublehelix.system.material.color.setHex( rgb2color(r, g, b) );
    DNA.ladder.system.material.color.setHex( rgb2color(r, g, b) );
    if (DNA.doublehelix.system.position.z < camera.position.z - 500) {
      scene.remove(DNA.doublehelix.system)
      DNAs.splice(i, 1)
    }
    //var verts = DNA.doublehelix.system.geometry.vertices;
    //for (var l = 0; l < verts.length; l++) {
    //  var vert = verts[i];
    //}
  }
  //camera.position.y += 0.5;
  
  
  
  
  var verts = particleSystem.geometry.vertices;
  particleSystem.material.color.setHex( rgb2color(r, g, b) );
    for(var i = 0; i < verts.length; i++) {
        var vert = verts[i];
        if (vert.z < 0) {
            vert.z = 1000;
        }
      vert.z -= speed * 0.7
    }
    particleSystem.geometry.verticesNeedUpdate = true;
  
  
  
  
  
}
			render();

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
                `,
            }}
        />
    </>
    )
}