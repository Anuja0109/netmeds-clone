import { Link } from 'react-router-dom';
import uploadButtonStyle from './UploadButtonStyle';

function UploadButton() {
  const classes = uploadButtonStyle();
  return (
    <div className={classes.uploadButton}>
      <Link className={classes.uPress} to="/">
        Upload
      </Link>
    </div>
  );
}

export default UploadButton;
