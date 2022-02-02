const Switches = (props) => {
  return (
    <div className="two-btn">
      {/* {props.status === true ? (
        <div className="on selected">ON</div>
      ) : (
        <div className="on" onClick={props.switchOn}>
          ON
        </div>
      )} */}
      <div
        onClick={!props.status ? props.switchOn : null}
        className={props.status ? "on selected" : "on"}
      >
        ON
      </div>

      <div
        onClick={props.status ? props.switchOn : null}
        className={!props.status ? "off selected" : "off"}
      >
        OFF
      </div>

      {/* {props.status === false ? (
        <div className="off selected">OFF</div>
      ) : (
        <div className="off" onClick={props.switchOn}>
          OFF
        </div>
      )} */}
    </div>
  );
};

export default Switches;
