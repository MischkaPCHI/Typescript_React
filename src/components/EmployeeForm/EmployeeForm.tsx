import { useFormik } from "formik";
import * as Yup from "yup";

import { EmployeeFormValues } from "./types";
import { EmployeeFormComponent, EmployeeFormName, InputsContainer } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

const EmployeeForm = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("обязательное поле")
      .min(2, "минимальное количество символов - 2")
      .max(50, "максимальное количество символов - 50"),
    lastName: Yup.string().required("обязательное поле").max(15, "максимальное количество символов - 15"),
    age: Yup.number().required("обязательное поле").min(1, "минимальное количество символов - 1").max(3, "максимальное количество символов - 3"),
    jobTitle: Yup.string().max(30, "максимальное количество символов - 30"),
    termsOfUse: Yup.boolean().required("обязательное поле"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      jobTitle: "",
      termsOfUse: false,
    } as EmployeeFormValues,
    validationSchema: validationSchema,
    onSubmit: (values: EmployeeFormValues) => {
      console.log(values);
    },
  });

  return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>
      <EmployeeFormName>Employee Form</EmployeeFormName>

      <InputsContainer>
        <Input
          name="firstName"
          type="text"
          placeholder="Enter your first name"
          label="frist name:"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <Input
          name="lastName"
          type="text"
          placeholder="Enter your last name"
          label="last name:"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <Input name="age" type="number" placeholder="Enter your age" label="age:" onChange={formik.handleChange} value={formik.values.age} />
        <Input
          name="jobTitle"
          type="text"
          placeholder="Enter your job title"
          label="job title:"
          onChange={formik.handleChange}
          value={formik.values.jobTitle}
        />
        <Input
          name="termsOfUse"
          type="checkbox"
          placeholder="Enter your terms of use"
          label="job title:"
          onChange={formik.handleChange}
          value={formik.values.termsOfUse.toString()}
        />

        <Button type="submit" name="Login">
          Submit
        </Button>
      </InputsContainer>
    </EmployeeFormComponent>
  );
};

export default EmployeeForm;
