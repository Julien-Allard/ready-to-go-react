const Abort = (props) => {
  return (
    <>
      <div
        onClick={props.killSwitch}
        className={
          props.status1 || props.status2 || props.status3
            ? "abort-btn switch-all"
            : "abort-btn"
        }
      >
        <i class="fas fa-exclamation-triangle"></i>ABORT
        <i class="fas fa-exclamation-triangle"></i>
      </div>
    </>
  );
};

export default Abort;
