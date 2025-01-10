import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
	const { progress } = useProgress()
	return (
		<Html>
			<span className='canvas-load'></span>
			<p className='text-[14px] color-[#F1F1F1] font-bold mt-10'>{ progress.toFixed(0) }%</p>
		</Html>
	)
}

export default Loader