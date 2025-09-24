import styles from './Notification.module.css';

const Notification = () => {
  return (
    <div className={styles.notification}>
      <p className={styles.message}>
        No feedback given yet. Please select an option above to provide your
        feedback.
      </p>
    </div>
  );
};

export default Notification;
