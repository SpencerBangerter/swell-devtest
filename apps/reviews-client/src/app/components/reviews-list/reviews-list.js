import Alert from '@mui/material/Alert';
import TaskIcon from '@mui/icons-material/Task';
import getAllReviews from '../../api/getAllReviews';

getAllReviews();
export function ReviewsList() {
	return (
		<Alert severity="error" icon={<TaskIcon />}>
			TODO: Implement ReviewsList
		</Alert>
	);
}

export default ReviewsList;
