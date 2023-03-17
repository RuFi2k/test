import { Chip, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";

const useCourseCardStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 360,
    borderRadius: 12,
    overflow: 'hidden',
    border: '1px solid black',
    cursor: 'pointer',
    background: '#efefef'
  },
  imageContainer: {
    width: '100%',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    padding: 18,
  },
  chip: {
    cursor: 'pointer',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
});

export const CourseCard = (course) => {
  const classes = useCourseCardStyles();
  const navigate = useNavigate();

  const handleRedirect = () => navigate(course.id);

  return <div className={classes.wrapper} onClick={handleRedirect}>
    <div className={classes.imageContainer}>
      <img className={classes.previewImage} src={`${course.previewImageLink}/cover.webp`} alt={course.meta.slug} />
    </div>
    <div className={classes.content}>
      <Typography variant='h5'>{course.title}</Typography>
      <Typography variant='body2'>{course.description}</Typography>
      <Typography>
        <Typography variant='overline' fontWeight='bold'>Lessons: </Typography>
        <Typography variant='overline'>{course.lessonsCount}</Typography>
      </Typography>
      <Typography>
        <Typography variant='overline' fontWeight='bold'>Skills: </Typography>
        {course.meta.skills?.map(skill => <Chip className={classes.chip} key={skill} label={skill} size='small' />)}
      </Typography>
      <Typography className={classes.rating}>
        <StarIcon color="warning" />
        <Typography variant='overline'>{course.rating}</Typography>
      </Typography>
    </div>
  </div>;
}
