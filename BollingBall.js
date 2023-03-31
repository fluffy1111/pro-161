AFRAME.registerComponent("ball", {
    init: function (){
        this.boll()
    },
    shoot: function() {
        window.addEventListener("keydown", (e)=>{
          if(e.key === "z"){
            const roll = document.createElement("a-entity")
            roll.setAttribute("geometry",{
                primitive:"sphere",
                radius:1
            })
            roll.setAttribute("material","color","black");

            var cam = document.querySelector("#camera");
            var pos = cam.getAttribute("position");
            roll.setAttribute("position", {
                x:pos.x , y:pos.y , z:pos.z
            })

            //get the cam direction in three.js vector
            var camera = document.querySelector("#camera").object3D
            var direction = new THREE.Vector3();
            camera.getWorldDirection(direction)

            roll.setAttribute("velocity", direction.multiplyScalar(-10))

            const scene = document.querySelector("#scene")
            scene.appendChild(roll);
          }
        })
    }
})