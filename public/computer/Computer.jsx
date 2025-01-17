import React, { useRef } from 'react'
import { useGLTF, useTexture, useVideoTexture } from '@react-three/drei'

const Computer = (props) => {
    const { nodes, materials } = useGLTF('/computer/computer.glb')

    // Default texture for the first screen (could be an image or any texture you prefer)
    const screenTexture1 = useTexture(props.texture ? props.texture : '/projects/project-logo1.png');
    // Video texture for the second screen
    const screenTexture2 = useVideoTexture('/computer/project1.mp4');

    console.log('Screen Material:', materials.screen);

    // Set textures for the screens individually
    // For the first screen
    materials.screen.map = screenTexture1; // Assign the first screen texture
    materials.screen.emissiveMap = null; // Remove the emissive map
    materials.screen.color.set('white'); // Set base color to white
    materials.screen.emissive.set('red'); // Optional: Set emissive color to red
    materials.screen.emissiveIntensity = 0; // Adjust emissive intensity
    materials.screen.roughness = 0; // Reduce roughness
    materials.screen.metalness = 0; // Set metalness to zero for a matte finish

    // For the second screen (assuming the second screen has different material/mesh)
    const screenMaterial2 = materials.screen.clone(); // Clone the screen material for the second screen
    screenMaterial2.map = screenTexture2; // Assign the video texture to the second screen
    screenMaterial2.emissiveMap = null; // Optionally clear the emissive map
    screenMaterial2.color.set('white'); // Set base color to white for consistency
    screenMaterial2.emissive.set('blue'); // Set the second screen emissive color to blue (optional)
    screenMaterial2.emissiveIntensity = 1; // Brightness for the second screen

    return (
        <group {...props} dispose={null}>
            <ambientLight intensity={1} />
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.34935197}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[-0.00287345, 2.67113352, -2.52680206]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.50639486}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_8.geometry}
                            material={materials['Material.003']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_9.geometry}
                            material={materials['Material.004']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_10.geometry}
                            material={materials['Material.005']}
                        />
                    </group>
                    {/* First monitor */}
                    <group
                        position={[-0.76550639, 2.58656216, -0.9923231]}
                        rotation={[Math.PI / 2, 3e-8, 0.15290196]}
                        scale={1.55224335}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_12.geometry}
                            material={materials.plastic}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_13.geometry}
                            material={materials.screen} // First screen material
                        />
                    </group>
                    {/* Second monitor */}
                    <group
                        position={[-0.56704181, 2.58656216, 1.43650544]}
                        rotation={[Math.PI / 2, -5e-8, -0.32362068]}
                        scale={1.55224335}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_17.geometry}
                            material={materials.plastic}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_18.geometry}
                            material={screenMaterial2} // Second screen material with video texture
                        />
                    </group>
                    {/* Other parts of the computer */}
                    <group
                        position={[2.38724709, 0, -0.36421275]}
                        rotation={[Math.PI / 2, 1.5e-7, 2.26968311]}
                        scale={0.81983519}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_28.geometry}
                            material={materials['Material.012']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_29.geometry}
                            material={materials['Material.013']}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_4.geometry}
                        material={materials['Material.001']}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_6.geometry}
                        material={materials['Material.002']}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_15.geometry}
                        material={materials['Material.006']}
                        position={[-0.76550639, 2.58656216, -0.9923231]}
                        rotation={[Math.PI / 2, 3e-8, 0.15290196]}
                        scale={1.55224335}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_20.geometry}
                        material={materials['Material.006']}
                        position={[-0.56704181, 2.58656216, 1.43650544]}
                        rotation={[Math.PI / 2, -5e-8, -0.32362068]}
                        scale={1.55224335}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_22.geometry}
                        material={materials['Material.007']}
                        position={[0.52781415, 2.5994668, 0.4134168]}
                        rotation={[Math.PI / 2, -2.1e-7, -1.60666669]}
                        scale={0.78237933}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_24.geometry}
                        material={materials['Material.008']}
                        position={[0.5274086, 2.60908389, -1.06302083]}
                        rotation={[Math.PI / 2, -1.5e-7, -1.40534916]}
                        scale={0.18727791}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_26.geometry}
                        material={materials.Material}
                        position={[0.4572213, 2.59521008, 0]}
                        scale={[0.5821715, 1, 1.83212411]}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/computer.glb')

export default Computer;
