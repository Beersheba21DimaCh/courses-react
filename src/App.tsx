import { FC, ReactNode, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NavigatorResposive from './components/common/navigator-resposive';
import { PATH_COURSES, routes } from './config/routes-config';
import CoursesContext, { initialCourses } from './store/context';
import { Course } from './models/course';
import { StoreType } from './models/course-store-type';
import _ from 'lodash';
import { courseProvider } from './config/servicesConfig';
import College from './services/college';
import { Box, List, ListItem } from '@mui/material';
import PublisherNumbers from './publisher-numbers';
// import colledge from './services/colledge';
const college: College = new College(courseProvider)



const App: FC = () => {
  console.log("start");
  const [numbers, setNumbers] = useState<number[]>([]);
  const publisher = new PublisherNumbers();
  useEffect(() => {
    const subscription = publisher.getNumbers().subscribe({
      next(arr: number[]) {
        setNumbers(arr);
      },
      error(err: any) {
        console.log(err);
      }
    });
    return () => subscription.unsubscribe();
  }, []);
  function getItems(): ReactNode[] {
    return numbers.map((n, index) => <ListItem key={index}>{n}</ListItem>);
  }
  console.log("after subscribing");

  return <Box>
    <List>
      {getItems()}
    </List>
  </Box>
}

export default App;




