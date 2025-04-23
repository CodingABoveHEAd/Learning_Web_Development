function Text({ addemoji }) {
  const text = "I am JavaScrpit";
  return (
    <>
      <p>{addemoji ? addemoji(text, "emoji") : text}</p>
    </>
  );
}

export default Text;
