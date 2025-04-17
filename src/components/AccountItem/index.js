import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Fjxmp3rdotwav%2Fjxmp3r-wav-tralalelo-tralala&psig=AOvVaw36-9cMGlmjKAW7EYnmIewk&ust=1744960216997000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICb4cHB3owDFQAAAAAdAAAAABAE"
        alt="Tralalero Tralala"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyễn Văn A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx("usename")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
