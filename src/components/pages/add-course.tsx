import { Typography, Box, Button } from "@mui/material";
import { FC, useContext } from "react";
import { StoreType } from "../../models/course-store-type";
import FormGetObject from "../form-get-course";
import courseData from "../../config/courseData.json"



export const AddCourse: FC = () => {
  return <Box>
    <FormGetObject config={courseData} />
  </Box>

}


