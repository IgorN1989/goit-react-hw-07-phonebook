import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => (
  <>
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="rgb(0, 0, 0, 0.5)"
      barColor="rgb(1, 180, 228)"
    />
  </>
);
