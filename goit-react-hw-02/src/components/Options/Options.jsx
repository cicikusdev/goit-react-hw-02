import styles from './Options.module.css';

const Options = ({ onUpdateFeedback, onResetFeedback, hasFeedback }) => {
  return (
    <div className={styles.options}>
      <div className={styles.feedbackButtons}>
        <button
          className={styles.button}
          onClick={() => onUpdateFeedback('good')}
        >
          Good
        </button>
        <button
          className={styles.button}
          onClick={() => onUpdateFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={styles.button}
          onClick={() => onUpdateFeedback('bad')}
        >
          Bad
        </button>
      </div>

      {hasFeedback && (
        <button className={styles.resetButton} onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
