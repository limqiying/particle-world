(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/particle-world/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"0240":function(t,e,i){"use strict";var n=i("b15a"),s=i.n(n);s.a},4751:function(t,e,i){t.exports=i.p+"img/grass.801373c2.jpg"},b15a:function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("Editor"),i("v-content",[i("Scene")],1)],1)},a=[],o=i("d225"),r=i("308d"),c=i("6bb5"),l=i("4e2b"),u=i("9ab4"),d=i("60a3"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scene",staticClass:"scene"},[t.showGroundPlane?i("div",[i("Box")],1):t._e(),t._l(t.particlesInfo,(function(t){return i("ParticleMesh",{key:t.id,attrs:{particle:t.particle,radius:t.radius,color:t.color,id:t.id}})})),t._l(t.springs,(function(t){return i("SpringMesh",{key:t.id,attrs:{spring:t}})}))],2)},h=[],v=i("b0b4"),f=i("5a89"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},m=[];i("c5f6"),i("63d9");function y(t){return new f["u"](t,100,100)}var g=new f["r"](400,400),_=new f["b"](20,.5,15),w=new f["b"](.5,3,15),x=new f["b"](21,3,.5),j=i("4751"),k=i.n(j);function O(t){return new f["o"]({color:t})}var C=new f["k"]({color:16777215,linewidth:2,linecap:"round",linejoin:"round"}),P=(new f["x"]).load(k.a),z=new f["n"]({map:P,side:f["f"]});function I(t){return new f["o"]({color:t})}var G=function(){function t(e,i,n){Object(o["a"])(this,t),this._acceleration=new f["z"](0,0,0),this._damping=.9,this._forceAccumulator=new f["z"](0,0,0),this._position=e,this._velocity=i,this._mass=n,this._inverseMass=1/n}return Object(v["a"])(t,[{key:"clearAccumulartor",value:function(){this._forceAccumulator.set(0,0,0)}},{key:"addForce",value:function(t){this._forceAccumulator.add(t)}},{key:"hasFiniteMass",value:function(){return this.inverseMass>=0}},{key:"integrate",value:function(t){if(this.inverseMass>0){this._position.addScaledVector(this._velocity,t),this._velocity.addScaledVector(this._forceAccumulator,t*this._inverseMass);var e=Math.pow(this._damping,t);this._velocity.multiplyScalar(e)}this.clearAccumulartor()}},{key:"stepForward",value:function(){}},{key:"mass",get:function(){return this._mass}},{key:"position",get:function(){return this._position},set:function(t){this._position=t}},{key:"velocity",get:function(){return this._velocity},set:function(t){this._velocity=t}},{key:"acceleration",get:function(){return this._acceleration},set:function(t){this._acceleration=t}},{key:"damping",get:function(){return this._damping},set:function(t){this._damping=t}},{key:"inverseMass",get:function(){return this._inverseMass},set:function(t){this._inverseMass=t}}]),t}(),S=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.object3D=new f["m"](y(t.radius),O(t.color)),t}return Object(l["a"])(e,t),Object(v["a"])(e,[{key:"onChangeP",value:function(){this.updatePosition()}},{key:"updatePosition",value:function(){var t=this.particle.position;this.object3D.position.set(t.x,t.y,t.z)}}]),e}(d["c"]);Object(u["a"])([Object(d["b"])({type:G,required:!0})],S.prototype,"particle",void 0),Object(u["a"])([Object(d["b"])({type:Number,required:!0})],S.prototype,"radius",void 0),Object(u["a"])([Object(d["b"])({type:String,required:!0})],S.prototype,"color",void 0),Object(u["a"])([Object(d["b"])({type:Number,required:!0})],S.prototype,"id",void 0),Object(u["a"])([Object(d["d"])("particle",{deep:!0})],S.prototype,"onChangeP",null),S=Object(u["a"])([Object(d["a"])({mounted:function(){this.$parent.scene.add(this.object3D),this.updatePosition()}})],S);var F=S,V=F,M=i("2877"),L=Object(M["a"])(V,b,m,!1,null,null,null),D=L.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},A=[],E=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.object3D=new f["m"](g,z),t}return Object(l["a"])(e,t),Object(v["a"])(e,[{key:"updatePosition",value:function(){this.object3D.position.y=-3,this.object3D.rotation.x=Math.PI/2}}]),e}(d["c"]);E=Object(u["a"])([Object(d["a"])({mounted:function(){this.$parent.scene.add(this.object3D),this.updatePosition()}})],E);var N=E,B=N,R=Object(M["a"])(B,$,A,!1,null,null,null),U=R.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},q=[],H=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.object3D=new f["p"],t}return Object(l["a"])(e,t),Object(v["a"])(e,[{key:"createBox",value:function(){var t=new f["m"](_,z);t.position.y=-1.25,this.object3D.add(t);var e=I("#1B0D03"),i=new f["m"](w,e);i.position.x=-10.25,this.object3D.add(i);var n=new f["m"](w,e);n.position.x=10.25,this.object3D.add(n);var s=new f["m"](x,e);s.position.z=7.75,this.object3D.add(s);var a=new f["m"](x,e);a.position.z=-7.75,this.object3D.add(a)}}]),e}(d["c"]);H=Object(u["a"])([Object(d["a"])({mounted:function(){this.$parent.scene.add(this.object3D),this.createBox()}})],H);var J=H,W=J,X=Object(M["a"])(W,T,q,!1,null,null,null),K=X.exports,Q=i("4721"),Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},Z=[],tt=function(t){function e(){return Object(o["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(v["a"])(e,[{key:"onChangeP",value:function(){this.updatePosition()}},{key:"createObject3D",value:function(){this.geometry=new f["h"],this.geometry.verticesNeedUpdate=!0,this.geometry.vertices.push(this.spring.v1),this.geometry.vertices.push(this.spring.v2),this.line=new f["j"](this.geometry,C)}},{key:"updatePosition",value:function(){this.geometry.vertices[0]=this.spring.v1,this.geometry.vertices[1]=this.spring.v2,this.geometry.verticesNeedUpdate=!0}}]),e}(d["c"]);Object(u["a"])([Object(d["b"])({required:!0})],tt.prototype,"spring",void 0),Object(u["a"])([Object(d["d"])("spring",{deep:!0})],tt.prototype,"onChangeP",null),tt=Object(u["a"])([Object(d["a"])({mounted:function(){this.createObject3D(),this.$parent.scene.add(this.line),this.updatePosition()}})],tt);var et=tt,it=et,nt=Object(M["a"])(it,Y,Z,!1,null,null,null),st=nt.exports,at=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.hemisphereLight=new f["i"](11184810,0,.9),t.directionalLight=new f["e"](16777215,.8),t.ambientLight=new f["a"](14452852,.5),t.renderer=new f["A"]({alpha:!0}),t.scene=new f["t"],t}return Object(l["a"])(e,t),Object(v["a"])(e,[{key:"onPlayToggled",value:function(t){t?this.play():this.pause()}},{key:"update",value:function(t){this.$store.dispatch("updateParticles",t)}},{key:"setUpScene",value:function(t){this.camera=new f["q"](75,(t.clientWidth-350)/t.clientHeight,.1,1e3),this.renderer.setSize(t.clientWidth-350,t.clientHeight),this.renderer.setClearColor("#333840",1),this.controls=new Q["a"](this.camera,this.renderer.domElement),this.scene.add(this.ambientLight,this.hemisphereLight,this.directionalLight),this.directionalLight.position.set(150,350,350),t.appendChild(this.renderer.domElement),this.controls.enablePan=!1,this.camera.position.z=5}},{key:"renderScene",value:function(){this.controls.update(),this.renderer.render(this.scene,this.camera)}},{key:"play",value:function(){var t=this;this.renderer.setAnimationLoop((function(){t.renderScene(),t.update(.01)}))}},{key:"pause",value:function(){var t=this;this.renderer.setAnimationLoop((function(){t.renderScene()}))}},{key:"isPlaying",get:function(){return this.$store.state.isPlaying}},{key:"particlesInfo",get:function(){return this.$store.state.particlesInfo}},{key:"showGroundPlane",get:function(){return this.$store.state.showGroundPlane}},{key:"springs",get:function(){return this.$store.state.springs}}]),e}(d["c"]);Object(u["a"])([Object(d["d"])("isPlaying")],at.prototype,"onPlayToggled",null),at=Object(u["a"])([Object(d["a"])({components:{ParticleMesh:D,Ground:U,Box:K,SpringMesh:st},mounted:function(){var t=this.$refs.scene;this.setUpScene(t),this.renderScene(),this.play(),this.pause()}})],at);var ot=at,rt=ot,ct=(i("0240"),Object(M["a"])(rt,p,h,!1,null,"acb11890",null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{attrs:{dark:"",permanent:"",right:"",app:"",width:"350px"},scopedSlots:t._u([{key:"append",fn:function(){return[i("div",{staticClass:"pa-2"},[i("v-btn",{attrs:{block:"",height:"80px"},on:{click:t.togglePlay}},[t.isPlaying?i("div",[i("v-icon",{attrs:{large:""}},[t._v("pause")])],1):i("div",[i("v-icon",{attrs:{large:""}},[t._v("play_arrow")])],1)])],1)]},proxy:!0}])},[i("v-list",[i("v-list-item",[i("NewParticleCard")],1),i("div",{staticClass:"mx-2",attrs:{justify:"center"}},[i("v-list-item",[i("v-btn",{attrs:{block:"",disabled:t.disableGroundPlaneButton},on:{click:t.addGroundPlane}},[t._v("Add Box")])],1),i("v-list-item",[i("v-col",[i("v-checkbox",{attrs:{label:"Detect Collisions"},model:{value:t.detectCollisions,callback:function(e){t.detectCollisions=e},expression:"detectCollisions"}})],1),i("v-col",[i("v-row",[i("v-subheader",{attrs:{justify:"center"}},[t._v("Restitution")])],1),i("v-row",[i("v-slider",{attrs:{disabled:!t.detectCollisions,"thumb-label":"","thumb-size":30,"thumb-color":"grey darken-4",min:"0",max:"1",step:"0.01"},model:{value:t.restitution,callback:function(e){t.restitution=e},expression:"restitution"}})],1)],1)],1)],1)],1)],1)},dt=[],pt=(i("8449"),i("ac6a"),i("2f62")),ht=(i("673e"),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new f["z"](0,-9.81,0);Object(o["a"])(this,t),this._gravity=e}return Object(v["a"])(t,[{key:"updateForce",value:function(t,e){if(t.hasFiniteMass()){var i=this._gravity.clone();i.multiplyScalar(t.mass),t.addForce(i)}}}]),t}()),vt=function(){function t(e,i,n){Object(o["a"])(this,t),this._other=e,this._springConstant=i,this._restLength=n}return Object(v["a"])(t,[{key:"updateForce",value:function(t,e){var i=new f["z"];i.subVectors(t.position,this._other.position);var n=this._springConstant*(i.length()-this._restLength);i.normalize(),i.multiplyScalar(-1*n),t.addForce(i)}},{key:"restLength",get:function(){return this._restLength},set:function(t){this._restLength=t}},{key:"springConstant",get:function(){return this._springConstant},set:function(t){this._springConstant=t}}]),t}(),ft=function(){function t(e,i,n){Object(o["a"])(this,t),this._anchor=e,this._springConstant=i,this._restLength=n}return Object(v["a"])(t,[{key:"updateForce",value:function(t,e){var i=new f["z"];i.subVectors(t.position,this._anchor);var n=this._springConstant*(this._restLength-i.length());i.normalize(),i.multiplyScalar(n),t.addForce(i)}},{key:"restLength",get:function(){return this._restLength},set:function(t){this._restLength=t}},{key:"springConstant",get:function(){return this._springConstant},set:function(t){this._springConstant=t}}]),t}(),bt=0;function mt(t,e){return{id:bt++,v1:t,v2:e}}var yt=function(){function t(){Object(o["a"])(this,t),this.registry=[]}return Object(v["a"])(t,[{key:"add",value:function(t,e){var i={particle:t,forceGenerator:e};this.registry.push(i)}},{key:"updateForces",value:function(t){this.registry.forEach((function(e){var i=e.forceGenerator;i.updateForce(e.particle,t)}))}}]),t}(),gt=function(){function t(e){Object(o["a"])(this,t),this._iterations=e,this._iterationsUsed=0}return Object(v["a"])(t,[{key:"resolveContacts",value:function(t,e,i){this._iterationsUsed=0;while(this._iterationsUsed<this._iterations){for(var n=Number.MAX_VALUE,s=e,a=0;a<e;a++){var o=t[a].calculateSeparatingVelocity();o<n&&(o<0||t[a].penetration>0)&&(n=o,s=a)}if(s==e)break;t[s].resolve(i),this._iterationsUsed++}}},{key:"iterations",get:function(){return this._iterations},set:function(t){this._iterations=t}},{key:"iterationsUsed",get:function(){return this._iterationsUsed},set:function(t){this._iterationsUsed=t}}]),t}(),_t=function(){function t(e,i,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(o["a"])(this,t),this.particleMovement=[new f["z"],new f["z"]],this._particles=e,this._restitution=i,this._contactNormal=n,this.twoParticles=2==this._particles.length,this._penetration=s}return Object(v["a"])(t,[{key:"resolve",value:function(t){this.resolveVelocity(t),this.resolveInterpenetration(t)}},{key:"calculateSeparatingVelocity",value:function(){var t=this._particles[0].velocity.clone();return this.twoParticles&&t.sub(this._particles[1].velocity),t.dot(this.contactNormal)}},{key:"resolveVelocity",value:function(t){var e=this.calculateSeparatingVelocity();if(!(e>0)){var i=-1*e*this._restitution,n=this._particles[0].acceleration.clone();this.twoParticles&&n.sub(this._particles[1].acceleration);var s=t*n.dot(this._contactNormal);s<0&&(i+=this._restitution*s,i<0&&(i=0));var a=i-e,o=this.computeTotalInverseMass();if(!(o<=0)){var r=this._contactNormal.clone();r.multiplyScalar(a/o),this._particles[0].velocity.addScaledVector(r,this._particles[0].inverseMass),this.twoParticles&&this._particles[1].velocity.addScaledVector(r,-1*this._particles[1].inverseMass)}}}},{key:"resolveInterpenetration",value:function(t){if(!(this._penetration<=0)){var e=this.computeTotalInverseMass();if(!(e<=0)){var i=this._contactNormal.clone();i.multiplyScalar(this._penetration/e),this.particleMovement[0]=i.clone(),this.particleMovement[0].multiplyScalar(this._particles[0].inverseMass),this.twoParticles?(this.particleMovement[1]=i.clone(),this.particleMovement[1].multiplyScalar(-1*this._particles[1].inverseMass)):this.particleMovement[1].set(0,0,0),this._particles[0].position.add(this.particleMovement[0]),this.twoParticles&&this._particles[1].position.add(this.particleMovement[1])}}}},{key:"computeTotalInverseMass",value:function(){return this.twoParticles?this.particles[0].inverseMass+this.particles[1].inverseMass:this.particles[0].inverseMass}},{key:"particles",get:function(){return this._particles}},{key:"restitution",get:function(){return this._restitution}},{key:"contactNormal",get:function(){return this._contactNormal}},{key:"penetration",get:function(){return this._penetration},set:function(t){this._penetration=t}}]),t}(),wt=function(){function t(e,i,n){Object(o["a"])(this,t),this.normal=e,this.coordinate=i,this.threshold=n}return Object(v["a"])(t,[{key:"getCoordinateComponent",value:function(t){return"x"==this.coordinate?t.x:"y"==this.coordinate?t.y:t.z}},{key:"addContact",value:function(t,e){var i=this;jt.state.particlesInfo.forEach((function(e){var n=e.particle.position;if(i.threshold>0&&i.getCoordinateComponent(n)+e.radius>i.threshold||i.threshold<0&&i.getCoordinateComponent(n)-e.radius<i.threshold){var s=new _t([e.particle],jt.state.restitution,i.normal,i.threshold>0?i.getCoordinateComponent(n)+e.radius-i.threshold:i.threshold-(i.getCoordinateComponent(n)-e.radius));t.push(s)}}))}}]),t}(),xt=function(){function t(){Object(o["a"])(this,t)}return Object(v["a"])(t,[{key:"addContact",value:function(t,e){for(var i=0;i<jt.state.particlesInfo.length;i++)for(var n=i+1;n<jt.state.particlesInfo.length;n++){var s=jt.state.particlesInfo[i],a=jt.state.particlesInfo[n],o=s.radius+a.radius,r=new f["z"];r.subVectors(s.particle.position,a.particle.position);var c=r.length();if(r.normalize(),c<=o){var l=new _t([s.particle,a.particle],jt.state.restitution,r,o-c);t.push(l)}}}}]),t}();n["a"].use(pt["a"]);var jt=new pt["a"].Store({state:{isPlaying:!1,particlesInfo:Array(),springs:Array(),forceRegistry:new yt,contacts:new Array,resolver:new gt(100),contactGenerators:[new xt],showGroundPlane:!1,showBox:!1,restitution:.5},mutations:{setRestitution:function(t,e){t.restitution=e},togglePlay:function(t){t.isPlaying=!t.isPlaying},addParticle:function(t,e){t.particlesInfo.push(e)},integrateParticles:function(t,e){t.particlesInfo.forEach((function(t){return t.particle.integrate(e)}))},stepForward:function(t){t.particlesInfo.forEach((function(t){return t.particle.stepForward()}))},addContactGenerator:function(t,e){t.contactGenerators.push(e)},addGravityForce:function(t,e){var i=new ht;t.forceRegistry.add(e,i)},addSpringForce:function(t,e){var i=new vt(e.pi1.particle,e.springConstant,e.restLength),n=new vt(e.pi2.particle,e.springConstant,e.restLength);t.forceRegistry.add(e.pi1.particle,n),t.forceRegistry.add(e.pi2.particle,i),t.springs.push(mt(e.pi1.particle.position,e.pi2.particle.position))},addAnchoredSpringForce:function(t,e){var i;i=new ft(e.anchor,e.springConstant,e.restLength),t.forceRegistry.add(e.pi1.particle,i),t.springs.push(mt(e.pi1.particle.position,e.anchor))},updateForces:function(t,e){t.forceRegistry.updateForces(e)},generateContacts:function(t){t.contactGenerators.forEach((function(e){e.addContact(t.contacts,100)}))},resolveContacts:function(t,e){t.resolver.iterations=2*t.contacts.length,t.resolver.resolveContacts(t.contacts,t.contacts.length,e)},clearContacts:function(t){t.contacts.length=0},addGroundPlane:function(t){t.showGroundPlane||(t.showGroundPlane=!0,t.contactGenerators.push(new wt(new f["z"](0,1,0),"y",-1)))},addBox:function(t){t.showGroundPlane||(t.showGroundPlane=!0,t.contactGenerators.push(new wt(new f["z"](0,1,0),"y",-1)),t.contactGenerators.push(new wt(new f["z"](1,0,0),"x",-10)),t.contactGenerators.push(new wt(new f["z"](-1,0,0),"x",10)),t.contactGenerators.push(new wt(new f["z"](0,0,1),"z",-7.5)),t.contactGenerators.push(new wt(new f["z"](0,0,-1),"z",7.5)))},removeGroundPlane:function(t){t.showGroundPlane=!1,t.contactGenerators=t.contactGenerators.filter((function(t){return!(t.constructor==wt)}))},setCollisionDetection:function(t,e){e?0==t.contactGenerators.length&&(t.contactGenerators.push(new xt),t.contactGenerators.push(new wt(new f["z"](0,1,0),"y",-1))):t.contactGenerators.length=0}},actions:{togglePlay:function(t){t.commit("togglePlay")},addParticle:function(t,e){t.commit("addParticle",e),e.gravity&&t.commit("addGravityForce",e.particle)},updateParticles:function(t,e){t.commit("updateForces",e),t.commit("integrateParticles",e),t.commit("stepForward",e),t.commit("generateContacts"),t.commit("resolveContacts",e),t.commit("clearContacts")},generateContacts:function(t){t.commit("generateContacts")},removeGroundPlane:function(t){t.commit("removeGroundPlane")},showGroundPlane:function(t){t.commit("addGroundPlane")},setRestitution:function(t,e){t.commit("setRestitution",e)},setCollisionDetection:function(t,e){t.commit("setCollisionDetection",e)},addBox:function(t){t.commit("addBox")},addSpring:function(t,e){t.commit("addParticle",e.pi1),e.pi1.gravity&&t.commit("addGravityForce",e.pi1.particle),t.commit("addParticle",e.pi2),e.pi2.gravity&&t.commit("addGravityForce",e.pi2.particle),t.commit("addSpringForce",e)},addAnchoredSpring:function(t,e){t.commit("addParticle",e.pi1),e.pi1.gravity&&t.commit("addGravityForce",e.pi1.particle),t.commit("addAnchoredSpringForce",e)}}}),kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"ma-1 pa-1",attrs:{outlined:""}},[t.spring&&!t.anchored?i("div",[i("v-card-title",[t._v("First Particle")])],1):i("div",[i("v-card-title",[t._v("New Particle")])],1),i("v-form",[i("div",[i("v-row",{staticClass:"mx-2"},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"position-x",type:"number",disabled:t.disableInputs},model:{value:t.pos_x,callback:function(e){t.pos_x=e},expression:"pos_x"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"position-y",type:"number",disabled:t.disableInputs},model:{value:t.pos_y,callback:function(e){t.pos_y=e},expression:"pos_y"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"position-z",type:"number",disabled:t.disableInputs},model:{value:t.pos_z,callback:function(e){t.pos_z=e},expression:"pos_z"}})],1)],1),i("v-row",{staticClass:"mx-2"},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"velocity-x",type:"number",disabled:t.disableInputs},model:{value:t.vel_x,callback:function(e){t.vel_x=e},expression:"vel_x"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"velocity-y",type:"number",disabled:t.disableInputs},model:{value:t.vel_y,callback:function(e){t.vel_y=e},expression:"vel_y"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"velocity-z",type:"number",disabled:t.disableInputs},model:{value:t.vel_z,callback:function(e){t.vel_z=e},expression:"vel_z"}})],1)],1),i("v-row"),i("v-color-picker",{staticClass:"mx-auto",attrs:{flat:"","hide-inputs":"","hide-canvas":"",disabled:t.disableInputs},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),i("v-row",{staticClass:"mx-2"},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"radius",type:"number",disabled:t.disableInputs},model:{value:t.radius,callback:function(e){t.radius=e},expression:"radius"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"mass",type:"number",disabled:t.disableInputs},model:{value:t.mass,callback:function(e){t.mass=e},expression:"mass"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-checkbox",{attrs:{label:"gravity",disabled:t.disableInputs},model:{value:t.gravity,callback:function(e){t.gravity=e},expression:"gravity"}})],1)],1)],1),i("v-row",{staticClass:"mb-5",attrs:{justify:"center"}},[i("v-tooltip",{attrs:{right:"","open-delay":"300"},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[i("v-switch",{attrs:{disabled:t.disableInputs,label:"Attach To Spring"},model:{value:t.spring,callback:function(e){t.spring=e},expression:"spring"}})]}}])},[i("span",[t._v("attach spring to particle")])])],1),t.spring?i("div",[i("v-row",{staticClass:"mx-2 my-0",attrs:{justify:"center"}},[i("v-checkbox",{attrs:{label:"Fix other end"},model:{value:t.anchored,callback:function(e){t.anchored=e},expression:"anchored"}})],1),i("v-row",{staticClass:"mx-2",attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[i("v-text-field",{attrs:{label:"spring constant",type:"number",disabled:t.disableInputs},model:{value:t.springConstant,callback:function(e){t.springConstant=e},expression:"springConstant"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[i("v-text-field",{attrs:{label:"rest length",type:"number",disabled:t.disableInputs},model:{value:t.restLength,callback:function(e){t.restLength=e},expression:"restLength"}})],1)],1),t.anchored?i("div",[i("v-card-title",[t._v("Anchored End")])],1):i("div",[i("v-card-title",[t._v("Second Particle")])],1),i("v-row",{staticClass:"mx-2"},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"position-x",type:"number",disabled:t.disableInputs},model:{value:t.pos_x2,callback:function(e){t.pos_x2=e},expression:"pos_x2"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"position-y",type:"number",disabled:t.disableInputs},model:{value:t.pos_y2,callback:function(e){t.pos_y2=e},expression:"pos_y2"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"position-z",type:"number",disabled:t.disableInputs},model:{value:t.pos_z2,callback:function(e){t.pos_z2=e},expression:"pos_z2"}})],1)],1),t.anchored?t._e():i("div",[i("v-row",{staticClass:"mx-2"},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"velocity-x",type:"number",disabled:t.disableInputs},model:{value:t.vel_x2,callback:function(e){t.vel_x2=e},expression:"vel_x2"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"velocity-y",type:"number",disabled:t.disableInputs},model:{value:t.vel_y2,callback:function(e){t.vel_y2=e},expression:"vel_y2"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"velocity-z",type:"number",disabled:t.disableInputs},model:{value:t.vel_z2,callback:function(e){t.vel_z2=e},expression:"vel_z2"}})],1)],1),i("v-color-picker",{staticClass:"mx-auto",attrs:{flat:"","hide-inputs":"","hide-canvas":"",disabled:t.disableInputs},model:{value:t.color2,callback:function(e){t.color2=e},expression:"color2"}}),i("v-row",{staticClass:"mx-2"},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"radius",type:"number",disabled:t.disableInputs},model:{value:t.radius2,callback:function(e){t.radius2=e},expression:"radius2"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-text-field",{attrs:{label:"mass",type:"number",disabled:t.disableInputs},model:{value:t.mass2,callback:function(e){t.mass2=e},expression:"mass2"}})],1),i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-checkbox",{attrs:{label:"gravity",disabled:t.disableInputs},model:{value:t.gravity2,callback:function(e){t.gravity2=e},expression:"gravity2"}})],1)],1)],1)],1):t._e(),i("v-btn",{attrs:{block:"",disabled:t.disableInputs,elevation:"1"},on:{click:t.insertParticle}},[t._v("Insert")])],1)],1)},Ot=[],Ct=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.color="#FF00FF",t.pos_x=0,t.pos_y=0,t.pos_z=0,t.vel_x=0,t.vel_y=0,t.vel_z=0,t.radius=1,t.mass=1,t.nextID=0,t.gravity=!0,t.spring=!1,t.anchored=!1,t.springConstant=1,t.restLength=1,t.color2="#FF00FF",t.pos_x2=0,t.pos_y2=0,t.pos_z2=0,t.vel_x2=0,t.vel_y2=0,t.vel_z2=0,t.radius2=1,t.mass2=1,t.nextID2=0,t.gravity2=!0,t}return Object(l["a"])(e,t),Object(v["a"])(e,[{key:"insertParticle",value:function(){var t=new f["z"](+this.pos_x,+this.pos_y,+this.pos_z),e=new f["z"](+this.vel_x,+this.vel_y,+this.vel_z),i=new G(t,e,+this.mass),n={id:this.nextID++,radius:+this.radius,color:this.color,particle:i,gravity:this.gravity};if(this.spring&&!this.anchored){var s=new f["z"](+this.pos_x2,+this.pos_y2,+this.pos_z2),a=new f["z"](+this.vel_x2,+this.vel_y2,+this.vel_z2),o=new G(s,a,+this.mass2),r={id:this.nextID++,radius:+this.radius2,color:this.color2,particle:o,gravity:this.gravity2},c={pi1:n,pi2:r,springConstant:+this.springConstant,restLength:+this.restLength};this.$store.dispatch("addSpring",c)}else if(this.spring&&this.anchored){var l=new f["z"](+this.pos_x2,+this.pos_y2,+this.pos_z2),u={pi1:n,anchor:l,springConstant:+this.springConstant,restLength:+this.restLength};this.$store.dispatch("addAnchoredSpring",u)}else this.$store.dispatch("addParticle",n);this.resetValues()}},{key:"resetValues",value:function(){this.pos_x=0,this.pos_y=0,this.pos_z=0,this.vel_x=0,this.vel_y=0,this.vel_z=0,this.mass=1,this.radius=1,this.pos_x2=0,this.pos_y2=0,this.pos_z2=0,this.vel_x2=0,this.vel_y2=0,this.vel_z2=0,this.mass2=1,this.radius2=1}},{key:"disableInputs",get:function(){return this.$store.state.isPlaying}}]),e}(d["c"]);Ct=Object(u["a"])([Object(d["a"])({})],Ct);var Pt=Ct,zt=Pt,It=i("6544"),Gt=i.n(It),St=i("8336"),Ft=i("b0af"),Vt=i("99d9"),Mt=i("ac7c"),Lt=i("62ad"),Dt=i("03a4"),$t=i("4bd4"),At=i("0fd9"),Et=i("b73d"),Nt=i("8654"),Bt=i("3a2f"),Rt=Object(M["a"])(zt,kt,Ot,!1,null,null,null),Ut=Rt.exports;Gt()(Rt,{VBtn:St["a"],VCard:Ft["a"],VCardTitle:Vt["a"],VCheckbox:Mt["a"],VCol:Lt["a"],VColorPicker:Dt["a"],VForm:$t["a"],VRow:At["a"],VSwitch:Et["a"],VTextField:Nt["a"],VTooltip:Bt["a"]});var Tt=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.restitution=.5,t.detectCollisions=!0,t}return Object(l["a"])(e,t),Object(v["a"])(e,[{key:"onRestitutionChanged",value:function(t){jt.dispatch("setRestitution",+t)}},{key:"onCollisionDetectionChanged",value:function(t){jt.dispatch("setCollisionDetection",t)}},{key:"togglePlay",value:function(){this.$store.dispatch("togglePlay")}},{key:"addGroundPlane",value:function(){jt.dispatch("addBox")}},{key:"isPlaying",get:function(){return this.$store.state.isPlaying}},{key:"disableGroundPlaneButton",get:function(){return this.$store.state.showGroundPlane||this.$store.state.isPlaying}}]),e}(d["c"]);Object(u["a"])([Object(d["d"])("restitution")],Tt.prototype,"onRestitutionChanged",null),Object(u["a"])([Object(d["d"])("detectCollisions")],Tt.prototype,"onCollisionDetectionChanged",null),Tt=Object(u["a"])([Object(d["a"])({components:{NewParticleCard:Ut}})],Tt);var qt=Tt,Ht=qt,Jt=i("132d"),Wt=i("8860"),Xt=i("da13"),Kt=i("f774"),Qt=i("ba0d"),Yt=i("e0c7"),Zt=Object(M["a"])(Ht,ut,dt,!1,null,null,null),te=Zt.exports;Gt()(Zt,{VBtn:St["a"],VCheckbox:Mt["a"],VCol:Lt["a"],VIcon:Jt["a"],VList:Wt["a"],VListItem:Xt["a"],VNavigationDrawer:Kt["a"],VRow:At["a"],VSlider:Qt["a"],VSubheader:Yt["a"]});var ee=function(t){function e(){return Object(o["a"])(this,e),Object(r["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]);ee=Object(u["a"])([Object(d["a"])({components:{Scene:lt,Editor:te}})],ee);var ie=ee,ne=ie,se=i("7496"),ae=i("a75b"),oe=Object(M["a"])(ne,s,a,!1,null,null,null),re=oe.exports;Gt()(oe,{VApp:se["a"],VContent:ae["a"]});var ce=i("9483");Object(ce["a"])("".concat("/particle-world/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var le=i("f309");n["a"].use(le["a"]);var ue=new le["a"]({icons:{iconfont:"mdi"}});i("bf40");n["a"].config.productionTip=!1,new n["a"]({store:jt,vuetify:ue,render:function(t){return t(re)}}).$mount("#app")}});
//# sourceMappingURL=app.54dbe16d.js.map