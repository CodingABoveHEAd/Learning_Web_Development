export default function Button({ children, Handler, type }) {
  return (
    <>
      {type === "danger" ? (
        <button
          style={{
            padding: "10px",
            cursor: "pointer",
            color: "white",
            backgroundColor: "red",
            margin : '10px'
          }}
          onClick={Handler}
        >
          {children}
        </button>
      ) : (
        <button
          style={{
            padding: "10px",
            cursor: "pointer",
            color: "white",
            backgroundColor: "green",
          }}
          onClick={Handler}
        >
          {children}
        </button>
      )}
    </>
  );
}
