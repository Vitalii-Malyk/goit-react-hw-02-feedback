const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((name, i) => {
    return (
      <button
        key={i + 1}
        className=""
        onClick={() => {
          onLeaveFeedback(name);
        }}
      >
        {name}
      </button>
    );
  });
};

export default FeedbackOptions;
