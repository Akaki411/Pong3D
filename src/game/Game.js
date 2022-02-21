import React from 'react';
import * as THREE from './three.module';
import { MouseFollowControls } from './MouseFollowControls';
import { OBJLoader } from './OBJLoader';

class Canvas extends React.Component
{
    constructor(props)
    {
        super(props);
        this.canv = React.createRef();
    }
    componentDidMount()
    {
        this.CreateScene()
    }

    CreateScene()
    {
        let width = window.innerWidth;
        let height = window.innerHeight;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
        this.camera.position.set(0, 0, -10);
        this.scene.add(this.camera);
        this.light = new THREE.AmbientLight(0xffffff);
        // this.light.position.set(1, 1, 7);
        // this.light.castShadow = true;
        // this.light.shadow.mapSize.width = 512;
        // this.light.shadow.mapSize.height = 512;
        // this.light.shadow.camera.near = 0.5;
        // this.light.shadow.camera.far = 500;
        this.scene.add(this.light);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canv.current, antialias: true });
        this.renderer.shadowMapEnabled = true;
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0x0f0f0f);
        this.AddTheName();
    }

    AddTheName()
    {
        this.objLoader = new OBJLoader();
        this.objLoader.load('../objects/name.obj', (mesh) => {
            this.name = mesh;
            this.name.material = new THREE.MeshPhongMaterial();
            this.name.position.set(5, 0, 0);
            this.scene.add(this.name);
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new THREE.Mesh( geometry, material );
            this.scene.add( cube );
            this.controls = new MouseFollowControls(this.name, 0.5, 0.5);
            this.Update();
        })
    }

    Update()
    {
        this.controls.Update();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => { this.Update() });
    }

    render()
    {
        return (
            <canvas className="game-canvas" id="name" ref={this.canv}/>
        );
    }
};



export default Canvas;