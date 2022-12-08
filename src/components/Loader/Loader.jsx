import { RotatingLines } from 'react-loader-spinner';

export function Loader() {
  return (
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.8"
      width="60"
      visible={true}
    />
  );
}
