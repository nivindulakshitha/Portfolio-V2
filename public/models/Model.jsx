import { useEffect, useMemo, useRef, useState } from 'react';
import { useGLTF, useFBX, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Model = ({ gotCatch, isMobile, ...props }) => {
    const modelGroup = useRef();
    const [fbxAnimation, setFbxAnimation] = useState(null);
    const [loadingAnimation, setLoadingAnimation] = useState(true);

    const cleanAnimationTrackNames = (animations, prefixToRemove) => {
        animations.forEach((animation) => {
            animation.tracks.forEach((track) => {
                if (track.name.startsWith(prefixToRemove)) {
                    track.name = track.name.replace(prefixToRemove, '');
                }
            });
        });
    };

    const { scene, animations: gltfAnimations } = useGLTF('/models/nivindulakshitha.glb');
    const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);

    useEffect(() => {
        setLoadingAnimation(true);
        const animationPath = `/models/animations/${gotCatch ? 'entry' : isMobile ? 'dancing' : 'pointing'}.fbx`;
        
        try {
            const fbx = useFBX(animationPath);
            cleanAnimationTrackNames(fbx.animations, 'mixamorig');
            setFbxAnimation(fbx.animations[0]);
        } catch (error) {
            console.error('Error loading animation:', error);
        } finally {
            setLoadingAnimation(false);
        }
    }, [gotCatch, isMobile]);

    const { actions } = useAnimations(fbxAnimation ? [fbxAnimation] : gltfAnimations, modelGroup);
    
    useEffect(() => {
        if (actions && fbxAnimation) {
            const animationName = Object.keys(actions)[0]; // Get the first animation
            if (animationName) {
                actions[animationName].reset().fadeIn(0.5).play();
            }
        }

        return () => {
            if (actions) {
                Object.values(actions).forEach((action) => action?.stop());
            }
        };
    }, [fbxAnimation, actions]);

    return (
        <group {...props} dispose={null} ref={modelGroup}>
            <primitive object={clonedScene} />
            {loadingAnimation && <>Loading Animation...</>}
        </group>
    );
};

useGLTF.preload('/models/nivindulakshitha.glb');
useFBX.preload('/models/animations/entry.fbx');
useFBX.preload('/models/animations/dancing.fbx');
useFBX.preload('/models/animations/pointing.fbx');

export default Model;