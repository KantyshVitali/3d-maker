export interface Light {
  brightness: number;
  color: string;
}

export function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
}

export function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="#333333" />
    </mesh>
  );
}

export function FillLight(props: Light) {
  const { brightness, color } = props;
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      // lookAt={[0, 0, 0]}
      // penumbra={2}
      castShadow
    />
  );
}

export function RimLight(props: Light) {
  const { brightness, color } = props;

  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}
