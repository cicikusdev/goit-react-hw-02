import styles from './Feedback.module.css';

const Feedback = ({ feedback, total, positive }) => {
  return (
    <div className={styles.feedback}>
      <h2 className={styles.title}>Feedback Statistics</h2>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.label}>Good:</span>
          <span className={styles.value}>{feedback.good}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.label}>Neutral:</span>
          <span className={styles.value}>{feedback.neutral}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.label}>Bad:</span>
          <span className={styles.value}>{feedback.bad}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.label}>Total:</span>
          <span className={styles.value}>{total}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.label}>Positive:</span>
          <span className={styles.value}>{positive}%</span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
