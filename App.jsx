import './App.css';
import { OrbitControls, Splat, Box } from '@react-three/drei';
// import { mySplat } from '../src/assets/my_splat.splat';
function App() {
  return (
    <>
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={1}
        target={[-0.5, 0, 0]}
      />

      <Splat
        chunkSize={100}
        position={[0, 0, 0]}
        scale={1}
        src={
          // 'https://huggingface.co/datasets/ianmalloy/test/resolve/main/my_splat.splat?'
          'https://huggingface.co/datasets/ianmalloy/test/resolve/main/full.splat?download=true'
        }
      />
    </>
  );
}

export default App;
