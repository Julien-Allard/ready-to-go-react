const Alert = (props) => {
  // console.log(props);
  return (
    <>
      {props.status1 === true &&
      props.status2 === true &&
      props.status3 === true ? (
        <div className="lets-go">
          <span>Let's GO !</span>
        </div>
      ) : (
        <div className="no-way">
          <span>No way !</span>
        </div>
      )}
    </>
  );
};

export default Alert;
