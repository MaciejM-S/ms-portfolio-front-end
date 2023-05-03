import './LoadingButton.css'


function LoadingButton() {
  return ( <>
  <div className="circle-overlay" id="animation-overlay">
  <div className="circle-overlay__inner">
    <div className="circle">
      <div className="circle__bounce circle__bounce--1"></div>
      <div className="circle__bounce circle__bounce--2"></div>
      <div className="circle__bounce circle__bounce--3"></div>
    </div>
  </div>
</div>
  </> );
}

export default LoadingButton;